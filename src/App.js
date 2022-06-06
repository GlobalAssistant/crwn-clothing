import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>Hello Nested Routes</h1>
}

const App = () => {
  return (
    <Routes>
      {/* persistant navigation bar */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* Nested routes */}
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />

      </Route>
    </Routes>
  );
}

export default App;