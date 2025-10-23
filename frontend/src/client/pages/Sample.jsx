import { useEffect, useRef, useState } from "react";

const Sample = () => {
  const [products, setProducts] = useState([]);
  let [totalProducts, setTotalProducts] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);
  let [query, setQuery] = useState("");
  let queryRef = useRef(null);
  useEffect(() => {
    let getProducts = async () => {
      try {
        let response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/sample-products?query=${query}&current_page=${currentPage}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        let result = await response.json();
        if (!response.ok) throw new Error(result.message);

        setProducts(result.products);
        setTotalPages(result.totalPages);
        setTotalProducts(result.totalProducts);
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    getProducts();
  }, [currentPage, query]);

  const handlePage = (action) => {
    switch (action) {
      case "up":
        return setCurrentPage((prev) => {
          if (prev < totalPages) {
            return prev + 1;
          }
          return prev;
        });

      case "down":
        return setCurrentPage((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
          return prev;
        });
      default:
        break;
    }
  };

  const submitQuery = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setQuery(queryRef.current.value);
  };

  return (
    <section className="w-[95%] mx-auto py-6 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[1.6rem] font-medium capitalize">
            sample product load
          </h1>
          <div>
            <div>Total Products: {totalProducts}</div>
            <div>
              Page: {currentPage} / {totalPages}
            </div>
          </div>
        </div>
        <form onSubmit={submitQuery}>
          <input
            ref={queryRef}
            type="search"
            className="border border-neutral-400 p-4 text-[1.6rem] w-[50rem] bg-white"
            placeholder="Search Products ..."
          />
        </form>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div className="border border-gray-400 rounded-[.5rem] bg-white">
            <img
              src={`http://localhost:4000${product?.images[0]}`}
              className="h-[20rem] p-4 object-contain"
            />
            <div className="p-4 text-[1.6rem] font-medium text-center">
              {product?.title}
            </div>
          </div>
        ))}
      </div>
      <div className="py-8 flex justify-center gap-8 ">
        <div
          className="cursor-pointer hover:underline"
          onClick={() => handlePage("down")}
        >
          prev
        </div>
        <div>{currentPage}</div>
        <div
          className="cursor-pointer hover:underline"
          onClick={() => handlePage("up")}
        >
          next
        </div>
      </div>
    </section>
  );
};
export default Sample;
