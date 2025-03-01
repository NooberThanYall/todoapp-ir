import React from 'react'

const Footer = async () => {
  return (
    <footer
        className="w-3/4 rounded-md fixed -bottom-2 left-1/2 transform -translate-x-1/2 p-4 text-center shadow-md text-orange-400 bg-darkbgsidebar"
        
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
      </footer>
  )
}

export default Footer