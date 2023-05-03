import cardFront from "../assets/bg-card-front.png"
import cardBack from "../assets/bg-card-back.png"
import logo from "../assets/card-logo.svg"

const CardSection = () => {
  return (
    <div className='bg-[url(/src/assets/bg-phone.png)] lg:bg-[url(/src/assets/bg-desktop.png)] relative h-56 w-full  lg:h-screen lg:w-1/4 '>
      <div className='absolute w-3/4 top-32 left-5 z-10 lg:top-[15%] lg:left-20 lg:w-full'>
        <img src={cardFront} alt='card-front' />
        <img
          src={logo}
          alt='card-logo'
          className='absolute w-12 top-5 left-5'
        />
        <h2
          className='absolute top-[50%] left-[15%] text-lightGreyVoilet
        font-semibold text-xl'>
          0000 0000 0000 0000
        </h2>
        <h2 className='absolute bottom-[10%] left-[10%] text-lightGreyVoilet text-xs  lg:left-[10%]'>
          JANE APPLESEED
        </h2>
        <h2 className='absolute bottom-[10%] right-[15%] text-lightGreyVoilet text-xs'>
          00/00
        </h2>
      </div>
      <div className='absolute w-3/5 top-10 right-10 lg:w-full lg:top-[50%] lg:left-40 lg:shadow-lg'>
        <img src={cardBack} alt='card-back' />
        <p className='absolute bottom-[45%] right-[15%] text-lightGreyVoilet text-sm '>
          000
        </p>
      </div>
    </div>
  )
}

export default CardSection
