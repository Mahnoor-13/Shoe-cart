import React, { Component } from "react";
import "../css/Detail.css"

export class Details extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="detail-h3">
          {" "}
          The Nike shoes are a good brand that you can wear. It is one of the
          best brand that you can obtain in these days. This shoes are made to
          use them in some sports. This shoes provides the user a great comfort
          and effectiveness in the activities. This brand also made different
          designs in accord with the different sports that exist in the word.
          This brand is monopoly now in the actuality, with his great demand
          around the world.
        </h3>
      </div>
    );
  }
}

export default Details;
