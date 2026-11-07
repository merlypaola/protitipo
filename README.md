# DidaktikApp

Aplicación web interactiva para la enseñanza de la didáctica en carreras docentes mediante simulaciones, evaluación adaptativa y planificación pedagógica.

## Descripción

DidaktikApp es una plataforma educativa desarrollada como proyecto de titulación que busca fortalecer las competencias didácticas de estudiantes de carreras docentes a través de experiencias interactivas, simulaciones pedagógicas, evaluaciones adaptativas y retroalimentación personalizada.

La aplicación integra recursos educativos digitales, seguimiento del progreso académico y herramientas tecnológicas que facilitan el proceso de enseñanza-aprendizaje.

## Objetivo General

Desarrollar una aplicación interactiva que contribuya al aprendizaje de la didáctica mediante recursos educativos, simulaciones y evaluación adaptativa para estudiantes de carreras docentes.

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Gestión de perfiles académicos.
- Simulaciones de escenarios educativos.
- Evaluaciones interactivas.
- Retroalimentación adaptativa.
- Seguimiento del progreso académico.
- Sistema de puntos e insignias.
- Biblioteca de recursos educativos.
- Foros de discusión académica.
- Mentorías educativas.
- Estadísticas de desempeño.
- Recomendaciones personalizadas de aprendizaje.

## Algoritmo ADA

El sistema incorpora el algoritmo ADA (Análisis Didáctico Adaptativo), encargado de:

- Analizar respuestas de los estudiantes.
- Detectar fortalezas académicas.
- Identificar áreas de mejora.
- Generar recomendaciones personalizadas.
- Elaborar planes de acción adaptativos.
- Ajustar la retroalimentación según el desempeño obtenido.

## Tecnologías Utilizadas

### Frontend

- React 19
- Vite 6
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- React Router DOM
- Framer Motion

### Backend y Base de Datos

- Supabase
- PostgreSQL

### Librerías Complementarias

- Lucide React
- PDF.js
- Lottie React

## Arquitectura General

### Módulos Principales

- Usuarios
- Cursos
- Recursos educativos
- Evaluaciones
- Progreso estudiantil
- Logros e insignias
- Biblioteca digital
- Foros académicos
- Mentorías educativas

## Base de Datos

La aplicación utiliza PostgreSQL mediante Supabase.

### Principales Entidades

- usuarios
- cursos
- recursos
- evaluaciones
- resultados_evaluaciones
- progreso_estudiantes
- puntos_usuario
- logros
- usuarios_logros
- publicaciones_foro
- mentorias

## Respaldo de Base de Datos

El proyecto incluye un archivo de respaldo:

```text
respaldo.sql
```

Este archivo contiene la estructura y/o información necesaria para restaurar la base de datos utilizada por el sistema.

## Requisitos Previos

Antes de ejecutar el proyecto asegúrese de tener instalado:

- Node.js 18 o superior
- npm
- Git

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/domynll/prototipo.git
```

### 2. Ingresar al directorio del proyecto

```bash
cd prototipo
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar variables de entorno

Crear un archivo llamado:

```text
.env.local
```

Agregar la siguiente configuración:

```env
VITE_SUPABASE_URL=https://supabase.didactikapp.grandlife-roleplay.com
VITE_SUPABASE_PUBLISHABLE_KEY=TU_PUBLISHABLE_KEY
```

### 5. Ejecutar el proyecto

```bash
npm run dev
```

### 6. Abrir la aplicación

```text
http://localhost:5173
```

## Scripts Disponibles

### Ejecutar entorno de desarrollo

```bash
npm run dev
```

### Generar versión de producción

```bash
npm run build
```

### Visualizar versión de producción

```bash
npm run preview
```

### Ejecutar análisis de código

```bash
npm run lint
```

## Estructura del Proyecto

```text
prototipo/
│
├── public/
├── src/
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vite.config.js
├── respaldo.sql
│
└── .env.local
```

## Dependencias Principales

- React
- React DOM
- React Router DOM
- Supabase
- Framer Motion
- Lucide React
- PDF.js
- Lottie React

## Repositorio Oficial

GitHub:

```text
https://github.com/domynll/prototipo
```
