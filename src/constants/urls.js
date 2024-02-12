const baseURL = 'http://owu.linkpc.net/carsAPI/v1';
const url ={
    cars: {base: '/cars',
    byId: (id) => `/cars/${id}`}
}
export {baseURL, url}