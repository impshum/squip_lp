// global object
const YOU = {};

// init slider
YOU.initSlider = (selector = ".carousel__wrapper", options = {}) => {
  const containers = Array.from(document.querySelectorAll(selector));

  if (!containers.length) return;

  containers.forEach(function (container) {
    const splide = new Splide(container, options);

    splide.mount();
  });
};

// manage carousels
YOU.manageCarousels = () => {
  YOU.initSlider("#testimonialSlider", {
    type: "loop",
    perPage: 2,
    pagination: false,
    arrows: false,
    focus: "center",
    updateOnMove: true,
    padding: {
      left: "20%",
      right: "20%",
    },
    breakpoints: {
      767: {
        perPage: 1,
      },
    },
  });
};

// type writer
YOU.createTypeWriter = function () {
  // get the element
  const textFields = Array.from(document.querySelectorAll(".typing-text"));

  if (!textFields.length) return;

  // make a words array
  const words = ["Quality", "Operations", "Innovation", "Compliance"];

  textFields.forEach(function (text) {
    const data = text.dataset.content || text.getAttribute("data-content");
    const content = data ? data.split(",") : words;

    // start typing effect
    setTyper(text, content);
  });

  function setTyper(element, words) {
    const LETTER_TYPE_DELAY = 75;
    const WORD_STAY_DELAY = 2000;

    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    var direction = DIRECTION_FORWARDS;
    var wordIndex = 0;
    var letterIndex = 0;

    var wordTypeInterval;

    startTyping();

    function startTyping() {
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
      const word = words[wordIndex];

      if (direction == DIRECTION_FORWARDS) {
        letterIndex++;

        if (letterIndex == word.length) {
          direction = DIRECTION_BACKWARDS;
          clearInterval(wordTypeInterval);
          setTimeout(startTyping, WORD_STAY_DELAY);
        }
      } else if (direction == DIRECTION_BACKWARDS) {
        letterIndex--;

        if (letterIndex == 0) {
          nextWord();
        }
      }

      const textToType = word.substring(0, letterIndex);

      element.textContent = textToType;
    }

    function nextWord() {
      letterIndex = 0;
      direction = DIRECTION_FORWARDS;
      wordIndex++;

      if (wordIndex == words.length) {
        wordIndex = 0;
      }
    }
  }
};

// sticky header
YOU.stickyHeader = function () {
  const header = document.getElementById("headerMain");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("sticky");
    return;
  }
  header.classList.remove("sticky");
};

// document on load
document.addEventListener("DOMContentLoaded", () => {
  YOU.manageCarousels();
  YOU.createTypeWriter();
  YOU.stickyHeader();
});

// document on scroll
document.addEventListener("scroll", () => {
  YOU.stickyHeader();
});
