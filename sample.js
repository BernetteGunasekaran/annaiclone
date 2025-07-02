var item = document.querySelector('.service');

item.addEventListener("mouseover", function () {
  var svg = item.querySelector('svg');
  svg.style.transform = "scale(1.5)";
  svg.style.transition = "transform 0.3s ease";
});

item.addEventListener("mouseout", function () {
  var svg = item.querySelector('svg');
  svg.style.transform = "scale(1)";
});


