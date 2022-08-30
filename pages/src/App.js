import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsRepl from './components/NewsRepl';

import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const apiKey = process.env.REACT_APP_MY_API_KEY2;

  const [language, setLanguage] = useState('hi');
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar setLang={setLanguage} />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            key="top"
            path="/"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="top"
                language={language}
              />
            }
          />
          <Route
            key="business"
            path="/business"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="business"
                language={language}
              />
            }
          />
          <Route
            key="entertainment"
            path="entertainment"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="entertainment"
                language={language}
              />
            }
          />
          <Route
            key="environment"
            path="environment"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="environment"
                language={language}
              />
            }
          />
          <Route
            key="food"
            path="/food"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="food"
                language={language}
              />
            }
          />
          <Route
            key="health"
            path="/health"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="health"
                language={language}
              />
            }
          />
          <Route
            key="politics"
            path="/politics"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="politics"
                language={language}
              />
            }
          />
          <Route
            key="science"
            path="/science"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="science"
                language={language}
              />
            }
          />
          <Route
            key="sports"
            path="/sports"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="sports"
                language={language}
              />
            }
          />
          <Route
            key="technology"
            path="/technology"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="technology"
                language={language}
              />
            }
          />
          <Route
            key="world"
            path="/world"
            element={
              <NewsRepl
                apiKey={apiKey}
                setProgress={setProgress}
                category="world"
                language={language}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
