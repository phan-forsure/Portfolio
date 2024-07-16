import React from 'react'

const languages: string[] = ['HTML 5', 'CSS3 & Sass', 'JavaScript + ES6', 'TypeScript']
const frameworks: string[] = ['React', 'Tailwind CSS', 'React Query', 'Axios']
const tools: string[] = ['Vite', 'Webpack', 'Postman', 'Bash', 'Git & Github', 'Chrome DevTool', 'ESLint']

function Skills() {
    return (
        <div className='skills rounded-md hover:bg-main-light transition-all p-8 mt-4'>
            <h2 className='text-xl font-semibold text-center border-b-1 border-b-main mx-6 mb-8 p-4'>Skills</h2>
            <div className='grid grid-cols-3'>
                <ul className='flex flex-wrap justify-center border-r-1 border-r-main'>
                    <h2 className='font-semibold mx-4 mb-4'>LANGUAGES</h2>
                    {languages.map(sk => <li className='w-full px-8 font-normal opacity-70'>{sk}</li>)}
                </ul>
                <ul className='flex flex-wrap justify-center border-r-1 border-r-main'>
                    <h2 className='font-semibold mx-4 mb-4'>LIBRARIES</h2>
                    {frameworks.map(sk => <li className='w-full px-8 font-normal opacity-70'>{sk}</li>)}
                </ul>
                <ul className='flex flex-wrap justify-center'>
                    <h2 className='font-semibold mx-4 mb-4'>TOOLS</h2>
                    {tools.map(sk => <li className='w-full px-8 font-normal opacity-70'>{sk}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default function Sidebar() {
  return (
    <section className="side-bar px-20 overflow-y-scroll">
        <p className='opacity-70 px-8 py-4 text-center'>I have the required skills to make good looking interfaces yet functional & performant web applications.</p>
        <Skills />
    </section>
  )
}
