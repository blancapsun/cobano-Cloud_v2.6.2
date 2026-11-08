CÓBANO CLOUD 2.6.2
=================

Nuevas funciones:
- Catálogo de productos y plagas/enfermedades compartido por usuarios con Gmail.
- Google login mediante Firebase Authentication.
- Roles: administrador raíz, administradores adicionales y usuarios.
- Administración de administradores por correo.
- Usuarios pueden enviar propuestas de producto/plaga/enfermedad, adjuntar fotografía o ficha y esperar aprobación.
- Fotos/fichas compartidas mediante Firebase Storage.
- Catálogo compartido sincronizado mediante Firestore.
- Firebase Hosting config incluida.

IMPORTANTE: La app no se conecta automáticamente a una cuenta Firebase del usuario.
Configura tu proyecto siguiendo FIREBASE_SETUP.txt antes de iniciar sesión.
La app es una PWA/HTML; el inicio de sesión Google normalmente debe ejecutarse desde localhost o un dominio autorizado (no file://).

Documentación:
- FIREBASE_SETUP.txt: pasos para crear Firebase, habilitar Gmail y dar de alta al primer administrador.
- FIRESTORE_RULES.txt: reglas para Firestore.
- STORAGE_RULES.txt: reglas de Storage.
- README_IA.txt: configuración del backend de IA existente.

Instalación simple:
1. Descomprime el ZIP.
2. Abre FIREBASE_SETUP.txt y configura Firebase.
3. Publica la app con Firebase Hosting o ejecútala en localhost.

CAMBIO 2.6.2: login obligatorio en la pantalla inicial (configurando Firebase); se eliminó el panel/login repetido dentro de Vivero y módulos. Tras autenticar, la sesión se conserva al navegar.
