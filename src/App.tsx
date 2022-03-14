import React from 'react'

import Theme from './Theme'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import {Home} from './Pages/Home'
import {Login} from './Pages/Login'
import {Links} from './Pages/Links'

function App() {
  return (
    <Router>
      <Theme>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/links">Links Example</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="links/*" element={<Links />} />
          </Routes>
        </div>
      </Theme>
    </Router>
  )
}

export default App
