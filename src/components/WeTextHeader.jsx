import React from 'react'
import Logo from '../assets/logo.jpg'
import CottageIcon from '@mui/icons-material/Cottage'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import AssignmentTurnedInOutlined from '@mui/icons-material/AssignmentTurnedInOutlined'
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined'
import Search from '@mui/icons-material/Search'
import { Avatar, Button, Input } from '@mui/material'
import "./CSS/WeTextHeader.css"
import Modal from 'react-responsive-modal'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import 'react-responsive-modal/styles.css'
import ExpandMore from '@mui/icons-material/ExpandMore'

const WeTextHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputUrl, setInputUrl] = useState("")
  const Close = (<CloseIcon />)

  return (
    <div className='qHeader'>
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon"><CottageIcon /></div>
          <div className="qHeader__icon"><FeaturedPlayListIcon /></div>
          <div className="qHeader__icon"><AssignmentTurnedInOutlined /></div>
          <div className="qHeader__icon"><PeopleAltOutlined /></div>
          <div className="qHeader__icon"><NotificationsOutlined /></div>
        </div>
        <div className="qHeader__input">
          <Search/>
          <input type="text" placeholder='Search questions' />
        </div>
        {/* Avatar Div */}
        <div className='qHeader__Rem'>
           <Avatar src='' />
        </div>
        <Button onClick={() => setIsModalOpen(true)}> Add Questions</Button>
        <Modal open={isModalOpen}
          closeIcon = {Close} 
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto"
            }
          }}
          >
          <div className="modal__title">
            <h5>Add Questions</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input type="text" placeholder="Start your question with 'What', 'How', 'Why', etc." />
            <div style ={{
              display: "flex",
              flexDirection: "column",
             }}>
              <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inclue a link that gives context"
              />
              {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"
                  />
              )}

            </div>
          </div>
          <div className="modal__button">
          <button className="cancle" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
          <button type="submit" className="add">
            Add Question
          </button>

          </div>
        </Modal>
      </div>
    </div>
  )
}

export default WeTextHeader
