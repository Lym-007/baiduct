import API from "../api"
import "whatwg-fetch"

export default function getList(){
    return fetch(API.LIST_API)
    .then((response)=>{
            return response.json();
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
}