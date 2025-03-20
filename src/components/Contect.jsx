import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT, CONTACT_TEXT } from '../constants';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const Contect = () => {
  return (
    <div className="pb-20 flex flex-col items-center">
      <h1 className="my-10 text-center text-5xl font-bold">Get in Touch</h1>
      
      {/* Motion div for animations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 30px rgba(255, 255, 255, 0.7)" }}
        className="p-8 rounded-2xl shadow-lg w-full max-w-lg text-center bg-gray-100 dark:bg-gray-800"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300">{CONTACT_TEXT}</p>
        <div className="mt-6 space-y-4">
          <a 
            href={`mailto:${CONTACT.email}`} 
            className="flex items-center justify-center space-x-3 text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline"
          >
            <FaEnvelope /> <span>{CONTACT.email}</span>
          </a>
          <p className="flex items-center justify-center space-x-3 text-gray-900 dark:text-gray-100 text-lg">
            <FaPhoneAlt /> <span>{CONTACT.phone}</span>
          </p>
        <button id='message' className='inline-block mt-2 rounded-lg bg-blue-600 px-5 py-2 text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-700 shadow-md '>
          Send Me Message
          </button>
        </div>
      </motion.div>
      <h1 className='text-amber-50 text-2xl'>work in progress of my portfolio website</h1>
    </div>
  );
};

export default Contect;
