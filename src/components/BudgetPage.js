import React from 'react';
import { Thumbnail,
        Button,
        Col,
        Grid,
        Row} from 'react-bootstrap';
import OutletCard from './OutletCard';

var outletData = [{name: "Oven", usage: 50}, {name: "Stove", usage: 40 }, {name: "Light1", usage: 20 }, {name: "Light2", usage: 400 }, {name: "Microwave", usage: 100 } ]

//Sorts Data from largest to smallest usage
outletData.sort(function(a, b) {
    return b.usage - a.usage;
});

class Budget extends React.Component {
 render() {
   return (
     <div>
       <Grid>
         <Row className="show-grid">
           {outletData.map(outlet => {
             return <OutletCard
               name = {outlet.name}
               usage = {outlet.usage}
             />
           })}
         </Row>
       </Grid>

   </div>
   );
 }
};

export default Budget;
