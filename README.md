# [EcoLife Market](https://github.com/tu-usuario/EcoLife-Market) - [React](https://reactjs.org) + [TypeScript](https://www.typescriptlang.org) + [Vite](https://vitejs.dev)

EcoLife Market es una aplicación web de comercio electrónico centrada en la venta de productos orgánicos de bienestar e higiene. La aplicación permite a los usuarios ver una lista de productos con sus nombres, precios y descripciones, así como añadir, editar y eliminar productos.

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- React Router
- Visual Studio Code

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

ecolife-market/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── NavBar.tsx
│ │ ├── ProductItem.tsx
│ ├── context/
│ │ ├── AuthContext.tsx
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── Products.tsx
│ │ ├── ProductDetails.tsx
│ │ ├── AddProduct.tsx
│ │ ├── EditProduct.tsx
│ │ ├── Login.tsx
│ │ ├── SignUp.tsx
│ ├── styles/
│ │ ├── Login.css
│ │ ├── Products.css
│ ├── App.tsx
│ ├── AppRouter.tsx
│ ├── index.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md

bash
Copiar código

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/EcoLife-Market.git
Navega al directorio del proyecto:

sh
Copiar código
cd ecolife-market
Instala las dependencias:

sh
Copiar código
npm install
Inicia el servidor de desarrollo:

sh
Copiar código
npm run dev
Configuración de Componentes
Nombre del Componente	Descripción	Enlace
Navbar	Proporciona la navegación principal de la aplicación.	NavBar.tsx
Header	Encabezado de la aplicación que incluye el nombre y el logo.	Header.tsx
Footer	Pie de página de la aplicación.	Footer.tsx
ProductItem	Componente para mostrar la información de un producto individual.	ProductItem.tsx
AuthContext	Proporciona contexto de autenticación para la aplicación.	AuthContext.tsx
Home	Página de inicio de la aplicación.	Home.tsx
Products	Página para ver y gestionar productos.	Products.tsx
ProductDetails	Página para ver los detalles de un producto.	ProductDetails.tsx
AddProduct	Formulario para añadir nuevos productos.	AddProduct.tsx
EditProduct	Formulario para editar productos existentes.	EditProduct.tsx
Login	Página de inicio de sesión.	Login.tsx
SignUp	Página de registro de nuevos usuarios.	SignUp.tsx
App	Configuración de las rutas de la aplicación.	App.tsx
AppRouter	Configuración de enrutamiento principal de la aplicación.	AppRouter.tsx
index	Punto de entrada principal de la aplicación.	index.tsx
Login.css	Estilos específicos para la página de inicio de sesión.	Login.css
Products.css	Estilos específicos para la página de productos.	Products.css
Descripción de las Pruebas
El proyecto utiliza Vitest y Testing Library para realizar pruebas.

Tipos de Pruebas
Pruebas de Renderizado: Verifica que los componentes se renderizan correctamente.
Pruebas de Funcionalidad: Verifica que las funciones críticas, como el login y la gestión de productos, funcionan como se espera.
Pruebas de Integración: Asegura que los componentes funcionan bien juntos.
Ejecución de las Pruebas
Para ejecutar todas las pruebas, usa el siguiente comando:

sh
Copiar código
npm test
Para ejecutar pruebas específicas, puedes usar el siguiente comando:

sh
Copiar código
npm test -- <ruta/al/archivo/de/prueba>
Por ejemplo:

sh
Copiar código
npm test -- src/pages/Login.test.tsx
Estructura de los Archivos de Prueba
Los archivos de prueba están ubicados en el mismo directorio que los componentes a los que prueban, con el sufijo .test.tsx.

Ejemplo de un archivo de prueba:

typescript
Copiar código
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext';

describe('Login Component', () => {
  it('renders login form', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('shows error message when fields are empty', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
  });
});
Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.

Licencia
