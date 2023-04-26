import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './Header.js'
import  Main  from './Main.js'
import Footer from './Footer.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
