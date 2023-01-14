import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: "./coffee-mug.png",
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, maxCount, isMaxCountReached, count, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
