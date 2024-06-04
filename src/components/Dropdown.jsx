import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Dropdown = () => {
    return (
      <div>
        <label className="mt-4">Assign user(s) to as task:</label>
        
        <button className="  px-4 w-full py-2 flex items-center justify-between  rounded border border-[#828FA340] hover:border-primary cursor-pointer relative ">
          <span className="block">
            <select name="" id="">
                <option value="coaching">Choching</option>
                <option value="real">RealEstate</option>
            </select>
          </span>
        </button>
      </div>
    );
  };

  export default Dropdown
