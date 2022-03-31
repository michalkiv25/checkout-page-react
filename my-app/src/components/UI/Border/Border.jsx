//import from project;
import './Border.css';

function Border(props) {
  // Terms for border steps
  const borderSteps= !props.styleBoxTimeMoney? "border_background" : "border_background styleBoxTimeMoney";
  const styleBoxConfirm= !props.styleBoxConfirm ? "" :"styleBoxConfirm";


  return <div className={`${borderSteps} ${styleBoxConfirm}`}>{props.children}</div>
}

export default Border