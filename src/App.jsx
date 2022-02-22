import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={  <Home />} />
              <Route path="/news" element={  <News />} />
              <Route path="/form" element={  <Form/>} />
          </Routes>
        </Router>
        <Footer />
    </div>
    </GlobalProvider>
  )
}

export default App;
