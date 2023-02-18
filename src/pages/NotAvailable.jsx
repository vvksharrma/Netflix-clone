import React from 'react'
import styled from'styled-components'

export default function NotAvailable() {
  return (
    <Container>

      <div className="not-available">Sorry no video available for this :/ </div>
    </Container>
  )
}

const Container = styled.div`
    .data{
        margin-top:8rem;
        .not-available{
            text-align: center;
            color:white;
            margin-top:4rem:
        }
    }
`;