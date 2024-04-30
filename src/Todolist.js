import React, { useState } from 'react';

export default function Todolist() {
  const [activity, setActivity] = useState('');

  const[listData,SetlistData]=useState([]);
  const addActivity=()=>{
       
        SetlistData((listData)=>{
          const updatedList=[...listData,activity]
          setActivity('')
          return updatedList

        })

  }
  const removelistData = (i) => {
    const updatedlistData = listData.filter((elem, id) => id !== i);
    SetlistData(updatedlistData);
  };
  const removeAll=()=>{
        SetlistData('');
  }

  return (
  <>
  <div className='container'>
    <div className='header'>TODO LIST</div>
    <input type="text" className=''  placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className="List-heading">Here is your List : {')'}</p>
    {listData.length !== 0 && listData.map((data, i) => (
  <div key={i}>
    <div className='listData'>{data}</div>
    <div className='btn-position'>
      <button onClick={() => removelistData(i)}>Remove(-)</button>
    </div>
  </div>
))}
   {listData.length>=1 && <button onClick={removeAll}>Remove All</button> }
   
  </div>
  </>
  );
}
