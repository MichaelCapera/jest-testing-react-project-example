import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer/>', () => {
 const footer = shallow(<Footer/>);
 test('Render footer component', () => {
   expect(footer.length).toEqual(1);
 });

 test('Title render', () => {
   expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");  
 });
});

describe('Footer Snapshot', () => {
  test('Test UI footer component', () => {
    const footer = create(<Footer/>);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
