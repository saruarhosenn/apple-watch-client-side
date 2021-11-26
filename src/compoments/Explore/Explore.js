import React, { useEffect, useState } from 'react';
import ExploreDetails from '../ExploreDetails/ExploreDetails';

const Explore = () => {
    const [explores, setExplores] = useState([])

    useEffect(() => {
        fetch('https://fierce-sierra-20822.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <>
        <br />
        <br />
            <h1 className="text-center">All Watch Collection</h1>
            <br />
            <br />
            <div className='product-area'>
                {
                    explores.map(explore => <ExploreDetails
                        key={explore.id}
                        explore={explore}
                    ></ExploreDetails>)
                }
            </div>
        </>
    );
};

export default Explore;