import React from 'react';
import Layout from "../layout/Layout";
import { store } from '../store';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<>ruta Home</>}/>
            <Route path='/recipes' element={<>ruta Detalle de receta</>}/>
            <Route path='/recipe-instruction' element={<>ruta Listado de Recetas</>}/>
          </Routes>
        </Layout>
      </BrowserRouter>


    </Provider>
  );
}

export default App;
