import {useEffect, useRef, useState} from 'react'

import {fabric} from 'fabric'
import jsPDF from 'jspdf'
import {useTranslation} from 'react-i18next'
import {pdfjs} from 'react-pdf'

import Button from '../../../components/Button'
import {useAppSelector} from '../../../store/hook'
import {useAppDispatch} from '../../../store/hook/index'
import {setStepId} from '../../../store/reducers/uiSlice'
import {CanvasContainer} from '../../../styled/Download'
import {base64ToArrayBuffer, getPDFCanvas} from '../../../utils/helper'
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Preview = () => {
  const dispatch = useAppDispatch()
  const signSize = 200
  const [docWidth, setDocWidth] = useState<number>(750)
  const [docHeight, setDocHeight] = useState<number>(850)
  const mainRef = useRef(null)
  const {t} = useTranslation()
  const {signBase64, docBase64, docIsPDF} = useAppSelector(
    (state) => state.persist,
  )
  const [canvas, setCanvas] = useState<any | null>(null)
  useEffect(() => {
    const c = new fabric.Canvas(mainRef.current)
    setCanvas(c)
  }, [mainRef])
  // sign
  useEffect(() => {
    if (canvas && signBase64) {
      fabric.Image.fromURL(signBase64, (img) => {
        img.scaleToWidth(signSize)
        img.scaleToHeight(signSize)
        canvas.add(img).renderAll()
      })
    }
  }, [canvas, signBase64])

  // pdf
  useEffect(() => {
    if (canvas && docBase64) {
      // pdf
      if (docIsPDF) {
        const arrBuffer = base64ToArrayBuffer(docBase64)
        const updateCanvas = async () => {
          const pdfCanvas = await getPDFCanvas(arrBuffer)
          const pdfImg = new fabric.Image(pdfCanvas)
          const {width, height} = pdfImg
          setDocWidth(width!)
          setDocHeight(height!)
          canvas.setWidth(width!)
          canvas.setHeight(height!)
          canvas.setBackgroundImage(pdfImg).renderAll()
        }
        updateCanvas()
      } else {
        // image
        // FIXME when the signature be clicked will render
        const image = new Image()
        image.src = docBase64
        image.onload = () => {
          fabric.Image.fromURL(docBase64, (img) => {
            const {width, height} = img
            console.log('ok')
            canvas.setHeight(height)
            canvas.setWidth(width)
            canvas.setBackgroundImage(docBase64).renderAll()
          })
        }
      }
    }
  }, [canvas, docBase64])
  // download
  const download = () => {
    const divImage = canvas.toDataURL('image/png')
    const doc = new jsPDF()
    const width = doc.internal.pageSize.getWidth()
    const height = doc.internal.pageSize.getHeight()
    doc.addImage(divImage, 'PNG', 0, 0, width, height)
    doc.save('download.pdf')
    dispatch(setStepId('6'))
  }

  return (
    <>
      <CanvasContainer width={docWidth} height={docHeight}>
        <canvas ref={mainRef} />
      </CanvasContainer>
      <Button
        content={t('buttons.download')}
        onClick={download}
        padding='10px 40px'
        style='blue-yellow'
      />
    </>
  )
}

export default Preview
