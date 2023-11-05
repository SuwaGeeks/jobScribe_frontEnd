import styled from 'styled-components'

import Header from '@/components/Header'
import TodoCard from '@/components/TodoCard'
import TimerCircle from '@/components/TimerCircle'
import CircleButtom from '@/components/CircleButtom'
import { FaCheck, FaPlay, FaStop } from 'react-icons/fa'

import { useRouter } from 'next/router'
import { useState } from 'react'


export default function Todo() {
  const router = useRouter()

  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  let tmpSecond = seconds;
  const [timerId, setTimerId] = useState(0)

  const countDown = () => {
    if (tmpSecond == 0) {
      setMinutes(minute => minute - 1)
      setSeconds(59)
      tmpSecond = 59
    } else {
      setSeconds(second => second - 1)
      tmpSecond--
    }
  }

  const TimerButtom = () => {
    if (timerId) {
      window.clearInterval(timerId)
      setTimerId(0)
    } else {
      setTimerId(window.setInterval(countDown, 1000));
    }
  }

  return (
    <Main>
      <Header title="ハッカソンを無事終える!" handleBack={() => router.push('/todo')}/>
      <Container>
        <TaskHeader>現在のTask</TaskHeader>
        <TodoCard task="ハッカソンを無事終える!" />
        <TimerWrap>
          <TimerCircle minutes={minutes} seconds={seconds} persent={0} />
        </TimerWrap>
        <ActionWrap>
          <CircleButtom>
            <FaCheck />
          </CircleButtom>
          <CircleButtom onClick={TimerButtom} >
            {timerId ?
              <FaStop /> : <FaPlay />
            }
          </CircleButtom>
        </ActionWrap>
      </Container>
    </Main>
  )
}


const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  margin: 2em 1em 0 1em;
`

const TaskHeader = styled.div`
  color: #FF865F;
  font-size: .8em;
  width: 100%;
`

const TimerWrap = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 2em auto;
`

const ActionWrap = styled.div`
  width: 100%;
  margin: 2em 0;
  display: flex;
  justify-content: space-evenly;
`
