import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./index.css"

class ProductItem extends Component {
    render() {
        const { title, images, url, id } = this.props

        return (
            <div className="col-lg-4 col-md-6 mb-4">
                   <Link to={`product/${title.id}?url=` + url}>
            <div className="card h-100">
              <a href="#">
                  <img className="card-img-top"   src={images[0].original} alt=""/>
              </a>
              <div className="card-body">
                <h4 className="card-title">
                <a href='#'>{title}</a>
                </h4>
               
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              
          </div>
          </Link>
          </div>
        );
    }
}

export default ProductItem;