import './App.css';
import { Component } from 'react'
import { PixabayFetch } from './services/pixabay'
import { Searchbar } from './components/Searchbar/Searchbar'
import { ImageGallery } from './components/ImageGallery/ImageGallery';

const fetchImages = new PixabayFetch()



class App extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    inputValue: ''
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      fetchImages.searchQuery = this.state.inputValue
      fetchImages.searchPhoto().then(data => {
        console.log(data)
        this.setState({
          images: [...data]
        })
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

  render() {

    return (
    <div className="App">
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery images={this.state.images} openModal={this.openModal}/>
    </div>
  );
  }
}

export default App;
