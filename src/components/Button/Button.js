import s from './Button.module.css'
import PropTypes from 'prop-types'

export function Button({loadMoreImages}) {
    return (
        <button type="button" onClick={loadMoreImages} className={s.button}>Load more</button>
    )
}

Button.propTypes = {
    loadMoreImages: PropTypes.func
}