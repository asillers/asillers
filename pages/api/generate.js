import { Configuration, OpenAIApi } from "openai-api";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log("body: ", req.body)
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: req.body.promptBio,
    temperature: 0.6,
    max_tokens: 2000,
  })
  console.log('data: ', completion.data)
  res.status(200).json({ result: completion?.data.choices[0].text });
}