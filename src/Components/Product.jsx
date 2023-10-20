import Header from "./Header";
import swal from 'sweetalert'

const Product = () => {
    const handleuser = event =>{
        event.preventDefault()
        const form= event.target;
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value.toLowerCase()
        const type = form.type.value
        const price = form.price.value
        const short = form.short.value
        const rating = form.rating.value
        const user = {photo,name,brand,price,type,short,rating}
        console.log(user);
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                swal("Good job!", "succfully!", "success");
                form.reset()
            }
        })
    }
    return (
        <div>
          <Header></Header>

        <form onSubmit={handleuser}>
         <input type="text" name="photo" placeholder="Image" className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8" required/>

        <input type="text" name="name" placeholder="name" className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8" required/>

        <input type="text" name="brand" placeholder="Brand name" className="file-input file-input-bordered file-input-success w-full max-w-xs px-8" required/>
        <br />

         <input type="text" name="type" placeholder="Type" className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8" required/>

        <input type="text" name="price" placeholder="Price" className="file-input file-input-bordered file-input-success w-full max-w-xs m-6 px-8" required/>

        <input type="text" name="short" placeholder="Short" className="file-input file-input-bordered file-input-success w-full max-w-xs px-8" required/>
        <br />
        <input type="text" name="rating" placeholder="Rating" className="file-input file-input-bordered file-input-success w-full max-w-xs -mr-10 px-8" required/>   
        <br />
        <br />

        <input className="file-input bg-green-600 file-input-success w-full max-w-xs -mr-10 px-8" type="submit" value='button' />
            </form>

          </div>
     
    );
};

export default Product;