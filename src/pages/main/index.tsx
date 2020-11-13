import React, { useEffect, useState} from "react";
import api from "../../services/api";
import "./styles.css";


interface IProduct {
  id: string,
  name: string,
  description: string,
  price: string,
  category: string,  
}

const Product: React.FC = () => {
 const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const productList = await api.get('/products');
      setProducts(productList.data);
    }
    loadProducts();
  }, []);

  // async function addNewProducts() {
  //   const newProduct = await api.post("/products");
  //   // TODO
  // };

  // async function updateProducts() {
  //   const product = await api.put("/products");
  //   //TODO - To update a product, I need to pass the product id
  // };

  // async function deleteProducts(){
  //   const product = await api.delete("/products");
  //   //TODO - To delete a product, I need to pass the product id
  // }

  return( 
    <> 
      <ul>  
        {products.map(product =>(
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>   
  );




    // return(
    //   <Form onSubmit={handleSubmit}>
    //     <Input name="name" label="Product name" />
    //     <Input name="description" label="Describe yor product" type="description"/>
    //     <Input name="price" label="Product price" />
    //     <Input name="category" label="Product category" />
    //   </Form>
    // );
            
    
    
}

export default Product;