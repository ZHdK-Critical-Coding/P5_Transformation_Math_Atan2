# P5.js: Atan2

[English](readme.md)

Zeigt, wie `atan2()` funktioniert: Für jedes der drei Kreuze wird der
Winkel vom Kreuz zur Maus berechnet und das Kreuz damit gedreht, sodass alle
drei auf die Maus zeigen. Der Winkel des mittleren Kreuzes wird in Grad
angezeigt. Ein Ausgangspunkt für alles, was sich zu einem Punkt hin
drehen soll, etwa Augen, Pfeile oder Geschütze.

## Installation

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Die Maus über die Zeichenfläche bewegen.

## Coding-Hilfe

- **`sketch.js` → `boxWidth` / `boxHeight`**: Grösse der beiden Balken, aus
  denen jedes Kreuz besteht.
- **`setup()`**: erstellt eine Zeichenfläche von 400 × 400 px und stellt
  auf `angleMode(DEGREES)` um, damit `atan2()` Grad statt Bogenmass
  liefert.
- **`draw()`**: berechnet `angle = atan2(mouseY - center.y, mouseX -
  center.x)` von der Mitte aus und ebenso `angleLeft` und `angleRight` von
  den Positionen der beiden anderen Kreuze. Jedes Kreuz wird innerhalb von
  `push()` / `pop()` mit `translate()` an seine Position verschoben und mit
  `rotate()` um seinen eigenen Winkel gedreht, sodass jedes Kreuz auf die
  Maus zeigt.
