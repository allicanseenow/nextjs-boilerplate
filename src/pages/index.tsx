import React from 'react';
import { NextPage } from 'next';
import { Button } from '@material-ui/core';

const Home: NextPage<any> = ({ userAgent }) => {
  return (
    <>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <Button variant="contained" color="primary">
        Material UI button
      </Button>
    </>
  );
}

Home.getInitialProps = async ({ req }) => {
  const b = 10;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home;
