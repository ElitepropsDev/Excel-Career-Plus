import React from 'react'
import assets from '../../assets/assets'
import Title from './Title'
import MissionCard from './MissionCard'
import { motion } from 'motion/react'

const Mission = () => {

    const missionData = [
        {
            title: 'Our Vision',
            description: 'To bridge the gap between education and real-world experience.',
            icon: assets.ads_icon
        },
        {
            title: 'Our Values',
            description: 'Innovation, creativity, integrity, and lifelong learning guide everything we do at EduHub.',
            icon: assets.marketing_icon
        }
    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id='mission'
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

            <Title title='Our Core Mission' desc='At ECP EduHub, we empower learners, educators, and institutions to build
          sustainable skills through real projects, innovation, and collaboration.
' />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {missionData.map((mission, index) => (
                    <MissionCard key={index} mission={mission} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Mission
