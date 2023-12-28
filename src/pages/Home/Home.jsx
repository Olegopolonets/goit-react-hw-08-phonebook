import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeWrapper } from './StyledHome';

const Home = () => {
  return (
    <HomeWrapper>
      <h1> FREE ONLINE CONTACT BOOK</h1>
      <h2>
        Contact book is an important tool that helps you stay in touch with
        important people.
      </h2>
      <h2>
        You can create your contact book quickly and easily on our website.
      </h2>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>
          <Link to="/contacts">I'm ready to start</Link>
        </Button>
        <Button>
          <a
            href="https://rozetka.com.ua/ua/mobile-phones/c80003/"
            target="_blank"
            rel="noreferrer noopener"
          >
            I don't have a phone
          </a>
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/oleh-opolonets-0416992a4/"
            target="_blank"
            rel="noreferrer noopener"
          >
            I have no friends
          </a>
        </Button>
      </ButtonGroup>
    </HomeWrapper>
  );
};

export default Home;
