import css from './ErrorMessage.module.css'
import React from 'react'

export const ErrorMessage: React.FC = () => {
    return (
       <p className={css.text}>There was an error, please try again...</p>

    )
}