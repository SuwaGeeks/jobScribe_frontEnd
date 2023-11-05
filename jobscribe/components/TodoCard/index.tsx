import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  task: string;
  promiseMinutes?: number;
  onClick?: () => void;
}

const TodoCard: FC<Props> = (props) => {
  return (
    <>
      <Wrap onClick={() => {if (props.onClick) {props.onClick()}}}>
        <Task>
          { props.task }
        </Task>
        {props.promiseMinutes?
          <Time>{ props.promiseMinutes } 分</Time> : <></>
        }
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
  padding: 0.7em 1em;
  margin: 10px 0;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.7em;
`

const Task = styled.span`
  display: inline-block;
  width: 90%;
  color: #FF865F;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Time = styled.span`
  display: inline-block;
  width: 10%;
  color: #FF865F;
  text-align: right;
  font-size: 0.7em;
`

export default TodoCard
