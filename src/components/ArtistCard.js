import React from "react";

class Card extends React.Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          alt="..."
          src={this.props.details.image_url}
          style={{ width: "100%" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.details.name}</h5>
          <a
            href={this.props.details.facebook_page_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ibb.co/qpYCpGJ/facebook.png"
              alt="facebook"
              className="color-green"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
