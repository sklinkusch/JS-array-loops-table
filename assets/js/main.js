const contacts = [
  ["Justus", "Jonas", ["justus@mail.com"]],
  ["Peter", "Shaw", ["peter.shaw@mail.com", "peter.shaw@mail.de"]],
  ["Bob", "Andrews", ["bob.andrews@mail.com", "bob.andrews@mail.de"]]
];
var finalText = '<table class="table table-striped table-bordered">';
finalText =
  finalText +
  "<tr><th>First name</th><th>Last name</th><th>Email addresses</th></tr>";
contacts.forEach(row => {
  finalText = finalText + "<tr>";
  row.forEach(cell => {
    if (typeof cell === "object") {
      myString = cell.join("<br>");
    } else {
      myString = cell;
    }
    finalText = finalText + `<td>${myString}</td>`;
  });
  finalText = finalText + "</tr>";
});
finalText = finalText + "</table>";
document.getElementById("table").innerHTML = finalText;
