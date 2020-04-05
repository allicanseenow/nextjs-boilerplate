import React from 'react';
import { NextPage } from 'next';

const Home: NextPage<any> = ({ userAgent }) => {
  return <h1>Hello world! - user agent: {userAgent}</h1>;
}

Home.getInitialProps = async ({ req }) => {
  const b = 10;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
