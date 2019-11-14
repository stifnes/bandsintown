import React from "react";
import ArtistCard from "./ArtistCard";
import EventTable from "./EventTable";

class Layout extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ArtistCard details={this.props.artistInfo} />
          </div>
          <div className="col-md-8">
            <EventTable events={this.props.artistEvents} />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
