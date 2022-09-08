import React from 'react'

export default function Technologies() {
  const listStyle = {
    marginBottom: 50
  };

  return (
    <>
      <h2>Technologies</h2>
      <div className='main-text'>
        <h3>Current development scope</h3>
        <ul style={ listStyle }>
          <li>Solidity + EVM</li>
          <li>ReactJS</li>
          <li>Rust</li>
        </ul>
        <h3>Strong background technologies</h3>
        <ul style={ listStyle }>
          <li>.NET Core/Framework C# ASP.NET Web API, WPF, WCF, WF</li>
          <li>Angular, TypeScript</li>
          <li>MS SQL Server, MongoDB, MySQL, SQLite</li>
          <li>MS Azure</li>
          <li>TeamCity, Jenkins</li>
        </ul>
        <h3>Known but not used now</h3>
        <ul style={ listStyle }>
          <li>Java</li>
          <li>PHP</li>
          <li>OpenGL</li>
          <li>XNA</li>
          <li>Silverlight</li>
        </ul>
      </div>
    </>
  )
}
