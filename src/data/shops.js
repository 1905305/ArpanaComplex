// Shop layout, extracted from the approved site plan.
// No rent figures here on purpose — zone colours are used only as identifiers.
// column: 'left' (3 units, top-to-bottom) or 'right' (4 units, top-to-bottom)
export const shopData = [
  {
    n: 1,
    column: "left",
    order: 3,
    zone: "Orange",
    color: "#c1622b",
    note: "Bottom of the left column — nearest the entrance and the driveway.",
    flex: 1.4,
  },
  {
    n: 2,
    column: "left",
    order: 2,
    zone: "Yellow",
    color: "#d4a017",
    note: "Middle of the left column — a big unit, matched in size with Shop 1.",
    flex: 1.4,
  },
  {
    n: 3,
    column: "left",
    order: 1,
    zone: "Green",
    color: "#2f8f5b",
    note: "Top of the left column — right beside the common washroom.",
    flex: 0.9,
  },
  {
    n: 4,
    column: "right",
    order: 1,
    zone: "Green",
    color: "#2f8f5b",
    note: "Top of the right column — beside the cabin toilet and the stairs/stage.",
    flex: 0.85,
  },
  {
    n: 5,
    column: "right",
    order: 2,
    zone: "Blue",
    color: "#2f6fa3",
    note: "Upper-middle of the right column, off the corridor.",
  },
  {
    n: 6,
    column: "right",
    order: 3,
    zone: "Blue",
    color: "#2f6fa3",
    note: "Lower-middle of the right column, off the corridor.",
  },
  {
    n: 7,
    column: "right",
    order: 4,
    zone: "Red",
    color: "#a53a3a",
    note: "Bottom of the right column — nearest the entrance.",
  },
];

export function shopLabel(n) {
  return "Shop " + String(n).padStart(2, "0");
}
