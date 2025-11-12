# Portfolio Web 2025
Este proyecto es una Single Page Application (SPA) desarrollada con Angular CLI versión 20.3.9.

## Descripción del Proyecto
Este portfolio web interactivo y personalizable está diseñado para mostrar información personal, habilidades y una lista de proyectos. La aplicación está estructurada en múltiples componentes reutilizables (como Header, Footer, SobreMi, MisProyectos, etc.) y utiliza el sistema de rutas de Angular para la navegación entre secciones.
Toda la información se obtiene dinámicamente desde archivos JSON locales (datos-personales.json y proyectos.json), simulando una carga de datos externa a través de un servicio (PortfolioService) que utiliza HttpClient.

## Capturas de Pantalla
### Inicio
<img width="1340" height="639" alt="image" src="https://github.com/user-attachments/assets/57650528-5d8e-433e-a11f-5c33df86dcfe" />

### Sobre Mí
<img width="1341" height="640" alt="image" src="https://github.com/user-attachments/assets/4406c9e2-d2c8-4d85-b97c-53bc34b2e2ca" />

### Mis Proyectos
<img width="1340" height="957" alt="image" src="https://github.com/user-attachments/assets/58fa4fee-8eda-4584-9205-540797fda40b" />

### Contacto
<img width="1350" height="819" alt="image" src="https://github.com/user-attachments/assets/b692ca4b-908d-4394-b0d7-c20e5d0444d8" />

## Instrucciones para Ejecutar
Sigue estos pasos para ejecutar el proyecto en tu máquina local.

Instalar dependencias:
Primero, clona el repositorio. Luego, instala todos los paquetes de Node.js necesarios.

```bash
npm install
```


## Servidor de Desarrollo

Ejecuta ng serve (o npm start) para iniciar el servidor de desarrollo.

```bash
ng serve
```

Una vez que el servidor esté corriendo, abre tu navegador y visita http://localhost:4200/. La aplicación se recargará automáticamente si modificas alguno de los archivos fuente.


## Generar Componentes (Scaffolding)
Angular CLI incluye herramientas para generar código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para una lista completa de los schematics disponibles (como `components`, `directives`, or `pipes`), ejecuta:

```bash
ng generate --help
```


## Compilar (Build)

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de construcción en el directorio `dist/`. La compilación de producción optimizará la aplicación para su rendimiento y velocidad por defecto.


## Ejecutar Pruebas Unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io), usa el siguiente comando:

```bash
ng test
```


## Recursos Adicionales

Para más información sobre cómo usar Angular CLI, visita la [Referencia de Comandos y Resumen de Angular CLI](https://angular.dev/tools/cli) .
