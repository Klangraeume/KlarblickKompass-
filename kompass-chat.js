// Diese Funktion läuft auf Netlifys Server, nicht im Browser.
// Der API-Schlüssel steckt in einer Umgebungsvariable (ANTHROPIC_API_KEY),
// die in den Netlify-Seiteneinstellungen gesetzt wird, nie im Code selbst.

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "ANTHROPIC_API_KEY ist nicht gesetzt. In den Netlify-Seiteneinstellungen unter Environment variables eintragen.",
      }),
    };
  }

  try {
    const clientBody = JSON.parse(event.body);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: clientBody.model || "claude-sonnet-4-6",
        max_tokens: clientBody.max_tokens || 1000,
        system: clientBody.system,
        messages: clientBody.messages,
      }),
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Serverfehler: " + err.message }),
    };
  }
};
