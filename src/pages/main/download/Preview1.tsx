/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useRef, useState} from 'react'

import {fabric} from 'fabric'

import {useAppSelector} from '../../../store/hook'
const canvasOriginalHeight = 800
const canvasOriginalWidth = 800
const Preview1 = () => {
  const mainRef = useRef(null)
  const {signBase64, docBase64} = useAppSelector((state) => state.persist)
  const [canvas, setCanvas] = useState<any | null>(null)
  useEffect(() => {
    const c = new fabric.Canvas(mainRef.current)
    setCanvas(c)
  }, [mainRef])
  /** 填上簽名 */
  useEffect(() => {
    if (canvas && signBase64) {
      fabric.Image.fromURL(signBase64, (img: any) => {
        img.scaleToWidth(100)
        img.scaleToHeight(100)
        canvas.add(img).renderAll()
      })
    }
  }, [canvas, signBase64])
  // console.log(docBase64)
  /** 填上背景檔案 */
  useEffect(() => {
    if (canvas && docBase64) {
      fabric.Image.fromURL(docBase64, (img: any) => {
        canvas.setBackgroundImage(docBase64).renderAll()
        canvas.setHeight(200)
        canvas.setWidth(200)
        scaleAndPositionImage(img)
      })
    }
  }, [canvas, docBase64])

  /** 縮放 */
  const scaleAndPositionImage = (bgImage: any) => {
    console.log('移動')
    const {canvasWidth, canvasHeight} = setCanvasZoom()

    const canvasAspect = canvasWidth / canvasHeight
    const imgAspect = bgImage.width / bgImage.height
    let left; let top; let scaleFactor

    if (canvasAspect >= imgAspect) {
      scaleFactor = canvasWidth / bgImage.width
      left = 0
      top = -(bgImage.height * scaleFactor - canvasHeight) / 2
    } else {
      scaleFactor = canvasHeight / bgImage.height
      top = 0
      left = -(bgImage.width * scaleFactor - canvasWidth) / 2
    }

    canvas.setBackgroundImage(bgImage, canvas.renderAll.bind(canvas), {
      top: top,
      left: left,
      originX: 'left',
      originY: 'top',
      scaleX: scaleFactor,
      scaleY: scaleFactor,
    })
  }

  const setCanvasZoom = () => {
    const canvasWidth = canvasOriginalWidth * 1
    const canvasHeight = canvasOriginalHeight * 1

    canvas.setWidth(canvasWidth)
    canvas.setHeight(canvasHeight)
    return {canvasWidth, canvasHeight}
  }
  return (
    <canvas ref={mainRef} />
  )
}

export default Preview1
