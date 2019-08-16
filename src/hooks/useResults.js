import { useEffect, useState } from "react";
import yelp from "../services/yelp";

export default function() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(searchTerm) {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'sao paulo'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err);
    }
  }

  useEffect(() => {
    handleSubmit("pasta");
  }, []);

  return [handleSubmit, results, errorMessage];
}
