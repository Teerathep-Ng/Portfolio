import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Experience from './components/Experience'
import Blogs from './components/Blogs'

export default function App() {
  return (
    <div className='flex flex-col justify-center gap-10'>
      <Navbar />
      <AboutMe />
      <Blogs />
      <Experience />
      <Projects />
      <Certificate />
    </div>
  )
}
