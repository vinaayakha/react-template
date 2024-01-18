import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import ImageGallery from "../components/gallery";
import { supabase } from "../supabase";
import { fetchImages } from "../utils/constants";

export default function Index() {
  // const [session, setSession] = useState(null);
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const {data: { subscription }} = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

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
  const [options, setOptions] = useState({});

  useEffect(() => {
    console.log({ result, loading });
  }, [result, loading]);

  return (
    <>
      <h4>Moonshot</h4>
      <div className="query-box">
        <div class="inputGroup">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
          />
        </div>
        <button
          onClick={(e) => {
            fetchImage();
          }}
        >
          Search
        </button>
      </div>
      <ImageGallery result={result} />
    </>
  );
}
