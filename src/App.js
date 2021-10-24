import s from './App.module.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { PixabayFetch } from './services/pixabay';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { FetchLoader } from './components/FetchLoader/FetchLoader';
import { Button } from './components/Button/Button';
import { Modal } from './components/Modal/Modal';
import { useToggle } from './hooks/useToggle';

const baseURL = `https://pixabay.com/api`;
const apiKey = `23140827-84799927bd5cf84c72c1ef99f`

const fetchImages = new PixabayFetch(baseURL, apiKey)

function App() {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const [showLoader, setShowLoader] = useToggle(false)
    const [showModal, setShowModal] = useToggle(false)
    const [modalImage, setModalImage] = useState('')
    const [modalImageDescription, setModalImageDescription] = useState('')
    const inputFetch = useRef(false)
    const loadMoreFetch = useRef(false)

    const openModal = useCallback((e) => {
        setModalImage(e.target.dataset.url)
        setModalImageDescription(e.target.alt)
        setShowModal(!showModal)
    }, [setModalImage, setModalImageDescription, setShowModal, showModal])

    const closeModal = useCallback(() => {
        setModalImage('')
        setModalImageDescription('')
        setShowModal(!showModal)
    }, [setModalImage, setModalImageDescription, setShowModal, showModal])

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        setInputValue(e.target[1].value)
        setPage(1)
        inputFetch.current = !inputFetch.current
    }, [])

    const loadMoreImages = useCallback(() => {
        setPage(prev => prev + 1)
        loadMoreFetch.current = !loadMoreFetch.current
    }, [])

   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleShowLoader = useCallback(() => setShowLoader(!showLoader), [])

    useEffect(() => {
        if (inputFetch.current) {
            fetchImages.searchQuery = inputValue
            fetchImages.searchPage = page
            handleShowLoader()
            fetchImages.searchPhoto()
            .then(data => {
                setImages(data)
                inputFetch.current = !inputFetch.current
                handleShowLoader()
            })
        }
    }, [handleShowLoader, inputValue, page])

    useEffect(() => {
        if (loadMoreFetch.current) {
            fetchImages.searchPage = page
            handleShowLoader()
            fetchImages.searchPhoto().then(data => {
                setImages(prev => [...prev, ...data])
                loadMoreFetch.current = !loadMoreFetch.current
                handleShowLoader()
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                  })
            }) 
        }
    }, [handleShowLoader, page])

    return (
    <div className={s.app}>
        <Searchbar onSubmit={onSubmit}/>
        <ImageGallery images={images} openModal={openModal} />
        <FetchLoader visible={showLoader} />
        {images.length > 0 && (<Button loadMoreImages={loadMoreImages} />)}
        {showModal &&
          (<Modal
            image={modalImage}
            closeModal={closeModal}
            modalImageDescription={modalImageDescription} />)}
    </div>
  )
}
export default App;