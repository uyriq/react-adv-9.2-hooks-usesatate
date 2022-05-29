import React, { useState } from 'react'; //useState для функционального компонента
import "./style.css";

import Cat_off from "./images/cat_off.svg";
import Cat_on from "./images/cat_on.svg";
import Switch_off from "./images/switch_off.svg";
import Switch_on from "./images/switch_on.svg";
import Bubble from "./images/bubble.svg";
import { render } from "react-dom";

const SwitchFunc = (props) => {

  const [isActive, SetIsActive] = useState(false);
  const handleClick = () => {

    if (isActive) SetIsActive(false);
    else SetIsActive(true);
    }


  const className = `root ${isActive ? "on" : "off"}`;
    return (
      <div className={className}>
        <div className={"sideWall"}>
          <button className={"button"} onClick={handleClick} />
        </div>
        <div className={"catWrap"} >
          <div className={"bubble"}  />
          <div className={"wall"}  />
          <div className={"floor"} />
          <div className={"cat"} />
        </div>
      </div>
    );

}

export default SwitchFunc
/* 
export default class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };


  render() {
    const BubbleStyle={backgroundImage: `url(${Bubble})`}
    const Switch_onStyle={backgroundImage: `url(${Switch_on})`}
    const Switch_offStyle={backgroundImage: `url(${Switch_off})`}
    const Cat_onStyle={backgroundImage: `url(${Cat_on})`}
    const Cat_offStyle={backgroundImage: `url(${Cat_off})`}
    
    // Используем JavaScript-шаблон для склейки значения атрибута
    const className = `root ${this.state.isActive ? "on" : "off"}`;

    return (
      <div className={className}>
        <div className={"sideWall"}>
          <button className={"button"} onClick={this.handleClick} />
        </div>
        <div className={"catWrap"} >
          <div className={"bubble"} style={ BubbleStyle } />
          <div className={"wall"}  />
          <div className={"floor"} />
          <div className={"cat"} />
        </div>
      </div>
    );
  }
}
 */