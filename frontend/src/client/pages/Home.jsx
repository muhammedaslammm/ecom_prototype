import Banner from "../components/home/Banner";
import ImageCards from "../components/home/ImageCards";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-pattern"
      style={{ backgroundColor: "#e0e0e0" }}
    >
      <Banner />
      <ImageCards categoryID="68e0acabaf8a46edb6f645aa" />
    </div>
  );
};

export default Home;
