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


// var coll = document.getElementsByClassName("the-list");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.height === "auto") {
//       content.style.height = "0px";
//         content.style.display = "none";
//     } else {
//       content.style.height = "auto";
//         content.style.display = "block";
//     }
//   });
// }



// const option = document.getElementById("the-option-menu");
// let text = collection.firstElementChild.innerHTML;
// console.log(text)
// document.getElementById("demo2").innerHTML = text;

window.addEventListener("load",  ()=> {
  var the_menu_collapsibles = document.getElementsByClassName("the-menu-collapsible");
  var i
  for (i = 0; i < the_menu_collapsibles.length; i++) {
    the_menu_collapsibles[i].addEventListener("click", function () {
      // var firstElement = this.firstElementChild;
      this.childNodes.forEach(child => {
        if (child.className === "the-menu-collapsible-list") {
          if (child.style.height === "auto") {
            child.style.height = 0;
            child.style.opacity = 0;
          } else {
            child.style.height = 'auto';
            child.style.opacity = 1;
          }
        }
      });

    });
  }

});

