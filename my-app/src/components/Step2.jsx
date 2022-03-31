import React from 'react'

// import from project
import Card from './UI/Step/Step'

function Step2() {

  return (
        <React.Fragment>
          <hr></hr>
          <Card
            Step={"Step 2"} 
            Subheading={"Enter Shipping info"}
            radio={"Check here if Shipping & Bulling are same"}
            inputRadio={{
              id:"radio",
              type:"radio",
              name:"radio",
              value:"radio"
            }}
            argumentRadio={"radio"}
            label6={"Address"}
            argument6={"address"}
            input6={{
              id:"address",
              type:"text",
              name:"address"
            }}
            label7={"Address2"}
            argument7={"address2"}
            input7={{
              id:"address2",
              type:"text",
              name:"address2"
            }}
            label8={"City"}
            argument8={"city"}
            input8={{
              id:"city",
              type:"text",
              name:"city"
            }}
            label9={"Zip/Postal"}
            argument9={"zipPostal"}
            input9={{
              id:"zipPostal",
              type:"text",
              name:"zipPostal"
            }}
            label10={"Country"}
            argument10={"country"}
            select10={{
              name:"country",
              id:"country"
            }}
            label11={"State/Province"}
            argument11={"state/province"}
            select11={{
              name:"stateProvince",
              id:"stateProvince"
            }}>  
          </Card>
      </React.Fragment>
  )
}

export default Step2