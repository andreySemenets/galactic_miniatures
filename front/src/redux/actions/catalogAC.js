import axios from 'axios'

export const setCatalogItems = value => ({ type: 'SET_CATALOG_ITEMS', payload: value })

export const getCatalogItems = () =>  async (dispatch) => {
   axios.get('http://localhost:4000/catalog')
    .then((res) => {
    //    console.log(res);
       dispatch(setCatalogItems(res.data))
   })
}
