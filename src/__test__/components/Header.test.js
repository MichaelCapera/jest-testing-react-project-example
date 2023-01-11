import React from "react";
import {mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header/>', () => {

  test('Component render Header', () => {
    const header = shallow(
        <ProviderMock>
            <Header/>
        </ProviderMock>,
      );
      expect(header.length).toEqual(1);
  });
  test('Title header render', () => {
      const header = mount(
        <ProviderMock>
            <Header/>
        </ProviderMock>,
      );
      expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  }); 
});

describe('Header Snapshot', () => {
  test('Test UI header component', () => {
    const header = create(<ProviderMock><Header/></ProviderMock>);
    expect(header.toJSON()).toMatchSnapshot();
  });
});