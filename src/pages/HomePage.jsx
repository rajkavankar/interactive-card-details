import CardSection from "../components/CardSection"
import FormSection from "../components/FormSection"

const HomePage = () => {
  return (
    <div className='lg:flex lg:items-center lg:gap-10 lg:justify-between'>
      <CardSection />
      <FormSection />
    </div>
  )
}

export default HomePage
