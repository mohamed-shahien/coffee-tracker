import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Hearo from "./components/Hearo";
import CoffeeForm from "./components/CoffeeForm";
import History from "./components/History";
import Status from "./components/Stats";

function App() {
  const isAuthenticated = true;
  const authenticatedContent = (
    <>
      <Status />
      <History />
    </>
  );
  return (
    <Layout>
      <Hearo />
      <CoffeeForm></CoffeeForm>
      {isAuthenticated && (authenticatedContent)}

    </Layout>
  );
}

export default App;
