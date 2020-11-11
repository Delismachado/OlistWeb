import React, { Component} from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
  state = {
    products:[]
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");
    this.setState({products: response.data});
  }

    render() {
      const {products} = this.state;
      return(
        <div className="product-list">
          {products.map((product) => 
            <article key={product.id}>
              <strong>Nome: {product.name}</strong>
              <p>Descrição: {product.description}</p>
              <p>Preço: R${product.price}</p>
            </article>
          )}
        </div>
      );
    }
}