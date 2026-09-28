# P5.js: Atan2

[English](readme.md)

Zeigt, wie `atan2()` funktioniert: Der Winkel von der Mitte der
Zeichenfläche zur Maus wird berechnet und dreht drei Kreuze. Der Winkel wird
in Grad angezeigt. Ein Ausgangspunkt für alles, was sich zu einem Punkt hin
drehen soll, etwa Augen, Pfeile oder Geschütze.

## Installation

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Die Maus über die Zeichenfläche bewegen.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Coding-Hilfe

- **`sketch.js` → `boxWidth` / `boxHeight`**: Grösse der beiden Balken, aus
  denen jedes Kreuz besteht.
- **`setup()`**: erstellt eine Zeichenfläche von 400 × 400 px und stellt
  auf `angleMode(DEGREES)` um, damit `atan2()` Grad statt Bogenmass
  liefert.
- **`draw()`**: berechnet `angle = atan2(mouseY - center.y, mouseX -
  center.x)` einmal von der Mitte aus. Jedes Kreuz wird innerhalb von
  `push()` / `pop()` mit `translate()` an seine Position verschoben und mit
  `rotate(angle)` gedreht. Weil alle drei denselben Winkel verwenden, zeigt
  nur das grüne Kreuz in der Mitte genau auf die Maus. Damit jedes Kreuz
  selbst auf die Maus zielt, `atan2()` von seiner eigenen Position aus
  berechnen.
