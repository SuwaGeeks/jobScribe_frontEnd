import { Inter } from 'next/font/google'
import styled from 'styled-components'

import Header from '@/components/Header'
import TodoCard from '@/components/TodoCard'
import SplitBar from '@/components/SplitBar'
import CircleButtom from '@/components/CircleButtom'
import { FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Todo() {
  const router = useRouter()

  return (
    <Main className={inter.className}>
      <Header title="Todo一覧" handleBack={() => router.push('/')} />
      <Container>
        <SplitBar text="今日" />
        <TodoCard task="ハッカソンを無事終える!" onClick={() => {router.push('/timer')}} />
        <TodoCard task="C言語の本を読む"/>
        <TodoCard task="筋トレをする" promiseMinutes={30}/>
        <SplitBar text="11/06 (月)" />
        <TodoCard task="買い物に行く"/>
        <TodoCard task="統計学の課題をやる" promiseMinutes={30} />
        <SplitBar text="11/07 (火)" />
        <TodoCard task="xx株式会社のESを書く" promiseMinutes={60} />
      </Container>
      <ActionButtomWrap>
        <CircleButtom>
          <FaPlus />
        </CircleButtom>
      </ActionButtomWrap>
    </Main>
  )
}


const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  margin: 0.5em 1em;
`

const ActionButtomWrap = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`
