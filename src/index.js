import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router, 
  Route,
  Routes } from 'react-router-dom';
import './index.css';
/**Import Components */
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
/**Import Pages */
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Freelances from './pages/Freelances/Freelances';
import Results from './pages/Results/Results';
/** Import Context */
import { SurveyProvider, ThemeProvider } from './utils/context/context';
import GlobalStyle from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
        <GlobalStyle />
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/survey" element={<Survey />} />
            <Route path="/survey/:questionNumber" element={<Survey />}/>
            <Route path="/freelances" element={<Freelances />}/>
            <Route path="/results" element={<Results />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);