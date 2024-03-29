import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const NavBar = React.lazy(() => import("./Components/NavBar"));
  const Ecmascript = React.lazy(() => import("./Ecmascript/Ecmascript"));
  const Events = React.lazy(() => import("./Components/Events"));
  const EventDetails = React.lazy(() => import("./Components/EventDetails"));
  const FunctionalComponent = React.lazy(() =>
    import("./Components/FunctionalComponent")
  );
  const ClassComponent = React.lazy(() =>
    import("./Components/ClassComponent")
  );
  const NotFound = React.lazy(() => import("./Components/NotFound"));
  const Home = React.lazy(() => import("./Components/Home"));
  const AddEvent = React.lazy(() => import("./Components/AddEvent"));
  const LoadingComponent = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  };
  return (
    <>
      <Suspense fallback={LoadingComponent()}>
        <Routes>
          <Route path="/" Component={NavBar}>
            <Route index Component={Home} />
            <Route path="/ecmascript" Component={Ecmascript} />
            <Route path="/events" element={<Outlet/>}>
              <Route index Component={Events} />
              <Route path="add" Component={AddEvent} />
              <Route path=":id" Component={EventDetails} />
            </Route>
            <Route
              path="/functionalComponent/:id/:number"
              Component={FunctionalComponent}
            />
            <Route path="/classComponent" Component={ClassComponent} />
          </Route>
          <Route path="*" Component={NotFound} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
