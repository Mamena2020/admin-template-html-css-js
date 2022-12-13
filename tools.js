/* modal, alert dialog, toast */



var toastContainer
window.addEventListener("load", () => {
    loadTheModalSystem()
    loadTheToastSystem()
    theToastShow("helow,", "title", 3);
    // theToastShow("helow2,", "title", 6);

})

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

// ------------------------------------------------------------------------- toast

function loadTheToastSystem() {
    toastContainer =
        toastContainer = document.createElement('ul');
    toastContainer.setAttribute("id", "__the_toast_Container__");
    // toastContainer.setAttribute("aria-live", "assertive");
    document.body.appendChild(toastContainer);
}


function theToastShow(message, title = "Slash", duration = 1, backgroundColor = "green",) {

    let toastId = randomString(12)
    var _toast =
        _toast = document.createElement('li')
    _toast.setAttribute("class", "__the_toast__")
    _toast.setAttribute("id", toastId)
    // ----------------- message
    var _message = document.createElement('div');
    _message.innerHTML = message + duration
    _toast.appendChild(_message)
    // ----------------- proggress
    var _toastProggressParent = document.createElement('div');
    _toastProggressParent.classList.add("the_toast_progressbar")
    var _toastProggressInner = document.createElement('div')
    _toastProggressInner.classList.add("inner")
    _toastProggressInner.style.animationDuration = duration + "s"
    _toastProggressInner.style.animationDuration = duration + "s"
    _toastProggressParent.appendChild(_toastProggressInner)
    _toast.appendChild(_toastProggressParent)


    //------------------ apend to toast container
    toastContainer.appendChild(_toast)

    _toastProggressInner.style.animationPlayState = 'running';
    
    setTimeout(() => {
        _toast.classList.add("show")
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
        setTimeout(() => {
            _toast.remove()
        }, 1000);
    }
}

function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}