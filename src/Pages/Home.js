import React from "react";
import Layout from './../componenets/layout/Layout';
import { Link } from "react-router-dom";
//import banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import banner from '../images/banner.jpeg'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Foods In Pakistan</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
