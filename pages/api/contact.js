import { google } from "googleapis";

async function handler(req, res) {
  if(req.method === 'POST') {
    const {Name, Email, Message} = req.body
    console.log(Name, Email, Message)

    const auth = new google.auth.GoogleAuth({
      credentials:{
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
        
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1B_XnS7C2C3sW9qY1RfM_g428V1W-oRZiK27AOONCXJE',
      range: 'Sheet1!A2:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[Name, Email, Message]],
      },
    });

    res.status(201).json({message:"Date entered successfully"});
  }

  res.status(200).json({message: "Done!"});
}

export default handler;