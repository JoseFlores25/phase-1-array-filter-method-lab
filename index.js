const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
  const newDrivers = drivers.filter(
    (person) => person.toLowerCase() === name.toLowerCase()
  );
  return newDrivers;
}
function fuzzyMatch(drivers, names) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(names.toLowerCase()) === 0
  );
}
function matchName(drivers, searchName) {
  return drivers.filter((record) => record.name === searchName);
}
