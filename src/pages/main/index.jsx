import React, { Component} from "react";
import Button from "../../components/Button";
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
  };

  addNewProducts = async () => {
    const newProduct = await api.post("/products");
    // TODO
  };

  updateProducts = async () => {
    const response = await api.put("/products");
    //TODO - To update a product, I need to pass the product id
  };

  deleteProducts = async () => {
    const response = await api.delete("/products");
    //TODO - To delete a product, I need to pass the product id
  };


    render() {
      const {products} = this.state;
      return(        
        <div className="product-list">
          <input type="text" placeholder="Search"/>                   
          {products.map((product) => 
            <article key={product.id}>
              <strong>Nome: {product.name}</strong>
              <p>Descrição: {product.description}</p>
              <p>Preço: R${product.price}</p>
              <Button class="warn">
                Editar
              </Button>
              <Button class="danger">
                Apagar
              </Button>
            </article>
          )}
        </div>
      );
    }
}