# Auditoria IA 🛡️

**Auditoria IA** es una herramienta inteligente diseñada para analizar, evaluar y puntuar Planes de Seguridad Informática. Utilizando la potencia de **Google Gemini 2.5 Flash**, la aplicación procesa documentos (texto o PDF) y genera un informe detallado.

## 📋 Requisitos Previos

1.  **Node.js** (Versión 18 o superior).
2.  Una **API Key** de Google Gemini (Obtener en [Google AI Studio](https://aistudio.google.com/)).

## 🚀 Instalación y Ejecución

Sigue estos pasos exactos para correr el proyecto en tu PC:

### 1. Instalar dependencias
Abre la terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### 2. Configurar la API Key (IMPORTANTE)
1.  Crea un archivo llamado `.env` en la raíz del proyecto (junto a `package.json`).
2.  Ábrelo y pega tu clave con el siguiente formato:

```env
API_KEY=AIzaSy...TuClaveAqui
```

> **Nota:** También soporta `GEMINI_API_KEY` si prefieres usar ese nombre.

### 3. Ejecutar el proyecto
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

## 🛠️ Solución de Problemas

- **Error: "Falta la API Key"**: Asegúrate de haber creado el archivo `.env` y de haber reiniciado la terminal (`Ctrl+C` y luego `npm run dev`) después de crearlo.
- **Pantalla en blanco**: Asegúrate de que tu archivo `index.html` no tenga bloques `<script type="importmap">`.

## 📄 Estructura
- **backend/**: Lógica de conexión con Gemini.
- **frontend/**: Componentes visuales (React + Tailwind).
