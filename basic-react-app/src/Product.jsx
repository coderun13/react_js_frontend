import "./Product.css";

function Product({title, price,features}) {
    //const list = features.map((feature) => <li>{feature}</li>);
   // console.log(props.title);
   let styles = {backgroundColor: price>3000? "pink" :""};
   let isDiscount = price > 30000 ? "Discount of 5%" : "";
    return(
        <div className = "Product" style= {styles}>
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            <h5>Product Description</h5>
            <p>{isDiscount}</p>
            <p>{features}</p>
        </div>
    );
}

export default Product;