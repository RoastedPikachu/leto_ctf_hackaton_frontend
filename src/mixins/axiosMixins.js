import { useState } from 'react';

import axios from 'axios';

export default function() {
    let api = axios.create();

    let [errorMess, setErrorMess] = useState('');

    const initAPI = (isPost) => {
        api.interceptors.request.use(config => {
            return config;
        }, error => {
            console.log(`Ошибка на клиентской стороне: ${error.message}`);
        })

        api.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log(`Ошибка на стороне сервера: ${error.message}`);
        })

        isPost ? api = axios.create({method: 'POST'}) : false;
    }

    return {
        api,
        errorMess,
        initAPI
    }
}