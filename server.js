// Backend seguro de IA para CÓBANO Cloud. API key solamente en el servidor.
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: '2mb' }));

const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_MODEL || 'gpt-6-astra';

app.get('/health', (_req, res) => res.json({ ok: true, service: 'CÓBANO vivero AI' }));

app.post('/api/nursery-chat', async (req, res) => {
  try {
    if (!API_KEY) return res.status(500).json({ error: 'Falta OPENAI_API_KEY en el servidor.' });
    const { system = '', question = '', context = {} } = req.body || {};
    if (!question) return res.status(400).json({ error: 'Falta la pregunta.' });

    const contextText = JSON.stringify(context).slice(0, 100000);
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        instructions: system || 'Eres un asistente técnico experto en viveros forestales.',
        tools: [{ type: 'web_search', user_location: { type: 'approximate', country: 'MX', region: 'Sinaloa', city: 'Culiacán' } }],
        input: `Consulta del usuario: ${question}\n\nDatos del vivero y base documental:\n${contextText}`,
        store: false
      })
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.error?.message || 'Error al consultar OpenAI.' });
    res.json({ answer: data.output_text || 'No se generó texto de respuesta.' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Error interno.' });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`CÓBANO AI backend escuchando en http://localhost:${port}`));
