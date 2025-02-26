import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import {SocialIcon} from "react-social-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 not-dark:bg-dark dark:bg-dark-teal text-white py-6 flex flex-col justify-center items-center font-oswald">
          <div className="container flex justify-between lg:justify-center max-lg:flex-col text-center items-center">
            <p className="text-lg font-semibold flex-1">Urban Maratonki – Твоят стил. Твоето удобство.</p>
            
            <div className="flex justify-center space-x-6 mt-4 flex-1">
            <a href="#" className="hover:text-accent-green hover:bg-light rounded-full p-2 transition-all duration-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-accent-green hover:bg-light rounded-full p-2 transition-all duration-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-accent-green hover:bg-light rounded-full p-2 transition-all duration-300"><FaTiktok size={24} /></a>
            <a href="#" className="hover:text-accent-green hover:bg-light rounded-full p-2 transition-all duration-300"><FaTwitter size={24}/></a>
            </div>
            
            <div className="mt-4 text-sm flex-1">
              <p>📩 <a href="mailto:info@urbanmaratonki.bg" className="hover:text-accent-green">info@urbanmaratonki.bg</a></p>
              <p>📍 София, България</p>
            </div>
                        
          </div>
          <p className="text-xs text-gray-500 mt-8">© 2025 Urban Maratonki. Всички права запазени.</p>
        </footer>
      );
}

export default Footer