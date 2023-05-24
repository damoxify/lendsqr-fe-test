import { Route, Routes } from 'react-router-dom';
import { Login, SharedLayout, UsersPage, UserDetails } from './components';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

