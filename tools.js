/* modal, alert dialog, toast */



var toastContainer
window.addEventListener("load", () => {

    window.addEventListener('scroll', function () {
        if (winX !== null && winY !== null) {
            window.scrollTo(winX, winY);
        }
    });
    

    loadTheModalSystem()
    loadTheToastSystem()
    // theToastShow("helow", 3, "success")

    theFloatingMenuLoad()
})
function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// ====================================================================================== modal
function loadTheModalSystem() {
    var the_modals = document.getElementsByClassName("the-modal");
    Array.prototype.forEach.call(the_modals, function (modal) {
        var modalContent = modal.firstElementChild
        if (modalContent != undefined) {
            modalContent.childNodes.forEach(child => {
                if (hasClass(child, "the-modal-close-button")) {
                    child.addEventListener("click", () => {
                        theModalHide(modal.getAttribute("id"))
                    })
                }
            })
        }
    });
}

function theModalShow(id) {
    var modal = document.getElementById(id)
    if (modal != undefined) {
        modal.style.display = "block"

        disableScrolling()
    }
}
function theModalHide(id) {
    var modal = document.getElementById(id)
    if (modal != undefined) {
        modal.style.display = "none"
        enableScrolling()
    }
}

// ====================================================================================== toast

function loadTheToastSystem() {
    toastContainer =
        toastContainer = document.createElement('ul');
    toastContainer.setAttribute("id", "__the_toast_Container__");
    document.body.appendChild(toastContainer);
}


function theToastShow(message, duration = 1, type = "success") {

    let toastId = randomString(12)
    var _toast =
        _toast = document.createElement('li')
    _toast.setAttribute("class", "__the_toast__")
    _toast.setAttribute("id", toastId)
    // ----------------- toast content


    var _theListtileTitle = document.createElement('div');
    _theListtileTitle.classList.add("the-listtile-title")


    var _theListtileIconParent = document.createElement("div")
    _theListtileIconParent.classList.add("the-listtile-icon")

    var _theListtileIcon = document.createElement("div")
    if (type == "success") {
        _theListtileIcon.classList.add("the-icon-check")
        _theListtileIcon.style.backgroundColor = "#186a51"

        _theListtileTitle.innerHTML = "Success"
        _theListtileTitle.style.color = "#186a51"

        _toast.style.borderColor = "#27a881"
    }
    if (type == "warning") {
        _theListtileIcon.classList.add("the-icon-warning-triangle")
        _theListtileIcon.style.backgroundColor = "#747804"

        _theListtileTitle.innerHTML = "Warning"
        _theListtileTitle.style.color = "#747804"

        _toast.style.borderColor = "#d6dc2d"
    }
    if (type == "info") {
        _theListtileIcon.classList.add("the-icon-info")
        _theListtileIcon.style.backgroundColor = "#2f2f2e"

        _theListtileTitle.innerHTML = "Info"
        _theListtileTitle.style.color = "#2f2f2e"

        _toast.style.borderColor = "#7c7c79"
    }
    if (type == "error") {
        _theListtileIcon.classList.add("the-icon-error")
        _theListtileIcon.style.backgroundColor = "#721818"

        _theListtileTitle.innerHTML = "Error"
        _theListtileTitle.style.color = "#721818"

        _toast.style.borderColor = "#972d1d"
    }
    _theListtileIconParent.appendChild(_theListtileIcon)



    var _theListtileDescription = document.createElement('div');
    _theListtileDescription.innerHTML = message
    _theListtileDescription.classList.add("the-listtile-description")

    var _theListtileBody = document.createElement('div');
    _theListtileBody.appendChild(_theListtileTitle)
    _theListtileBody.appendChild(_theListtileDescription)

    var _theListtileClose = document.createElement("div")
    _theListtileClose.classList.add("the-listtile-close")
    var _theListtileCloseIcon = document.createElement("div")
    _theListtileCloseIcon.classList.add("the-icon-close")
    _theListtileCloseIcon.style.height = "13px"
    _theListtileCloseIcon.style.width = "13px"
    _theListtileCloseIcon.style.backgroundColor = "#7c7c79"

    _theListtileClose.appendChild(_theListtileCloseIcon)

    var _theListtile = document.createElement("div")
    _theListtile.classList.add("the-listtile")

    _theListtile.appendChild(_theListtileIconParent)
    _theListtile.appendChild(_theListtileBody)
    _theListtile.appendChild(_theListtileClose)

    _toast.appendChild(_theListtile)
    // ----------------- proggress
    var _toastProggressParent = document.createElement('div');
    _toastProggressParent.classList.add("the_toast_progressbar")
    var _toastProggressInner = document.createElement('div')
    _toastProggressInner.classList.add("inner")
    _toastProggressInner.style.animationDuration = duration + "s"
    _toastProggressParent.appendChild(_toastProggressInner)
    _toast.appendChild(_toastProggressParent)


    //------------------ apend to toast container
    toastContainer.appendChild(_toast)

    _theListtileClose.addEventListener("click", () => {
        theToastRemove(toastId)
    })

    setTimeout(() => {
        _toast.classList.add("show")
        _toastProggressInner.style.animationPlayState = 'running';
        const _toastTO = setTimeout(() => {
            theToastRemove(toastId)
            clearTimeout(_toastTO)
        }, 1000 * duration);
    }, 250)


}

function theToastRemove(toastId) {
    var _toast = document.getElementById(toastId)
    if (_toast != undefined) {
        _toast.classList.remove("show")
        _toast.classList.add("remove")
        setTimeout(() => {
            _toast.remove()
        }, 1000);
    }
}

// ====================================================================================== floating menu

function theFloatingMenuLoad() {
    // var _theFloatingMenus = document.getElementsByClassName("the-floating-menu");
    // Array.prototype.forEach.call(_theFloatingMenus, (_theFloatingMenu) => {
    //     _theFloatingMenu.addEventListener("click", (e) => {
    //         theFloatingMenuShow(_theFloatingMenu)
    //     })
    // })
    document.addEventListener("click", (event) => {
        if (hasClass(event.target, "the-floating-menu")) {
            theFloatingMenuShow(event.target)
            console.log("show fm1")
        }
        if (hasClass(event.target.parentNode, "the-floating-menu") && !hasClass(event.target, "active")) {
            theFloatingMenuShow(event.target.parentNode)
            console.log("show fm2")
        }
        if (hasClass(event.target, "the-floating-menu-container") && hasClass(event.target, "active")) {
            console.log("hide fm")
            theFloatingMenuHide(event.target)
        }

    });
}

function theFloatingMenuShow(theFloatingMenu) {
    disableScrolling()
    theFloatingMenu.childNodes.forEach((child) => {
        if (hasClass(child, "the-floating-menu-container")) {
            child.classList.add("active")

            child.addEventListener("click", (e2) => {

            })
            var content = child.firstElementChild
            if (content != undefined && hasClass(content, "the-floating-menu-content")) {
                var currentOffset = getPositionBaseOnScreen(theFloatingMenu)
                var contentSize = {
                    w: content.offsetWidth,
                    h: content.offsetHeight,
                }
                var midXOffset = theFloatingMenu.offsetWidth / 2 + (currentOffset.x)
                var midYOffset = theFloatingMenu.offsetHeight / 2 + (currentOffset.y)
                if (midXOffset + contentSize.w > window.innerWidth / 2) {
                    content.style.left = midXOffset - contentSize.w + "px"
                }
                else {
                    if (midXOffset - contentSize.w > 0) {
                        content.style.left = midXOffset - contentSize.w + "px"
                    }
                    else {
                        content.style.left = midXOffset + "px"
                    }
                }
                // show y offset
                if (currentOffset.y + content.offsetHeight > window.innerHeight) {
                    content.style.top = midYOffset - content.offsetHeight + "px"
                }
                else {
                    content.style.top = midYOffset + "px"
                }
            }
        }
    })
}

function theFloatingMenuHide(element) {
    enableScrolling()
    element.classList.remove("active")
}

function getPosition(element) {
    var xPosition = 0,
        yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft + element.clientLeft);
        yPosition += (element.offsetTop + element.clientTop);
        element = element.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

function getScroll() {
    return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    };
}

function getPositionBaseOnScreen(element) {
    var _pos = getPosition(element)
    var scroll = getScroll()
    return {
        x: (_pos.x - scroll.x),
        y: (_pos.y - scroll.y)
    }
}

var scrollX;
var scrollY;
function disableScrolling() {
    winX = window.scrollX;
    winY = window.scrollY;
    // scrollX = window.scrollX;
    // scrollY = window.scrollY;
    // window.onscroll = () => { window.scrollTo(scrollX, scrollY); };
    // document.body.style.overflowY = "hidden";
}

function enableScrolling() {
    winX = null;
    winY = null;
    // window.onscroll = function () { };
    // document.body.style.overflowY = "scroll";
}

var winX = null;
var winY = null;




