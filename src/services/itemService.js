import axios from '../axios'


   export const addItem = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('item', data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }

    export  const putProduct = async (id,data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('products/'+id,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }


    export const deleteProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('products/'+data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }

export const fetchAllItems = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('item')
                .then((res) => {
                    return resolve(res.data)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }

  export const  fetchAllProductsCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }

   export const fetchASingleProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/'+data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }

   export const fetchAllProductsLimit = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products',{params:params})

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;

    }



