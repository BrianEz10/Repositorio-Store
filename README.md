
# Link Video

https://drive.google.com/drive/folders/1yjGrCX_6oBiD2w3mnM6q0dBx9CaqC06U


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

git clone (https://github.com/BrianEz10/Repositorio-Store.git)

## 2. Entras a la carpeta.

cd Repositorio-Store

## 3. Instalas las dependencias.

npm install

## 4. Copias las variables de entorno.

cp .env.example .env

## 5. Adjuntar las crendeciales de Prueba de Mercado Pago

 1- Inicia sesion en https://www.mercadopago.com.ar/developers
 2- Ingresar a "Tu integración"--> "Crendenciales de prueba"
 3- Ahora tenemos nuestra credencial "Public Key"
 4- Luego nos dirigimos a nuestro archivo creado ".env" y pegamos alli la credencial en su lugar correspondiente.
 5- Guardamos los cambios

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



**Roles disponibles**: ADMIN, STOCK, PEDIDOS, CLIENT

# WebSocket

El estado de los pedidos se actualiza en tiempo real mediante WebSocket.
Cuando la conexion esta activa, un badge verde "En vivo" aparece en la
esquina inferior derecha de la pantalla.



# Scripts

| Comando | Descripcion |

| `npm run dev` | Desarrollo |
| `npm run build` | Build produccion |
| `npm run preview` | Preview del build |
