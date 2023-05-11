import React from 'react'
import WidgetContent from './WidgetContent'
import './CSS/Widget.css'

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Space to follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widget
