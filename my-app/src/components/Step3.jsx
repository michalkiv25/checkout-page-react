import React from 'react';

// import from project
import Card from './UI/Step/Step';

function Step3() {
  return (
        <React.Fragment>
          <hr></hr>
          <Card
            Step={"Step 3"} 
            Subheading={"Select Shipping Method"}
            label10={"Shipping"}
            argument10={"stateProvince"}
            valueSelect10={"Select"}
            styleSelect={"styleSelect"}
            select10={{
              name:"stateProvince",
              id:"stateProvince"
            }}>  
          </Card>
        </React.Fragment>
  )
}

export default Step3