import { GeneratedHoroscope } from '@/interfaces/horoscope';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generatePrompt = (zodiac: string): string =>
  `Write a witty horror theme horoscope for ${zodiac} that contains at least 100 words`;

export const generate = async (zodiac: string): Promise<GeneratedHoroscope> => {
  if (process.env.NODE_ENV !== 'production') {
    return { text: LOREM };
  }

  if (!configuration.apiKey) {
    throw new Error('Invalid or missing API key');
  }

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(zodiac),
    temperature: 0.6,
    max_tokens: 200,
  });

  return { text: completion.data.choices[0].text || '' };
};

const LOREM = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur cum deleniti commodi recusandae! Accusantium, dolorum consequuntur? Nostrum ut natus obcaecati perspiciatis enim consequuntur ipsum officia similique ullam? Nemo, libero.
    Nisi asperiores aliquid impedit deserunt alias adipisci repellendus ipsa ullam exercitationem accusantium, cupiditate, quam enim ad qui error nostrum dolorem ex amet voluptatum, fugiat laboriosam? Quaerat ad voluptatum consequatur omnis?
    Iusto laborum veniam labore amet aspernatur animi sit officiis modi non nam sapiente accusantium eos sunt exercitationem, laboriosam deserunt consequatur autem libero numquam qui asperiores deleniti. Ipsa odit eaque aperiam!
`;
