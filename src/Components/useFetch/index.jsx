
const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${url()}${endpoint}`);
                if (response.success) {
                    setData(response.data);
                } else {
                    setError(response.response)
                }
            } catch (err) {
                setError('Error al cargar los datos.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};
