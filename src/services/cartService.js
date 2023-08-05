import axios from "../axios"

export const checkout = async (data) => {
    
    const promise = new Promise((resolve, reject) => {
        axios.post('sales', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
    })
    return await promise;

}