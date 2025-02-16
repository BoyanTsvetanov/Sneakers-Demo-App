import React from 'react'

const Hero = () => {
  return (
    <section className='relative h-[80vh] max-md:h-[60%] overflow-hidden' name="Начало">
        <div className='group'>
        {/* <img src="/images/hero.png" alt="hero" width={700}
         className='absolute right-0 bottom-0 z-1 transition-all duration-500 hover:rotate-12 max-md:w-[500px] max-md:bottom-0'/> */}

        <video
            src="./videos/hero.mp4"
            autoPlay
            muted
            loop
            className="absolute right-0 bottom-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 z-0"
        />
        {/* <img src="/images/hero-bg.png" alt="hero background" width={800}
            className="absolute right-0 bottom-0 transition-all duration-500 opacity-0 group-hover:opacity-100 max-md:w-[500px] max-md:bottom-0 z-0"
        /> */}
        </div>

        <div className='absolute flex flex-col bg-dark/60 backdrop-blur-sm lg:ml-48 md:mx-12 max-md:mx-10 top-[50%] translate-y-[-50%] px-8 py-4 rounded-xl text-pretty'>
            <h1 className='text-4xl max-md:text-3xl font-bebas uppercase font-bold max-sm:text-2xl'>Твоята <span className='text-accent-magenta italic'>енергия</span><br />Твоите <span className='text-accent-magenta italic'>маратонки</span></h1>
            <p className='text-lg mt-2 font-montserrat max-sm:text-sm'>Открий силата в себе си и постигни нови върхове.</p>
        </div>
    </section>
  )
}

export default Hero