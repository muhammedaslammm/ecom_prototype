import Banner from "../components/home/Banner";
import ImageCards from "../components/home/ImageCards";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-pattern"
      style={{ backgroundColor: "#e0e0e0" }}
    >
      <Banner />
      <ImageCards
        categoryID="68e0acabaf8a46edb6f645aa"
        title="Best Deals - Refridgerator"
        description="Grab the best deals in refrigerators right now!"
      />
      <ImageCards
        categoryID="68e0ab97af8a46edb6f64564"
        title="Best Deals - Washing Machine"
        description="Grab the best deals in washing machines right now!"
      />
    </div>
  );
};

export default Home;
