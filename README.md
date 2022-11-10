
# Jael-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### jaelEspinosa

## Ejemplo:

```
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';
```

```
const product = {
      id: '1',
      title: 'your title',
      img:'your url image'
}

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
                    <ProductImage  />
                    <ProductTitle/>
                    <ProductButtons />

                  </>
                )
              }
           
</ProductCard>
```