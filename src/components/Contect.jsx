import { motion } from 'framer-motion';
import { CONTACT, CONTACT_TEXT, SEND_MESSAGE } from '../constants';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  
  const sendMessage = () => {
    alert("Message functionality is a work in progress! 🚧");
    
  };

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
        <button 
         id='message' 
         onClick={SEND_MESSAGE}
         className='inline-block mt-2 rounded-lg bg-blue-600 px-5 py-2 text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-700 shadow-md'>
         Send Me a Message
        </button>
     </div>
      </motion.div>
    </div>
  );
};

export default Contact;
