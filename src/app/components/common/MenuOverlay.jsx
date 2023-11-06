import React from 'react'

const MenuOverlay = ({ children }) => {
  return (
    <ul className='flex flex-col py-4 items-center justify-around'>
        {children}
    </ul>
  )
}

export default MenuOverlay;