import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const resProducts = await response.json();

        if (resProducts && resProducts.products) {
          console.log(resProducts);
          setProducts(resProducts.products);
          setTotalPages(Math.ceil(resProducts.total / 10));
        } else {
          setProducts([]);
          setTotalPages(0);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    }
    fetchApi();
  }, [page]);

  const handleBackward = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleForward = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const selectPageHandler = (i) => {
    setPage(i + 1);
  };

  return (
    <>
      <h1>Product List</h1>
      {products.length > 0 ? (
        <div className="products">
          {products.map((product) => (
            <span className="products__single" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </span>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
      <div className="pagination_container">
        {totalPages > 0 && (
          <div className="pagination">
            <span className="pagination_button" onClick={handleBackward}>
              ⏮
            </span>
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                onClick={() => selectPageHandler(i)}
                className={`pagination_number ${
                  i + 1 === page ? "active" : ""
                }`}
              >
                {i + 1}
              </span>
            ))}
            <span className="pagination_button" onClick={handleForward}>
              ⏩
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
