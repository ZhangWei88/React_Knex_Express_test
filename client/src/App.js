import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ArticleList from "./Components/ArticleList/ArticleList";
import EditArticle from "./Components/EditArticle/EditArticle";
import ViewArticle from "./Components/ViewArticle/ViewArticle";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route
              exact
              path="*"
              element={<Navigate to="/articles" replace />}
            ></Route>
            <Route exact path="/articles" element={<ArticleList />}></Route>
            <Route exact path="/articles/:id" element={<ViewArticle />}></Route>
            <Route exact path="/create" element={<EditArticle />}></Route>
            <Route
              exact
              path="/articles/:id/edit"
              element={<EditArticle />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
