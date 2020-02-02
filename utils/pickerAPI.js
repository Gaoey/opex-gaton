import axios from "axios";
import { path, v1 } from './api'

export const getTitle = () => axios({
  method: "get",
  url: `${path}/${v1}/titles`,
})

export const getStorageType = () => axios({
  method: "get",
  url: `${path}/${v1}/storage-type`,
})

export const fetchProductCategory = () => axios({
  method: "get",
  url: `${path}/${v1}/product-category`,
})

export const getProductCategory = async (id) => {
  const response = await fetchProductCategory()
  const category = response.data.data
  const result = category.filter(v => v.code === id)[0].name
  return result
}

export const getShippingCompany = () => axios({
  method: "get",
  url: `${path}/${v1}/shipping-company/code-name`,
})


export const getCompanyService = (id) => axios({
  method: "get",
  url: `${path}/${v1}/shipping-company/code-name/${id}`,
})
