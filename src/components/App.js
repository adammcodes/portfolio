import { useState, useEffect, useRef } from "react";
import "./App.scss";
import Nav from "./Nav";

const App = () => {
  const [state, setState] = useState({
    view: "top", // marks top position window scroll 
    position: 0 // tracks y position of window scroll
  });

  // React will hold DOM state of portfolio sections in refs
  // So we can use scrollIntoView with its `.current` property
  const refs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  const scrollTo = (ref) => {
    refs[ref].current.scrollIntoView();
  };

  const handleScroll = () => {
    // Hold Y scroll position of window
    const pos = window.pageYOffset;
    let view; 
    if (pos < 10) {
      // consider y offset of less than 10 the top
      view = "top";
    }
    // track the Y scroll position in state
    setState({...state, view: view, position: pos});
  };

  useEffect(() => {
    // Setting "passive" to true indicates handleScroll will never call preventDefault()
    // to improve scroll performance on browsers other than Chrome and Firefox
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <div className="App">
      <Nav 
        view={state.view}
        position={state.position}
        scrollTo={scrollTo}
      />

    </div>
  );
};

export default App;