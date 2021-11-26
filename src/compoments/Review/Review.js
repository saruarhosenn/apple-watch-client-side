

import { useForm } from "react-hook-form";
const Review = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();






    const onSubmit = data => {
        fetch("https://fierce-sierra-20822.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review successfully');
                    reset()
                }
            })

        console.log(data)

    };
    return (
        <div>
            <br />
            <form className="booking" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-75 mx-auto form-control mb-4" type="text" placeholder="name"  {...register("name")} />
                <input className="w-75 mx-auto form-control mb-4" type="text" placeholder="Review"  {...register("review")} />
                <input className="w-75 mx-auto form-control mb-4" type="number" placeholder="rating (0-5)"  {...register("rating")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-primary" type="submit" />
            </form>

        </div>
    );
};

export default Review;