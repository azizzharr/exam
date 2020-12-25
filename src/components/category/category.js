import React,{Component} from 'react';


class Category extends Component {
    render() {
      return (
          <div className='col-lg-3 my-4'>
              <h2>Snop Name</h2>
              <div className='list-group'>
                <a className='list-group-item'>Category 1</a>
                <a className='list-group-item'>Category 2</a>
                <a className='list-group-item'>Category 3</a>
                </div>
          </div>
      ) 
    }
}
 export default Category;
