import axios from "axios";
     
const jwtInterceptor = axios.create({});
 
jwtInterceptor.interceptors.response.use((config) => {
  console.log(config)
  console.log("token",localStorage.getItem("tokens"))
  let tokensData = JSON.parse(localStorage.getItem("tokens"));
  console.log("**************************",tokensData.access)
  config.headers.common["Authorization"] = `Bearer ${tokensData.access}`;
  return config;
});
 

export default jwtInterceptor;