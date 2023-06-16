import { useState } from "react";
import { MainLayout } from "../../MainLayout";
import { Input } from "../../components";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    const product = {
      id: 1,
      name,
      price: +price,
    };

    setProducts((prev) => [...prev, product]);
  };

  return (
    <MainLayout>
      <h1>Products</h1>
      <Input value={name} onChange={setName}>
        Name
      </Input>
      <br />
      <Input type="number" value={price} onChange={setPrice}>
        Price
      </Input>
      <br />
      <button onClick={handleAddProduct}>Add</button>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}$</p>
          </div>
        );
      })}
    </MainLayout>
  );
};
