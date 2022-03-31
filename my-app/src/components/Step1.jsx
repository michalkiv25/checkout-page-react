import React from 'react';

// import from project
import Card from './UI/Step/Step';

function Step1() {
  return (
    <React.Fragment>
        <hr></hr>
        <Card 
          Step={"Step 1"} 
          Subheading={"Enter Billing info"}
          label1={"First Name"}
          input1={{
            id:"firstName",
            type:"text",
            name:"firstName"
          }}
          label2={"Last Name"}
          input2={{
            id:"lastName",
            type:"text",
            name:"lastName"
          }}
          label3={"Best Phone"}
          argument3={"bestPhone"}
          input3={{
            id:"bestPhone",
            type:"text",
            name:"bestPhone"
          }}
          label4={"Best Email"}
          argument4={"bestEmail"}
          input4={{
            id:"bestEmail",
            type:"text",
            name:"bestEmail"
         }}
          label5={"Re- enter Email"}
          argument5={"reenterEmail"}
          input5={{
            id:"reenterEmail",
            type:"text",
            name:"reenterEmail"
         }}
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
          name:"stateProvince",
          id:"stateProvince"
         }}
         label11={"State/Province"}
         argument11={"stateProvince"}
         select11={{
          name:"stateProvince",
          id:"stateProvince"
         }}>  
        </Card>
    </React.Fragment>
  )
}

export default Step1