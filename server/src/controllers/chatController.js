let conversationHistory = [];

const chatController = async (req, res) => {
  const { message } = req.body;
  
  if (conversationHistory.length === 0) {
    const productsResponse = await fetch('http://localhost:4000/api/products');
    if (!productsResponse.ok) {
      throw new Error('Error al obtener los productos.');
    }

    const products = await productsResponse.json();
    const productsDescriptions = products.map(product => `${product.category} - ${product.name} - ${product.price} - ${product.diet_type} : ${product.description}.`).join('\n');

    const systemMessages = [
      { role: "system", content: "Eres un chatbot para un restaurante llamado 'Menu-Online-BACK'." },
      { role: "system", content: `Estos son los platos disponibles: ${productsDescriptions} ` }
    ];

    conversationHistory.push(...systemMessages);
  }

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
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`OpenAI API Error: ${errorDetails}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0].message.content.trim();

    conversationHistory.push({ role: "assistant", content: botResponse });

    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error al comunicarse con la API de OpenAI:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default chatController;
