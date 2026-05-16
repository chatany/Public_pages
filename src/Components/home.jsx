import { Helmet } from "react-helmet-async";
import Hero from "../hero"
import Navbar from "../Navbar"
import Partners from "../patner"
import { Section } from "../section"

export const Home = () => {
  return (
    <div className=" min-h-screen bg-black flex justify-center flex-col">
      <Helmet>
        <title>Buy & Trade Bitcoin, Ethereum & 100+ Cryptos | BitZup</title>
        <meta name="description" content="Trade Bitcoin, Ethereum, and 100+ digital assets on BitZup. Tight spreads, low fees, high-APY earn products, and bank-grade security. Sign up in minutes." />
      </Helmet>
      <Navbar />
      <Hero />
      {/* <MobileDrawer open={true} onClose={() => console.log("kk")
      } /> */}
      <Partners />
      <Section/>
    </div>
  )
}