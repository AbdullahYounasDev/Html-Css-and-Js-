/** @format */

const mobileNav = document.getElementsByClassName("mobile-nav")[0];
const toggleNav = () => {
  mobileNav.style.display = "block";
  mobileNav.style.left = "0px";
};
const closeNav = () => {
  mobileNav.style.left = "-350px";
};
