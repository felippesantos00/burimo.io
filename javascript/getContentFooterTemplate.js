$(document).ready(function () {
  const headerContentDiv = $(".footerContent");
  fetch("templates/footer.html")
    .then((response) => response.text())
    .then((html) => {
      headerContentDiv.html(html);
    });
});
