import React from 'react'

export default function Hero() {
  return (
    <section className="hero m-12">
        <div className='text-4xl font-extralight'>
            <h1 className='mb-8 font-normal'>Hello!</h1>
            <p className='mb-4'>I'm a <span className='font-normal'>Abdulrahman</span>, a passionate front-end web developer who builds unique experiences & interfaces.</p>
        </div>
        <p className='text-2xl mt-12'>Get in touch <a className='border-b-2 border-b-main transition-all hover:bg-blue-800' href='mailto:phantommy38@gmail.com'>phantommy38@gmail.com</a></p>
    </section>
  )
}
