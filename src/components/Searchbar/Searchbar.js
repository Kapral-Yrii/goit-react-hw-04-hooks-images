import s from './Searchbar.module.css'
import PropTypes from 'prop-types'
import { SearchForm } from '../SearchForm/SearchForm'

export function Searchbar({ onSubmit }) {
    return (
        <header className={s.Searchbar}>
            <SearchForm onSubmit={onSubmit}/>
        </header>
    )
}