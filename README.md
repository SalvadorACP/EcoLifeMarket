# [EcoLife Market](https://github.com/SalvadorACP/EcoLifeMarket) - [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org) + [Vite](https://vitejs.dev)


EcoLife Market es una aplicación web de comercio electrónico centrada en la venta de productos orgánicos de bienestar e higiene. La aplicación permite a los usuarios ver una lista de productos con sus nombres, precios y descripciones, así como añadir y eliminar productos.

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- React Router
- Visual Studio Code

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

/src
   /components
      NavBar.tsx
      Header.tsx
      Footer.tsx
   /context
      AuthContext.tsx
   /CssComponents
      Footer.css
      Login.css
      ProductDetails.css
      Products.css
   /pages
      About.tsx
      Contact.tsx
      Home.tsx
      Login.tsx
      ProductDetails.tsx
      ProductForm.tsx
      Products.tsx
      Signup.tsx
App.test.tsx
App.tsx
AppRouter.tsx


## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   bash
   git clone <https://github.com/SalvadorACP/EcoLifeMarket>
2. Navega al directorio del proyecto:
   bash
   cd EcoLifeMarket
3. Instala las dependencias:
   bash
   npm install
4. Inicia el servidor de desarrollo:
   bash
   npm run dev
5. Servidor o Backend de la aplicación
   [Backend-EcoLifeMarket](https://github.com/SalvadorACP/Ecolife-Market-Backend)
   
 ## Configuración de componentes
| Nombre del Componente | Descripción | Enlace |
|-----------------------|-------------|--------|
| Navbar              | Proporciona la navegación principal de la aplicación. | [NavBar.tsx](src/components/NavBar.tsx) |
| Home             | Página de bienvenida de la aplicación. | [Home.tsx](src/pages/Home.tsx) |
| Products           | Muestra una lista de productos con nombre y precio. | [Products.tsx](src/pages/Products.tsx) |
| Products            | Permite ver y eliminar productos. | [Products.tsx](src/pages/Products.tsx) |
| ProductForm          | Formulario para añadir nuevos productos. | [ProductForm.tsx](src/pages/ProductForm.tsx) |
| api                 | Contiene las funciones para realizar solicitudes HTTP al servidor. | [api.ts](src/services/api.ts) |
| App                 | Configuración de las rutas de la aplicación. | [App.tsx](src/App.tsx) |
| main                | Punto de entrada principal de la aplicación. | [main.tsx](src/main.tsx) |
| index.css           | Estilos globales de la aplicación. | [index.css](src/index.css) |
