import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width:800px;
  margin: 0 auto;
  padding:2rem;
`

export default Layout