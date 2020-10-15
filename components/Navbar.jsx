import React from 'react'

const Navbar = () => {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
        <a href="/" style={{marginRight: "20px"}}>Home</a>
        <a href="/about">About</a>
    </div>
  )
}

export default Navbar
