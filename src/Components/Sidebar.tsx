import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"

export default function Sidebar() {
  return (
    <section className="side-bar px-16 overflow-y-scroll flex flex-wrap justify-center">
        <p className='opacity-70 px-8 py-4 text-center'>I have the required skills to make pixel-perfect interfaces yet functional & performant <span className="!opacity-100 font-medium">web applications.</span></p>
        <Skills />
        <Experience />
        <Projects />
    </section>
  )
}
