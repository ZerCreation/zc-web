import React from 'react'
import treeImage from '../data/images/WireTreeDetailed.png';

export default function Home() {
  const contentStyle = {
    display: 'flex',
    justifyContent: 'center'
  };
  const descriptionStyle = {
    marginTop: 50,
    textAlign: 'left',
    lineHeight: '300%'
  } as const;
  const nameStyle = {
    color: 'RoyalBlue',
    fontStyle: 'italic'
  };

  return (
    <>
      <div style={contentStyle}>
        <img src={treeImage} alt='blue wired tree' />
        <div style={descriptionStyle}>
          <h2>Welcome to the <span style={nameStyle}>Zer Creation</span></h2>
          <ul>
            <li>Powerful programming services</li>
            <li>Over 13 years of commercial programming and over 20 years of programming at all</li>
            <li>Developing extensive systems for world-wide companies</li>
          </ul>
        </div>
      </div>
    </>
  )
}
