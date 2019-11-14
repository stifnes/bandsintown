import React from "react";

class GetValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: ""
    };
  }

  handleFetch = () => {
    const { onFetch } = this.props;
    onFetch(this.state.fieldValue);
  };

  handleChange = event => {
    this.setState({
      fieldValue: event.target.value
    });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      const { onFetch } = this.props;
      onFetch(this.state.fieldValue);
    }
  };

  render() {
    return (
      <div className="container landing mb-5">
        <div className="row border p-3 align-items-center justify-content-center mx-2 m-md-0">
          <div className="col-12 col-md-6 rounded">
            <h1 className="font-weight-bold">
              Welcome to <br />
              BandsinTown
            </h1>
            <h5>
              Here you can find your favorite artists and their shows all over
              the world.
            </h5>
          </div>
          <div className="col-12 col-md-6 rounded">
            <div className="card p-3 p-md-4 border-0 shadow d-flex align-items-center flex-row justify-content-center">
              <input
                className="form-conrol py-2 border-0 rounded
              "
                type="text"
                placeholder="Enter the artist's name"
                autoFocus
                value={this.state.fieldValue}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              ></input>
              <button
                className="btn bg-green search-icon"
                onClick={this.handleFetch}
              >
                <img
                  src="https://icon-library.net/images/search-icon-svg/search-icon-svg-27.jpg"
                  alt="search-icon"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetValue;
