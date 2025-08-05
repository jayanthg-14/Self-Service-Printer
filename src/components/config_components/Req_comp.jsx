    import './Req_comp.css';
    const Req_comp = ()=>{
        return(
            <>
                <div id="req_setting">
                    <label id="configurations">Configurations</label>
                    <div id='range'>
                        <label className = "range">Range:</label>
                        <div>
                            <input type="radio" className="range all" id="input" />
                            <label className="range all" id="label">Print All</label>
                        </div>
                        <div>
                            <label className="range custom" id="label" style={{paddingTop:"2px"}}>Custom</label>
                            <input type="text" className="range custom"  id="input" placeholder="Enter the Range"/>
                        </div>
                        

                    </div>
                    
                    <div id='print_type'>
                        <label className="print_type" id='title'>Print Type:</label>

                        <div id='color'>
                            <input type="radio" className="print_type color" id="input"/>
                            <label className="print_type" id="label">Color</label>
                        </div>
                        
                        <div id='bw'>
                            <input type="radio" className="print_type bw" id="input"/>
                            <label className="print_type bw" id="label">Black & White</label>
                        </div>
                    </div>

                    <div id='copies'>
                        <label className="copies" id='label'>Copies:</label>
                        <input type="number" className="copies" id='input' style={{width:"50px"}}/>
                    </div>

                </div>

            </>
        )
    }
    export default Req_comp;