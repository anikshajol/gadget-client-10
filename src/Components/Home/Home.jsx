import Header from "../Header/Header";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import "./Home.css";

import { useLoaderData } from "react-router-dom";
import { useTheme } from "../../AuthProvider/ThemeProvider";

const Home = () => {
  const { theme } = useTheme();
  console.log(theme);
  //   const [brands, setBrands] = useState([]);
  //   useEffect(() => {
  //     fetch("/data.json")
  //       .then((res) => res.json())
  //       .then((data) => setBrands(data));
  //   }, []);

  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div>
      <Header></Header>
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loadedData.map((brands) => (
          <Brand key={brands._id} brands={brands}></Brand>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
