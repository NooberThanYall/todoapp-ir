'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
        className="w-3/4 rounded-md fixed -bottom-2 left-1/2 transform -translate-x-1/2 p-4 text-center shadow-md text-orange-400"
        style={{
          backgroundColor: "#0E2338",
        }}
        // initial={{
        //   y:-50,
        //   opacity: 0.1,
        // }}
        // animate={{
        //   y:0,
        //   opacity: 1,
        // }}
        // transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      >
        دارای حقوق و منابع اصلی© تودو ایران™
      </motion.footer>
  )
}

export default Footer