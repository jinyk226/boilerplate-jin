import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoremIpsum from './LoremIpsum'
import NavBar from './NavBar'
import styled from 'styled-components'

const BlankDiv = styled.div`
  height: 3em;
`

const MainDiv = styled.div`
  padding: 2vw
`

const app = () => {
  return (
    <Router>
      <NavBar />
      <BlankDiv />
      <MainDiv>
        <Routes>
          <Route path='/' element={<LoremIpsum />} />
        </Routes>
      </MainDiv>
    </Router>
  )
}

export default app
