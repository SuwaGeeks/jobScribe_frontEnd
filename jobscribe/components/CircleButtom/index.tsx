import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Header: FC<Props> = (props) => {
  return (
    <Circle onClick={() => {if (props.onClick) {props.onClick()}}} >
      <Icon>
        { props.children }
      </Icon>
    </Circle>
  )
}

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #FF865F;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #FFA183;
  }
`

const Icon = styled.div`
  font-weight: bold;
  font-size: 1em;
  line-height: 1;
`



export default Header
