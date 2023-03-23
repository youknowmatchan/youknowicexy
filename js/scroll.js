// Select all anchor tags with href starting with '#'
var links = document.querySelectorAll('a[href^="#"]');

// Loop through the links
for (var i = 0; i < links.length; i++) {
  // Add a click event listener to each link
  links[i].addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element
    var targetId = this.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);

    // Calculate the target scroll position (subtracting 20 pixels for padding)
    var offset = target.offsetTop - 300;

    // Scroll to the target position
    window.scrollTo(0, offset);
  });
}