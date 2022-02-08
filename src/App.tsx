/* eslint-disable @typescript-eslint/no-redeclare */
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./containers/routes";
import { Provider } from "react-redux";
import store from "./store";

function Containers() {

  return (
    <Provider store={store}>
      <div className="app">
        <div>
          <Suspense fallback={<p>Loading</p>}>
            <BrowserRouter>
              <Switch>
                {ROUTES.map((route) => (
                  <Route
                    key={route.key}
                    exact={route.exact}
                    path={`${route.path}`}
                    component={(props: any) => (
                      <route.component
                        {...props}
                      />
                    )}
                  />
                ))}
              </Switch>
            </BrowserRouter>
          </Suspense>
        </div>
      </div >
    </Provider>
  );
}

export default Containers;
