import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products); // ปกติเป็น response.data แต่มันมี 2 ชั้น เลยต้องเข้าไปที่ products
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="root">
      <h1 style={{ color: "white", paddingBottom: "15px", fontSize: "100px" }}>ThumDD Shop</h1>
      <p style={{ color: "white", paddingBottom: "5px" }}>Selected Product Type</p>

      <select onChange={handleFilterChange} value={selectedCategory} style={{ marginBottom: "20px" }}>
        <option value="">Select a product</option>
        {uniqueCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <a href="/src/index.html" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              borderRadius: "8px",
              backgroundColor: "#cdb4db",
              color: "#4a4a4a",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e0bbef")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#cdb4db")}
          >
            Summary Data
          </button>
        </a>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <p>Rating {product.rating}</p>
            <img width="200px" height="200px" src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <h3 style={{ color: "Blue", paddingTop: "5px" }}>Price {product.price} baht</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
