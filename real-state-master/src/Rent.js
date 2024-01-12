import React, { useState } from 'react';
import './Rent.css';
import axios from 'axios';

const RentPage = () => {
const [selectedOption, setSelectedOption] = useState('false');

const rentOptions = [   ];
const [formData, setFormData] = useState({
  });

const floorOptions = [
    { value: 'Ground', label: 'Ground' },
    { value: 'First', label: 'First' },
    { value: 'Second', label: 'Second' },
  ];

const carParking=[
    {value:'yes' ,label:'yes'},
    {value:'no', label:'no'}];

const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

const facingOptions = [
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' },
    { value: 'South', label: 'South' },
    { value: 'North', label: 'North' },
    { value: 'North-East', label: 'North-East' },
    { value: 'North-West', label: 'North-West' },
    { value: 'South-East', label: 'South-East' },
    { value: 'North-West', label: 'North-West' }
  ];

const [showNextButton, setShowNextButton] = useState(false);
const handleChange = (e) => {
const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

const handleSave = () => {
console.log('Form data saved:', formData);
    setShowNextButton(true); 
  };

  const handleNext = () => {
    console.log('Next button clicked');
    
  };
  
return (
      <div className="main">
        <div className="background-container blur-image">
 <div className="nnm">
        <form class="mm" className="blur-image transparent-form">
      <h1 className='h1'>Rent Page</h1>
      <hr></hr>
      <label htmlFor="rentOptions">Type :
        <button className="button:active" class="rui-pdy8W rui-teFcP" data-aaut-id="optype0">Restaurants</button>
        <button class="rui-pdy8W rui-teFcP" data-aaut-id="optype1">Warehouse</button>
        <button class="rui-pdy8W rui-teFcP" data-aaut-id="optype2">Shops</button> </label>
        {rentOptions.map((button) => (
          <button key={button.value} value={button.value}>
            {button.label}
          </button>
        ))}
      <br></br><br></br>
      <label htmlFor="floorOptions">Total Floors : &nbsp;
      <select id="floorOptions" value={selectedOption} onChange={handleSelectChange}>
        <option value="">floor</option>
        {floorOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select></label>
      <br></br><br></br>
      <label htmlFor='carParking'>Car Parking :
<button className="no"class="rui-pdy8W rui-teFcP" data-aut-id="opbachelors0">No</button>
<button className="yes"classclass="rui-pdy8W" data-aut-id="opbachelors1">Yes</button> </label>
      <br></br><br></br>
      <label htmlFor="facingOptions">Facing : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select id="facingOptions" value={selectedOption} onChange={handleSelectChange}>
        <option value="">facing</option>
        {facingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select></label>
      <br></br><br></br>
      <label htmlFor='maintenance'>Maintenance  :  
      <input placeholder="monthly"id="maintenance" name="maintenance"
 type="number" autocomplete="off" class="rui-2brBP
 rui-cXknh undefined" data-aut-id="inmaintenance"
 min="0" step="1" value="" />
 </label>
<br></br><br></br>
 <label htmlFor='title'>Add Title :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <input id="title" placeholder="Add Title" name="title"
 type="text" autocomplete="off" class="rui-2brBP
 rui-cXknh undefined" 
 maxLength="70" value="" />
 </label><br></br><br></br>
 <label htmlFor='description'>Description :&nbsp;&nbsp;
 <textarea placeholder="Description" autocomplete="off" 
 id="description" class="rui-2brBP rui-l9yV9"
  maxlength="4096" name="description"
   ></textarea>
   <br></br><br></br>

<label htmlFor='price'>Set a Price :&nbsp;&nbsp;&nbsp;
<input  name="price" type="number"></input>
<div class="rui-FL2Uo rui-VCnsY rui-HaVL3"><div>
    </div></div>
{/* <div class="rui-60oLS">
   
    <div class="rui-XGzjB rui-IxKZ1"></div>
</div> */}
</label>
 </label><br></br><br></br>

       <div>
        <label>Add Photos</label><br></br>
        <input type='file' ></input>
        <input type='file' ></input>
        <input type='file' ></input>
        <input type='file' ></input>
        
        <input type='file' ></input>
       </div><br></br><br></br>

       <button className='button1' type="button" onClick={handleSave}>Save</button>
        {showNextButton && <button className='button2' type="button" onClick={handleNext}>Next</button>}
        </form></div>
        </div>
 </div>
  );
};

export default RentPage;
