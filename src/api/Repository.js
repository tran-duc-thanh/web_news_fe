import axios from "axios"

const baseDomain = "http://localhost:8082"
const baseUrl = `${baseDomain}/api`

export default axios.create({
    baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Hearders": "Content-Type, X-Auth-Token, Origin, Authorization"
    }
})