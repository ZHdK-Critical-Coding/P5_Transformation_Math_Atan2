# P5.js: Atan2

[Deutsch](README_DE.md)

Demonstrates `atan2()`: for each of three crosses the angle from the cross
to the mouse is computed and used to rotate it, so all three point at the
mouse. The angle of the middle cross is shown in degrees.
A starting point for anything that should turn towards a point, such as
eyes, arrows or turrets.

## Installation

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not used).

## How to Run

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Move the mouse over the canvas.

## Coding Help

- **`sketch.js` → `boxWidth` / `boxHeight`**: size of the two bars that
  form each cross.
- **`setup()`**: creates a 400 × 400 canvas and switches to
  `angleMode(DEGREES)`, so `atan2()` returns degrees instead of radians.
- **`draw()`**: computes `angle = atan2(mouseY - center.y, mouseX -
  center.x)` from the canvas centre, and in the same way `angleLeft` and
  `angleRight` from the positions of the other two crosses. Each cross is
  drawn inside `push()` / `pop()` with `translate()` to its position and
  `rotate()` by its own angle, so every cross points at the mouse.
