import './Main_Page.css'
import Upload from './Upload';
import { Link } from 'react-router-dom';
import Print_Configuration from './Print_Configuration';
import {Route, Routes} from 'react-router-dom'
const Main_Page =()=>{
    return(
        <>
        <div className="header">
            <div className="title">Self Print Station</div>
            <div className="description">Easy way | Easy Print</div>
        </div>
        <div className="nav">
            <span className="nav-item"><Link to={''}>Upload</Link></span>
            <span className="nav-item"><Link to={'/print_configuration'}>Print Configuration</Link></span>
            <span className="nav-item"><Link>Print Preview</Link></span>
            <span className="nav-item"><Link>Payment options</Link></span>
            <span className="nav-item"><Link>Payment</Link></span>
        </div>
        
        <Routes>
            <Route path='' element={<Upload></Upload>}></Route>
            <Route path='print_configuration' element={<Print_Configuration></Print_Configuration>}></Route>
        </Routes>
        </>
    )
}
export default Main_Page;