import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoList from "./containers/TodoList";
import TodoListRedux from "./containers/TodoListRedux";
import NotFoundPage from "./containers/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TodoList} />
        <Route path="/todolist-redux" component={TodoListRedux} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
