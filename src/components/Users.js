import React from 'react'
import Avatar from 'react-avatar'
import "./style/Editor.css"

export const Users = (props) => {
    // console.log(props.client," = usernam")
  return (
    <div >
        <Avatar name={props.username} colors={['orange', 'green','black']} size='70px' round='20px' />
    </div>
  )
}
