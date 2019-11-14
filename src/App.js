import React from "react";
import Navbar from "./components/Navbar";
import GetValue from "./components/GetValue";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import { apiEndPoint } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      events: []
    };
  }

  getDetails = async fieldValue => {
    await fetch(apiEndPoint + "/artists/" + fieldValue + "?app_id=app_id")
      .then(stream => stream.json())
      .then(async details => {
        if (details !== "") {
          const events = await fetch(
            apiEndPoint + "/artists/" + fieldValue + "/events?app_id=app_id"
          )
            .then(stream => stream.json())
            .then(data => data);
          this.setState(
            {
              details,
              events
            },
            () => {}
          );
        } else {
          this.setState({
            details
          });
        }
      });
  };

  componentWillUnmount = () => {
    localStorage.setItem("myData", this.state.details.name);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <GetValue onFetch={this.getDetails} />
        {this.state.details && (
          <Layout
            artistInfo={this.state.details}
            artistEvents={this.state.events}
          />
        )}
        {this.state.details === "" && <ErrorPage />}
      </React.Fragment>
    );
  }
}

export default App;
