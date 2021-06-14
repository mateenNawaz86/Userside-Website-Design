let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

function homePage() {
    location.href = 'index.html';
}

function aboutPage() {
    location.href = 'about.html';
}

function coursePage() {
    location.href = 'course.html';
}

function blogPage() {
    location.href = 'blog.html';
}

function contactPage() {
    location.href = 'contact.html';
}