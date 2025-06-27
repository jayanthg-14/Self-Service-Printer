import './Upload.css'
const Upload =()=>{
    return(
        <>
        <div className="upload_page">
            <div className="title">
                <span id='upload_title'>Upload Documents</span>
                <span id='upload_desc'>Choose your preferred method</span>
            </div>
            <div className="methods">
                <div className="usb_sec">
                        <i className="fa-solid fa-upload i"></i>
                        <span className="slice_title">USB Upload</span>
                        <span className="slice_desc">Use USB to connect pendrive or cable</span>
                        <div className='slice_form'>
                            <span>Supported formats:</span>
                            <div className='formats'>
                                <span className='format' style={{color:"red", fontWeight:"500", backgroundColor:"#ff000038"}}>pdf</span>
                                <span className='format' style={{color:"blue", fontWeight:"500", backgroundColor:"#0000ff39"}}>doc</span>
                                <span className='format' style={{color:"violet", fontWeight:"500", backgroundColor:"#ee82ee3a"}}>docx</span>
                                <span className='format' style={{color:"orange", fontWeight:"500", backgroundColor:"#ffa60038"}}>ppt</span> 
                            </div>
                        </div>      
                </div>
                <div className="qr_sec">
                        <i className="fa-solid fa-qrcode i" ></i>
                        <span className="slice_title">QR Upload</span>  
                        <span className="slice_desc">Scan QR code to upload via phone</span>                    
                        <div className='slice_form'>
                            <span>Supported formats:</span>
                            <div className='formats'>
                                <span className='format' style={{color:"red", fontWeight:"500", backgroundColor:"#ff000038"}}>pdf</span>
                                <span className='format' style={{color:"blue", fontWeight:"500", backgroundColor:"#0000ff39"}}>doc</span>
                                <span className='format' style={{color:"violet", fontWeight:"500", backgroundColor:"#ee82ee3a"}}>docx</span>
                                <span className='format' style={{color:"orange", fontWeight:"500", backgroundColor:"#ffa60038"}}>ppt</span>
                            </div>
                        </div>
                                      
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Upload;