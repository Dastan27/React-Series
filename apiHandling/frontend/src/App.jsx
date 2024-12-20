import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log("Response ===> ", response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cnacelled :: ", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // cleanup
    return () => {
      controller.abort();
    };
  }, [search]);

  // if(error) {
  //   return <h2>Something went wrong</h2>
  // }

  // if(loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <>
      <h1>API Handling</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h2>Loading ...</h2>}
      {error && <h2>Something went wrong!</h2>}
      <h2>Number of Products: {products.length} </h2>
    </>
  );
}

export default App;
