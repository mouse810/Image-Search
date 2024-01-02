import axios from 'axios';

const searchImages = async (term) => {
     const response = await axios.get('https://api.unsplash.com/search/photos', {
          headers: {
               Authorization: 'Client-ID XntEMcR7kg3Mp_r8CmGAHQkEqe6gd0BcDaDVzQhgBpo'
          },
          params: {
               query: term,
          }
     })

     // console.log(response);

     return response.data.results;
}

export default searchImages;