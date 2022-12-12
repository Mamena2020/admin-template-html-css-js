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


window.addEventListener("load", () => {
  var the_menu_collapsibles = document.getElementsByClassName("the-menu-collapsible");
  var i
  for (i = 0; i < the_menu_collapsibles.length; i++) {
    //------------------------------------------- add trailing 
    the_menu_collapsibles[i].childNodes.forEach(child => {
      if (hasClass(child, 'the-sidebar-menu-item')) {
        var trailing = document.createElement("div")
        // trailing.innerHTML ="X"
        trailing.classList.add("the-trailing")
        changeIconChildWithSVG(trailing, svgLeftArrow)
        child.appendChild(trailing)
        // -------------------------- expand check
        if (hasClass(child, "active")) {
          the_menu_collapsibles[i].expand = true
          the_menu_collapsibles[i].setAttribute("expand", true)
          collapsibleClick(the_menu_collapsibles[i],true)
        }
        else {
          the_menu_collapsibles[i].expand = false
          the_menu_collapsibles[i].setAttribute("expand", false)
        }
        // -------------------------- 

      }
    })
    // var expand = the_menu_collapsibles[i].hasClass("active")


    the_menu_collapsibles[i].setAttribute("onClick", `collapsibleClick(this,false)`)

    // the_menu_collapsibles[i].addEventListener("click", function () {
    //   collapsibleClick(this)
    // });
  }

});

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

var svgLeftArrow = `<svg xmlns="http://www.w3.org/2000/svg" class="transition" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 354 511.51"><path fill-rule="nonzero" d="M350.65 117.68 221.03 255.76l129.62 138.08c4.67 4.96 4.43 12.76-.53 17.43l-100.74 96.79c-4.9 4.72-12.71 4.57-17.43-.33L3.35 264.21c-4.49-4.78-4.44-12.19 0-16.9L231.86 3.88c4.66-4.96 12.47-5.2 17.43-.53l100.92 96.99c4.88 4.69 5.06 12.42.44 17.34zM195.13 247.31l129.21-137.64-83.05-79.8L29.25 255.76l212.04 225.89 83.05-79.8-129.21-137.64c-4.43-4.71-4.49-12.12 0-16.9z"/></svg>`
var svgBottomArrow = `<svg xmlns="http://www.w3.org/2000/svg"  class="transition" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 354.34"><path fill-rule="nonzero" d="M402.22 29.69 264.45 159.02c-4.78 4.5-12.2 4.44-16.91 0L109.77 29.69l-79.88 83.13 226.1 212.24L482.1 112.82l-79.88-83.13zM255.99 133.1 394.21 3.35c4.92-4.62 12.66-4.44 17.35.44l97.09 101.02c4.67 4.97 4.43 12.78-.54 17.45L264.45 350.98c-4.71 4.45-12.13 4.5-16.91 0L3.79 122.16c-4.92-4.72-5.07-12.53-.34-17.44L100.34 3.89c4.67-4.97 12.48-5.21 17.44-.54L255.99 133.1z"/></svg>`

function changeIconChildWithSVG(parent, svg) {
  var doc = new DOMParser().parseFromString(
    svg
    , 'application/xml'
  );
  doc.documentElement.style.height = "15px";
  doc.documentElement.style.width = "15px";
  parent.replaceChildren(doc.documentElement)
}


function collapsibleClick(element, isInit = false) {
  var expand = element.expand
  console.log(expand)
  if (isInit == false) {
    if (expand == true) {
      expand = false;
    }
    else {
      expand = true
    }
  }
  element.expand = expand
  element.setAttribute("expand", expand)
  element.childNodes.forEach(child => {
    if (hasClass(child, 'the-menu-collapsible-list')) {
      if (element.expand) {
        child.style.height = 'auto'
        child.style.opacity = 1
      } else {
        child.style.height = 0
        child.style.opacity = 0
      }
    }
    if (hasClass(child, 'the-sidebar-menu-item')) {
      // ------------------------------- trailing animated
      child.childNodes.forEach(e => {
        if (e.className == "the-trailing") {
          // if (e.innerHTML === "X") {
          //   e.innerHTML = "Y"
          // }
          // else {
          //   e.innerHTML = "X"
          // }

          changeIconChildWithSVG(e, element.expand ? svgBottomArrow : svgLeftArrow)
        }
      })
      // ------------------------------- trailing
    }

  });
}