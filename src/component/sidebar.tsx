'use client';
import React, { useState ,ChangeEvent } from 'react';


export default function Sidebar(){

    const [minValue, setMinValue] = useState<number>(20);
  const [maxValue, setMaxValue] = useState<number>(80);
  const [inputMinValue, setInputMinValue] = useState<number>(minValue);
  const [inputMaxValue, setInputMaxValue] = useState<number>(maxValue);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    setInputMinValue(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    setInputMaxValue(value);
  };

  const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setInputMinValue(value);
    setMinValue(value);
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setInputMaxValue(value);
    setMaxValue(value);
  };



   
   
    return(
        <>
        <div className="sidebar">
            <div className="Bluten">
               <div className="span"></div> 
               <p className="para">Bluten</p>
            </div>
            <div className="filter">
            <p>Filter</p> 
            </div>

            <div className='Genhalt'>
                <p >Preis</p>


            </div>
            <div className='bottoms'>
      
      <div className='progresse'
      ></div>
              
       <div className='ranges'>
          
      <input type='range' 
      className='range-min'
      value={minValue}
                onChange={handleMinChange}
      min={0}
      step={10}
      max={100}
      
      />
      <input type='range' 
      className='range-max'
      value={maxValue}
                onChange={handleMaxChange}
      min={0}
      step={10}
      max={100}
      />
      
      </div>
      </div>
      <div className='hello'>
    <input type='text' 
     min="0"
          max="99"
    value={inputMinValue}
    onChange={handleMinInputChange}
    />
    <div className="seperator">-</div>
   <input type='text'
   min="1"
   max="100" value={inputMaxValue}
          onChange={handleMaxInputChange}/>
   </div>
            <div className="selector">

                <select>
                    <option>Hersteller </option>
   
    <option>ADREXpharma</option>
   
    
    </select>
  </div>

  <div className='Genhalt'>
    <p>THC Gehait</p>
<div>
<div className='bottom'>
      
      <div className='progress'
      ></div>
              
       <div className='range'>
          
      <input type='range' 
      className='range-min'
      value={minValue}
                onChange={handleMinChange}
      min={0}
      step={10}
      max={100}
      
      />
      <input type='range' 
      className='range-max'
      value={maxValue}
                onChange={handleMaxChange}
      min={0}
      step={10}
      max={100}
      />
      
      </div>
      </div>
</div>
    
<div className='hello'>
    <input type='text' 
     min="0"
          max="99"
    value={inputMinValue}
    onChange={handleMinInputChange}
    />
    <div className="seperator">-</div>
   <input type='text'
   min="1"
   max="100" value={inputMaxValue}
          onChange={handleMaxInputChange}/>
   </div>
  </div>

  <div className='Genhalt'>
    <p>CBD Gehait</p>


  </div>

  <div className='bottom'>
      
      <div className='progress'
      ></div>
              
       <div className='range'>
          
      <input type='range' 
      className='range-min'
      value={minValue}
                onChange={handleMinChange}
      min={0}
      step={10}
      max={100}
      
      />
      <input type='range' 
      className='range-max'
      value={maxValue}
                onChange={handleMaxChange}
      min={0}
      step={10}
      max={100}
      />
      
      </div>
      </div>

      <div className='hello'>
    <input type='text' 
     min="0"
          max="99"
    value={inputMinValue}
    onChange={handleMinInputChange}
    />
    <div className="seperator">-</div>
   <input type='text'
   min="1"
   max="100" value={inputMaxValue}
          onChange={handleMaxInputChange}/>
   </div>

      <div className="Bestrap Genhalt">
        <p>Genetik</p>
        <div className="Indica">
        <button>Indica</button>
        <button>Sativa</button>
        <button>Hybrid</button>
        </div>
        </div>      
            

        <div className="Bestrap Genhalt">
        <p>Bestrahltung</p>
        <div className="Indica">
        <button>Indica</button>
        <button>nicht bestrahit</button>
       
        </div>
        </div> 

        <div className='selector'>    
                <select >
                    <option>Terpene</option>
                    <option>Hello</option>
    </select>  
    </div> 
        </div>
        </>
    )
}