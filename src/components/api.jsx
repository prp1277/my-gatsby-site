import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function API() {
  return (
    <div className="API">
      <div className="content">Some Content</div>
    </div>
  );
}

function GetData() {
  axios
    .get("/stock/market/batch?", {
      baseURL: `https://api.iextrading.com/1.0`,
      params: {
        symbols: `msft,goog,fb,amzn`,
        types: `quote`
      }
    })
    .then(res => {
      set.setState({ symbol: res.data });
    });
}

ReactDOM.render(<API />, document.querySelector("#root"));
