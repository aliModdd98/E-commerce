import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import OtherProduct from "../../components/OtherProduct/OtherProduct";
import Products from "../../components/Products/Products";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Hero />
      <Products />
      <OtherProduct />
    </div>
  );
};

export default LandingPage;
