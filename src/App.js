import { Route, Routes } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import TodoListView from './views/TodoListView';
import NotFoundView from './views/NotFoundView';

import './App.css';

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/todos">
            <TodoListView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
