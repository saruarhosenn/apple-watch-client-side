import React from 'react';
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('kulu', data);
        console.log(JSON.stringify(data))
        fetch("https://fierce-sierra-20822.herokuapp.com/services", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })

    };
    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6  add-user-area">
                        <h2>Add Travel Place</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="w-75 mx-auto form-control" placeholder="Title" {...register("title")} />
                            <textarea className="w-75 mx-auto form-control" placeholder="Description" {...register("dec")} />
                            <input className="w-75 mx-auto form-control" placeholder="Image URL" {...register("img")} />
                            <input className="w-75 mx-auto form-control" placeholder="price" {...register("price")} />
                            {/* <input placeholder="Location" {...register("location")} /> */}
                            <input className="w-75 mx-auto form-control" placeholder="country" {...register("country")} />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="btn btn-primary" type="submit" />

                        </form>
                    </div>

                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;
