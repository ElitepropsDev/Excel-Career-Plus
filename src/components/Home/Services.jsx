import React from 'react'
import assets from '../../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'

const Services = () => {

    const servicesData = [
        {
          title: 'AI & Tech Training',
          description: 'Learn real-world AI skills through guided practical projects.',
          icon: assets.ads_icon
        },
        {
          title: 'Web Development',
          description: 'Build full-stack web applications using hands-on coding experience.',
          icon: assets.marketing_icon
        },
        {
            title: 'Data Analytics',
            description: 'Understand data patterns to drive smarter creative business decisions.',
            icon: assets.content_icon,
        },
        {
            title: 'Soft Skills & Career Growth',
            description: '',
            icon: assets.social_icon,
        },
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title title='What we offer learners?' desc='From learning to mastery, we craft real projects that move your career forward.'/>

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>

    </motion.div>
  )
}

export default Services
