import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:3000/pub";
const BASE_API = axios.create({
  baseURL: BASE_URL,
});

const CardDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data } = await BASE_API.get(`/finder/${id}`);
        // console.log(data.data.Packages);
        const packages = data.data.Packages;
        setPackages(packages);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p>LOADING~</p>;
  if (error) return <p>Error Fetching Data .... </p>;

  return (
    <>
      <div className="flex flex-wrap justify-center mt-16">
        {packages.map((data) => (
          <div
            key={data.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-3 transform hover:scale-105 transition-transform"
          >
            <div className="aspect-w-1 aspect-h-1">
              <div>
                <img
                  className="object-cover object-center w-full h-full "
                  src={data.imageURL}
                  alt={data.name}
                />
              </div>
              <div className="px-6 py-4">
                <p className="font-bold text-center mb-2">{data.name}</p>
                <p className="font-bold text-center mb-2">${data.price}</p>
                <p className="font-bold text-center mb-2">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardDetail;
