import { useRouter } from 'next/router'
import Image from 'next/image'
import Author from '../../components/author'
import { getPostsByTags } from '../../services/post.service'
import style from "../../styles/blog.module.scss"
import Tags from '../../components/tags'
import { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import Hero from '../../components/hero'


export default function Tag() {
  const router = useRouter();
  const { tag } = router.query;


  const upperCaseTag = (`${tag}`).toLocaleUpperCase()
  const cards = getPostsByTags(`${tag}`).map(card => {
    return(
    <div className={style.card} key= {card.id}>
          <Image src={card?.backgroundImageURL} width={400} height={200} />
          <Author {...{...card.author ,"minRead" : card.minRead }} key= {card.id}/>
          <h1>{card?.title}</h1>
          <p>{card?.text?.substring(0,300)}...</p>
          <div className={style.buttonGroup}>
              <button>Read More</button>
          </div>
    </div>)
   })

  return (
    <>
    <Hero />
    <div className={style.blog}>
      <h1>{upperCaseTag}</h1>
      <div className={style.cardsAndTag}>
        <div className={style.cards}>
          {cards}
        </div>
        <Tags />
      </div>
    </div>
    </>
  )
}
