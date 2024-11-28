import { google } from "googleapis";

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMiO4cPu+Skvj0\nEqBbwGmeMoRH52osSz0RewuZ1HCvXzfhKvekcYSQD6A5S4EPsbgIda+OiISmwOGk\n8fe0dBhybCCHcCbnn90TmYjWOGphWGtgWow0LDhxGkl6rWwJqJ+OwsQomvfdwjiR\nvVem4koc2I5VKzLpHn3eNV3R6wFcdVI77/m0q2wZT2L1RTF6hoxj4ZlLLpgqAS0g\nYFrE3wp1+p9nOf5ocgVXwt7+y5wfJlnQzxMdd/DG7AO9ebnS273Qkj7VEc9SCxbO\nnD1KgB89uV0J6W155aLoR0OWky5fORtZZqKnS912DU5pUW8dI+Wfn98mFqD35qKd\n1PFJg4ETAgMBAAECggEAAlsxX58QHG1pmyRmZ+NoyFKhTfG4h/5i8brizbUQIDPN\nsT34YcHXFSTauaf+0lwkCvaq90E2tPNuIeCksVo/WeIr0XMbhxQ/fEEKWEnt23mR\nPOmHvEAzJtvn+EfI4SItbd+6GWwvuubmVLTPljUcRP6+GpN013YmNuZYjyWl8JgV\naDxqv9jgEG0F/d3lzlGfn8UTIBOG/el6ykmFcbCow5DFWlK0r3fGve06gtdiPGFT\nL7DPlSjdSUoQA0kVH1A/N0yIKUb29THOFu0wAMZBfFrvUqdt1j9IMy1pGZpe2EGv\n1QFK7Aponk9Eo9u4PqURYUu0xngX3ZGLnQ3LBI1pkQKBgQDDs0WopcoQGJWgQWCT\n+45425nUwsx6I7D8u5E41svs7CTuBeB/I1k6qM3k21YkAWP1OmGQ1LTfc/pG7gKV\nk2nAQqFwbj15yPJHAoNmklGWLBbE3vRrS8YmH1hcS5xqPEpVVaejmogblUiwcTyQ\no1lan5Ze24x/vC6J0AiTUxAN5wKBgQC31j4TrQW5o0eYdyhBjsIhjzM+QPBcINtB\nUOLztC2RylbUid/s6sdiv+zEcXxNBelDFMws7TxkyeqhkE4ikkEIwAs2Wxq7ozMS\nigFqz7L+oPXj75rG5FVXfnhMQ4nn9nL+PCUm/5gVNhDQT2mOnjQH+thHZyI8Pqb0\nIf8MDyPV9QKBgBUoE1bJHZAh6EMb7kHxRxS/wOCkcpCdvSuFZ4y6g+9IFDH7RqrX\n+nSB/UhJggWAdPr05clPhYJGun7iijr7ZcpYKbXK5TB+TdrpZaU4GkPe3lNIOypC\nVdiXOOk5b154yBxzlxzzvtUkjWgtxbtpPWazrADzQTwp7uoNKHAs4aZvAoGAMkUa\nioTYuO+mR1HmJy8jdMvUxmQ5lefCLPUyalPN1j0PS2U8X2vABAfZdcpWpDVGmPpZ\n7rscta7lQzLTuu5lbEAfkMiO4dp5v8sPIicTmj9nneHKYDLWB2vk923MiyrAPTcz\nLZvc+YfkRyJACijGr5vvgm74VKMJQl79gE2vjfUCgYAivqkiUmfBZ/ovkjCxKWkM\nd0ZYWer9T3AgSPKKD6tM2s86kFmytQ8dqJB16jJ2pU3jU78iHPzl9fDwUnbvySYw\nyxWR3gcINwWHkG9HqyvB1M0al6xmVC41SpWu1b+wdZoCLtDPi8A+bHtsemWilUR4\nW0APrKGbBAsjzVmN5g/X1A==\n-----END PRIVATE KEY-----\n",
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = "Hoja 1!A1:Z1000";

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    return new Response(JSON.stringify(response.data.values));
  } catch (error) {
    console.error('The API returned an error: ' + error);
    return new Response('The API returned an error: ' + error);
  }
};