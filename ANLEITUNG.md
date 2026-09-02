# KlarBlick-Kompass auf Netlify veröffentlichen

## Was in diesem Ordner steckt
- `index.html` — das eigentliche Tool, läuft direkt im Browser (React und eine fest versionierte Babel-7-Datei werden von einem CDN geladen, kein Build-Schritt nötig)
- `functions/kompass-chat.js` — die Backend-Funktion, die deinen Anthropic-API-Schlüssel sicher hält und die Anfragen durchreicht
- `netlify.toml` — sagt Netlify, wo beides liegt

## Schritt 1: API-Schlüssel besorgen
Falls noch nicht vorhanden: einen Anthropic-API-Schlüssel unter console.anthropic.com anlegen (eigenes Konto, getrennt von deinem Claude.ai-Zugang). Dort fällt Guthaben pay-as-you-go an, siehe Kostenschätzung im Chat.

## Schritt 2: Bei Netlify hochladen
1. Auf netlify.com einloggen oder Konto anlegen.
2. Den Inhalt dieses Ordners als ZIP packen. `index.html` und `netlify.toml` müssen direkt auf der obersten Ebene der ZIP-Datei liegen.
3. Im Netlify-Dashboard auf "Add new site" → "Deploy manually" und die ZIP-Datei reinziehen.

## Schritt 3: API-Schlüssel bei Netlify hinterlegen
1. Im Netlify-Dashboard: Site settings → Environment variables.
2. Neue Variable anlegen: Name `ANTHROPIC_API_KEY`, Wert dein Schlüssel aus Schritt 1.
3. Danach einmal "Trigger deploy" klicken, damit die Variable aktiv wird.

## Schritt 4: Testen
Die von Netlify vergebene URL öffnen (z.B. `zufallsname.netlify.app`) und den Kompass einmal komplett durchklicken, genau wie hier im Chat.

## Was noch fehlt (nächste Ausbaustufe, nicht in diesem Paket)
- Mehrere Sitzungen mit Zähler (15 Sitzungen), das braucht eine kleine Datenbank statt nur die Funktion
- Echter PDF-Export der Landkarte
- Eigene Domain statt der Netlify-Zufalls-URL (in den Netlify-Einstellungen unter Domain management nachrüstbar)
