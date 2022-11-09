
# Jael-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### jaelEspinosa

## Ejemplo:

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jael-product-card'
```

```
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
```