import React from 'react'
import arrow from "../../assets/secondHero/seta.svg"
import styles from "./Bar.module.css"
import pipe from "../../assets/pipeBar/pipe.svg"

interface Content {
    product: string;
    page: string;
}

const Bar: React.FC<Content> = ({product, page}) => {
  return (
    <section className={styles.sec}>
        <dl>
        <dt>{product}</dt>
        <dd><img src={pipe} alt="pipe" /></dd>
        <dd><img src={arrow} alt="arrow" /></dd>
        <dd>{page}</dd>
        <dd><img src={arrow} alt="arrow" /></dd>
        <dd>home</dd>
        </dl>
    </section>
  )
}

export default Bar