import axios from 'axios';

export const jsonconfig= axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const fakeStoreConfig= axios.create({
    baseURL: "https://fakestoreapi.com"
})