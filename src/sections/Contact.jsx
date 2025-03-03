import React from 'react'
import { contacts, faq } from '../constants'
import FaqItem from '../components/FaqItem'
import ContactItem from '../components/ContactItem';

const Contact = () => {

    const halfLength = Math.floor(faq.length / 2);

  return (
    <section name="Контакти" className='my-4'>
        <div className='flex items-center'>
            <div className='h-1 w-[80%] bg-dark dark:bg-light'></div>
            <h1 className='text-2xl font-bebas font-bold border-4 rounded-full p-2'>Контакти</h1>
        </div>

        <div className='mt-10 w-[60%] max-lg:w-[80%] flex justify-between items-center justify-self-center gap-2'>
            {Object.values(contacts).map((item, index) => (
                <ContactItem 
                    key={index} 
                    icon={item.icon} 
                    title={item.title} 
                    contactInfo={item.number || item.address} 
                    cta={item.cta} 
                    ctaAction={item.ctaAction} 
                />
            ))}
        </div>

        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-2xl font-montserrat font-bold'>Пратете запитване</h2>
            <div className='relative border-2 flex mt-3 px-6 py-3 w-[60%] max-lg:w-[80%] justify-between gap-4'>
                <textarea
                    id="floating_outlined"
                    class="block px-2.5 py-2.5  w-full text-sm text-dark bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-dark peer dark:text-light dark:border-light dark:focus:border-light resize-none overflow-hidden"
                    placeholder=" "
                    rows="1"
                    onInput={(e) => {
                        e.target.style.height = 'auto'; 
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                ></textarea>
                <label
                    for="floating_outlined"
                    class="absolute text-sm font-bebas text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 left-8 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-dark dark:peer-focus:text-light"
                >
                    Как да Ви помогнем?
                </label>
                    <button className='size-12 cursor-pointer dark:invert transition-all duration-500'>
                        <img src="./icons/send.png" alt="search" className='w-fit h-full object-contain'/>
                    </button>              
            </div>
        </div>

        <div className='mx-32 max-lg:mx-16 mt-20 font-montserrat'>
            <h2 className='text-2xl font-bold'>Често задавани въпроси:</h2>

            <div className='container relative flex gap-8 mt-10 max-lg:block'>
                    <div className='relative flex-1'>
                        {faq.slice(0, halfLength).map((item, index) =>(
                            <FaqItem key={item.id} item={item} index={index}/>
                        ))}
                    </div>
                    
                    <div className='relative flex-1'>
                        {faq.slice(halfLength).map((item, index) =>(
                            <FaqItem key={item.id} item={item} index={halfLength + index}/>
                        ))}
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Contact