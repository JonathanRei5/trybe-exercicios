import React from "react";
import { createContext } from "react";

const redditContext = createContext();

export function renderWithConsumer(Component) {
  return (
    <redditContext.Consumer>
      {(props) => <Component {...props}/>}
    </redditContext.Consumer>
  )
}

export default redditContext;
