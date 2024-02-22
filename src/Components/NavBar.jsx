import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  return <>
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link active={location.pathname === '/'}><Link to={'/'}>Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={location.pathname === '/ecmascript'}><Link to={'/ecmascript'}>Ecmascript</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={location.pathname === '/classComponent'}><Link to={'/classComponent'}>ClassComponent</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={location.pathname === '/functionalComponent/12/32'}><Link to={'/functionalComponent/12/32'}>FunctionalComponent</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={location.pathname === '/events'}><Link to={'/events'}>Events list</Link></Nav.Link>
          </Nav.Item>
        </Nav>
      <Outlet/>
      </>
};
