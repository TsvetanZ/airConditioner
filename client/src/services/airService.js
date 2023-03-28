import {request} from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/serviceRequest'

export const getAll = async  () => {
    const askServices = request('GET', baseUrl);

    console.log(askServices);

    return askServices;

}