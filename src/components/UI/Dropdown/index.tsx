import React, { useState } from 'react';

import { Container } from './styles';

interface DropdownProps {
  title?: string;
  subtitle?: string;
  icon?: any;
  children?: any;
  iconSize?: number;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [dropdown, setStateDropdown] = useState(false);
  const [element, setStateElement] = useState<any>(false);

  function closeMenu(event: any) {
    if (!element.contains(event.target)) {
      setStateDropdown(false);
    }
  }

  function showDrop() {
    setStateDropdown(!dropdown);
    document.addEventListener('click', closeMenu);
  }

  return (
    <Container>
      <button
        className="dropdomn"
        ref={(element) => {
          setStateElement(element);
        }}
        onClick={showDrop}
        style={{
          fontSize: props.iconSize ? props.iconSize : '',
        }}
      >
        {props?.icon}
        <div className="labels">
          <p>{props?.title}</p>
          <small>{props?.subtitle}</small>
        </div>
      </button>
      {dropdown ? <div className="menu">{props.children}</div> : null}
    </Container>
  );
};

export default Dropdown;
