import React from 'react'
import { styled } from 'styled-components'
import PriceCard from './PriceCard';


const Container= styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;

`;

function Price() {
  return (
    <Container>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />

    </Container>
  )
}

export default Price