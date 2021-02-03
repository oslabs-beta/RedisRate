import React from "react";
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Connect from '../src/app/Connect.jsx';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Connect />)

describe('Connection Page', () => {

  it("Test", () => {
    expect(wrapper.contains([<span>Hello</span>, <div>World</div>])).toBe(false);
  })
  
  it("Renders a form", () => {
    expect(wrapper.find("form"))
  })

  it("Renders elements with class name formElement", () => {
    expect(wrapper.find("form").hasClass("formElement"))
  })

  it("Renders a submit button", () => {
    expect(wrapper.find("submit"))
  })


});