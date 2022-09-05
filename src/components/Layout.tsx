// import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  // let location = useLocation();
  // let sketchScript: HTMLScriptElement;

  // function loadJsScript(scriptName: string) {
  //   const script = document.createElement('script');

  //   script.src = scriptName;
  //   script.async = true;

  //   document.body.appendChild(script);
  //   return script;
  // }

  // TODO: Manage p5.js state: https://dev.to/christiankastner/integrating-p5-js-with-react-i0d

  // useEffect(() => {
  //   const script = loadJsScript('https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js');
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  // useEffect(() => {
  //   sketchScript = loadJsScript('sketch.js');
  
  //   return () => {
  //     document.body.removeChild(sketchScript);
  //   }
  // }, []);
  
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
      <div style={{margin: 30}}>
        <Outlet />
      </div>
    </>
  )
}
