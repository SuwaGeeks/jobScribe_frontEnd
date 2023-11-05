import { FC } from 'react'
import styled from 'styled-components'
import type { Dayjs } from 'dayjs'

interface Props {
  date: Dayjs;
}

const TodoCard: FC<Props> = (props) => {
  return (
    <>
      <Wrap>
        <Time>
          { props.date.format('HH:mm') }
        </Time>
        <Date>
          { props.date.format('MM月DD日 (ddd)') }
        </Date>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
  padding: 7px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F3ECEC;
  border-radius: 7px;
`

const Time = styled.span`
  display: inline-block;
  color: #FF865F;
  font-weight: blod;
  font-size: 4.25em;
  line-height: 1;
`

const Date = styled.span`
  display: inline-block;
  color: #FF865F;
  font-weight: blod;
  font-size: 1.15em;
`


export default TodoCard
