import React from "react";
import Banner from "../components/Banner";
import Books from "./Books";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      <Helmet>
        <title>Boi Poka | Home</title>
      </Helmet>
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;
