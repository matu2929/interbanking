# Interbanking Challenge API

Este proyecto es una API desarrollada en Node.js + TypeScript usando Prisma como ORM y PostgreSQL como base de datos.  
Sigue una arquitectura hexagonal y está pensada para manejar entidades como empresas y transferencias.

> ✅ Requiere **Node.js v22.14.0**

---

## 🚀 Levantar el proyecto localmente

### 1. Instalar las dependencias

npm install

### 2. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

DATABASE_HOST="postgresql://<USER>:<PASSWORD>@localhost:5433/<DB_NAME>"
PORT=3000

Asegurate de tener PostgreSQL corriendo en el puerto `5433` con un usuario y contraseña válidos.

---

## 🧱 Prisma ORM

### Generar el cliente Prisma (luego de instalar dependencias o modificar `schema.prisma`)

npx prisma generate

### Crear la base de datos y correr las migraciones

npx prisma migrate reset

Este comando:
- Elimina y recrea la base de datos
- Aplica todas las migraciones
- Ejecuta el script de seed (`prisma/seed.ts`) automáticamente

💡 Ideal para empezar desde cero o después de cambios grandes en el modelo.

### Aplicar nuevas migraciones (cuando modificás `schema.prisma`)

npx prisma migrate dev

### Ejecutar manualmente el seed (opcional)

npx prisma db seed

---

## 🧪 Correr los tests

Ejecutar todos los tests unitarios con Jest:

npm run test

🛠️ Podés usar también `npm run test:watch` si está configurado, para ver cambios en tiempo real.

---

## 🧬 Estructura del proyecto

src/
│
├── application/       # Casos de uso
├── config/            # Uso de dotnet para la configuracion en el .env
├── domain/            # Entidades y lógica del dominio
├── infrastructure/    # Prisma, Express, repositorios, etc.
└── interfaces/        # Controladores, DTOs, validaciones

---

## 🧪 Datos de prueba (seeds)

El archivo `prisma/seed.ts` crea automáticamente:

- 2 empresas (`Empresa 1`, `Empresa 2`)
- 3 transferencias asociadas a `Empresa 1`

Esto permite probar fácilmente los endpoints desde el inicio.

---

## ✅ Comandos útiles

| Comando                             | Descripción                                       |
|-------------------------------------|---------------------------------------------------|
| npm install                         | Instala las dependencias                         |
| npx prisma generate                 | Genera el cliente de Prisma                      |
| npm run dev                         | Inicia la API en modo desarrollo                 |
| npx prisma migrate dev              | Aplica nuevas migraciones                        |
| npx prisma migrate reset            | Reinicia DB, aplica migraciones y ejecuta seed   |
| npx prisma db seed                  | Ejecuta el seed manualmente                      |
| npm run test                        | Corre los tests unitarios                        |
