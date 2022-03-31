import React from 'react';

// import from project
import './Step4.css'
import Card from '../UI/Step/Step';
import Border from '../UI/Border/Border';


function Step4() {
  return (
        <React.Fragment>
            <hr></hr>
            {/*Title */}
            <Card 
                Step={"Step 4"} 
                Subheading={"Enter PayMent Info"}>  
            </Card>
                <Border>
                    <ul className='ul-one'>
                        <li className='checkbox-radio-box '>
                            <input  type="radio" id="paypal" name="paypal" defaultValue="paypal"/>
                            <label className='checkbox-radio' htmlFor="paypal">Pay Wite
                                <img className='checkbox-radio-img' src='/images/PayPal.svg.png' alt='PayPal'></img>
                            </label>
                        </li>
                        <div className='hr4'></div>
                        <li className='checkbox-radio-box'>
                            <input  type="radio" id="creditCard" name="creditCard" value="creditCard"/>
                            <label className='checkbox-radio' htmlFor="creditCard">Pay Wite Credit Card</label>
                        </li>
                    </ul>
                    <div className="backgroundChange">
                        <ul>
                            <br></br>
                            <li>
                                <label htmlFor="namecard">Name on Card</label>
                                <input type="text" id="namecard" name="namecard"/>
                            </li>
                            <li>
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber"/>
                            </li>
                            <li>
                                <label htmlFor=">expirationDate">Expiration Date</label>
                                <div>
                                    <select name="expirationDate" id="expirationDate" className='select'>
                                        <optgroup>
                                            <option  defaultValue="Year" > Year</option>
                                        </optgroup>
                                    </select>
                                    <select name="month" id="month">
                                        <optgroup>
                                            <option defaultValue="Month" > Month</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </li>
                            <li >
                                <div className='security'>
                                    <label htmlFor="security">Security Code</label>
                                    <input type="text" id="security" name="security" className='inputSecurity'/>
                                    <span>What's <span className='spanThis'>this?</span> </span>
                                </div>
                            </li>
                        </ul>
                        <br></br>
                        <hr className='hr'></hr>
                        <div className='allImg'>
                            <img className='img-footer-card4' src="/images/visa.png" alt="visa"></img>
                            <img className='img-footer-card4' src="/images/mastercard.png" alt="mastercard"></img>
                            <img className='img-footer-card4' src="/images/amex.png" alt="amex"></img>
                            <img className='img-footer-card4' src="/images/discover.png" alt="discover"></img>
                        </div>
                    </div>
                </Border>
        </React.Fragment>
  )
}

export default Step4



