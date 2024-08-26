

export default function Smallnavbar(){

    return(
        <>
        <div className="searches">
            <div className="texts">
                <div>
            <div className='searchContainer'><input type='text' placeholder='Suchen' className='searchInput'/>
          <img src="imgs\img2.png" height={30} width={30} className='searchIcon '/>
           </div>
           </div>
           <div className='selectors'>    
                <select >
                    <option>Terpene</option>
                    <option>Hello</option>
                    </select> 
    </div> 

    <div className="Venr">
        <p>Venrfugbarkeit</p>
        <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
    </div>
<div className="imges">
    <img src="imgs\menu.png" height={35} width={40} />
    </div>
            </div>

           
        </div>
        </>
    )
}