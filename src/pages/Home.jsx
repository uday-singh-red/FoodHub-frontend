import { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchingRef = useRef(false);
  const fetchedPages = useRef(new Set());

   console.log("Home Render");

  const getProducts = useCallback(async (pageToFetch) => {
    if (fetchingRef.current || !hasMore || fetchedPages.current.has(pageToFetch)) return;

    fetchingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/products/all-products?page=${pageToFetch}&limit=10`
      );
      const data = await res.json();

      if (data.success) {
        fetchedPages.current.add(pageToFetch);

        setProducts((prev) => {
          const map = new Map();
          [...prev, ...data.products].forEach((product) => {
            map.set(product._id, product);
          });
          return [...map.values()];
        });

        if (!data.products || data.products.length < 10) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, [hasMore]);

  useEffect(() => {
   console.log("Current page:", page);
    getProducts(page);
  }, [page, getProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (fetchingRef.current || loading || !hasMore) return;

      const scrollPos =
        window.innerHeight + document.documentElement.scrollTop;
      const threshold = document.documentElement.scrollHeight - 100;

      if (scrollPos >= threshold) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="w-full min-h-screen bg-[#FFF5F5] text-white p-2">
      <h1 className="text-1xl font-bold mb-10 text-black">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            _id={product._id}
            key={product._id}
            image={product.images?.[0]?.url}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      {loading && <p className="text-center text-black mt-4">Loading more products...</p>}
    </div>
  );
}