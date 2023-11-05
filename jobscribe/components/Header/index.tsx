import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  title: string;
  handleBack?: () => void;
}

const Header: FC<Props> = (props) => {
  return (
    <HeaderWrap>
      <ActionWrap>
        {props.handleBack ?
          <BackButtom onClick={() => {if (props.handleBack) {props.handleBack()}}}>&lt;</BackButtom> :
          <></>
        }
      </ActionWrap>
      <HeaderTitle>{ props.title }</HeaderTitle>
      <ActionWrap></ActionWrap>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #FF865F;
  height: 45px;
`

const HeaderTitle = styled.h3`
  color: #FFFFFF;
  font-weight: normal;
  text-align: center;
  font-size: 1em;
`

const ActionWrap = styled.div`
  width: 10%;
  max-width: 50px;
  height: 100%;
`
const BackButtom = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  margin: 10%;
  border-radius: 50%;
  font-size: 1em;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #FFA183;
  }
`


export default Header
