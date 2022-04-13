import React from 'react';
import { Dropdown, DropdownButton } from "react-bootstrap";
import Cities from "./Cities";
import { useCity } from "../context/CityContext";

const Header = () => {
  const { city, setCity } = useCity();
  const handleCity = (e) => {
    setCity(e);
  };

  return (
    <div className="bg-success p-2 text-white bg-opacity-75">
      <DropdownButton
        id="dropdown-basic-button"
        title={city || "Select City"}
        align="start"
        onSelect={handleCity}
      >
        {Object.values(Cities).map((cityTr, index) => (
          <Dropdown.Item
            key={index}
            eventKey={
              cityTr.charAt(0).toUpperCase() + cityTr.slice(1).toLowerCase()
            }
          >
            {cityTr}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  )
}

export default Header