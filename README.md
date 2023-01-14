Este es un paquetes de pruebas de despliegue en NPM

### Jason Abril

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'ja-prodcut-card'
```

```
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

```
