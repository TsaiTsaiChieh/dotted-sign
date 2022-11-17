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
