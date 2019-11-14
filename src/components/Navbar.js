import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light mb-4">
        <div className="d-flex align-items-center">
          <img
            alt="logo"
            className="mr-2"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMEI0QjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ljc4MyAwSDI0djEyaC01LjIxN1Ywem0tNi4yNjEgNWg1LjIxN3Y3aC01LjIxN1Y1ek02LjI2IDVoNS4yMTd2N0g2LjI2MVY1ek0yNCAyNEgwVjBoNS4yMTd2MTloMTMuNTY2di0xSDYuMjZ2LTVIMjR2MTF6Ii8+Cjwvc3ZnPg=="
          ></img>
          <span className="navbar-brand">BandsInTown</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
