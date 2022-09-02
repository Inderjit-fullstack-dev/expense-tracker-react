import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import App from "./App";
import TranasctionPage from "./pages/TransactionPage";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Container className="mt-3">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/transactions" element={<App />} />
          <Route path="/add/transaction" element={<TranasctionPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </Provider>
);
