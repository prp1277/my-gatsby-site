import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import API from "./components/api";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <API />
        <Footer />
      </div>
    );
  }
}

export default App;
