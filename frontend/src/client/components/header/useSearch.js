import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  let [query, setQuery] = useState("");
  let [loading, setLoading] = useState(false);
  let [open, setOpen] = useState(false);
  let [suggessions, setSuggessions] = useState([]);
  let debounce = useRef(null);
  let cacheRef = useRef(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    if (!query || query.trim().length < 2) {
      setLoading(false);
      setOpen(false);
      setSuggessions(false);
      return;
    }
    debounce.current = setTimeout(async () => {
      let newQuery = query.trim();
      setLoading(true);
      setOpen(true);
      try {
        let url = `${BACKEND_URL}/api/search/suggestions?query=${encodeURIComponent(
          query
        )}&limit=7`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response not Ok!");
        const data = await response.json();
        const items = data.result || [];

        console.log("items:", items);

        // cacheRef.current.set(newQuery, items);
        // setSuggessions(items);
      } catch (error) {
        console.error(error.message);
      }
    }, 300);
  }, [query]);

  return { query, setQuery, loading, setOpen, open };
};
