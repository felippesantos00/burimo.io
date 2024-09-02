$(document).ready(function () {
  const headerContentDiv = $(".headerContent");
  const footerContentDiv = $(".footerContent");
  const sectionHomeContentDiv = $(".sectionHomeContent");
  fetch("templates/headerContent.html")
    .then((response) => response.text())
    .then((html) => {
      headerContentDiv.html(html);
    });
  fetch("templates/sectionHomeContent.html")
    .then((response) => response.text())
    .then((html) => {
      sectionHomeContentDiv.html(html);
    });
  fetch("templates/footerContent.html")
    .then((response) => response.text())
    .then((html) => {
      footerContentDiv.html(html);
    });
});
