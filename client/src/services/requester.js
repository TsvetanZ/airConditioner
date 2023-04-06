const request = async (method, token, url, data) => {
  const options = {};

  if (method !== "GET") {
    options.method = method;

    if (data) {
      options.headers = {
        "content-type": "application/json",
      };
      options.body = JSON.stringify(data);
    };
  };

  if(token ) {
    options.headers = {
      ...options.headers, 
      'X-Authorization': token,
    };
  };

  const response = await fetch(url, options);
  

  if(response.status === 204) {
    return {}; // s this chahge the above(bottom) or lower one
    }

    const result = await response.json();
     console.log('result:',result)

    if (!response.ok) {
      throw result;
    }

    return result;

   

//     try {
//       const result = await response.json();

//       return result;
//     } catch (err) {

//         // use for create service
//       return {};
//   }
};


export const requestFactory = (token) => {
  return {
    get : request.bind(null, "GET", token),
    post : request.bind(null, "POST", token),
    put : request.bind(null, "PUT", token),
    patch : request.bind(null, "PATCH", token),
    delete : request.bind(null, "DELETE", token),
  };

};
