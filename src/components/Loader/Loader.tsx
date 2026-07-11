
import css from './Loader.module.css'
import React from 'react'


export const Loader: React.FC = () => {
    return (
        <div className={css.loaderContainer} role="alert" aria-busy="true">
            <div className={css.spinner}></div>
            <p className={css.text}>Loading movies, please wait...</p>
        </div>
    )
}

