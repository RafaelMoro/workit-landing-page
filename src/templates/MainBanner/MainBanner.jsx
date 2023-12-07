import '../../styles/MainBanner.scss'
import { Button } from "../../components"
import imageHero from '../../assets/images/image-hero.webp'

const MainBanner = () => {
  return (
    <div className="main-banner">
        <h1 className="main-banner__title">Data <span>tailored</span> to your needs.</h1>
        <Button text="Learn more" />
        <img className='main-banner__image' src={imageHero} alt="Mobile phone" />
        <div className="line"></div>
    </div>
  )
}

export { MainBanner }