import React from 'react';
import { Thumbnail,
        Button,
        Col,
        Grid,
        Row} from 'react-bootstrap';
import MenuCard from './MenuCard';

class Home extends React.Component {
 render() {
   return (
     <div>
       <Grid>
         <Row className="show-grid">
           <Col md={3} mdOffset={1}>
               <MenuCard
               word = "Budget" />
           </Col>
           <Col md={3} mdOffset={1}>
               <MenuCard
               word = "Usage" />
           </Col>
           <Col md={3} mdOffset={1}>
               <MenuCard
               word = "Save" />
           </Col>
       </Row>
       </Grid>
   </div>
   );
 }
};

export default Home;
