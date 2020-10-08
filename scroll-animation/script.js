const containers = document.getElementById("containers");

let lastScrollTop = 0;
let scrollContainer = 1;
let currentContainer = "container-" + scrollContainer;
const containersCount = 4;

// window.addEventListener("scroll", (e) => {
//   let currentOffset = window.pageYOffset;
//   if (currentOffset > lastScrollTop) {
//     //down scroll
//     console.log("down");
//     if (scrollContainer <= containersCount) ++scrollContainer;
//     document.getElementById(currentContainer).scrollIntoView();
//     console.log(scrollContainer);
//   } else {
//     //up scroll
//     console.log("up");
//     if (scrollContainer >= 1) scrollContainer--;
//     document.getElementById(currentContainer).scrollIntoView();
//     console.log(scrollContainer);
//   }
//   lastScrollTop = currentOffset <= 0 ? 0 : currentOffset;
// });

// var scrolling = false;

// jQuery(function ($) {
//   $("#up")
//     .mousedown(function () {
//       scrolling = true;
//       startScrolling($("#items"), "-=10px");
//     })
//     .mouseup(function () {
//       scrolling = false;
//     });
// });

// function startScrolling(obj, param) {
//   obj.animate({ top: param }, "fast", function () {
//     if (scrolling) {
//       startScrolling(obj, param);
//     }
//   });
// }
