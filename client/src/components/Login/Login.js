import React, { useState, useEffect } from "react";
import Axios from "axios";

import "./login.css";

const Login = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{data}</div>;
};

export default Login;
