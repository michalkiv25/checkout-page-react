// import from project
import "./Time_Money.css";
import Border from '../UI/Border/Border';
import Card from '../UI/Step/Step';

function Time_Money() {
  return (
        <Border styleBoxTimeMoney={"styleBoxTimeMoney"}>
            <img className='imgTimeMoney' src="./images/2.png" alt="CuraLin"></img>
            <h4 className='title1-box'>Prefer to Save <br></br> Time & Money</h4>
            <h3 className='title2-box'>Save $8 per bottle</h3>
            <ul  className='inputAndLabel'>
               <Card  
               radio = {<p>When you check this box, your <br></br> order will be upgraded to a <br></br>CuraLin 3 Pack,
                saving you time in <br></br> reordering, <b>and 10% off your order.</b> <br></br>
                You are still protected by our <br></br> money back guarantee. 
                </p>}
               inputRadio={{
                 id:"radio",
                 type:"radio",
                 name:"radio",
                 value:"radio"
                }}
                styleRadioTime_Money={"styleRadioTime_Money"}
                labelRadioTime_Money={"labelRadioTime_Money"}
               ></Card>
            </ul>
        </Border>
)
}

export default Time_Money;
