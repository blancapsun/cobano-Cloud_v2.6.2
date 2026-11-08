CÓBANO CLOUD 2.5.0 — DOCUMENTOS Y ASISTENTE IA

IMPORTACIÓN DE PRODUCTOS
- En Vivero > Productos, importar .xlsx, .xls, .csv, .txt o .tsv.
- La primera hoja del Excel se interpreta con las columnas:
  Nombre | Tipo | Para qué sirve | Dosis | Cómo aplicar | Etapas | Especies
- Puedes pegar datos de Excel en el cuadro, o cargar el archivo directamente.
- Si no puede leerse, aparecerá “DOCUMENTO NO LEÍDO” y podrás borrar el registro.

DOCUMENTOS DE CONSULTA
- En Vivero > Productos > Documentos técnicos puedes cargar Excel, CSV, TXT, TSV,
  PDF con texto seleccionable y DOCX.
- Los archivos escaneados sin OCR pueden aparecer como no leídos.
- El texto extraído se almacena en la base local del vivero y se manda al endpoint
  de IA configurado cuando haces una consulta.

CONECTAR EL ASISTENTE CON OPENAI API (REQUISITO EXTERNO)
1) Instala Node.js LTS.
2) Abre una terminal dentro de esta carpeta y ejecuta: npm install
3) Define la variable de entorno OPENAI_API_KEY en el servidor (NO dentro de index.html).
   PowerShell: $env:OPENAI_API_KEY="TU_CLAVE"
4) Ejecuta: npm start
5) En la app abre el Asistente del vivero > botón ⚙ IA.
6) Escribe: http://localhost:3000/api/nursery-chat

El endpoint usa la API de OpenAI y puede generar costos por uso de API. La suscripción
ChatGPT no incluye automáticamente créditos de API. No compartas ni pegues tu API key
al chat o en el navegador.

Si la app se abre desde otro dispositivo, localhost se refiere a ese dispositivo:
se debe configurar la dirección del servidor accesible desde la red y habilitar HTTPS
para uso real. No expongas el servidor sin autenticación a Internet.

LIMITACIONES
- Recomendaciones de productos locales/tiendas requieren ubicación precisa o municipio
  y disponibilidad actual; el modelo no puede asegurar existencias sin consultar fuentes.
- Identificación de plagas debe considerarse diagnóstico preliminar; verificar con
  especialista, síntomas y fotografías claras.
