import React, { useEffect, useState } from 'react';
import ManageProductsDetail from '../ManageProductsDetail/ManageProductsDetail';

const ManageProducts = () => {
    const [explores, setExplores] = useState([])

    useEffect(() => {
        fetch('https://fierce-sierra-20822.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <>
            <h1>More Watch Collection</h1>
            <div className='product-area'>
                {
                    explores.map(explore => <ManageProductsDetail
                        key={explore.id}
                        explore={explore}
                    ></ManageProductsDetail>)
                }
            </div>
        </>
    );
};

export default ManageProducts;
