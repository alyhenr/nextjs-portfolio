import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const style = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';
    return (
      <button onClick={selectTab} >
        <p className={`${style} font-semibold hover:text-white`}>
            {children}
        </p>
      </button>
  )
}

export default TabButton