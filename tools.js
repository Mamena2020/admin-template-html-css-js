/* modal, alert dialog, toast */


var __successColor1 = "#27a881"
var __successColor2 = "#186a51"
var __warningColor1 = "#d6dc2d"
var __warningColor2 = "#747804"
var __errorColor1 = "#972d1d"
var __errorColor2 = "#721818"
var __infoColor1 = "#7c7c79"
var __infoColor2 = "#2f2f2e"

var toastContainer
window.addEventListener("load", async () => {
    loadTheModalSystem()
    loadTheToastSystem()
    theAlertLoad()
    theFloatingMenuLoad()
    theSwitchLoad()
    theTabsLoad()
    window.addEventListener('scroll', function () {
        if (winX !== null && winY !== null) {
            window.scrollTo(winX, winY);
        }
    });
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
async function loadTheModalSystem() {
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
        modal.classList.add("show")
        disableScrolling()
    }
}
function theModalHide(id) {
    var modal = document.getElementById(id)
    if (modal != undefined) {
        modal.classList.remove("show")
        enableScrolling()
    }
}

// ====================================================================================== toast

async function loadTheToastSystem() {
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
        _theListtileIcon.style.backgroundColor = __successColor2

        _theListtileTitle.innerHTML = "Success"
        _theListtileTitle.style.color = __successColor2

        _toast.style.borderColor = __successColor1
    }
    if (type == "warning") {
        _theListtileIcon.classList.add("the-icon-warning-triangle")
        _theListtileIcon.style.backgroundColor = __warningColor2

        _theListtileTitle.innerHTML = "Warning"
        _theListtileTitle.style.color = __warningColor2

        _toast.style.borderColor = __warningColor1
    }
    if (type == "info") {
        _theListtileIcon.classList.add("the-icon-info")
        _theListtileIcon.style.backgroundColor = __infoColor2

        _theListtileTitle.innerHTML = "Info"
        _theListtileTitle.style.color = __infoColor2

        _toast.style.borderColor = __infoColor1
    }
    if (type == "error") {
        _theListtileIcon.classList.add("the-icon-error")
        _theListtileIcon.style.backgroundColor = __errorColor2

        _theListtileTitle.innerHTML = "Error"
        _theListtileTitle.style.color = __errorColor2

        _toast.style.borderColor = __errorColor1
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

async function theFloatingMenuLoad() {
    // var _theFloatingMenus = document.getElementsByClassName("the-floating-menu");
    // Array.prototype.forEach.call(_theFloatingMenus, (_theFloatingMenu) => {
    //     _theFloatingMenu.addEventListener("click", (e) => {
    //         theFloatingMenuShow(_theFloatingMenu)
    //     })
    // })
    document.addEventListener("click", (event) => {
        if (hasClass(event.target, "the-floating-menu")) {
            theFloatingMenuShow(event.target)
            // console.log("show fm1")
        }
        else
            if (hasClass(event.target.parentNode, "the-floating-menu") && !hasClass(event.target, "active")) {
                theFloatingMenuShow(event.target.parentNode)
                // console.log("show fm2")
            }
            else
                if (hasClass(event.target, "the-floating-menu-container") && hasClass(event.target, "active")) {
                    // console.log("hide fm")
                    theFloatingMenuHide(event.target)
                }

    });
}

function theFloatingMenuShow(theFloatingMenu) {
    disableScrolling()
    theFloatingMenu.childNodes.forEach((child) => {
        if (hasClass(child, "the-floating-menu-container")) {
            child.classList.add("active")
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
                // ------------------ animated
                content.classList.add("show")


            }
        }
    })
}

function theFloatingMenuHide(element) {
    enableScrolling()
    element.classList.remove("active")
    if (element.firstElementChild != undefined) {
        element.firstElementChild.classList.remove("show")
    }
}

// ====================================================================================== alert dialog
async function theAlertLoad() {
    var alertContainer = document.createElement("div")
    alertContainer.setAttribute("id", "the-alert-container")
    document.body.appendChild(alertContainer)
}

async function theAlertShow(options = Object) {
    return new Promise((resolve, reject) => {
        try {
            disableScrolling()
            let title = options.title
            let message = options.message
            let alertType = options.type
            let align = options.align
            let allowDismiss = options.allowDismiss ?? false

            // let alertWidth = options.alertWidth
            // let alertHeight = options.alertHeight
            let alertPosition = options.alertPosition ?? "center"
            let backgroundColor = options.backgroundColor ?? "#FFFFFF"

            let buttonPosition = options.buttonPosition ?? "center"
            // confirm
            let showConfirmButton = options.showConfirmButton ?? true
            let onConfirmButton = options.onConfirmButton ?? function () { }
            let confirmButtonText = options.confirmButtonText ?? "Ok"
            let confirmButtonBgColor = options.confirmButtonBgColor

            // cancel
            let showCancelButton = options.showCancelButton
            let onCancelButton = options.onCancelButton ?? function () { }
            let cancelButtonText = options.cancelButtonText ?? "Cancel"
            let showCancelButtonTop = options.showCancelButtonTop ?? true
            //----------------------------------------- container
            let alertContainer = document.getElementById("the-alert-container")
            //-----------------------------------------
            let alertContent = document.createElement("div")
            alertContent.classList.add("the-alert-content")
            alertContent.classList.add("the-animate-scale-1")
            alertContent.allowDismiss = allowDismiss
            if (alertPosition == undefined || alertPosition == "center") {
                alertContainer.style.display = "flex"
            }
            else {
                alertContainer.style.display = "block"
                alertContent.classList.add(alertPosition)
            }
            if (backgroundColor != undefined) {
                alertContent.style.backgroundColor = backgroundColor
            }
            // ----------------------------- type | icon
            if (alertType != undefined) {
                let alertIconContainer = document.createElement("div")
                alertIconContainer.style.display = "flex"
                alertIconContainer.style.justifyContent = "center"
                alertIconContainer.style.alignItems = "center"
                let alertIcon = document.createElement("div")
                alertIcon.style.height = "35px"
                alertIcon.style.width = "35px"
                alertIcon.style.margin = "8px"
                if (alertType.toLowerCase() == "success") {
                    alertIcon.classList.add("the-icon-check")
                    alertIcon.style.backgroundColor = __successColor1
                }
                if (alertType.toLowerCase() == "warning") {
                    alertIcon.classList.add("the-icon-warning-triangle")
                    alertIcon.style.backgroundColor = __warningColor1
                }
                if (alertType.toLowerCase() == "info") {
                    alertIcon.classList.add("the-icon-info")
                    alertIcon.style.backgroundColor = __infoColor1
                }
                if (alertType.toLowerCase() == "question") {
                    alertIcon.classList.add("the-icon-question")
                    alertIcon.style.backgroundColor = __infoColor1
                }
                if (alertType.toLowerCase() == "error") {
                    alertIcon.classList.add("the-icon-error")
                    alertIcon.style.backgroundColor = __errorColor1
                }
                if (alertType.toLowerCase() == "loading") {
                    alertIcon.classList.add("the-icon-loading")
                    alertIcon.style.backgroundColor = __errorColor1
                }
                alertIconContainer.appendChild(alertIcon)
                alertContent.appendChild(alertIconContainer)
            }
            // ----------------------------- title
            if (title != undefined) {
                let titleContainer = document.createElement("div")
                titleContainer.innerHTML = title
                titleContainer.style.textAlign = "center"
                titleContainer.classList.add("the-alert-title")
                alertContent.appendChild(titleContainer)
            }
            // ----------------------------- message
            if (message != undefined) {
                let messageContainer = document.createElement("div")
                messageContainer.innerHTML = message
                messageContainer.classList.add("the-alert-message")
                alertContent.appendChild(messageContainer)
            }
            // ----------------------------- align
            if (align == undefined || align == "center") {
                alertContent.classList.add("align-center")
            }
            // ----------------------------- cancel button top
            if (showCancelButtonTop != undefined && showCancelButtonTop == true) {
                var alertCancelButton = document.createElement("div")
                alertCancelButton.classList.add("the-icon-close")
                alertCancelButton.style.right = "0%"
                alertCancelButton.style.top = "0%"
                alertCancelButton.style.height = "15x"
                alertCancelButton.style.width = "15px"
                alertCancelButton.style.position = "absolute"
                alertCancelButton.style.cursor = "pointer"
                alertCancelButton.style.margin = "8px"
                alertCancelButton.style.backgroundColor = __infoColor1
                alertCancelButton.style.opacity = "0.4"
                alertCancelButton.addEventListener("click", () => {
                    removeAlert()
                })
                alertContent.appendChild(alertCancelButton)
            }
            // ----------------------------- buttons
            let buttonsContainer = document.createElement("div")
            buttonsContainer.style.height = "45px"
            buttonsContainer.style.borderTop = __infoColor1
            buttonsContainer.style.margin = "4px"
            buttonsContainer.style.display = "flex"
            buttonsContainer.style.gap = "8px"
            if (buttonPosition == undefined || buttonPosition == "center") {
                buttonsContainer.style.alignItems = "center"
                buttonsContainer.style.justifyContent = "center"
            }
            if (showCancelButton == undefined || showCancelButton == true) {
                let cancelButton = document.createElement("div")
                cancelButton.classList.add("the-button-flat")
                cancelButton.innerHTML = cancelButtonText
                buttonsContainer.appendChild(cancelButton)

                cancelButton.addEventListener("click", () => {
                    let result = {
                        "confirmButton": false,
                        "cancelButton": true,
                        "denyButton": false
                    }

                    onCancelButton()
                    removeAlert()
                    resolve(result)
                })

            }
            if (showConfirmButton == undefined || showConfirmButton == true) {
                let confirmButton = document.createElement("div")
                confirmButton.classList.add("the-button-flat-primary")
                if (confirmButtonBgColor != undefined) {
                    confirmButton.style.backgroundColor = confirmButtonBgColor
                }
                confirmButton.innerHTML = confirmButtonText
                buttonsContainer.appendChild(confirmButton)
                confirmButton.addEventListener("click", () => {
                    let result = {
                        "confirmButton": true,
                        "cancelButton": false,
                        "denyButton": false
                    }
                    onConfirmButton()
                    removeAlert()
                    resolve(result)
                })
            }
            if (showCancelButton || showConfirmButton) {
                alertContent.appendChild(buttonsContainer)
            }
            else {
                buttonsContainer.remove()
            }

            alertContainer.appendChild(alertContent)
            alertContainer.addEventListener("click", (event) => {
                if (alertContainer.firstElementChild != undefined && event.target == alertContainer) {
                    if (!alertContainer.firstElementChild.allowDismiss) {
                        alertContainer.firstElementChild.classList.add("the-animate-shake")
                        setTimeout(() => {
                            alertContainer.firstElementChild.classList.remove("the-animate-shake")
                        }, 250);
                    }
                    else {
                        removeAlert()
                    }
                }
            })

        } catch (e) {
            enableScrolling()
            reject(Error("It broke"));
            console.log(e)
        }
    })

}

function removeAlert() {
    try {
        enableScrolling()
        let alertContainer = document.getElementById("the-alert-container")
        alertContainer.style.display = "none"
        let alertContent = alertContainer.firstElementChild
        if (alertContent != undefined) {
            alertContent.remove()
        }
    } catch (e) {
        console.log(e)
    }
}


// ====================================================================================== the switch
function theSwitchLoad() {
    document.addEventListener("click", (event) => {
        if (event.target.tagName.toLowerCase() === 'input' &&
            event.target.getAttribute('type') === 'checkbox') {
            let isChecked = event.target.checked
            if (isChecked == true) {
                event.target.checked = true
                event.target.setAttribute("checked", '')
            }
            else {
                event.target.removeAttribute("checked")
                event.target.checked = false
            }
        }

    })
}
// ====================================================================================== the tabs
async function theTabsLoad() {
    await theTabsInit()
    document.addEventListener("click", async (event) => {
        if (hasClass(event.target, "the-tabs-bar-item")) {
            try {
                let tabsBar = event.target.parentNode
                Array.prototype.forEach.call(tabsBar.childNodes, (tabsItem) => {
                    if (hasClass(tabsItem, "the-tabs-bar-item")) {
                        
                        
                        let targetName = tabsItem.getAttribute("target")
                        let tabContent = document.getElementById(targetName)
                        if (tabsItem == event.target) {
                            console.log(tabsItem.style)
                            tabContent.style.display = "block"
                            tabsItem.classList.add("active")
                        }
                        else {
                            tabsItem.classList.remove("active")
                            tabContent.style.display = "none"
                        }
                    }
                })
            } catch (e) {
                console.log(e)
            }

        }
    })
}

async function theTabsInit() {
    try {
        let tabs = document.getElementsByClassName("the-tabs")
        Array.prototype.forEach.call(tabs, (tab) => {
            Array.prototype.forEach.call(tab.childNodes, (tabChild) => {
                if (hasClass(tabChild, "the-tabs-bar")) {
                    try {
                        Array.prototype.forEach.call(tabChild.childNodes, (tabBarItem) => {
                            if (hasClass(tabBarItem, "the-tabs-bar-item")) {
                                let targetName = tabBarItem.getAttribute("target")
                                let tabContent = document.getElementById(targetName)
                                if (hasClass(tabBarItem, "active")) {
                                    tabContent.style.display = "block"
                                }
                                else {
                                    tabContent.style.display = "none"
                                }
                            }

                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
        })
    } catch (e) {
        console.log(e)
    }

}
// ====================================================================================== 

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
var winX = null;
var winY = null;
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


async function createFooter() {
    if (document.body.footer == undefined) {
        console.log("create footer")
        var footer = "<footer></footer>";
        document.body.innerHTML = document.body.innerHTML + footer;
    }
}





