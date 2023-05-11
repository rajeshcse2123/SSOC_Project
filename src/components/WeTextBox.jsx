import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/WeTextBox.css'

const WeTextBox = () => {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
      </div>
      <div className="quoraBox_quora">
        <h5>What is your question or link ?</h5>
      </div>
    </div>

  )
}

export default WeTextBox
