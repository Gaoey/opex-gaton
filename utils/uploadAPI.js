import axios from "axios";
import uuid from 'uuid/v4';
import { path, v1 } from './api';

const createFormData = (files, body = {}) => {
  const data = new FormData();
  files.forEach(file => {
    data.append("files", {
      name: uuid(),
      type: 'image/jpeg',
      uri: file
    });
    return data
  })
  return data;
};


const uploadImage = (data) => axios({
  method: "post",
  url: `${path}/${v1}/upload`,
  header: {
    'content-type': 'multipart/form-data'
  },
  data: createFormData(data)
}).catch(error=>{
  console.log(error.response.data)
})

export default uploadImage