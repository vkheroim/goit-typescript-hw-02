import { useState, useEffect } from 'react'
import './App.css'

import { fetchImagesWithSearch } from '../../image-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

import { ImageResult } from './App.types';



function App() {
  const [images, setImages] = useState<ImageResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ImageResult | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (search.trim() === "") {
      return;
    }

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const { results, total } = await fetchImagesWithSearch(search, page);
        setImages((prevState) => [...prevState, ...results]);
        setTotal(total);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [page, search]);

  const handleSearch = async (search: string) => {
    setSearch(search);
    setPage(1);
    setImages([]);
  }


  const fetchMore = async () => {
    setPage(page + 1);
  }

  const clickModal = (image: ImageResult) => {
    setSelected(image);
    setIsOpen(true);
  }

  const closeModal = () => {
    setSelected(null);
    setIsOpen(false);
  }


  return (
    <div className='app-container'>
      <h1 className='app-title'>Find your picture</h1>
      < SearchBar onSearch={handleSearch} />
      {loading && (<Loader />)}
      {error && (<ErrorMessage />)}
      {images.length > 0 && (<ImageGallery items={images} onClick={clickModal} />)}
      {images.length > 0 && !loading && images.length < total && (<LoadMoreBtn fetchMore={fetchMore} />)}
      {selected && (<ImageModal
        image={selected}
        isOpen={isOpen}
        onClose={closeModal}
      />)}
    </div>
  )
}

export default App
