import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestRoute from "./pages/TestRoute";
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='TestRoute' element={<TestRoute/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;

