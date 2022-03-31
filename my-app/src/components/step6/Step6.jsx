// import from project
import "./Step6.css";
import Modal from '../UI/Modal/Modal'

function Step6() {
  return (
        <Modal styleStep6_Container={"styleStep6_Container"}>
            <div className='parBox6'>
                <img className='par-img6' src="/images/4.png" alt="30 day money back"></img>
                <h5 className='titlePar1'>100% <br></br> 
                Risk Free
                </h5>
            </div>
            <p className='par6'>if you're not thrilled with how fantasic <br></br>
            you look and feel after tapping into your <br></br>
            unique female hormone advantage & or <br></br> 
            if you are'nt satisfied for any reason in <br></br>
            the next 90 days, retuen anytime for a <br></br>
            full refund (less)
            </p>
     
            <div className='parBox6'>
                <img className='par-img6' src="/images/5.png" alt="pci dss"></img>
                <h5 className='titlePar2'>100% <br></br>
                Protected
                </h5>
              
            </div>
          
            <p className='par6'>
            Your checkout is protected by industry<br></br>
            leading PCI compliant security
            </p>
         

            <div className='parBox6'>
            <img className='par-img6' src="/images/6.png" alt="shopify secure"></img>
                <h5 className='titlePar3'>100% <br></br> Protected</h5>
             
            </div>
            <p className='par6'>
            When you place your order it will be <br></br>
            protected by 256-bit encrypted SSL- the <br></br>
            same technoligy that blanks use to <br></br>
            protect their online transactions!
            </p>
        
            <br></br>
        </Modal>
    )
}

export default Step6