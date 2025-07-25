import { useState } from "react";
import AdminElseBlock from "../../components/AdminElseBlock";

const Products = () => {
  const [products, setProducts] = useState([]);
  return (
    <section className="a-section--container">
      <div>
        {products.length ? (
          <></>
        ) : (
          <AdminElseBlock
            title={"Add the first product"}
            section_note={
              "Start adding your products in the application for you customers to access."
            }
            path={"product-management"}
            button_text={"add product"}
          />
        )}{" "}
      </div>
    </section>
  );
};

export default Products;
