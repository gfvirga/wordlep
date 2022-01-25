import React, { } from 'react';
import LandingPage from './landingPage';
import '@react-page/editor/lib/index.css';
import { Container, Typography } from '@material-ui/core';


export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant='h3'>Wordle Probabilities</Typography><br/>
      <Typography variant='h5'>Enter favorite opening word:</Typography><br/>
      <LandingPage/>
    </Container>
  );
}