import { Link } from "react-router-dom";
import { MainLayout } from "../../MainLayout";

export const Contact = () => {
  return (
    <MainLayout>
      Contact
      <Link to={"/"}>Back</Link>
    </MainLayout>
  );
};
