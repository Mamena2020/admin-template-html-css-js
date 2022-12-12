/* modal, alert dialog, splash */



window.addEventListener("load", () => {
    loadTheModalSystem()

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
