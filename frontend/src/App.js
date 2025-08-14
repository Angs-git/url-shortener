import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      setError("Failed to copy URL");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setShortUrl("");
    setCopySuccess(false);

    if (!longUrl.trim()) {
      setError("Please enter a URL");
      return;
    }

    if (!validateUrl(longUrl)) {
      setError("Please enter a valid URL including http:// or https://");
      return;
    }

    setIsLoading(true);
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
      const res = await axios.post(`${BACKEND_URL}/api/shorten/`, {
        url: longUrl,
      });
      setShortUrl(res.data.short_url);
      setSuccessMessage("URL shortened successfully!");
      setLongUrl(""); // Clear the input
    } catch (err) {
      setError(
        err.response?.data?.error ||
        "An error occurred while shortening the URL. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">URL Shortener</h1>

      <form onSubmit={handleSubmit} className="url-form">
        <input
          type="url"
          placeholder="Enter your long URL here (e.g., https://example.com)"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="url-input"
          required
        />
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
        >
          {isLoading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      {shortUrl && (
        <div className="result-container">
          <h3>Your Shortened URL:</h3>
          <div className="url-display">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="short-url-link"
            >
              {shortUrl}
            </a>
            <button
              className={`copy-button ${copySuccess ? "copied" : ""}`}
              onClick={handleCopy}
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


