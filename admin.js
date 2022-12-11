function admin_open_the_sidebar() {
  var thesidebar = document.getElementById("the-sidebar")
  thesidebar.classList.remove("the-sidebar-hide")
  thesidebar.classList.add("the-sidebar-show")
}

function admin_close_the_sidebar() {
  var thesidebar = document.getElementById("the-sidebar")
  thesidebar.classList.remove("the-sidebar-show")
  thesidebar.classList.add("the-sidebar-hide")
}
function admin_open_topnav_menu() {
  var thesidebar = document.getElementById("the-topnav-menu")
  thesidebar.style.display = 'block'
}

function admin_close_topnav_menu() {
  var thesidebar = document.getElementById("the-topnav-menu")
  thesidebar.style.display = 'none'
}

function admin_logout() {
  console.log("logout")
}
