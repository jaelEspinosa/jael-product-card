import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const App = () => {

  const product = {
    id: '1',
    title: 'coffe Mug - Card!',
   // img: './coffee-mug.png'
  };
  return (
    <>
     <ProductCard
              key={product.id}
              product={product}           
              
              initialValues = {{
                count: 4,
                maxCount: 10,
                
              }}
              >
              {
                ({reset, isMaxCountReached, increaseBy, count, }) => (
                  <>
                    <ProductCard.Image  />
                    <ProductCard.Title />
                    <ProductCard.Buttons />

                  </>
                )
              }
           
            </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
