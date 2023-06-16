import { Link } from "react-router-dom";
import { MainLayout } from "../../MainLayout";

export const About = () => {
  return (
    <MainLayout>
      About
      <Link to={"/"}>Back</Link>
    </MainLayout>
  );
};
