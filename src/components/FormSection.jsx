import Input from "./ui/Input"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Button from "./ui/Button"
import { useState } from "react"
import tick from "../assets/icon-complete.svg"

const FormSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const initialValues = {
    cardName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvv: "",
  }

  const validationSchema = Yup.object({
    cardName: Yup.string().required("Cardholder name is required"),
    cardNumber: Yup.string().required("Cardholder name is required"),
    mm: Yup.string().required("month is required"),
    yy: Yup.string().required("year is required"),
    cvv: Yup.string().required("cvv is required"),
  })
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className='lg:mr-auto mt-28 lg:mt-0 mx-auto px-10 lg:w-[40%]'>
      {isSubmitted ? (
        <div className='flex flex-col justify-between items-center gap-3'>
          <img src={tick} alt='tick' />
          <h1 className='text-xl'>THANK YOU!</h1>
          <p className='text-darkGreyVoilet text-lg'>
            We added your card details
          </p>
          <Button />
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <Form>
            <Input
              label='CARDHOLDER NAME'
              name='cardName'
              placeholder='e.g. Jane Appleseed'
            />
            <Input
              label='CARD NUMBER'
              name='cardNumber'
              placeholder='e.g. 1234 5678 9123 0000'
            />

            <div className='grid grid-cols-2 gap-2'>
              <div>
                <small>EXP. DATE (MM/YY)</small>
                <div className='flex gap-2'>
                  <Input name='mm' placeholder='MM' />
                  <Input name='yy' placeholder='YY' />
                </div>
              </div>
              <div>
                <Input label='CVV' name='cvv' placeholder='e.g. 123' />
              </div>
            </div>

            <Button type='submit' />
          </Form>
        </Formik>
      )}
    </div>
  )
}

export default FormSection
