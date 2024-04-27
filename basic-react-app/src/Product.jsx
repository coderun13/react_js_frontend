import "./Product.css";

function Product({title, price,features}) {
    //const list = features.map((feature) => <li>{feature}</li>);
   // console.log(props.title);
   if(price>=30000){
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <h5>Product Description</h5>
            <p>Discount of 5%</p>
            <p>{features}</p>
        </div>
    );
}else{
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <h5>Product Description</h5>
            <p>{features}</p>
        </div>
    );
}
}

export default Product;