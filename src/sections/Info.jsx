import React from 'react'

const Info = () => {
  return (
    <section >
        <div className='w-full h-20 justify-around flex'>
            <div className='w-1 h-full bg-accent-magenta/60'></div>
            {/* <div className='w-2 h-full bg-accent-magenta'></div> */}
        </div>

        <div name="Инфо" className='border-accent-magenta/60 bg-gradient-to-br from-transparent to-[hsl(259,77%,25%)] bg-cover bg-center bg-no-repeat bg-fixed bg-blend-darken items-center border-4 rounded-2xl mx-28  flex flex-row max-lg:flex-col max-sm:mx-8 mb-8'>
            <div className='flex flex-col justify-between text-pretty font-oswald p-8 w-full xl:text-xl text-[16px] max-md:text-sm first-line:text-2xl'>
            <p className=''><span className='font-bebas font-bold'>Urban Maratonki</span> – мястото за модерни и удобни маратонки!
                Предлагаме внимателно подбрани модели от водещи марки, които съчетават стил, комфорт и качество.
                Независимо дали търсите класически дизайн или най-новите тенденции, тук ще откриете перфектния чифт за вашия градски ритъм.
            </p>
            <br />
            <p>
                Градът никога не спи, а в <span className='font-bebas font-bold'>Urban Maratonki</span> знаем, че вашите обувки трябва да са готови за всичко.
                Открийте перфектния баланс между мода и функционалност с нашата селекция от топ модели.
            </p>
            </div>

            <div className='w-full h-full rounded-xl relative p-8 max-md:p-12'>
                <div className='absolute w-1 h-[100%] max-lg:h-[50%] bg-accent-magenta/60 left-[50%] translate-x-[-50%] top-0 max-lg:top-[50%]'></div>
                <div className='absolute w-[50%] max-lg:w-full h-1 bg-accent-magenta/60 right-0 top-[50%] translate-y-[-50%] '></div>
                <div className='relative border-7 border-accent-magenta z-40 rounded-3xl h-full aspect-square group focus-within:outline-none'>
                    <img src="./images/info.jpg" alt="info" className='absolute w-full h-full object-contain z-10 rounded-2xl'/>
                    <video src="./videos/info.mp4" autoPlay muted loop className='absolute z-10 w-full h-full object-cover rounded-2xl opacity-0 max-sm:opacity-100 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500'></video>
                    <img src="./images/sneaker-1.png" alt="info" className='absolute w-full h-full object-contain z-10 rounded-2xl group-hover:scale-90 group-hover:translate-y-[-3%] group-hover:rotate-3 transition-all duration-500'/>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default Info