import React, { } from 'react';
import LandingPage from '../components/landingPage';
import '@react-page/editor/lib/index.css';
import { Container, Typography, Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';


export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant='h3'>Wordle Probabilities</Typography><br/>
      <Typography variant='h5'>Enter your favorite opening word:</Typography><br/>
      <LandingPage/>
      <Link href='https://github.com/gfvirga/wordlep' target={"_blank"}><GitHub/>@gfvirga</Link>
    </Container>
  );
}