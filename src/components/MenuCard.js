import React from 'react';
import { Thumbnail,
         Button,
         Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MenuCard extends React.Component {
 render() {
   return (
     <div className="homeMenuButton">
       <div> {this.props.word} </div>
       <Link to={'/Test'} className="nav-item-link"><div className="nav-item">Test</div></Link>
     </div>
   );
 }
};

export default MenuCard;
