# KlarBlick-Kompass bei GitHub aktualisieren

Ersetze im verbundenen GitHub-Repository diese Dateien:

- `index.html`
- `functions/kompass-chat.js`
- `netlify.toml`

In Netlify muss die Umgebungsvariable `ANTHROPIC_API_KEY` gesetzt sein.

Der Kompass kann mehrfach genutzt werden. Jeder neue Durchlauf erstellt eine neue,
eigenständige Landkarte. Frühere Landkarten und Gespräche werden im Tool nicht gespeichert.
Wer mit einer Landkarte weiterarbeiten möchte, kopiert sie am Ende und fügt sie später bei
Klara KlarBlick ein.

Der Einstieg unterscheidet zwischen dem ersten Besuch und einem erneuten Durchlauf. Beim
ersten Besuch beginnt das Gespräch mit der Frage „Was wünschst du dir für dein Sehen?“.
Bei einem erneuten Besuch fragt Klara nach Veränderungen seit der letzten Landkarte oder
danach, was diesmal genauer angeschaut werden soll.

Nach dem Commit startet Netlify automatisch einen neuen Deploy. Sobald er veröffentlicht ist, öffne die Seite mit `Strg + F5` und spiele den Kompass vollständig durch.

## Im Test prüfen

1. Startseite und alle drei Einstiegswege öffnen.
2. Kontrollieren, dass während einer Antwort „Klara denkt nach ...“ erscheint.
3. Alle fünf Bereiche bis zur Landkarte durchlaufen.
4. Die Landkarte kopieren und den kopierten Text prüfen.
5. Den Link zum KlarBlick-Gespräch am Abschluss testen.
6. Auf einem Smartphone prüfen, ob Buttons und Texte vollständig sichtbar sind.

## Enthaltener Abschlusslink

- KlarBlick-Gespräch: https://tidycal.com/kathrinlandrock/orientieren

Der Zugang zu Klara KlarBlick wird nicht direkt im öffentlichen Tool verlinkt. Link und
Anleitung werden ausschließlich im Alfima-Kurs bereitgestellt.

Für den Verkauf dieses Modells werden weder Make noch Zugangscodes, eine Admin-Seite oder
Netlify Blobs benötigt. Die Zugangskontrolle übernimmt Alfima, weil nur Käufer den Link zum
Kompass und zu Klara im Kurs sehen.
