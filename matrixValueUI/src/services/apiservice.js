import axios from "axios";

const API = "http://localhost:5000/api/contact";

export const saveContact = (data) => {

    return axios.post(API, data);

}