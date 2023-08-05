import axios from '../axios'

export const signUp = async (data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post('customer', data)

            .then((res) => {
                return resolve(res)
            })
            // .catch((err) => {
            //     a
            //     return resolve(err)
            // })
    })
    return await promise;

}


export const login =async (data)=>{

    const promise =new Promise((resolve,reject) => {
        axios.post('auth/login',data)
            .then((res)=>{
            return resolve(res)
        })
            .catch((err)=>{
                return resolve(err)
        })

    });

return await promise;

}