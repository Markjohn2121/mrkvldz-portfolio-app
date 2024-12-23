import React from "react";
import '.././tailwind.css'
import messegerIco from '../assets/messenger.png'
import emailIco from '../assets/email.png'
import phoneIco from '../assets/phone.png'

const ContactHireMe = ({ onBtnclick }) => {


    return (
        // /* From Uiverse.io by themrsami */
        <div className="flex items-center justify-center">
            <div
                className="flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg shadow-lg p-6 w-80"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Welcome!</h2>
             
                <p className="mb-4 text-center">
                    Thanks for visiting my website. Stay connected and feel free to contact me
                </p>

                <div className="flex space-x-4">
                    <a
                        className="text-blue-500 hover:text-blue-400 transition duration-200"
                        href="https://m.me/4d61726b6a6f686eVALDEZ"
                    >
                        <img src={messegerIco} alt="Fb messenger" />
                    </a>
                    <a
                        className="text-blue-400 hover:text-blue-300 transition duration-200"
                        href="mailto:valdezmarkjohn21@gmail.com"
                    >
                        <img src={emailIco} alt="Enail" />
                    </a>
                    <a
                        className="text-blue-400 hover:text-blue-300 transition duration-200"
                        href="tel:+639266215136" 
                    >
                           <img src={phoneIco} alt="phone"  />
                    </a>
                </div>

                <button
                    className="bg-gradient-to-r mt-4 from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full animate-pulse"
                    onClick={onBtnclick}
                >
                    Close
                </button>
            </div>
        </div>


    )

}

export default ContactHireMe