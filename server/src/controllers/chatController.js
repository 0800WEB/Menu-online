let conversations = {}; // Objeto para almacenar el historial de cada usuario por su userId
const port = process.env.PORT || 3000;

const chatController = async (req, res) => {
  const { message, userId } = req.body;

  // Si no existe un historial para el userId, se inicializa con un array vacío
  if (!conversations[userId]) {
    conversations[userId] = [];
  }

  // Obtener el historial de conversación del usuario actual
  let conversationHistory = conversations[userId];

  // Si es la primera vez que el usuario interactúa, cargar los productos y configurar el mensaje del sistema
  if (conversationHistory.length === 0) {
    const baseURL = process.env.NODE_ENV === 'production' ? `${process.env.BASE_URL_PRODUCTION}/api/products` : `http://localhost:${port}/api/products`;
    const productsResponse = await fetch(baseURL);

    if (!productsResponse.ok) {
      throw new Error('Error al obtener los productos.');
    }

    const products = await productsResponse.json();
    const productsDescriptions = products.map(product => `${product.category} - ${product.name} - ${product.price} - ${product.diet_type} : ${product.description}.`).join('\n');
    
    const systemMessages = [
      { role: "system", content: "Eres un chatbot especializado en responder únicamente preguntas relacionadas con el restaurante llamado 'FOOD.' Responder de la forma mas corta y consistente." },
      { role: "system", content: `Estos son los platos disponibles: ${productsDescriptions} ` }
    ];

    // Almacenar los mensajes iniciales en el historial de conversación del usuario
    conversationHistory.push(...systemMessages);
  }

  // Agregar el mensaje del usuario al historial
  conversationHistory.push({ role: "user", content: `El cliente pregunta: "${message}"` });

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: conversationHistory,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`OpenAI API Error: ${errorDetails}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0].message.content.trim();

    // Agregar la respuesta del bot al historial de conversación del usuario
    conversationHistory.push({ role: "assistant", content: botResponse });

    // Actualizar el historial del usuario en el objeto de conversaciones
    conversations[userId] = conversationHistory;

    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error al comunicarse con la API de OpenAI:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default chatController;
