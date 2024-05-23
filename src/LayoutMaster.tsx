import React, { useCallback, useEffect, useMemo, useState } from "react"
import LayoutContext from "./LayoutContext"
import pick from "lodash/pick"
import { usePrevious } from "./util"

type Props = {
  children?: React.ReactNode
  topOpenOnStart?: boolean
  top?: number
  bottomOpenOnStart?: boolean
  bottom?: number
  leftOpenOnStart?: boolean
  left?: number
  rightOpenOnStart?: boolean
  right?: number
  topCollapsedHeight?: number
  leftCollapsedWidth?: number
  rightCollapsedWidth?: number
  bottomCollapsedHeight?: number
  topOverContent?: boolean
  leftOverContent?: boolean
  rightOverContent?: boolean
  bottomOverContent?: boolean
  mode?: string
}

interface DiffProps {
  top: number
  left: number
  right: number
  bottom: number
  mode: string
}

export function LayoutMaster(props: Props) {
  const propsWithDefaults = useMemo(() => {
    return {
      top: props.top ?? 0,
      bottom: props.bottom ?? 0,
      left: props.left ?? 0,
      right: props.right ?? 0,
      topOpenOnStart: props.topOpenOnStart ?? true,
      bottomOpenOnStart: props.bottomOpenOnStart ?? true,
      leftOpenOnStart: props.leftOpenOnStart ?? true,
      rightOpenOnStart: props.rightOpenOnStart ?? true,
      topCollapsedHeight: props.topCollapsedHeight ?? 0,
      leftCollapsedWidth: props.leftCollapsedWidth ?? 0,
      rightCollapsedWidth: props.rightCollapsedWidth ?? 0,
      bottomCollapsedHeight: props.bottomCollapsedHeight ?? 0,
      topOverContent: props.topOverContent ?? false,
      leftOverContent: props.leftOverContent ?? false,
      rightOverContent: props.rightOverContent ?? false,
      bottomOverContent: props.bottomOverContent ?? false,
      mode: props.mode ?? "TBLR",
    }
  }, [
    props.top,
    props.bottom,
    props.left,
    props.right,
    props.topOpenOnStart,
    props.bottomOpenOnStart,
    props.leftOpenOnStart,
    props.rightOpenOnStart,
    props.topCollapsedHeight,
    props.leftCollapsedWidth,
    props.rightCollapsedWidth,
    props.bottomCollapsedHeight,
    props.topOverContent,
    props.leftOverContent,
    props.rightOverContent,
    props.bottomOverContent,
    props.mode,
  ])

  const [state, setState] = useState({
    top: propsWithDefaults.topOpenOnStart ? propsWithDefaults.top : 0,
    bottom: propsWithDefaults.bottomOpenOnStart ? propsWithDefaults.bottom : 0,
    left: propsWithDefaults.leftOpenOnStart ? propsWithDefaults.left : 0,
    right: propsWithDefaults.rightOpenOnStart ? propsWithDefaults.right : 0,
    topHeight: propsWithDefaults.top,
    bottomHeight: propsWithDefaults.bottom,
    leftWidth: propsWithDefaults.left,
    rightWidth: propsWithDefaults.right,
    topCollapsedHeight: propsWithDefaults.topCollapsedHeight,
    leftCollapsedWidth: propsWithDefaults.leftCollapsedWidth,
    rightCollapsedWidth: propsWithDefaults.rightCollapsedWidth,
    bottomCollapsedHeight: propsWithDefaults.bottomCollapsedHeight,
    topOverContent: propsWithDefaults.topOverContent,
    leftOverContent: propsWithDefaults.leftOverContent,
    rightOverContent: propsWithDefaults.rightOverContent,
    bottomOverContent: propsWithDefaults.bottomOverContent,
    mode: propsWithDefaults.mode,
  })
  const prevProps = usePrevious(propsWithDefaults)

  useEffect(() => {
    if (prevProps) {
      const prev = pick(prevProps, ["mode", "top", "left", "bottom", "right"])
      const curr = pick(propsWithDefaults, ["mode", "top", "left", "bottom", "right"])
      let changes = false
      let k: keyof DiffProps
      for (k in prev) {
        if (prev[k] !== curr[k]) changes = true
      }
      if (changes)
        setState(prevState => ({
          ...prevState,
          mode: curr.mode,
          topHeight: curr.top,
          bottomHeight: curr.bottom,
          leftWidth: curr.left,
          rightWidth: curr.right,
        }))
    }
  }, [prevProps, propsWithDefaults])

  const toggleTop = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      top: prevState.topHeight === prevState.top ? prevState.topCollapsedHeight : prevState.topHeight,
    }))
  }, [])
  const toggleBottom = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      bottom: prevState.bottomHeight === prevState.bottom ? prevState.bottomCollapsedHeight : prevState.bottomHeight,
    }))
  }, [])
  const toggleLeft = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      left: prevState.leftWidth === prevState.left ? prevState.leftCollapsedWidth : prevState.leftWidth,
    }))
  }, [])
  const toggleRight = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      right: prevState.rightWidth === prevState.right ? prevState.rightCollapsedWidth : prevState.rightWidth,
    }))
  }, [])
  const openTop = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      top: prevState.topHeight,
    }))
  }, [])
  const openLeft = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      left: prevState.leftWidth,
    }))
  }, [])
  const openRight = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      right: prevState.rightWidth,
    }))
  }, [])
  const openBottom = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      bottom: prevState.bottomHeight,
    }))
  }, [])
  const closeTop = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      top: prevState.topCollapsedHeight,
    }))
  }, [])
  const closeLeft = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      left: prevState.leftCollapsedWidth,
    }))
  }, [])
  const closeRight = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      right: prevState.rightCollapsedWidth,
    }))
  }, [])
  const closeBottom = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      bottom: prevState.bottomCollapsedHeight,
    }))
  }, [])

  const ctx = useMemo(
    () => ({
      ...state,
      toggleTop,
      toggleBottom,
      toggleLeft,
      toggleRight,
      openTop,
      openBottom,
      openLeft,
      openRight,
      closeTop,
      closeBottom,
      closeLeft,
      closeRight,
    }),
    []
  )

  return <LayoutContext.Provider value={ctx}>{props.children}</LayoutContext.Provider>
}
