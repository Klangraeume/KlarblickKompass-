# KlarBlick-Kompass als begrenzte Begleitstrecke

## Was diese Version kann

- ein persönlicher Zugangscode pro Käufer
- 15 Gesprächsblöcke pro Code
- erste vollständige KlarBlick-Landkarte
- spätere Beobachtungs-Check-ins mit gespeicherten Ergänzungen
- serverseitig gespeicherter Verlauf; der Browser kann den Zähler nicht verändern
- festes KI-Kostenbudget pro Zugangscode
- medizinische Warnhinweise und Übergang zum persönlichen KlarBlick-Gespräch

## Dateien bei GitHub

Den Inhalt dieses Ordners in das mit Netlify verbundene Repository laden. Nicht nur die ZIP-Datei hochladen.

## Erforderliche Netlify-Umgebungsvariablen

Unter **Project configuration → Environment variables** eintragen:

- `ANTHROPIC_API_KEY`: API-Schlüssel von Anthropic
- `ACCESS_CODE_SECRET`: mindestens 32 zufällige Zeichen; danach nicht mehr ändern, sonst werden bestehende Codes unlesbar
- `ADMIN_SECRET`: ein anderes, langes Passwort für die Code-Verwaltung

Optional:

- `KLARBLICK_BUDGET_MICRO_USD`: persönliches API-Budget in Micro-US-Dollar. Standard ist `2500000`, also 2,50 USD.
- `KLARBLICK_MODEL`: Standard ist `claude-sonnet-4-6`.

Wichtig: `ACCESS_CODE_SECRET` und `ADMIN_SECRET` dürfen niemals in GitHub-Dateien oder Kursunterlagen stehen.

## Zugangscode anlegen

Nach dem Deploy diese Seite öffnen:

`https://DEINE-DOMAIN/code-verwaltung.html`

Verwaltungsschlüssel eingeben, optional einen Namen zur internen Zuordnung ergänzen und den Code erstellen. Der Code wird nur einmal vollständig angezeigt. In Netlify wird ausschließlich ein nicht zurückrechenbarer Prüfwert gespeichert.

## Wie gezählt wird

Ein Klick auf **Gespräch beginnen** reserviert einen der 15 Gesprächsblöcke. Einzelne Nachrichten werden nicht als eigene Sitzung gezählt. Wird ein Gespräch bewusst abgebrochen, gilt der Block als genutzt. Das verhindert endlose offene Sitzungen und hält die Kalkulation nachvollziehbar.

## Kostenschutz

Vor jedem Anthropic-Aufruf reserviert der Server konservativ die voraussichtlichen Kosten. Nach der Antwort ersetzt er die Reservierung durch die tatsächlich von Anthropic gemeldeten Input- und Outputtokens. Ist das persönliche Budget erreicht, startet kein weiterer API-Aufruf.

Zusätzlich in der Anthropic Console ein monatliches Workspace-Spend-Limit setzen. Das ist die zweite, kontoweite Sicherung für den Fall von Fehlkonfiguration oder ungewöhnlichem Traffic.

## Test vor dem Verkauf

1. Einen Testcode anlegen.
2. Erste Landkarte vollständig durchspielen.
3. Browser schließen und mit demselben Code zurückkehren.
4. Mindestens zwei Check-ins testen.
5. Unter Netlify **Usage & billing** sowie in der Anthropic Console die tatsächlichen Kosten prüfen.
6. Erst danach das persönliche Budget oder den Modellnamen verändern.
