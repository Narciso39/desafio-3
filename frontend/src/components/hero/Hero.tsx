import styles from "./Hero.module.css"
import heroImg from "../../assets/home/hero-img.svg"
const Hero = () => {
  return (
    <>
    <img className={styles.img} src={heroImg} alt="hero img" />
    </>
  )
}

export default Hero