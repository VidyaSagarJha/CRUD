import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import MyRetrive from "./Components/MyRetrive";
import MyCreate from "./Components/MyCreate";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <div>
          <MyCreate />
          {/*<MyRetrive />*/}
        </div>
      </MDBContainer>
    );
  }
}

export default App;
