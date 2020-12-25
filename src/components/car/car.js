import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap'

class Car extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img className="card-img-top" src="https://drasler.ru/wp-content/uploads/2018/04/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-windows-7-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-9.jpg" alt=""/>
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Item One</a>
                </h4>
               
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              
          </div>
          </div>
        )
    } 
}

export default Car;