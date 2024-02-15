import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link > <Link to={'/'}>Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><Link to={'/ecmascript'}>Ecmascript</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><Link to={'/ClassComponent'}>ClassComponent</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><Link to={'/FunctionalComponent'}>FunctionalComponent</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><Link to={'/Events'}>Events list</Link></Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </>
  )
}

export default App
