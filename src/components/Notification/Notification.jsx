import React from 'react'
import css from './Notification.module.css'
export const Notification = ({message}) => {
  return  <p className={css.text}>{ message}</p>
  
}
