import {request} from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/airConditioners'

export const getAll = async  () => {
    const serviceAsk = request('GET', baseUrl);

    console.log(serviceAsk);
    
    return serviceAsk

}