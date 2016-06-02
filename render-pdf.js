var page = new WebPage();

page.paperSize = {
    width: '1100px',
    height: '1550px',
    margin: '50px'
};

page.viewportSize = {
  width: 1000,
  height: 1500
};

page.open("_site/index.html", function (status) {
    page.render("cv.pdf");
    phantom.exit();
});
