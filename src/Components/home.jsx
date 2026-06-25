import { Helmet } from "react-helmet-async";
import Hero from "../hero"
import Navbar from "../Navbar"
import Partners from "../patner"
import { Section } from "../section"

export const Home = () => {
  
  return (
    <div className=" min-h-screen bg-black flex justify-center flex-col">
      <Helmet>
        <title>BitZup: Buy, Trade & Earn Bitcoin, Ethereum & 2,300+ Crypto</title>
        <meta name="description" content="Buy, sell and trade 2,300+ cryptocurrencies on BitZup with some of the lowest fees in crypto. Beginner-friendly, pro-grade tools, bank-level security." />
      </Helmet>
      <Navbar />
      <Hero />
      <Partners />
      <Section/>
    </div>
  )
}