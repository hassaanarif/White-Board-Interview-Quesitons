let airports = "Lahore Karachi Multan Islamabad Peshawar Quetta Skardu".split(
  " "
);

let routes = [
  ["Lahore", "Karachi"],
  ["Lahore", "Multan"],
  ["Lahore", "Peshawar"],
  ["Lahore", "Islamabad"],
  ["Islamabad", "Skardu"],
  ["Islamabad", "Multan"],
  ["Islamabad", "Peshawar"],
];

let list = new Map();

function addAirport(airport) {
  list.set(airport, []);
}

function addEdge(origin, destination) {
  list.get(origin).push(destination);
  list.get(destination).push(origin);
}

airports.forEach(addAirport);
routes.forEach((routes) => {
  addEdge(...routes);
});

console.log(list);
