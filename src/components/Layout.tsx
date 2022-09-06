import { Link, Outlet } from 'react-router-dom'
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

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
  } as const;
  const lineStyle = {
    border: '1px solid darkblue'
  };

  function navigateToGithubProfile() {
    window.open('https://github.com/ZerCreation', '_blank', 'noopener,noreferrer');
  }

  function navigateToTwitterProfile() {
    window.open('https://twitter.com/zercreation', '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <div className='content'>
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

        <hr style={lineStyle} />
        <div style={{margin: 30}}>
          <Outlet />
        </div>
      </div>

      <footer className='footer'>
        <hr style={lineStyle} />
        <IconButton onClick={navigateToGithubProfile}>
          <GitHubIcon color='primary'/>
        </IconButton>
        <IconButton onClick={navigateToTwitterProfile}>
          <TwitterIcon color='primary'/>
        </IconButton>
      </footer>
    </>
  )
}
