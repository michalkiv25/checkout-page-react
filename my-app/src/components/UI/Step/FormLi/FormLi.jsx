import React from 'react';

// import from project
import './FormLi.css';

function FormLi({props}) {
 
    // Terms for className
    const showDisabled1_5= !props.label1 || !props.label2 || !props.label3 || !props.label4 || !props.label5  ? "disabled": "show";
    const showDisabled1_6= !props.label6 || !props.label7 || !props.label8 || !props.label9 ? "disabled": "show";
    const showDisabledSelect1= !props.select10 ? "disabled": "show";
    const showDisabledSelect2= !props.select11 ? "disabled": "show";
    
    return (
            <React.Fragment>
                <li>
                    <label  htmlFor={props.argument1}>{props.label1}</label>
                    <input  className={showDisabled1_5} {...props.input1}/>
                </li>
                <li>
                    <label htmlFor={props.argument2}>{props.label2}</label>
                    <input  className={showDisabled1_5} {...props.input2}/>
                </li>
                <li>
                    <label htmlFor={props.argument3}>{props.label3}</label>
                    <input className={showDisabled1_5} {...props.input3} />
                </li>
                <li>
                    <label htmlFor={props.argument4}>{props.label4}</label>
                    <input  className={showDisabled1_5} {...props.input4}/>
                </li>
                <li>
                    <label htmlFor={props.argument5}>{props.label5}</label>
                    <input className={showDisabled1_5} {...props.input5}/>
                </li>
                <li>
                    <label htmlFor={props.argument6}>{props.label6}</label>
                    <input className={showDisabled1_6} {...props.input6}/>
                </li>
                <li>
                    <label htmlFor={props.argument7}>{props.label7}</label>
                    <input className={showDisabled1_6} {...props.input7}/>
                </li>
                <li>
                    <label htmlFor={props.argument8}>{props.label8}</label>
                    <input className={showDisabled1_6} {...props.input8}/>
                </li>
                <li >
                    <label htmlFor={props.argument9}>{props.label9}</label>
                    <input className={showDisabled1_6}  {...props.input9}/>
                </li> 
                <li className={props.styleSelect}>
                    <label htmlFor={props.argument10} >{props.label10}</label>
                    <select className={showDisabledSelect1} {...props.select10}>
                        <optgroup>
                            <option defaultValue={props.valueSelect10}>{props.valueSelect10}</option>
                        </optgroup>
                    </select>
                </li>
                <li >
                    <label htmlFor={props.argument11}>{props.label11}</label>
                    <select className={showDisabledSelect2} {...props.select11}>
                        <optgroup>
                            <option defaultValue={props.valueSelect11} >{props.valueSelect11}</option>
                        </optgroup>
                    </select>
                </li>
            </React.Fragment>
  )
}

export default FormLi