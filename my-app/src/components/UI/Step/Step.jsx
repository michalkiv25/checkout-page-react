import React from 'react';

// import from project
import "./Step.css";
import FormLi from './FormLi/FormLi';
import TitleStep from './TitleStep/TitleStep';

function Card(props) {
    // Terms for input radio
    const classRadio= !props.radio  ? "disabled" : "show radioUl-shipping";
    const styleRadioTime_Money= !props.styleRadioTime_Money ? "" : "styleRadioTime_Money";
    const step3OrTime_Money= (!props.labelRadioTime_Money ?'radio-label':  'labelRadioTime_Money')
 
    return (
            <React.Fragment>    
                {/* All Titles for steps- components */}
                <TitleStep props={props}></TitleStep>
                {/*radio-step 3 */}
                <ul className={classRadio} >
                    <li className={styleRadioTime_Money}>
                        <input className='radio-input'  {...props.inputRadio} />
                        <label className={step3OrTime_Money}  htmlFor={props.argumentRadio}>{props.radio}</label>
                    </li>
                </ul>
                {/*All forms for input */}
                <ul className="flex-outer">
                    <FormLi props={props}></FormLi>
                </ul>
            </React.Fragment>    
    )
}

export default Card
