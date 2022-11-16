import {useForm} from 'react-hook-form'

const UploadForm = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('file')} type='file' />
      <button>Submit</button>
    </form>
  )
}

export default UploadForm
