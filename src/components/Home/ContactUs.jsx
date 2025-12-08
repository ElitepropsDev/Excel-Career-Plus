import React from 'react'
import Title from './Title'
import assets from '../../assets/assets'
import toast from 'react-hot-toast'
import {motion} from 'motion/react'

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        // ------- Enter your Web3Forms key below -----
        formData.append("access_key", "--- Enter Web3Forms key ---");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            toast.success('Thank you for your submission!')
            event.target.reset();
            } else {
            toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
        
    }

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <Title 
        title='Let’s Work Together' 
        desc='Whether you’re a student navigating study abroad options or an agency exploring alternative pathways, we support your goals every step of the way.' 
      />

      <p className='text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4'>
        Get in touch with us — we love to hear from you!
      </p>

      {/* WhatsApp Chat Button */}
      {/* WhatsApp Chat Button */}
<a
  href="https://wa.me/2349166354181?text=Hello!%20I%20want%20to%20learn%20more%20about%20ECP"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe5b] text-white font-medium px-6 py-3 rounded-full transition-all text-sm mb-6"
>
  {/* Inline SVG WhatsApp Logo */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.68 6L0 24l6-1.68A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.23-6.17-3.48-8.52zM12 21.5c-2.18 0-4.22-.66-5.9-1.78l-.42-.25-3.55.99.95-3.46-.27-.44A9.482 9.482 0 012.5 12c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm5.18-7.82c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.95.92-.95 2.25s.98 2.61 1.12 2.79c.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
  </svg>
  Chat with us on WhatsApp
</a>


      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit} 
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >

        <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="" />
                <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>

        <div>
            <p className='mb-2 text-sm font-medium'>Email id</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="" />
                <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>

        <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea name="message" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
        </div>

        <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Submit <img src={assets.arrow_icon} alt="" className='w-4'/>
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs
