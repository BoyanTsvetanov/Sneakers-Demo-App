import React from 'react'

const ContactItem = ({ icon, title, contactInfo, cta, ctaAction }) => {
    return (
        <div className="border-4 aspect-square w-full xl:p-15 p-10 max-md:p-6 max-sm:p-3 flex flex-col justify-between font-bebas">
            <div className='w-full h-[60%] flex flex-col justify-between'>
                <div className='relative h-12 w-12 max-lg:h-10 max-lg:w-10 max-md:h-6 max-md:w-6'><img src={icon} alt="icon-contact" className='dark:invert h-full object-contain'/></div>
                <h2 className='text-2xl max-lg:text-lg max-md:font-light max-sm:text-sm font-bold'>{title}</h2>
                <p className='font-semibold max-md:text-sm max-sm:text-xs'>{contactInfo}</p>
                <p className='font-montserrat font-light max-md:text-xs'>Понеделник до Петък, от 9ч. до 17ч.</p>
            </div>    

            {/* CTA Button */}
            <button 
                onClick={ctaAction} 
                className="mt-4 px-4 py-2 bg-accent-green not-dark:hover:bg-emerald-400 dark:bg-dark-teal dark:hover:brightness-110 text-light font-bold text-xl cursor-pointer max-sm:text-sm transition-all duration-300"
            >
                {cta}
            </button>
        </div>
      );
}

export default ContactItem