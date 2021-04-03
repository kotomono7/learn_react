import React from "react";
// import Header from "./components/Header";
// import Button from "./components/Button";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import Click from "./components/Click";
// import Test from "./components/Test";
// import Second from "./components/Second";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <div className="ui grid container center aligned">
        <div className="column eight wide">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;