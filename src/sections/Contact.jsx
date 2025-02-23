import React from 'react'
import { faq } from '../constants'
import FaqItem from '../components/FaqItem'

const Contact = () => {

    const halfLength = Math.floor(faq.length / 2);

  return (
    <section name="Контакти" className='my-4'>
        <div className='flex items-center'>
            <div className='h-1 w-[80%] bg-dark dark:bg-light'></div>
            <h1 className='text-2xl font-bebas font-bold border-4 rounded-full p-2'>Контакти</h1>
        </div>

        

        <div className='mx-32 max-lg:mx-16 mt-8'>
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