import s from './App.module.css';
import { Component } from 'react';
import { PixabayFetch } from './services/pixabay';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { FetchLoader } from './components/FetchLoader/FetchLoader';
import { Button } from './components/Button/Button';
import { Modal } from './components/Modal/Modal';

const baseURL = `https://pixabay.com/api`;
const apiKey = `23140827-84799927bd5cf84c72c1ef99f`

const fetchImages = new PixabayFetch(baseURL, apiKey)

class App extends Component {
  state = {
    images: [],
    page: 1,
    inputValue: '',
    showLoader: false,
    showModal: false,
    modalImage: '',
    modalImageDescription: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      fetchImages.searchQuery = this.state.inputValue
      fetchImages.searchPage = this.state.page
      this.showLoader()
      fetchImages.searchPhoto().then(data => {
        this.setState({
          images: data
        })
        this.showLoader()
      })
    }

    if (prevState.page !== this.state.page) {
      if (this.state.page > 1) {
        fetchImages.searchPage = this.state.page
        this.showLoader()
        fetchImages.searchPhoto().then(data => {
          this.setState({
            images: [...prevState.images, ...data]
          })
          this.showLoader()
          window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            })
        })
      } 
    }
  }

  openModal = (e) => {
    this.setState({
      modalImage: e.target.dataset.url,
      modalImageDescription: e.target.alt,
      showModal: !this.state.showModal
    })
  }
  closeModal = (e) => {
    this.setState({
      modalImage: '',
      modalImageDescription: '',
      showModal: !this.state.showModal
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target[1].value,
      page: 1
    })
  }
  loadMoreImages = () => {
    this.setState((prev) => {
      return ({
        page: prev.page + 1
      })
    })
  }
  showLoader() {
    this.setState({
        showLoader: !this.state.showLoader
      })
  }

  render() {
    return (
    <div className={s.app}>
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        <FetchLoader visible={this.state.showLoader} />
        {this.state.images.length > 0 && (<Button loadMoreImages={this.loadMoreImages} />)}
        {this.state.showModal === true &&
          (<Modal
            image={this.state.modalImage}
            closeModal={this.closeModal}
            modalImageDescription={this.state.modalImageDescription} />)}
    </div>
  );
  }
}

export default App;
