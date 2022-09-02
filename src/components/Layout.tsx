import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  const headerStyle = {
    margin: 'auto',
    padding: 10,
    width: '50%',
  };
  const menuStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  } as const

  return (
    <>
      <div style={headerStyle}>
        <div style={menuStyle}>
          <div>
            <Link to="/">Home</Link>
          </div>
          |
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          |
          <div>
            <Link to="/technologies">Technologies</Link>
          </div>
          |
          <div>
            <Link to="/ideas">Web3 Ideas</Link>
          </div>
          |
          <div>
            <Link to="/about">About</Link>
          </div>
          |
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <hr style={{ border: '1px dashed darkgreen' }} />
      <Outlet />
    </>
  )
}
