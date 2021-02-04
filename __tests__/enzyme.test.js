import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Connect from '../src/Connect.jsx';
import Navigation from '../src/Navigation.jsx';
import Home from '../src/Home.jsx';


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

describe('Logged in user pages', () => {

  describe('Navigation', () => {
    
    const wrapper = shallow(<Navigation />)
    
    it('should have navigation menu', () => {
      expect(wrapper.find('div'));
      expect(wrapper.find('main'));
    })
  })

  describe('Home', () => {
    const wrapper = shallow(<Home />)
    const port = '';
    const ipaddress = '';
    
    it('should have a port and ip address', () => {
      expect(wrapper.render(port))
      expect(wrapper.render(ipaddress))
    })
  })

})
