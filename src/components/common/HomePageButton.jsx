import { Link } from "react-router-dom";

const HomepageButton = () => {
  return (
    <Link
      to="/"
      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 font-semibold"
    >
      Homepage
    </Link>
  );
};

export default HomepageButton;
