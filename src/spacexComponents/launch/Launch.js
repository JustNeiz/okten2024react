import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    const {mission_patch_small} = launch.links;

    return (
        <div>
            <p>Mission name: {mission_name}</p>
              <p>Launch year: {launch_year}</p>
            <img src={mission_patch_small} alt="mission_patch"/>
        </div>
    );
};

export default Launch;