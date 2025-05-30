import Navbar from "./components/Navbar"
import Para from "./components/para"
import About from "./components/About"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contect from "./components/Contect"
function App() {

  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     <div className="container mx-auto px-8"></div></div>
    <Navbar/>
    <Para/>
    <About/>
    <Tech/>
    <Projects/>
    <Contect/>
     </div>
    </>
  )
}

export default App
