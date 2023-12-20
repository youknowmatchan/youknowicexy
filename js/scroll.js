var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();

    var targetId = this.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);

    var offset = target.offsetTop - 300;

    window.scrollTo(0, offset);
  });
}