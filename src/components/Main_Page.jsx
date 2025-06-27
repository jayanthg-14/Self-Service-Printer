import './Main_Page.css'
import Upload from './Upload';
import {Route, Routes} from 'react-router-dom'
const Main_Page =()=>{
    return(
        <>
        <div className="header">
            <div className="title">Self Print Station</div>
            <div className="description">Easy way | Easy Print</div>
        </div>
        <div className="nav">
            <span className="nav-item">Upload</span>
            <span className="nav-item">Print Configuration</span>
            <span className="nav-item">Print Preview</span>
            <span className="nav-item">Payment options</span>
            <span className="nav-item">Payment</span>
        </div>
        
        <Routes>
            <Route path='' element={<Upload></Upload>}></Route>
        </Routes>
        </>
    )
}
export default Main_Page;