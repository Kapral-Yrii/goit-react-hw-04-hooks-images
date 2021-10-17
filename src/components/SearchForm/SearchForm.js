import s from './SearchForm.module.css'
import PropTypes from 'prop-types'

export function SearchForm({ onSubmit }) {
    return (
        <form className={s.searchForm} onSubmit={onSubmit}>
            <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func
}