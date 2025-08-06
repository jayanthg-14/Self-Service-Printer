import './Print_Configuration.css'
import Doc_comp from "./config_components/Doc_comp.jsx";
import Cost_comp from "./config_components/Cost_comp.jsx";
import Req_comp from './config_components/Req_comp.jsx';

const Print_Configuration =()=>{
    return(
        <>
        <div className="config_page">
            <div className="title">
                <span id='config_title'>Print Configuration</span>
                <span id='config_desc'>Select your Requirements</span>
            </div>
            <div className="configs">
                    <Doc_comp></Doc_comp>
                    <Req_comp></Req_comp>
                    <Cost_comp></Cost_comp>
                
            </div>
            
        </div>
        </>
    )
}
export default Print_Configuration;