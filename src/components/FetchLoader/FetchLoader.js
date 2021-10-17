import Loader from "react-loader-spinner";
import s from './FetchLoader.module.css'
import PropTypes from 'prop-types'

export function FetchLoader({visible}) {
    return (
        <div className={s.loader}>
           <Loader visible={visible} type="Oval" color="#3f51b5" height={50} width={50} /> 
        </div>
        
    )
}

FetchLoader.propTypes = {
    visible: PropTypes.bool
}