//import from project;
import './Modal.css';

function Modal(props) {
     // Every container in every Step
     const styleContainer= !props.styleStep6_Container ? "container": "styleStep6_Container";
     
     return <div className={styleContainer}>{props.children}</div>
}

export default Modal