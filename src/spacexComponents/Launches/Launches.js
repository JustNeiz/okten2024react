import React, {useEffect, useState} from 'react';
import {exclude2020, launchServices} from "../../spacexServices/launchServices";
import Launch from "../launch/Launch";

const Launches = () => {


    const [launches ,  setLaunches ] = useState([]);
    useEffect(() => {
        launchServices.getBase().then(({data})=> {
            const filteredData = data.filter(elem => elem.launch_year!=='2020')
            setLaunches(filteredData)
        });

    }, []);

    return (
        <div>
            {
                launches.map((launch)=><Launch launch={launch} key={launch.flight_number}/>)
            }
        </div>
    );
};

export default Launches;