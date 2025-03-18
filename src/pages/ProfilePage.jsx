import React, { useEffect, useState } from 'react'

const ProfilePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    
      useEffect(() => {
                  const savedTheme = localStorage.getItem('theme') === 'dark';
                  setDarkMode(savedTheme);
                  document.documentElement.classList.toggle('dark', savedTheme);
              }, []);


  return (
    <main className='flex w-full h-[100dvh] bg-light dark:bg-dark items-center justify-center'>
        <div className='flex flex-col justify-center items-center h-[80%] w-[60%] max-lg:w-[80%] bg-dark-teal px-8 py-4 rounded-xl'>
            <div className='flex flex-col justify-center items-center w-full h-full border rounded-xl'>
                <img src="./icons/user-profile.png" alt="profile-pic" className='bg-light rounded-full'/>
                <h1 className='font-montserrat text-4xl font-bold'>Потребител</h1>
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full border rounded-xl'></div>
            
        </div>
    </main>
  )
}

export default ProfilePage