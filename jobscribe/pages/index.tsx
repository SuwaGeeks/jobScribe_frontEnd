
import styled from 'styled-components'

import Header from '@/components/Header'
import TimeBlock from '@/components/TimeBlock'
import TodoCard from '@/components/TodoCard'
import CircleButtom from '@/components/CircleButtom'
import { FaPlus } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

export default function Home() {
  const router = useRouter();
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs())

  useEffect(() => {
    window.setInterval(() => {
      setDate(dayjs())
    }, 30000)
  }, [])

  return (
    <>
      <Main>
        <Header title="Top" />
        <Container>
          <TimeBlock date={date}/>
          <TaskWrap>
            <TaskHeader>
              Next Task...
            </TaskHeader>
            <TodoCard task="ハッカソンを無事終える!" onClick={() => router.push('/timer')}/>
          </TaskWrap>
        </Container>
      </Main>
      <ActionWrap>
        <CircleButtom onClick={() => { router.push('/todo') }}>
          <FaListCheck />
        </CircleButtom>
        <Spacer />
        <CircleButtom>
          <FaPlus />
        </CircleButtom>
      </ActionWrap>
    </>
  )
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  margin: 1.5em 1em;
`

const TaskWrap = styled.div`
  width: 100%;
  margin: 2em 0;
`

const TaskHeader = styled.div`
  color: #FF865F;
  font-size: .8em;
  width: 100%;
  font-weight: bold;
`

const ActionWrap = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`

const Spacer = styled.div`
  height: 1em;
  width: 100%;
`
