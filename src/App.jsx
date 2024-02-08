import { Link, Outlet } from 'react-router-dom'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FunctionalComponent from './Components/FunctionalComponent'
import { useState } from 'react';



function App() {
  const [h, setHidden] = useState(true);
  const tab = [
    { name: "TWIN3", module: "REACT" },
    { name: "TWIN4", module: "NODE" }
  ]
  const hello = (name) => {
    return <p>Hello World {name}</p>
  }
  return (
    <>
      <p style={{ color: "red" }}>Style test</p>
      <ul>
        {tab.map((e, i) => <li key={i}>{e.name} & {e.module}</li>)}
      </ul>
      <h1>{hello("TWIN3")}</h1>
      <button onClick={()=>setHidden(!h)}>show</button>
      <span hidden={h}>
      <ClassComponent name="Mondher" />
      <FunctionalComponent name="Nassim" />
      </span>
      <nav
        className="nav justify-content-center  "
      >
        <ul>
          <li>
            <Link to={'/ecmascript'}>Ecmascript</Link></li>
          <li>
            <Link to={'/ClassComponent'}>ClassComponent</Link></li>
          <li>
            <Link to={'/FunctionalComponent'}>FunctionalComponent</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default App
