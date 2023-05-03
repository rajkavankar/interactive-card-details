import { useField } from "formik"

const Input = (props) => {
  const [field, meta] = useField(props)
  return (
    <div className='mb-3 lg:mb-5'>
      <label
        className={`font-sans text-sm  ${
          meta.touched && meta.error ? "text-errorRed" : "text-veryDarkVoilet"
        }`}>
        {props.label}
      </label>
      <input
        className={`flex h-10 w-full 
         rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  ${
           meta.touched && meta.error ? "ring-1 ring-errorRed" : null
         }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className='text-sm text-errorRed'>{meta.error}</p>
      ) : null}
    </div>
  )
}

export default Input
