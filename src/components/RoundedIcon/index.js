import React from 'react'
import styled from 'styled-components'


function RoundedIcon({color, children}) {
    const Icon = styled.View`
        height: 40px;
        width: 40px;
        border-radius: 20px;
        background-color: ${color};
        align-items: center;
        justify-content: center;
    `
  return (
    <Icon>
        {children}
    </Icon>
  )
}



export default RoundedIcon