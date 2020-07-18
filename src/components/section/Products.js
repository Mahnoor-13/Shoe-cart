import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Products.css";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products } = this.context;

    return (
      <div id="product">
        {products.map((product) => (
          <div className="card" key={product.title}>
            <Link to={`./product/${product._id}`}>
              <img src={product.src} alt="not" />
            </Link>
            <div className="content">
              <h3 className="heading">
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              <span className="heading">${product.price}</span>
            </div>

            <button
              type="button"
              class="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              Show Description
            </button>

            <div id="myModal" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <div>
                      <button
                        type="button"
                        class="close close2"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                    </div>
                    <h4 class="modal-title title-m">Nike</h4>
                  </div>
                  <div class="modal-body">
                    <p>
                      {" "}
                      The Nike shoes are a good brand that you can wear. It is
                      one of the best brand that you can obtain in these days.
                      This shoes are made to use them in some sports. This shoes
                      provides the user a great comfort and effectiveness in the
                      activities. This brand also made different designs in
                      accord with the different sports that exist in the word.
                      This brand is monopoly now in the actuality, with his
                      great demand around the world.
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default close2"
                      data-dismiss="modal"
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
