const baseURL = 'https://api.spacexdata.com/v3/launches';
const launch = {
    getExclude2020: '?launch_year<2020&launch_year>2020',
    getBase: '/'
}
export {baseURL, launch}