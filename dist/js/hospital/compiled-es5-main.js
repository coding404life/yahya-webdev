System.register((void 0), [], function() {
  "use strict";
  var mysec2 = document.getElementById('mysec2'),
      mysec1 = document.getElementById('mysec1'),
      mybtn = document.getElementById('mybtn');
  window.onscroll = function() {
    'use strict';
    if (document.documentElement.scrollTop <= 300) {
      mysec2.style.opacity = '0';
      mysec2.style.transition = 'all 2s';
    } else {
      mysec2.style.opacity = '2.5';
      mysec2.style.transition = 'all 3s';
      setTimeout(mybtn.click(), 5000);
    }
  };
  AOS.init({duration: 3000});
  var elements = document.querySelectorAll('.bar');
  {
    try {
      throw undefined;
    } catch ($i) {
      $i = 0;
      for (; $i < elements.length; $i++) {
        try {
          throw undefined;
        } catch (i) {
          i = $i;
          try {
            try {
              throw undefined;
            } catch (frame) {
              try {
                throw undefined;
              } catch (width) {
                try {
                  throw undefined;
                } catch (attr) {
                  try {
                    throw undefined;
                  } catch (id) {
                    try {
                      throw undefined;
                    } catch (elem) {
                      elem = elements[$traceurRuntime.toProperty(i)];
                      id = setInterval(frame, 40);
                      attr = elem.getAttribute("data-progress");
                      width = 1;
                      frame = function() {
                        if (width >= attr) {
                          clearInterval(id);
                        } else if (document.documentElement.scrollTop >= 300) {
                          width++;
                          elem.style.width = width + '%';
                        }
                      };
                    }
                  }
                }
              }
            }
          } finally {
            $i = i;
          }
        }
      }
    }
  }
  return {};
});
