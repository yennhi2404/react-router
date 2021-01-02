function Product({ match }) {
  var name = match.params.name;
  console.log(name);

  return <div className="App">Đây là chi tiết sản phẩm: {name}</div>;
}

export default Product;
