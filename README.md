# 🧑‍💻 User Management App - Angular

Aplicación web desarrollada con Angular moderno para la gestión de
usuarios. Permite listar, filtrar, crear y visualizar detalles de
usuarios, siguiendo buenas prácticas de arquitectura, clean code y uso
de signals.

---

## 🚀 Tecnologías utilizadas

- Angular (Standalone Components)
- Signals (state management moderno)
- Reactive Forms
- Tailwind CSS
- RxJS
- TypeScript

---

## 📦 Instalación y ejecución

1.  Clonar el repositorio:

```bash
git clone https://github.com/arturo0427/user-management-app
cd user-management-app
```

2.  Instalar dependencias:

```bash
npm install
```

3.  Ejecutar el proyecto:

```bash
ng serve
```

4.  Abrir en el navegador:

http://localhost:4200

---

## 🧩 Funcionalidades

### ✅ Listado de usuarios

- Obtiene datos desde la API pública:
  https://jsonplaceholder.typicode.com/users
- Muestra nombre, email y empresa
- Diseño responsive con Tailwind

---

### 🔍 Filtro en tiempo real

- Filtra usuarios por nombre
- Implementado con signals y computed
- Sin duplicación de estado

---

### ➕ Creación de usuario

- Formulario con Reactive Forms
- Validaciones:
  - Nombre obligatorio
  - Email obligatorio y válido
- Campos adicionales:
  - Empresa
  - Fecha de nacimiento
- Edad calculada automáticamente en tiempo real
- Simulación de guardado con delay
- Feedback visual de éxito

---

### 📄 Detalle de usuario

- Navegación mediante rutas dinámicas
- Lectura de parámetro `id`
- Visualización completa del usuario
- Manejo de estado:
  - loading
  - usuario no encontrado

---

### 🎨 Librería de componentes (UI)

- Implementación de una librería interna (`projects/ui`)
- Componente reutilizable:
  - `lib-input`
- Consumido en el filtro de usuarios

---

## ⚙️ Decisiones técnicas

### Uso de Signals

Se utilizaron signals para manejar el estado de forma reactiva y simple.

### Separación de responsabilidades

- `UserService` centraliza lógica y estado
- Componentes específicos para mejorar escalabilidad

### Reactive Forms

Elegidos por validación estructurada y control del estado.

### Librería de componentes

Se implementó una librería UI interna para desacoplar componentes
reutilizables.

### Manejo de estado derivado

Uso de `computed` para evitar duplicación de estado.

---

## ⚠️ Consideraciones

- La creación de usuarios es simulada (no persiste en backend)
- Los datos se mantienen en memoria durante la sesión
- Al recargar la página, los usuarios creados se pierden

---

## 🧪 Posibles mejoras futuras

- Persistencia con backend real
- Implementar `ControlValueAccessor` en `ui-input`
- Tests unitarios
- Sistema de notificaciones global

---

## 👨‍💻 Autor

Desarrollado como prueba técnica Frontend Angular.

#### Arturo Muñoz

📧 [arturo_munoz27@outlook.com](mailto:arturo_munoz27@outlook.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/arturom0427/)  
💻 [Portafolio](https://arturo0427.github.io/portafolio-responsive/)
