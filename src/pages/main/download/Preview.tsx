import {useEffect, useRef, useState} from 'react'

import {fabric} from 'fabric'
import {pdfjs} from 'react-pdf'

import {useAppSelector} from '../../../store/hook'
import {base64ToArrayBuffer, getPDFCanvas} from '../../../utils/helper'
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Preview = () => {
  const mainRef = useRef(null)
  const {signBase64, docBase64} = useAppSelector((state) => state.persist)
  const [canvas, setCanvas] = useState<any | null>(null)
  useEffect(() => {
    const c = new fabric.Canvas(mainRef.current)
    setCanvas(c)
  }, [mainRef])
  // sign
  useEffect(() => {
    if (canvas && signBase64) {
      fabric.Image.fromURL(signBase64, (img) => {
        img.scaleToWidth(100)
        img.scaleToHeight(100)
        canvas.add(img).renderAll()
      })
    }
  }, [canvas, signBase64])
  // pdf
  useEffect(() => {
    if (canvas && docBase64) {
      const arrBuffer = base64ToArrayBuffer(docBase64)
      const updateCanvas = async () => {
        const pdfCanvas = await getPDFCanvas(arrBuffer)
        const pdfImg = new fabric.Image(pdfCanvas)
        canvas.setWidth(pdfImg.width!)
        canvas.setHeight(pdfImg.height!)
        canvas.setBackgroundImage(pdfImg).renderAll()
      }
      updateCanvas()
    }
  }, [canvas, docBase64])

  // download
  const download = () => {
    const dataURL = canvas.toDataURL({format: 'pdf'})
    const link = document.createElement('a')
    link.download = 'my-image.png'
    link.href = dataURL
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
  }
  return (
    <>
      <canvas ref={mainRef} className='download-canvas' />
      <button onClick={download}>下載</button>
    </>
  )
}

export default Preview
