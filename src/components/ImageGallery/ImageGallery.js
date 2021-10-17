import s from './ImageGallery.module.css'
import PropTypes from 'prop-types'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

export function ImageGallery({ images, openModal }) {
    return (
        <ul className={s.imageGallery}>
            <ImageGalleryItem images={images} openModal={openModal}/>
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            tags: PropTypes.string,
            webformatURL: PropTypes.string,
            largeImageURL: PropTypes.string
        })
    ),
    openModal: PropTypes.func
}