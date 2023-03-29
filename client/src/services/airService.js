import  *as request from './requester'
const baseUrl = 'http://localhost:3030/jsonstore/serviceRequest'

export const getAll = async  () => {
    const result = await request.get(baseUrl); 
    const askServices =  Object.values(result);

    return askServices;

}