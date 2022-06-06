import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

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
        <Route path='signIn' element={<SignIn />} />

      </Route>
    </Routes>
  );
}

export default App;