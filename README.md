# Food Store - Frontend

Frontend de e-commerce de comida que consume la API de FastAPI (backsito).
Catalogo de productos, carrito persistente, checkout con Mercado Pago y
seguimiento de pedidos en tiempo real via WebSocket.

# Nuestro Stack

**React 19**

**TypeScript 6**

**Vite 8**

**TanStack Query 5**

**Zustand 5**

**Tailwind CSS 4**

**Axios**

**Mercado Pago SDK**

# Como instalarlo

## 1. Clonas el repo.

git clone <url-del-repo>

## 2. Entras a la carpeta.

cd store

## 3. Instalas las dependencias.

npm install

## 4. Copias las variables de entorno.

cp .env.example .env

## 5. Configuras las variables.


VITE_API_URL=http://localhost:8000/api/v1
VITE_MP_PUBLIC_KEY=TEST-xxxx-xxxx-xxxx-xxxx
VITE_ADMIN_URL=http://localhost:5174


## 6. Levantas el proyecto.

npm run dev

## 7. Abris el navegador.

http://localhost:5173

# Seed del backend

## El backend tiene que estar corriendo en http://localhost:8000.

**Usuario admin**: admin@foodstore.com / Admin1234!

**Roles disponibles**: ADMIN, STOCK, PEDIDOS, CLIENT

# WebSocket

El estado de los pedidos se actualiza en tiempo real mediante WebSocket.
Cuando la conexion esta activa, un badge verde "En vivo" aparece en la
esquina inferior derecha de la pantalla.

# Video Demostracion



# Scripts

| Comando | Descripcion |

| `npm run dev` | Desarrollo |
| `npm run build` | Build produccion |
| `npm run preview` | Preview del build |
