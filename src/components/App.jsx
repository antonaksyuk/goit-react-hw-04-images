import { useState, useEffect, useRef } from "react";
import { RotatingLines } from 'react-loader-spinner'
import '../styles.css'

import { FethItem } from 'Servises/ApiFetch';
import SerchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";


export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [largeImg, setLargeImg] = useState('');
  const [tags, setTags] = useState('');
  const queryRef = useRef(query)
  const pageRef = useRef(page)
    
  const getLargeImgURL = (largeImg, tags) => {
    setLargeImg(largeImg);
    setTags(tags);
    setModal(true);
  }

   const handleSubmit = query => {
     setQuery(query)
   }

  const hadleButtonClick = () => {
    if (items.length < totalHits) {
      return setPage(state => state + 1) 
    }
  }
  
  const modalToggler = () => {
    setModal(state => !state)
  }

  useEffect(() => {
    if (!query) {
      return
    };
    setIsLoading(true)
    if (queryRef !== query || pageRef !== page) {
      FethItem(query, page).then(r => {
        setItems(prevState => ([...prevState, ...r.hits]));
        if (page === 1) {
          setItems([...r.hits]);
          setTotalHits(r.totalHits);
        }
        setIsLoading(false);
      })
}       
  }, [page, query])  
  

      return (
      <div className="App">
        <SerchBar search={handleSubmit} />
        {isLoading && (
          <Loader>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
            </Loader>
        )}
        <ImageGallery>
          <ImageGalleryItem data={items} img={getLargeImgURL} />
        </ImageGallery>
        {totalHits > items.length && <Button click={hadleButtonClick} />}
            {modal && <Modal toggle={modalToggler} prop={ largeImg} prop2={tags}  />}
      </div>

    );
    };
