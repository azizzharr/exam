import {createStore} from 'redux'
import listProduct from "./reduce/list-product";

const store = createStore(listProduct)

export default store;