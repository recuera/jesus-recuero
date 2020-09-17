function isScrolledIntoView(elem) {
  var docViewTop = window.scrollY;
  var docViewBottom = docViewTop + window.innerHeight;

  var elemTop = elem.offsetTop;
  var elemBottom = elemTop + (elem.offsetHeight / 2);

  return ((elemBottom <= docViewBottom));
}

function handleScroll() {
  // if(isScrolledIntoView(document.getElementById('about'))) {
  //   document.querySelector('.picture-jesus').setAttribute('class', 'picture-jesus visible');
  // }

  if(isScrolledIntoView(document.querySelector('.bookings'))) {
    document.querySelector('.booking-info').setAttribute('class', 'booking-info visible');
  }
}

function makeBoxesVisible() {
  document.querySelectorAll('.box').forEach(
    function (box) {
      box.setAttribute('class', 'box visible')
    }
  );
}

function addInitialTransitionClasses() {
  handleScroll();
  // document.querySelector('.cover-img').setAttribute('class', 'cover-img visible');
  setTimeout(makeBoxesVisible, 200);
}

window.onload = function() {
  window.onscroll = function(event) {
    handleScroll()
  };

  addInitialTransitionClasses();
};

