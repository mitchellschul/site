import Home from "./Views/Home.jsx";

function App() {

  const getBrowserHiddenProps = () => {
    let hidden, visibilityChange
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }

    return {
      hidden,
      visibilityChange
    }
  }

  const { hidden, visibilityChange } = getBrowserHiddenProps()

  if (typeof document.addEventListener !== "undefined" && typeof hidden !== "undefined") {
    // We can continue
    document.addEventListener(visibilityChange, () => {
      if (document[hidden]) {
        document.title = "Wait! Come back!"
      } else {
        document.title = "Mitchell Schulinger"
      }
    }, false)
  }


  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
