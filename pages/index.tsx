import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/blog'
import Hero from '../components/hero'
import styles from '../styles/Home.module.scss'
import Tags from '../components/tags'
const Home: NextPage = () => {

  featuredArticle:{
  }

  return (
      <>
      < Hero />
      <Blog />
      </>

    )
}

export default Home
