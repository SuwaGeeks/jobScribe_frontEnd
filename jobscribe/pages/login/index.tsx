import { Inter } from 'next/font/google'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <Main className={inter.className}>
      <AppTitle>
        <h1>
          JobScribe
        </h1>
        <p>
          作業にかかる時間を記録してより効率的な時間の使い方を
        </p>
      </AppTitle>
      <Form>
        <Input type='text' placeholder="UserId" />
        <Input type='password' placeholder="Password" />
        <Buttom>
          Login
        </Buttom>
      </Form>
    </Main>
  )
}


const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #FACABB;
`

const AppTitle = styled.div`
  width: 100%;
  height: 40vh;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Buttom = styled.div`
  padding: 0.5em 3em;
  font-weight: bold;
  border-radius: 0.25em;
  background-color: #FF865F;
  cursor: pointer;
`

const Input = styled.input`
  width: 350px;
  background-color: #FFFFFF;
  padding: 0.75em 1em;
  border-radius: 0.5em;
  margin: 0.5em 0;
  border-color: #FF865F;
`