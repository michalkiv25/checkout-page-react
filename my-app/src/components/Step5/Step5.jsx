import React from 'react';

// import from project
import Card from '../UI/Step/Step';
import Border from '../UI/Border/Border';
import './Step5.css';

function Step5() {
  return (
        <React.Fragment>
            <div className='card5'>
                <Card 
                    Step={"Step 5"} 
                    Subheading={"Confirm Your Order"}>  
                </Card>
            </div>
            <Border styleBoxConfirm={"styleBoxConfirm"}>
                <ul className='ul5'>
                    <li className='li5'>
                        <h3 className="descriptionTitle">Subtotal</h3> <p className='points'></p> <h3 className='price'>$37.00</h3>
                    </li>
                </ul>
                <ul className='ul5'>
                    <li className='li5'>
                        <h3 className="descriptionTitle descriptionTitle2" >Shipping</h3> 
                        <p className='points points2'></p> 
                        <h3 className='price price2'>$00.00</h3> 
                    </li>
                </ul>
                <ul className="ul5">
                    <li className='li5'>
                    <h3 className=' descriptionTitle descriptionTitle3'>Total</h3> <p className='points points3'></p> <h3 className='price price3'>$37.00</h3>
                    <hr className='hr5'></hr>
                    </li>
                </ul>
                <div className="note">
                    <p >Note: The charge will appear on <br></br> tour card as CuraLife</p>
                </div>
            </Border>
        </React.Fragment>
  )
}

export default Step5

// <Summary
// titel1={"Subtotal"}
// price1={"$37.00"}
// titel2={"Shipping"}
// price2={"$00.00"}
// titel3={"Total"}
// price3={"$37.00"}
// stypeNote={true}
// ></Summary>

