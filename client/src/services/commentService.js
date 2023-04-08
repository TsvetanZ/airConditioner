import {requestFactory} from './requester';


const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (serviceId) => {
    
    const searchQuery = encodeURIComponent(`serviceId="${serviceId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)
    // const query = encodeURIComponent(`serviceId="${serviceId}"`);
    //const result = await request.get(`${baseUrl}?where=${query}`);
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);

    const comments = Object.values(result);

    return comments;
};

export const create = async (serviceId, comment) => {

        //const result = await request.post(baseUrl, data);
        const result = await request.post(baseUrl, {serviceId, comment});


        //console.log(result);

        return result;
};


// const addComments = async (serviceId, data) => {
//     const result = await request.post(`${baseUrl}/${serviceId}/comments`, data);

//    return result;
// };

