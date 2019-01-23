const contacts = [
  ["Justus", "Jonas", ["justus@mail.com"]],
  ["Peter", "Shaw", ["peter.shaw@mail.com", "peter.shaw@mail.de"]],
  ["Bob", "Andrews", ["bob.andrews@mail.com", "bob.andrews@mail.de"]]
];
var finalText = "<table class=table table-striped table-bordered>";
finalText =
  finalText +
  "<tr><th>First name</th><th>Last name</th><th>Email addresses</th></tr>";
var append = contacts.map(row => {
  i = "<tr>";
  row.map(cell => {
    if (typeof cell === "object") {
      myString = cell.join("<br>");
    } else {
      myString = cell;
    }
    i = i + `<td>${myString}</td>`;
    return i;
  });
  i = i + "</tr>";
  return i;
});
finalText = finalText + append.join("");
finalText = finalText + "</table>";
document.getElementById("table").innerHTML = finalText;
