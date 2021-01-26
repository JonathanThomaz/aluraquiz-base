import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import { Button, TextField } from '@material-ui/core'
import { useState } from 'react';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [userName, setUserName] = useState();

  const handleChange = (e) => {
    setUserName(e.target.value)
  }
  return (
    <>
      <Head>
        <title>Bem-Vindo</title>
        <meta property="og:title" content={db.title} key="title" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>

            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <TextField id="outlined-basic" label="Seu nome é?" variant="outlined" onChange={handleChange} />
              <Link href={{
                pathname: '/quiz',
                query: { name: userName }
              }}>
                <Button variant="contained" color="primary">
                  Iniciar Quiz
              </Button>
              </Link>
            </Widget.Content>

          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/JonathanThomaz/aluraquiz-base" />
      </QuizBackground>
    </>
  )
}
