import { useEffect, useState } from "react";
import "./App.css";
import { getArticles } from "../../utils/getArticles";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getArticles("https://dev.to/api/articles?username=strawbang", setArticles);
  }, []);
  console.log(articles);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <h1>Articles</h1>
      </div>
    </div>
  );
}

export default App;
