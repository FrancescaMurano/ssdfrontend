import axios from "axios";
     
const jwtInterceptor = axios.create({});
 
jwtInterceptor.interceptors.request.use((config) => {
  let tokensData = JSON.parse(localStorage.getItem("tokens"));
  
  if(tokensData){
    config.headers["Authorization"] = `Bearer ${tokensData.access}`;
  }
  return config;
});
 
jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    
    if (error.response.status === 400 || error.response.status === 401) {
      const authData = JSON.parse(localStorage.getItem("tokens"));
      
      const payload = {
        refresh: authData.refresh,
      };
 
      const url = "https://ssd.pingflood.tk/api/v1/token/refresh/";

      let apiResponse = await axios.post(
       url,
        payload
      );

      authData.access = apiResponse.data.access
      localStorage.setItem("tokens", JSON.stringify(authData));
      
      error.config.headers[
        "Authorization"
      ] = `Bearer ${apiResponse.data.access}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);
export default jwtInterceptor;