import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  minutes: number;
  seconds: number;
  persent: number;
}

const TimerCircle: FC<Props> = (props) => {
  const zeroPadding = (number: number):string => {
    return number < 10 ? number.toString().padStart(2, '0') : number.toString()
  }

  return (
    <>
      <Wrap>
        <Circle persent={props.persent} >
          <CircleInner>
            <Timer>
              { zeroPadding(props.minutes) }:{ zeroPadding(props.seconds) }
            </Timer>
            <NextTimer>
              Next &gt; 05:00
            </NextTimer>
          </CircleInner>
        </Circle>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  max-width: 100vw;
`

const Circle = styled.div<{persent: number}>`
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: #FF865F;

  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: #999;
    transform: rotate(${({persent}) => ( persent >= 50 ? `${180+180*(persent/50)}deg` : '180deg')});
    transform-origin: right 50%;
    z-index: 2;
    animation: rotate-circle-left 5s linear forwards;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 50%;
    width: 100%;
    height: 100%;
    background: ${({persent}) => ( persent >= 50 ? "#999" : "#FF865F")};
    transform: rotate(${({persent}) => ( persent <= 50 ? `${180*(persent/50)}deg` : '180deg')});
    transform-origin: left 50%;
    z-index: 3;
    animation: rotate-circle-right 5s linear forwards;
    
  // }
`

const CircleInner = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  width: 92%;
  height: 92%;
  background: #F3F3F3;
  border-radius: 50%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Timer = styled.span`
  display: inline-block;
  color: #FF865F;
  font-weight: blod;
  font-size: 4.25em;
  line-height: 1;
`
const NextTimer = styled.span`
  display: inline-block;
  color: #FF865F;
  font-weight: blod;
  font-size: 1.5em;
  line-height: 1;
`

export default TimerCircle
