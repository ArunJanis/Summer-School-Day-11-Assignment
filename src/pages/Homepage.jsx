import { useState, useEffect } from "react";
import "./Homepage.css";

function Homepage() {
  const [symbol, setSymbol] = useState("AAPL");
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "ZBGRC17OQSZO2ZO3";

  useEffect(() => {
    fetchQuote(symbol);
  }, []);

  const fetchQuote = async (symbol) => {
    setLoading(true);
    setError("");
    setQuote(null);

    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
      );
      const data = await response.json();
      const result = data["Global Quote"];

      if (!result || Object.keys(result).length === 0) {
        setError("Symbol not found or limit exceeded.");
      } else {
        setQuote(result);
      }
    } catch (err) {
      setError("Error fetching data.");
    }

    setLoading(false);
  };

  const handleCheck = () => {
    if (symbol.trim() !== "") {
      fetchQuote(symbol.toUpperCase());
    }
  };

  return (
    <div className="stock-checker">
      <h2>Stock Price Checker</h2>
      <input
        type="text"
        placeholder="Enter stock symbol (e.g. AAPL, TSLA)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>

      {loading && <p className="fetching">Fetching...</p>}
      {error && <p className="error">{error}</p>}

      {quote && (
        <div className="quote-result">
          <strong>{quote["01. symbol"]}</strong><br />
          Price: ${quote["05. price"]}<br />
          Change:{" "}
          <span className={parseFloat(quote["09. change"]) >= 0 ? "green" : "red"}>
            {quote["09. change"]} ({quote["10. change percent"]})
          </span>
        </div>
      )}
    </div>
  );
}

export default Homepage;
