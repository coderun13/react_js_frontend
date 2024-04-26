import "./Product.css";

function Product({title}){
   // console.log(props.title);
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>Product Description</h5>
        </div>
    );
}

export default Product;