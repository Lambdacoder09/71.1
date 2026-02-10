import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
      <Link 
        to="/"
        className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 inline-block font-semibold"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
