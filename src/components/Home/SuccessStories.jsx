import React from 'react'
import { motion } from 'motion/react'
import assets from '../../assets/assets'
import Title from './Title'

const SuccessStories = () => {
    const storiesData = [
        {
            name: "Ada Lovelace",
            role: "Web Dev Bootcamp Graduate",
            image: assets.ada_photo,
            quote: "EduHub’s hands-on projects helped me land my dream job in tech!"
        },
        {
            name: "Chinedu Okafor",
            role: "AI & Data Analytics Learner",
            image: assets.chinedu_photo,
            quote: "The AI program gave me practical skills that I could apply immediately."
        },
        {
            name: "Future Tech Academy",
            role: "Institution Partner",
            image: assets.institution_logo,
            quote: "Partnering with EduHub empowered our students with real-world experience."
        }
    ]

    return (
        <motion.section
            id="success-stories"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
        >
            <Title 
                title="Success Stories" 
                desc="See how our learners are transforming knowledge into real-world success." 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {storiesData.map((story, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-102 duration-500 transition-all cursor-pointer"
                    >
                        <img 
                            src={story.image} 
                            alt={story.name} 
                            className="w-24 h-24 rounded-full mb-4 object-cover" 
                        />
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{story.role}</p>
                        <p className="text-center text-gray-700 dark:text-gray-300 italic">"{story.quote}"</p>
                    </motion.div>
                ))}
            </div>

            {/* Optional button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
                See More Stories
            </motion.button>
        </motion.section>
    )
}

export default SuccessStories
