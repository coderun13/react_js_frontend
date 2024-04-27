import Product from "./Product.jsx";

function ProductTab(){
    let features = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
    return (
    <>
    <Product title="phone" price={30000} features={features}/>
    <Product title="laptop"price={40000}/>
    <Product title="pen" price={1}/>
    </>
    );
}

export default ProductTab;