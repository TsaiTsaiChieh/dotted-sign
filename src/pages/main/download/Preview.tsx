import {Document, pdfjs, Page} from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import {useAppSelector} from '../../../store/hook'

const Preview = () => {
  const {docBase64} = useAppSelector((state) => state.persist)

  return (

    <Document file={docBase64}>
      <Page
        pageNumber={1}
        width={450}
      />
    </Document>
  )
}

export default Preview
