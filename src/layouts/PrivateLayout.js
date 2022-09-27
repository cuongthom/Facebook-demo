import {Navigate , Route, Routes} from "react-router-dom";
import {privateRoutes} from "../routes";
import useAuthentication from "../hooks/useAuthentication";
import {Header} from "../containers";

function PrivateRoute({component: Component, authed, requiredLogin, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => !requiredLogin || authed === true
        ? <Component {...props} />
        : <Navigate  to={{pathname: '/', state: {from: props.location}}}/>}
    />
  );
}

const PrivateLayout = () => {

  const {isLoggedIn} = useAuthentication()
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          {Object.values(privateRoutes)
            //.filter(({ requiredLogin }) => !requiredLogin || isLoggedIn)
            .map(({path, component, requiredLogin}) => (
              // <Route exact key={path} path={path} component={component} />
              <PrivateRoute
                exact
                key={path}
                authed={isLoggedIn}
                requiredLogin={requiredLogin}
                path={path}
                component={component}/>
            ))}
          <Navigate  from='/home' to={privateRoutes.home.path}/>
        </Routes>
      </div>
    </div>
  );
}

export default PrivateLayout