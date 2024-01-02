import SearchBar from './Components/SearchBar/SearchBar';
import searchImages from './api';
import ImageList from './Components/ImageList/ImageList';
import { useState } from 'react';


const App = () => {
const [images,setImages]=useState([])

     const handleSubmit = async (term) => {
          const result = await searchImages(term);
          // console.log(result);
          setImages(result)
     }
     return (
          <div>
               <SearchBar onSubmit={handleSubmit} />
               <ImageList images={images} />
          </div>

     )
}

export default App