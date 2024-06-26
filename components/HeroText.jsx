'use client'
import { motion } from "framer-motion"

const HeroText = ({text, className=''}) => {

  const quote = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h1 
      className={`inline-block extra-light w-full font-bold dark:text-white text-gray-800 capitalize text-left text-6xl ${className}`} 
      variants={quote}
      initial='initial'
      animate='animate'
      >
        {
          text.split(' ').map((word, index) => (
            <motion.span 
            key={index} 
            className='inline-block'
            variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))
        }
      </motion.h1>
    </div>
  )
}

export default HeroText