const request = async (method, url, data) => {
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

  
    const serializedAuth = localStorage.getItem('auth');

    if(serializedAuth) {
      const auth = JSON.parse(serializedAuth);// it's wrong JSON.stringify

      if(auth.accessToken) {
          options.headers = {
          ...options.headers, 
          'X-Authorization': auth.accessToken,
           };
        };
    }

  

  const response = await fetch(url, options);
  
  if(response.status === 204) {
    return {}; // s this chahge the above(bottom) or lower one
    }

    const result = await response.json();
     //console.log('result:',result)

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

export const requestFactory = () => {
  
  return {
    get : request.bind(null, "GET" ),
    post : request.bind(null, "POST"),
    put : request.bind(null, "PUT"),
    patch : request.bind(null, "PATCH"),
    delete : request.bind(null, "DELETE"),
  };

};
