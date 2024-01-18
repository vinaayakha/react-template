export default function Index() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchImage = async () => {
    try {
      setLoading(true);
      const response = await fetchImages(query, options);
      const resp = await response.json();
      // console.log({ hits: resp.hits });
      setResult(resp.hits);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const [query, setQuery] = useState("");
  const [options, setOptions] = useState({ page: 1, per_page: 30 });

  useEffect(() => {}, [result, loading]);

  return (
    <>
      Index
    </>
  );
}
