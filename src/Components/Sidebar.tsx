import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"

export default function Sidebar() {
  return (
    <section className="side-bar px-20 overflow-y-scroll">
        <p className='opacity-70 px-8 py-4 text-center'>I have the required skills to make pixel-perfect interfaces yet functional & performant <span className="!opacity-100 font-medium">web applications.</span></p>
        <Skills />
        <Experience />
        <Projects />
        {/* <div className="hobbies">
          <h2 className='text-xl font-semibold text-center border-b-1 border-b-main mx-6 p-4'>Hobbies</h2>
          <p className="px-8 py-4">What do i do in my freetime?</p>
          <p className="px-8 opacity-70">I hangout with my friends, go to the gym or go for a walk. When i am alone i read books</p>
        </div> */}
    </section>
  )
}
