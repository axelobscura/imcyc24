import { google } from "googleapis";

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
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