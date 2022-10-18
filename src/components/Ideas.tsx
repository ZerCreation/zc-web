import React from 'react'

export default function Ideas() {
  return (
    <>
      <h2>Web3 Ideas</h2>
      <div className='main-text'>
        <h3>What is it?</h3>
        <div>
          That's the web3 application working in Ethereum blockchain. User is able to describe it's idea and put it for voting. Another user can comment it or vote for it. We can say it's some kind of Web3 DAO app.
        </div>
        <h3>What is the profit?</h3>
        <div>
          I will deeply consider implementing good ideas with the biggest number of votes. The creator and best commentators of the idea will get some future tokens airdrop.
        </div>
        <h3>Current development state</h3>
        <div>
          During development, current state in Goerli testnet is available:<br/>
          <div style={{fontSize: 30, textAlign: 'center', marginTop: 40, textDecoration: 'underline'}}>
            <a href='https://web3ideas.z16.web.core.windows.net/'>Web3 Ideas</a>
          </div>
        </div>
      </div>
    </>
  )
}
