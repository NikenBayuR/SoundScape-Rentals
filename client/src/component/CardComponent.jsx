import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000/pub";
const BASE_API = axios.create({
  baseURL: BASE_URL,
});

const CardsPackages = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data } = await BASE_API.get("/finder");
        const category = data.data;
        console.log(category);
        setCategory(category);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

    const onClickHandler = (id) => {
      navigate(`/packagesDetails/${id}`);
    };

  if (loading) return <p>LOADING~</p>;
  if (error) return <p>Error Fetching Pet Product .... </p>;

  return (
    <>
     <div className="flex flex-wrap justify-center mt-16">
      {category.map((data) => (
        <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg m-3 transform hover:scale-105 transition-transform">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src={data.imageURL}
              alt={data.name}
            />
          </div>
          <div className="px-6 py-4">
            <p className="font-bold text-center mb-2">{data.name}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
          <button
                type="button"
                onClick={() => onClickHandler(data.id)}
                className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Show Detail
              </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
};

export default CardsPackages;
