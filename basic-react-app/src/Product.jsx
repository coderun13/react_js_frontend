import "./Product.css";

function Product({title, price,features}){
   // console.log(props.title);
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <h5>Product Description</h5>
            <p>{features}</p>
        </div>
    );
}

export default Product;