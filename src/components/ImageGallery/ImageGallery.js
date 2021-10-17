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