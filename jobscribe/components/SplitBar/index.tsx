import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  text?: string;
}

const SplitBar: FC<Props> = (props) => {
  return (
    <>
      <Wrap>
        <Bar />
        {props.text ?
          <>
            <Text>{ props.text }</Text>
            <Bar />
          </> : <></>
        }
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 1em;
  display: flex;
  align-items: center;
`

const Bar = styled.div`
  width: 100%;
  height: 2px;
  margin: calc((1em - 2px) / 2) 0;
  background-color: #FF865F;
`

const Text = styled.div`
  color: #FF865F;
  font-size: .5em;
  width: 200px;
  text-align: center;
  padding: 0 .5em;
`

export default SplitBar
