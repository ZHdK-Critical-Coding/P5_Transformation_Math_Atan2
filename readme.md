# P5.js: Atan2

[Deutsch](README_DE.md)

Demonstrates `atan2()`: the angle from the canvas centre to the mouse is
computed and used to rotate three crosses. The angle is shown in degrees.
A starting point for anything that should turn towards a point, such as
eyes, arrows or turrets.

## Installation

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Move the mouse over the canvas.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not used).

## Coding Help

- **`sketch.js` → `boxWidth` / `boxHeight`**: size of the two bars that
  form each cross.
- **`setup()`**: creates a 400 × 400 canvas and switches to
  `angleMode(DEGREES)`, so `atan2()` returns degrees instead of radians.
- **`draw()`**: computes `angle = atan2(mouseY - center.y, mouseX -
  center.x)` once from the canvas centre. Each cross is drawn inside
  `push()` / `pop()` with `translate()` to its position and `rotate(angle)`.
  Because all three use the same angle, only the green one in the middle
  points exactly at the mouse. For each cross to aim at the mouse on its
  own, compute `atan2()` from that cross's position.
