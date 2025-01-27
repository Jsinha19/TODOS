import React from 'react'

export default function Footer() {
  let footerStyle={
   
    backgroundColor:"Pink",
    color: "Purple",
    padding: "10px",
    textAlign: "center",
    fontSize: "24px",
    width:"100%",
   border: "2px solid purple"
    
  }
  return (
    <footer style={footerStyle}>
     copyright &copy; MyTodoList.com
  </footer>
  )
}

