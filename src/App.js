import { Route, Routes } from 'react-router-dom';

// import AppBar from './components/AppBar';
import Container from './components/Container';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/TodosPage';

import './App.css';

const App = () => {
  return (
    <>
      <Container>
        {/* <AppBar /> */}
        <Routes>
          <Route path="/" exact>
            <TodosPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          {/* <Route>
            <NotFoundPage />
          </Route> */}
        </Routes>
      </Container>
    </>
  );
};

export default App;
