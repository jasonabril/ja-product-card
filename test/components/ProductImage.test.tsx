import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente con la imagen del personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
