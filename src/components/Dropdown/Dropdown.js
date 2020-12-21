import React from 'react';
import '../../App.css';
import './Dropdown.css';
import { Dropdown } from 'react-bootstrap';

function DropdownMenu(props) {
  return (
    <div className="DropdownContainer">
        {props.data.map((data, index) => {
          return (
            <ul className="DropdownList" key={index}>
              <Dropdown>
                <Dropdown.Toggle className="dropdown-toggle-ellipsis" variant="success" id="dropdown-basic">
                  {data.title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">{data.text}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          );
        })}
    </div>
  );
}

export default DropdownMenu;
