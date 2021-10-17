import s from './App.module.css';
import { Component } from 'react';
import { PixabayFetch } from './services/pixabay';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { FetchLoader } from './components/FetchLoader/FetchLoader';
import { Button } from './components/Button/Button';

const fetchImages = new PixabayFetch()

class App extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    inputValue: '',
    showLoader: false,
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      fetchImages.searchQuery = this.state.inputValue
      this.showLoader()
      fetchImages.searchPhoto().then(data => {
        console.log(data);
        this.setState({
          images: [...data]
        })
        return this.showLoader()
      })
    }

    if (prevState.page !== this.state.page) {
      fetchImages.searchPage = this.state.page
      this.showLoader()
      fetchImages.searchPhoto().then(data => {
        this.setState({
          images: [...prevState.images, ...data]
        })
        return (this.showLoader(),
          window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            })
        )
      })
    }
  }

  openModal = () => {
    console.log('open modal');
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target[1].value
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
        {this.state.images.length > 0 && (<Button loadMoreImages={this.loadMoreImages}/>)}
    </div>
  );
  }
}

export default App;
