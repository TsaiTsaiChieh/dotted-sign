import {pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    let baseURL: string | ArrayBuffer | null
    // Make new FileReader
    const reader = new FileReader()
    // Convert the file to base64 text
    reader.readAsDataURL(file)
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result as string
      resolve(baseURL)
    }
  })
}
// Convert base64 string to ArrayBuffer
export const base64ToArrayBuffer = (base64: string): ArrayBufferLike => {
  const arr = base64.split(',')
  const binaryString = atob(arr[1])
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}
export const getPDFCanvas = (
  pdfData: ArrayBufferLike,
): Promise<HTMLCanvasElement> => {
  return new Promise(async (resolve) => {
    const pdf = await pdfjs.getDocument({data: pdfData}).promise
    const page = await pdf.getPage(1)
    const viewport = page.getViewport({scale: 0.6})
    const canvas = document.createElement('canvas')
    canvas.width = viewport.width
    canvas.height = viewport.height
    const renderTask = page.render({
      canvasContext: canvas.getContext('2d')!,
      viewport,
    })
    await renderTask.promise
    resolve(canvas)
  })
}
