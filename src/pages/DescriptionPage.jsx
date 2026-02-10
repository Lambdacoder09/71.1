import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import DescCard from "./DescCard";
import HomepageButton from "./Homepage";

function DescPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Scroll to top when the component mounts or id changes
    window.scrollTo(0, 0);

    setLoading(true); // Set loading to true when a new product is being fetched
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (error || !product)
    return (
      <div className="text-red-500 text-center text-2xl font-bold my-10">
        Product Not Found
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="my-4">
        <HomepageButton />
      </div>
      <DescCard product={product} />
    </div>
  );
}

export default DescPage;
