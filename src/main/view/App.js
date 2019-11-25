import React from "react"
import "./App.css"
import {TimeMeter} from "./meter/TimeMeter"
import {PostCollection} from "./post/PostCollection"

const App = () => {
  return (
    <div className="App">
      <TimeMeter></TimeMeter>
      <PostCollection count="50"></PostCollection>
    </div>
  );
}

export default App
