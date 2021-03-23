import React from 'react';
import styled from 'styled-components'
import { Link } from "@reach/router"

const Header = () => {
  return (
    <Wrapper>
      <Link to='/' style={{display:'flex', alignItems:'center'}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width:'2.5rem'}}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <h1 style={{margin:'0'}}>Tiny Webpages</h1>
      </Link>
      <Toolbar>
        <Link to='/me'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width:'2.5rem'}}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
        <Link to='/new'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width:'2.5rem'}}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        </Link>
      </Toolbar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width:100%;
  margin: 0;
  padding:2rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Toolbar = styled.div`
  display:flex;
  justify-content:space-between;
  a{
    margin-left:2rem;
  }
`
export default Header