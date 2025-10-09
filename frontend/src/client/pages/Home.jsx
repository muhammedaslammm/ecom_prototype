import Banner from "../components/home/Banner";
import ImageCards from "../components/home/ImageCards";
import { NormalCards } from "../components/home/NormalCards";

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      <Banner />
      <ImageCards
        categoryID="68e0acabaf8a46edb6f645aa"
        title="Best Deals - Refridgerator"
        description="Grab the best deals in refrigerators right now!"
      />
      <NormalCards
        categoryID="68e0ab97af8a46edb6f64564"
        title="Best Deals - Washing Machines"
      />
    </div>
  );
};

export default Home;
