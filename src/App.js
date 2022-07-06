import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';
import { onAuthStateChangedListener, signOutUser, createUserDocumentsFromAuth } from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
        const unsubscribe = onAuthStateChangedListener ((user) => {
            if (user) {
                createUserDocumentsFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }
    fetchData();
  }, [dispatch]);

  return (
    <Routes>
      {/* persistant navigation bar */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* Nested routes */}
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;