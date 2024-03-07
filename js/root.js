// sorting skils
var skil_box_wrap = document.querySelectorAll(".skil_box_wrap");
var skils_button = document.querySelectorAll(".skils_button");
for (i = 0; i < skils_button.length; i++) {
  skils_button[i].addEventListener("click", (skilbtn) => {
    var filterData = skilbtn.target.dataset.filter;
    skil_box_wrap.forEach((skilclassMatchingArg) => {
      if (filterData === "All") {
        skilclassMatchingArg.style.display = "block";
      } else if (skilclassMatchingArg.classList.contains(filterData)) {
        skilclassMatchingArg.style.display = "block";
      } else {
        skilclassMatchingArg.style.display = "none";
      }
    });
  });
}
// sorting portfolio
var portfolio_item = document.querySelectorAll(".portfolio_item");
var portfolio_button = document.querySelectorAll(".portfolio_button");
for (i = 0; i < portfolio_button.length; i++) {
  portfolio_button[i].addEventListener("click", (btn) => {
    var filterData = btn.target.dataset.filter;
    portfolio_item.forEach((classMatchingArg) => {
      if (filterData === "All") {
        classMatchingArg.style.display = "block";
      } else if (classMatchingArg.classList.contains(filterData)) {
        classMatchingArg.style.display = "block";
      } else {
        classMatchingArg.style.display = "none";
      }
    });
  });
}
// active portfolio button
portfolio_button.forEach((actvbtn) => {
  actvbtn.addEventListener("click", function () {
    portfolio_button.forEach((btnn) =>
      btnn.classList.remove("portfolio_button_active")
    );
    this.classList.add("portfolio_button_active");
  });
});
// active skils button
skils_button = document.querySelectorAll(".skils_button");
skils_button.forEach((actvbtn) => {
  actvbtn.addEventListener("click", function () {
    skils_button.forEach((btnn) =>
      btnn.classList.remove("skils_button_active")
    );
    this.classList.add("skils_button_active");
  });
});
// scroll bar
window.onscroll = function () {
  // desktop
  var scroll_bar = document.getElementById("scroll_bar");
  var scroll_number = document.getElementById("scroll_number");
  var scrollBarHeight =
    (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) *
    90;
  scroll_bar.style.height = 10 + scrollBarHeight + "%";
  scroll_number.innerHTML = 10 + Math.floor(scrollBarHeight) + "%";
  // mobile
  var scroll_bar_mobile = document.getElementById("scroll_bar_mobile");
  var scroll_number_mobile = document.getElementById("scroll_number_mobile");
  var scrollBarHeightmobile =
    (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) *
    90;
  scroll_bar_mobile.style.width = 10 + scrollBarHeightmobile + "%";
  scroll_number_mobile.innerHTML = 10 + Math.floor(scrollBarHeightmobile) + "%";
};
// theme selection
function themeCustomise() {
  var Night_Theme_wrap = document.querySelector(".Night_Theme_wrap");
  var Day_Theme_wrap = document.querySelector(".Day_Theme_wrap");
  var body = document.querySelector("body");
  var hero_img_color = document.querySelector(".hero_img_color");
  var hero_img_mobile = document.querySelector(".hero_img_mobile");
  Day_Theme_wrap.onclick = function dayTheme() {
    Day_Theme_wrap.classList.add("active_theme");
    Night_Theme_wrap.classList.remove("active_theme");
    body.classList.add("light_theme");
    hero_img_color.src = "./img/salman_farshe-light.png";
    hero_img_mobile.src = "./img/salman_farshe-mobile_light.png";
  };
  Night_Theme_wrap.onclick = function nightTheme() {
    Night_Theme_wrap.classList.add("active_theme");
    Day_Theme_wrap.classList.remove("active_theme");
    body.classList.remove("light_theme");
    hero_img_color.src = "./img/salman_farshe_dark.png";
    hero_img_mobile.src = "./img/salman_farshe-mobile.png";
  };
}
themeCustomise();
// visitor count
var visitor_count_number = document.querySelector(".visitor_count_number");
function countTheVisitors() {
  fetch("https://api.countapi.xyz/update/SalmanFarshe/salman/?amount=1")
    .then((result) => result.json())
    .then((result) => {
      visitor_count_number.innerHTML = " " + result.value;
    });
}
countTheVisitors();
// count age
var age = document.querySelector(".age");
function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
age.innerHTML = calculate_age(new Date(2001, 8, 13)) + " Years";
