import axios from "axios";
import React, { useEffect, useState } from "react";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/service");
      setServices(res.data);
    })();
  }, []);
  return <div>Services</div>;
};

export default Services;
