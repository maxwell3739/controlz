import React from 'react';
import { Thumbnail,
         Button,
         Col } from 'react-bootstrap';

class Home extends React.Component {
 render() {
   return (
     <div className="homeMenuButton">
       <div> {this.props.word} </div>
     </div>
   );
 }
};

export default Home;
