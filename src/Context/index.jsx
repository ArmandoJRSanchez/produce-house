import { createContext, useState, useEffect } from "react";
import axios from "axios";
import LayoutError from "../Components/Error";
import LayoutLoading from "../Components/LayoutLoading";

// Crear el contexto
export const ShopingCartContext = createContext();



export const ShopingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  var localhostUrl = "http://localhost:8080/produce-house"
  const [urlHost, setUrlHost] = useState(localhostUrl);

  // Definir la URL base dependiendo del entorno
  const url = () => {
    const localhost = window.location.hostname.includes("localhost");

    return localhost
      ? urlHost + "/api/index.php"
      : "./api/index.php";

  };

  // Estado para controlar la apertura del detalle del carrito
  const [isCartDetailOpen, setIsCartDetailOpen] = useState(false);
  const openCartDetail = () => setIsCartDetailOpen(true);
  const closeCartDetail = () => setIsCartDetailOpen(false);

  // Producto a mostrar en el detalle
  const [productToShow, setProductToShow] = useState({});

  // Carrito de compras (productos)
  const [cartProduct, setCartProduct] = useState([]);

  // Productos y categorías cargados desde la API
  const [products, setProducts] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [category, setCategory] = useState([]);



  // Estado para manejar la carga y errores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Llamada a la API para obtener productos y categorías
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productsResponse = await axios.get(`${url()}?data=productos`);
        const categoriesResponse = await axios.get(`${url()}?data=categorias`);


        // Actualizar los estados con la data de la API
        if (productsResponse.data.success) {
          setProducts(productsResponse.data.data)
          setCatalog(productsResponse.data.data)
        } else {
          setError(productsResponse.data.response)
        }
        if (categoriesResponse.data.success) {
          setCategory(categoriesResponse.data.data)
        } else {
          setError(categoriesResponse.data.response)
        }
      } catch (err) {
        setError("Error al cargar los productos y categorías.")
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) return <LayoutLoading />;
  if (error) return <LayoutError errorCode="404" message="Forbidden" redirectPath="/" />;

  return (
    <ShopingCartContext.Provider
      value={{
        count,
        setCount,
        openCartDetail,
        closeCartDetail,
        isCartDetailOpen,
        productToShow,
        setProductToShow,
        cartProduct,
        setCartProduct,
        products,
        setProducts,
        catalog,
        setCatalog,
        category,
        setCategory,
        urlHost
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
};
