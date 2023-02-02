'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import Pricing from './components/Pricing'
import {Features} from './components/Features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Header />
   <Pricing />
  <Features />
   </>
  )
}
