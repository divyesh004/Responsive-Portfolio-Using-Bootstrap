// Define an array of strings to be displayed and erased
const textArray = [
    "Freelancer",
    "Web Designer!",
    // Add more strings as needed
  ];
  
  // Initialize variables
  let typeJsText = document.querySelector(".animatedText");
  let stringIndex = 0; // Index of the current string in the array
  let charIndex = 0; // Index of the current character in the current string
  let isTyping = true; // Whether we are currently typing or erasing
  
  function typeJs() {
    if (stringIndex < textArray.length) {
      // Check if there are more strings to display or erase
      const currentString = textArray[stringIndex];
  
      if (isTyping) {
        // Typing animation
        if (charIndex < currentString.length) {
          typeJsText.innerHTML += currentString.charAt(charIndex);
          charIndex++;
        } else {
          isTyping = false; // Switch to erasing mode
        }
      } else {
        // Erasing animation
        if (charIndex > 0) {
          typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
          charIndex--;
        } else {
          isTyping = true; // Switch back to typing mode
          stringIndex++; // Move to the next string
  
          if (stringIndex >= textArray.length) {
            stringIndex = 0; // Reset to the beginning of the array
          }
  
          charIndex = 0; // Reset character index
          typeJsText.innerHTML = ""; // Clear the content for the new string
        }
      }
    }
  }
  
  // Set an interval to call the typeJs function
  setInterval(typeJs, 100); // You can adjust the animation speed as needed




  // Caounter Codepen
  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
      start: 0,
      end: 100,
      easing: 'swing',
      duration: 400,
      complete: ''
    }, options);
  
    var thisElement = $(this);
  
    $({ count: settings.start }).animate({ count: settings.end }, {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  
  
  $('#number1').jQuerySimpleCounter({ end: 99, duration: 8000 });
  $('#number2').jQuerySimpleCounter({ end: 95, duration: 8000 });
  $('#number3').jQuerySimpleCounter({ end: 92, duration: 8000 });
  $('#number4').jQuerySimpleCounter({ end: 70, duration: 8500 });




  $(document).ready(function() {
    var Animation = function(animationBar, percentage) {
  
      this.animationBar = animationBar;
      this.percentage = percentage;
      this.animationArray = null;
      this.animationOffset = null;
      this.labelArray = null;
      this.percentageArray = null;
      this.index = 0;
  
      this.initialize();
  
    };  
  
    Animation.prototype.initialize = function() {
  
      this.animationArray = document.getElementsByClassName(this.percentage);
  
      if (this.animationOffset === null)
        this.animationOffset = [];
  
      if (this.labelArray === null)
        this.labelArray = [];
  
      if (this.percentageArray === null)
        this.percentageArray = [];
  
      this.setUpElements();
  
    };
  
    Animation.prototype.setUpElements = function() {
  
      for (var i = 0; i < this.animationArray.length; i++) {
        var elem = this.animationArray[i],
          offset = elem.offsetTop + document.getElementsByClassName(this.percentage)[0].clientHeight,
          percentage = $(this.animationArray[i]).data(this.percentage);
  
        this.animationOffset.push(offset);
        this.percentageArray.push(percentage);
  
        $(this.animationArray[i]).find('.label1').html('HTML: ' + percentage + '%');
        $(this.animationArray[i]).find('.label2').html('CSS: ' + percentage + '%');
        $(this.animationArray[i]).find('.label3').html('JAVA SCRIPT: ' + percentage + '%');
        $(this.animationArray[i]).find('.label4').html('JQUERY: ' + percentage + '%');
        $(this.animationArray[i]).find('.label5').html('BOOT STRAP: ' + percentage + '%');
        $(this.animationArray[i]).find('.label6').html('MEDIA QUERY: ' + percentage + '%');
        $(this.animationArray[i]).find('.label7').html('REACT JS: ' + percentage + '%');
        $(this.animationArray[i]).find('.label8').html('NODE JS: ' + percentage + '%');
        $(this.animationArray[i]).find('.label9').html('PHP: ' + percentage + '%');
        $(this.animationArray[i]).find('.label10').html('DSA: ' + percentage + '%');
        $(this.animationArray[i]).find('.label11').html('ANGULAR JS: ' + percentage + '%');
        $(this.animationArray[i]).find('.label12').html('C LANG.: ' + percentage + '%');
        $(this.animationArray[i]).find('.label13').html('C+ LANG: ' + percentage + '%');
        $(this.animationArray[i]).find('.label14').html('C#: ' + percentage + '%');
        $(this.animationArray[i]).find('.label15').html('PYTHON: ' + percentage + '%');
        $(this.animationArray[i]).find('.label16').html('RUBY ON RAIL: ' + percentage + '%');
      }
  
      this.attachListeners();
    }
  
    Animation.prototype.attachListeners = function() {
  
      $(window).on('scroll', this.onWindowScroll.bind(this));
    };
  
    Animation.prototype.onWindowScroll = function() {
  
      for (var i = 0; i < this.animationArray.length; i++) {
        if (window.pageYOffset >= this.animationOffset[this.index] - window.innerHeight) {
          this.showElement();
          this.index++;
        } else
          return;
      }
    };
  
    Animation.prototype.showElement = function() {
      var element = document.getElementsByClassName(this.percentage)[this.index];
      element.className += ' show';
      this.animateBar(element, this.percentageArray[this.index]);
    }
  
    Animation.prototype.animateBar = function(element, width) {
  
      var $element = $(element),
        className = ' p' + width;
  
      $element.find(this.animationBar).addClass(className);
    }
  
    new Animation('.animation-bar', 'percentage');
  
  });


  // Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});





