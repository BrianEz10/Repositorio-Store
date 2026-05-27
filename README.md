FoodStore - Store Frontend + Backend
Descripción

FoodStore es una aplicación ecommerce fullstack desarrollada con React + FastAPI que permite:

visualizar productos,
agregar productos al carrito,
autenticación JWT,
persistencia de sesión,
gestión de direcciones,
realizar pedidos,
visualizar historial de pedidos,
integración completa frontend/backend.

El proyecto consume una API REST real utilizando FastAPI y PostgreSQL.

Tecnologías utilizadas
Frontend
React
TypeScript
Vite
React Router DOM
Zustand
React Query
Axios
TailwindCSS
Backend
FastAPI
SQLModel
PostgreSQL
JWT Authentication
Pydantic
Uvicorn
Arquitectura Frontend

El frontend utiliza arquitectura modular feature-based.

src/
│
├── features/
│   ├── auth/
│   ├── cart/
│   ├── directions/
│   ├── orders/
│   └── productos/
│
├── lib/
│
├── router/
│
├── shared/
│
└── store/

VITE_API_URL=http://127.0.0.1:8000
Instalación frontend
npm install
npm run dev

video store: https://docs.google.com/document/d/1lTW-vSS0jxK87CmIzslpnFtdeWyPBvjF-oqIsp5W12o/edit?usp=sharing