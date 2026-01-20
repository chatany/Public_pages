import Hero from "../hero"
import Navbar from "../Navbar"
import Partners from "../patner"
import { Section } from "../section"

export const Home = () => {
  return (
     <div className=" min-h-screen bg-black flex justify-center flex-col">
      <Navbar />
      <Hero />
      {/* <MobileDrawer open={true} onClose={() => console.log("kk")
      } /> */}
      <Partners />
      <Section/>
    </div>
  )
}