import  {requestFactory} from './requester'
const baseUrl = 'http://localhost:3030/data/serviceRequest'

 export const airServiceFactory =(token) => {
    const request = requestFactory (token);

    const getAll = async  () => {
        const result = await request.get(baseUrl); 
        const askServices =  Object.values(result);
    
        return askServices;
    };

     const getOne = async (serviceId) => {
        console.log('ehoo:');
        const result = await request.get(`${baseUrl}/${serviceId}`);
        console.log('ehoo:',result);
        return result;
    };
    
     const create = async (serviceData) => {
        const result = await request.post(baseUrl, serviceData);
        //console.log(result);
        return result;
    };
    
    //  const addComments = async (serviceId, data) => {
    //     const result = await request.post(`${baseUrl}/${serviceId}/comments`, data);

    //    return result;
    // };

    const deleteService = async (serviceId)=> request.delete(`${baseUrl}/${serviceId}`);

    const edit = async (serviceId, data) => request.put(`${baseUrl}/${serviceId}`, data);
        


    return {
        getAll,
        getOne,
        create,
        //addComments,
        delete: deleteService,
        edit,
    }
}