import { Link } from "react-router-dom";
import { MainLayout } from "../../MainLayout";

export const Cart = () => {
  return (
    <MainLayout>
      Cart
      <Link to={"/"}>Back</Link>
    </MainLayout>
  );
};
