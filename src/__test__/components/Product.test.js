import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/providerMock";
import Product from '../../components/Product';
import ProductMock from '../../components/Product';

describe('<Product/>', () => {
   test('Render of the product component', () => {
      const product = shallow(
        <ProviderMock>
            <Product/>
        </ProviderMock>
      );
      expect(product.length).toEqual(1);
   });
   test('Test click add to cart button', () => {
     const handleAddToCart = jest.fn();
     const wrapper = mount(
      
     <ProviderMock>
     <Product
     product={ProductMock}
     handleAddToCart={handleAddToCart}
     />
     </ProviderMock>
     );
     wrapper.find('button').simulate('click');
     expect(handleAddToCart).toHaveBeenCalledTimes(1);
   });
});