import  *as request from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/serviceRequest'

export const getAll = async  () => {
    const result = await request.get(baseUrl); 
    const askServices =  Object.values(result);

    return askServices;

};

export const getOne = async (serviceId) => {
    const result = await request.get(`${baseUrl}/${serviceId}`)

    //console.log(result);
    return result;
}

export const create = async (serviceData) => {
    const result = await request.post(baseUrl, serviceData);
    //console.log(result);

    return result;
}

export const addComments = async (serviceId, data) => {
    const result = await request.post(`${baseUrl}/${serviceId}/comments`, data);

   return result;

}