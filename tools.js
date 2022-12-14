/* modal, alert dialog, toast */



var toastContainer
window.addEventListener("load", () => {
    loadTheModalSystem()
    loadTheToastSystem()
    theToastShow("helow", 3, "success");
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
                        modal.style.display = "none"
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
    }
}
function theModalHide(id) {
    var modal = document.getElementById(id)
    if (modal != undefined) {
        modal.style.display = "none"
    }
}

// ====================================================================================== toast

function loadTheToastSystem() {
    toastContainer =
        toastContainer = document.createElement('ul');
    toastContainer.setAttribute("id", "__the_toast_Container__");
    // toastContainer.setAttribute("aria-live", "assertive");
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
        console.log("add class remove")
        _toast.classList.remove("show")
        _toast.classList.add("remove")
        setTimeout(() => {
            _toast.remove()
        }, 1000);
    }
}

// ====================================================================================== alert dialog

