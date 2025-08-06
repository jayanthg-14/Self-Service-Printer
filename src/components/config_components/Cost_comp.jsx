import './Cost_comp.css';
const Cost_comp=()=>{
    return(
        <>
            <div id="cost_breakdown">
                <label className='cost_breakdown' id='title'>Cost Breakdown</label>

                <div className='documents' id='document'>
                    <div className='desc'>
                        <div className="title">Assignment1</div>
                        <div className="pages">12 Pages * 1 Copies</div>
                    </div>
                    
                    <div className='cost'>
                        Rs.24
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cost_comp;