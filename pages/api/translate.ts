import type { NextApiRequest, NextApiResponse } from 'next'

import { Configuration, OpenAIApi } from 'openai'
import { MAX_COUNT } from '@/utils/constants'

// OpenAI consume 4 tokens por caracter
const TOKEN_FACTOR = 4;

// Calculo el máximo de tokens que puedo enviar a OpenAI, basandome en el máximo de caracteres que puedo enviar tomando en cuenta que lo que yo envio y lo que recibo cuenta por 2, pero como también voy a mostrar el texto original, entonces lo que envio y lo que recibo cuenta por 3
const MAX_TOKENS = (MAX_COUNT / TOKEN_FACTOR) * 3;

const GTP_MODEL = "gpt-3.5-turbo";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { text } = req.body;
    
    if (req.method === "POST") {
         try {
            const response = await openai.createChatCompletion({
                model: GTP_MODEL,
                messages: [{ role: "user", content: `Traduce de Español a Ingles: ${text}` }],
                temperature: 0,
                max_tokens: MAX_TOKENS,
              });

            const translatedText = response.data?.choices?.[0]?.message?.content?.trim() ?? "";

            res.status(200).json({ translatedText });
         } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong with the translation'})
            // Si el error es 429, se acabaron los créditos de la API de OpenAI
         }
    } else {
        res.setHeader("Allow", ["POST"]); // Devolvemos los métodos permitidos
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
};

export default handler;