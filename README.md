# Run project

```
npm i // Install dependencies
npm run dev // dev server
npm run build // build for production
```

### Milestones

# React Code Challenge

## Introducción

La finalidad del ejercicio es desarrollar una aplicación en React que liste personajes de Rick and Morty utilizando esta [API](https://rickandmortyapi.com/documentation/#rest).  
Tendrás 90 minutos para completarlo. Una vez pasados los 90 minutos, haremos otra llamada en la que nos deberás hacer una breve demo de la aplicación. En esa llamada, veremos el código y te haremos algunas preguntas sobre el mismo.

- Imaginar que alguien de QA va a revisar el entregable teniendo en cuenta funcionalidad, usabilidad y performance.
- No hay un diseño definido, por lo que se espera que lo hagas a tu criterio. Ten en cuenta que la funcionalidad se priorizará sobre los estilos, por lo que te recomendamos terminar las funcionalidades requeridas antes de emprolijar el diseño.
- Utilizar una solución de manejo de estados a elección.
- Puedes instalar todas las bibliotecas que quieras.
- La parte 3 es opcional. Recomendamos que la hagas solo si ya terminaste completamente las primeras 2 partes.

## Parte 1 \- Listado paginado e Integración (\~40 mins) ✅

Mostrar en el Home de la aplicación un listado con todos los personajes de la serie. Se debe tener en cuenta que el endpoint utilizado está paginado. El entrevistado podrá elegir la estrategia de paginación a utilizar (botón de “siguiente”/”anterior”, botón de “cargar más”, infinite scrolling, etc.). Para cada personaje de la lista se deberá mostrar:

- Imagen
- Nombre
- Especie

## Parte 2 \- Búsqueda (\~30 mins) ✅

En el Home de la aplicación, se pide agregar un input y realizar los cambios necesarios para poder realizar una búsqueda por nombre.

## Parte 3 \- Detalle de un Personaje (Opcional) (\~20 mins) ✅

Al clickear algún personaje en el listado se deberá navegar al detalle del mismo. Para cada personaje se deberá mostrar:

- Imagen
- Nombre
- Estado
- Species (Type), si es que tiene Type
- Last known location
- Listado de episodios en los que aparece (Mostrar únicamente el número)



# Rick and Morty Characters 🛸

Aplicación en **React + TypeScript + TailwindCSS** que consume la [Rick and Morty API](https://rickandmortyapi.com/documentation) para mostrar un listado de personajes con paginación.

---

## 🚀 Tecnologías usadas
- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- Fetch API para consumir datos

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/Jrozo97/rick-and-morty-app.git
```

Instala dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

---

## 🖥️ Uso

1. Abre la aplicación en [http://localhost:5173](http://localhost:5173)  
2. Explora el listado de personajes.  
3. Usa los botones de **Anterior** y **Siguiente** para navegar entre páginas.

---

## 📂 Estructura del proyecto

```bash
src/
 ├─ components/
 │   └─ Pagination
 │      └─ Pagination.tsx  
 │   └─ ListCharacter.tsx 
 │      └─ ListCharacter.tsx   # Componente de paginación reutilizable # Página principal con grid de personajes
 ├─ App.tsx
 └─ main.tsx
```

---

## ✨ Funcionalidades

- ✅ Listado de personajes con **imagen, nombre y especie**.  
- ✅ Paginación con control de límites  
- ✅ Estilos modernos con **TailwindCSS**.  
- ✅ Arquitectura simple y escalable.

---

## 🔮 Mejoras futuras
- 🔍 Búsqueda de personajes por nombre.  
- 🌎 Filtros por especie, estado y género.  
- ♾️ Infinite scroll en lugar de botones de paginación.
- 🔮 Detalles de Personajes
- 🎨 Mejoras en diseño usando librerías UI (shadcn/ui, Material UI, etc.).
- 🌀 Mejoras del tipado en las diferentes funciones.

---

## 📜 Licencia
Este proyecto es de libre uso.
