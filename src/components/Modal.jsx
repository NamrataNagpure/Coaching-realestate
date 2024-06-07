import React, { useState } from "react";


import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function Modal(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleclose = () => setOpen(false);
  const [value, setValue] = useState("/coaching");

  const getValue = () => {
    const value = document.querySelector("select").value;
    const name = document.querySelector(".name").value;
    setValue(value);
    setName(name);
   
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        {props.btnhead}
      </Button>
      <Dialog open={open} handler={handleclose}>
        <DialogHeader className="text-center">
          {props.detail?props.detail:'Choose Your interest'}
        </DialogHeader>
        <DialogBody>
          <div className="App">
            {props.page == "other" ? (
              <div className={`flex flex-col items-center justify-center ${props.height} bg-gray-400`}>
                <h1 className="font-bold text-3xl text-purple-900">
                  {props.btnhead}
                </h1>
                <label htmlFor="name" className="text-3xl pt-4">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  className="border-2 border-slate-500"
                />
                <label htmlFor="location" className="text-3xl pt-4">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id=""
                  className="border-2 border-slate-500"
                />
                <button
                  type="submit"
                  className="py-2 px-8 mt-2 rounded border-2 border-red-400 bg-red-600"
                >
                  Submit
                </button>
              </div>
            ) : (
              <form>
                <div className="flex flex-col items-center gap-4">
                  <select name="" id="" onChange={getValue}>
                    <option value="coaching">Coaching</option>
                    <option value="realstate">RealEstate</option>
                  </select>
                  <input
                    name="name"
                    placeholder="Name"
                    className="border-2 border-gray-400	name"
                    required
                    onKeyDown={getValue}
                  />
                </div>
              </form>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleclose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleclose}>
            {name.length == 0 ? (
              <span>Confirm</span>
            ) : (
              <NavLink to={value}>
                <span>Confirm</span>
              </NavLink>
            )}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
