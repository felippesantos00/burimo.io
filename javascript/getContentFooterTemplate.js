$(document).ready(function () {
  const footerContentDiv = $(".footerContent");
  fetch("templates/footer.html")
    .then((response) => response.text())
    .then((html) => {
      footerContentDiv.html(html);
    });
});
