import { useParams, useSearchParams } from "react-router-dom";

export const Product = () => {
  const id = useParams();
  const [searchParams] = useSearchParams();

  const params: any = [];

  searchParams.forEach((value, key) => {
    params.push({ [key]: value });
  });

  console.log("id", id);

  return <div>Product</div>;
};
