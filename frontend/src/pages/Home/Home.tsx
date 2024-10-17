import FirstSection from "../../components/firstSection/FirstSection"
import Hero from "../../components/hero/Hero"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <section className={styles.img}>
      <Hero />
      <FirstSection />
    </section>
  )
}

export default Home