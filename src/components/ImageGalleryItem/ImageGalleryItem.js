import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

export function ImageGalleryItem({ images, openModal }) {
    return (
        <>
            {images.map(e => {
                return (
                <li className={s.imageGalleryItem} key={e.id}>
                        <img
                            src={e.webformatURL}
                            alt={e.tags}
                            data-url={e.largeImageURL}
                            className={s.image}
                            onClick={openModal}
                        />
                </li>
                )
            })}
       </> 
    )
}