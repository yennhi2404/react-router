import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

function Products({ match, location }) {
  var products = [
    {
      id: 1,
      name: "Iphone X",
      slug: "iphone",
      price: 3500000,
    },
    {
      id: 2,
      name: "Samsung Galaxy S7",
      slug: "samsung",
      price: 12000000,
    },
    {
      id: 3,
      name: "OPPO F1s",
      slug: "oppo",
      price: 7000000,
    },
  ];

  var url = match.url;

  var result = products.map((product, index) => {
    return (
      <NavLink to={`${url}/${product.slug}`} key={index}>
        <li className="list-group-item">
          {product.id} - {product.name} - {product.price}
        </li>
      </NavLink>
    );
  });

  console.log("products", location);
  return (
    <div className="container">
      <div className="App">Danh sách sản phẩm</div>
      <div className="row">
        <ul className="list-group">{result}</ul>
      </div>
      <div className="row">
        <Route path="/products/:name" component={Product} />
      </div>
    </div>
  );
}

export default Products;
