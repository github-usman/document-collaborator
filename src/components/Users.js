import React from 'react'
import Avatar from 'react-avatar'
import "./style/Editor.css"

export const Users = (props) => {
    // console.log(props.client," = usernam")
  return (
    <div >
        <div style={{marginTop:"0.8rem"}}>
        <Avatar name={props.username} size='60px' round='20px' />
        </div>
        <p style={{color:"white",margin:'0.3rem 0.5rem 0.5rem'}}>{props.username}</p>
    </div>
  )
}
