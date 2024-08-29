$(document).ready(function () {
  const headerContentDiv = $(".headerContent");
  fetch("templates/header.html")
    .then((response) => response.text())
    .then((html) => {
      headerContentDiv.html(html);
    });
});
