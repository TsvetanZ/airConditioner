import {requestFactory} from './requester';


const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (serviceId) => {
    
    const query = encodeURIComponent(`serviceId="${serviceId}"`);
    //const result = await request.get(`${baseUrl}?where=${query}`);
    const result = await requestFactory.get(`${baseUrl}?where=${query}`);

    const comments = Object.values(result);

    return comments;
};

export const create = async (data) => {

        //const result = await request.post(baseUrl, data);
        const result = await requestFactory.post(baseUrl, data);


        //console.log(result);

        return result;
};

