import React from 'react'

const GoogleMap = () => {
  return (
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9483440605977!2d105.82574437602695!3d21.03475278757133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00103ade45%3A0x22d15a05c52e70a4!2zxJDDtCDEkMO0IMSQ4buZaSBD4bqlbg!5e0!3m2!1svi!2s!4v1754936978524!5m2!1svi!2s" 
      className="w-full h-[500px]" 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default GoogleMap
