import React from 'react';
import { Thumbnail,
        Button,
        Col,
        Grid,
        Row} from 'react-bootstrap';
import OutletCard from './OutletCard';

var outletData = [{name: "Oven", usage: 50}, {name: "Stove", usage: 40 }, {name: "Light1", usage: 20 }, {name: "Light2", usage: 400 }, {name: "Microwave", usage: 100 } ]

var budgetData = {
  dailySpend: [{1: 50}, {2: 40}, {3: 10}, {4: 30}]
}

class Budget extends React.Component {
 render() {
   return (
     <div>
       <Grid>
         <Row className="show-grid">
           {outletData.map(outlet => {
             console.log(outlet)
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
