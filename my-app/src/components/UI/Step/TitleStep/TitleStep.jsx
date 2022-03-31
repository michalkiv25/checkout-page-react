import React from 'react';

// import from project
import './TitleStep.css';

// Title in each top of step 
function TitleStep({props}) {

  return (
        <React.Fragment>
            <div className={`start-row ${props.styleTitle}`}>
                <h4 className="titleOne">{props.Step}</h4>
                <h2 className="titleTwo">{props.Subheading}</h2>
            </div>
        </React.Fragment>
  )
}

export default TitleStep