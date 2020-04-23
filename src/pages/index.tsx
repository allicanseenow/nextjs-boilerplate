import React from 'react';
import { NextPage } from 'next';
import { Sample } from '../features/components/Sample';

const Home: NextPage<any> = ({ userAgent }) => {

  return (
    <Sample userAgent={userAgent} />
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
