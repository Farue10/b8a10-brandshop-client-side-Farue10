import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import swal from 'sweetalert'

const Update = () => {
  const loder = useLoaderData();
  const { image, name, brand, type, short, price, rating,_id } = loder;

  const handleupdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const short = form.short.value;
    const rating = form.rating.value;
    const user = { photo, name, brand, price, type, short, rating };
    console.log('newwwwwwwwww',user);
    fetch(`http://localhost:5000/updateed/${_id} `, {
        method: 'PUT',
        headers: {
            'content-type':'application/json'

        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
          
            if (data.modifiedCount > 0) {
                swal("Good job!", "You clicked the button!", "success")
            }
          

        })

  };
  return (
    <div>
        <Header></Header>
      <form onSubmit={handleupdate}>
        <input
          type="text"
          name="photo"
          placeholder="Image"
          defaultValue={image}
          className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
          className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8"
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand name"
          defaultValue={brand}
          className="file-input file-input-bordered file-input-success w-full max-w-xs px-8"
          required
        />
        <br />

        <input
          type="text"
          name="type"
          placeholder="Type"
          defaultValue={type}
          className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8"
          required
        />

        <input
          type="text"
          name="price"
          placeholder="Price"
          defaultValue={price}
          className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8"
          required
        />

        <input
          type="text"
          name="short"
          placeholder="Short"
          defaultValue={short}
          className="file-input file-input-bordered file-input-success w-full max-w-xs px-8"
          required
        />
        <br />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          defaultValue={rating}
          className="file-input file-input-bordered file-input-success w-full max-w-xs -mr-10 px-8"
          required
        />
        <br />
        <br />

        <input
          className="file-input bg-green-600 file-input-success w-full max-w-xs -mr-10 px-8"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
