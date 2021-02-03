import React from "react";
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Connect from '../src/app/Connect.jsx';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Connect />)

describe('Connection Page', () => {
  /*
    Added Jest 
    Installed latest version adapter
    Needed a .babelrc with presets "@babel/preset-env", "@babel/preset-react"
    Downgraded React to reflect enzyme adapter
    Kept server running during tests
    STUDY DOC METHODS for test syntax
  */

  it("Renders a form", () => {
    expect(wrapper.find("form"))
  })

  it("Renders elements with class name formElement", () => {
    expect(wrapper.find("form").hasClass("formElement"))
  })

});