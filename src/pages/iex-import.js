import React from "react";
import Link from "gatsby-link";
import axios from "axios";

import { rhythm } from "../utils/typography";
import Container from "../components/container";
import Tickers from "..data/Ticker.json";

var Tickers = encodeURIComponent(JSON.stringify(Tickers));

var h = "GET https://api.iextrading.com/1.0/stock/market/batch?symbols="
var c = "&types=chart"

axios.get(h & Tickers & c)