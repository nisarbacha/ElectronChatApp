import React from 'react'
import Navbar from "../components/Navbar";
const Baselayout = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <Navbar {...props} />
      {children}
    </React.Fragment>
  )
}


export default Baselayout