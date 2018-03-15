import React from 'react';
import { Thumbnail,
         Button,
         Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class OutletCard extends React.Component {
 render() {
   return (
     <div className="outletCard">
       <div> {this.props.name} </div>
       <div> {this.props.usage} </div>
     </div>
   );
 }
};

export default OutletCard;
