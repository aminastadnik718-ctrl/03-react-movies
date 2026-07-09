
import { createPortal } from 'react-dom'
import css from './MovieModal.module.css'

export default function MovieModal() {
    const handleClose = () => {
        createPortal(null, document.getElementById('modal-root')!)
    }
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button className={css.closeButton} aria-label="Close modal" onClick={handleClose}>
          &times;
        </button>
        <img
          src="https://image.tmdb.org/t/p/original/backdrop_path"
          alt="movie_title"
          className={css.image}
        />
        <div className={css.content}>
          <h2>movie_title</h2>
          <p>movie_overview</p>
          <p>
            <strong>Release Date:</strong> movie_release_date
          </p>
          <p>
            <strong>Rating:</strong> movie_vote_average/10
          </p>
        </div>
      </div>
    </div>
  )
}


