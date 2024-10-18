import React from "react"
import FirstSection from "../../components/firstSection/FirstSection"
import Hero from "../../components/hero/Hero"
import styles from "./Home.module.css"
import InformationBar from "../../components/InformationBar/InformationBar"
const Home: React.FC = () => {
  return (
    <section className={styles.img}>
      <Hero />
      <FirstSection />
      <InformationBar />
    </section>
  )
}

export default Home