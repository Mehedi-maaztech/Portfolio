
import About from "./component/About/About"
import Contact from "./component/Contact/Contact"
import Hero from "./component/Hero/Hero"
import Navbar from "./component/Navbar/Navbar"
import Projects from "./component/Projects/Projects"


function App() {
 
  return (
    <div className="w-10/12 mx-auto py-10">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
