import React from "react";
import moment from "moment";

class Table extends React.Component {
  state = {};
  render() {
    return (
      <div className="overflow-auto">
        <table className="table mt-5 mt-md-0">
          <thead className="bg-green">
            <tr>
              <th scope="col" style={{ width: "30%" }}>
                Venue
              </th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.events.map((event, index) => (
              <tr key={index}>
                <td style={{ width: "30%" }}>{event.venue.name}</td>
                <td>{event.venue.city}</td>
                <td>{event.venue.country}</td>
                <td>{moment(event.datetime).format("YYYY-MM-DD")}</td>
                <td style={{ width: "20%" }}>
                  {moment(event.datetime).format("hh-mm")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
