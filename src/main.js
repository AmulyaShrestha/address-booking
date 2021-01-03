import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import AddressStore from "./store/AddressStore";

const app = document.getElementById("app");

ReactDOM.render(<Home store={AddressStore}/>, app)
