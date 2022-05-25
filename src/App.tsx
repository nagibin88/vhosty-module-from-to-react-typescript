import React from "react";

import "antd/dist/antd.css";
import "./assets/sass/style.sass";

import {Points, MapWrapper} from "./components/";

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Points />

            <MapWrapper />
        </div>
    );
};

export default App;
