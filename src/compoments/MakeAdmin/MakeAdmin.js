import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const email = data.email;

        const url = `https://fierce-sierra-20822.herokuapp.com/admin?email=${email}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire("Admin Added Successfully");
                    reset();
                }
                else if (data.acknowledged === true && data.modifiedCount === 0) {
                    Swal.fire("Admin already exist");

                }
            })

        console.log(data)

    };



    return (
        <div>
            <form className="booking" onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input type="email" className="w-75 mx-auto form-control" placeholder="email"  {...register("email")} />

                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;