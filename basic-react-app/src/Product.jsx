import "./Product.css";

function Product({title, price,features}){
    //const list = features.map((feature) => <li>{feature}</li>);
   // console.log(props.title);
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <h5>Product Description</h5>
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
        </div>
    );
}

export default Product;