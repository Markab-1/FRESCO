
import {Route, Routes} from 'react-router-dom';

import Layout from './Layout/Layout';
import HomeDescription from './HomeDescription/HomeDescription';
import Survey from './Survey/Survey';
import Team from './Team/Team';
import Products from './Products/Products';

export const App = () => {
  return (

<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<HomeDescription/>}/>
    <Route path="survey" element={<Survey/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="products" element={<Products/>}/>
  </Route>
</Routes>

  );
};
