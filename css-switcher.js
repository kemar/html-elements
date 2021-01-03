let styles = [
    {
        "name": "awsm",
        "href": "https://unpkg.com/awsm.css/dist/awsm.min.css",
        "homepage": "https://github.com/igoradamenko/awsm.css"
    },
    {
        "name": "bootstrap",
        "href": "https://unpkg.com/bootstrap/dist/css/bootstrap.min.css",
        "homepage": "https://github.com/twbs/bootstrap"
    },
    {
        "name": "bulma",
        "href": "https://unpkg.com/bulma",
        "homepage": "https://github.com/jgthms/bulma"
    },
    {
        "name": "chota",
        "href": "https://unpkg.com/chota",
        "homepage": "https://github.com/jenil/chota"
    },
    {
        "name": "hyper-reset-css",
        "href": "https://unpkg.com/hyper-reset-css",
        "homepage": "https://github.com/heyallan/hyper-reset-css"
    },
    {
        "name": "kube-6.5.2",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/kube/6.5.2/css/kube.min.css",
        "homepage": "https://github.com/imperavi/kube"
    },
    {
        "name": "marx",
        "href": "https://unpkg.com/marx-css/css/marx.min.css",
        "homepage": "https://github.com/mblode/marx"
    },
    {
        "name": "milligram",
        "href": "https://unpkg.com/milligram",
        "homepage": "https://github.com/milligram/milligram"
    },
    {
        "name": "mini-3.0.1",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css",
        "homepage": "https://github.com/Chalarangelo/mini.css"
    },
    {
        "name": "minireset",
        "href": "https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css",
        "homepage": "https://github.com/jgthms/minireset.css"
    },
    {
        "name": "mobi",
        "href": "https://unpkg.com/mobi.css/dist/mobi.min.css",
        "homepage": "https://github.com/mobi-css/mobi.css"
    },
    {
        "name": "mvp",
        "href": "https://unpkg.com/mvp.css",
        "homepage": "https://github.com/andybrewer/mvp"
    },
    {
        "name": "namida",
        "href": "https://unpkg.com/namida/namida.css",
        "homepage": "https://github.com/kemar/namida"
    },
    {
        "name": "new.css",
        "href": "https://newcss.net/new.min.css",
        "homepage": "https://github.com/xz/new.css"
    },
    {
        "name": "normalize",
        "href": "https://unpkg.com/normalize.css",
        "homepage": "https://github.com/necolas/normalize.css"
    },
    {
        "name": "primer",
        "href": "https://unpkg.com/@primer/css/dist/primer.css",
        "homepage": "https://github.com/primer/primer-css"
    },
    {
        "name": "pure",
        "href": "https://unpkg.com/purecss",
        "homepage": "https://github.com/pure-css/pure/"
    },
    {
        "name": "sakura",
        "href": "https://unpkg.com/sakura.css/css/sakura.css",
        "homepage": "https://github.com/oxalorg/sakura"
    },
    {
        "name": "sanitize",
        "href": "https://unpkg.com/sanitize.css",
        "homepage": "https://github.com/csstools/sanitize.css"
    },
    {
        "name": "skeleton-2.0.4",
        "href": "http://getskeleton.com/dist/css/skeleton.css",
        "homepage": "https://github.com/dhg/Skeleton"
    },
    {
        "name": "spectre",
        "href": "https://unpkg.com/spectre.css/dist/spectre.min.css",
        "homepage": "https://github.com/picturepan2/spectre"
    },
    {
        "name": "style.css",
        "href": "https://unpkg.com/style.css",
        "homepage": "https://github.com/css-pkg/style.css"
    },
    {
        "name": "stylizer",
        "href": "https://cdn.jsdelivr.net/npm/stylizercss/build/stylizer.min.css",
        "homepage": "https://github.com/amine1107/Stylizer"
    },
    {
        "name": "superstylin",
        "href": "https://unpkg.com/superstylin",
        "homepage": "https://github.com/caiogondim/superstylin"
    },
    {
        "name": "tachyons",
        "href": "https://unpkg.com/tachyons",
        "homepage": "https://github.com/tachyons-css/tachyons/"
    },
    {
        "name": "tufte",
        "href": "https://cdn.jsdelivr.net/gh/edwardtufte/tufte-css@gh-pages/tufte.css",
        "homepage": "https://github.com/edwardtufte/tufte-css"
    },
    {
        "name": "turret",
        "href": "https://unpkg.com/turretcss/dist/turretcss.min.css",
        "homepage": "https://github.com/turretcss/turretcss"
    },
    {
        "name": "typebase.css-0.5.0",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/typebase.css/0.5.0/typebase.min.css",
        "homepage": "https://github.com/devinhunt/typebase.css"
    },
    {
        "name": "uikit",
        "href": "https://unpkg.com/uikit/dist/css/uikit.css",
        "homepage": "https://github.com/uikit/uikit"
    },
    {
        "name": "wing",
        "href": "https://unpkg.com/wingcss",
        "homepage": "https://github.com/kbrsh/wing"
    },
]

window.addEventListener("DOMContentLoaded", (event) => {

    let activeCssHomePage = document.querySelector("#active-css-homepage")
    let activeCssHref = document.querySelector("#active-css-href")
    let switchElement = document.querySelector("#switch-css")
    let params = new URLSearchParams(window.location.search)

    activeCssHref.style.display = "none"
    activeCssHomePage.style.display = "none"

    for (let style of styles) {
        // Add <link> elements in the <head> section.
        let link = document.createElement("link")
        link.rel = "alternate stylesheet"
        link.href = style.href
        link.title = style.name
        link.type = "text/css"
        document.head.appendChild(link)
        // Create <option> elements.
        let option = document.createElement("option")
        option.value = style.name
        option.text = style.name.replace("-", " ")
        switchElement.appendChild(option)
    }

    let setActiveStyleSheet = function (name) {

        // Activate the selected stylesheet.
        document.querySelectorAll(`link[rel="alternate stylesheet"]`).forEach(el => {
            el.disabled = true
            if (el.getAttribute("title") == name) {
                el.disabled = false
                params.set("name", name)
                window.history.replaceState({}, "", `${location.pathname}?${params.toString()}`);
            }
        })

        let selectedStyle = styles.find(item => item.name === name)
        if (selectedStyle) {
            activeCssHref.style.display = ""
            activeCssHref.href = selectedStyle.href
            activeCssHomePage.style.display = ""
            activeCssHomePage.href = selectedStyle.homepage
        } else {
            activeCssHref.style.display = "none"
            activeCssHomePage.style.display = "none"
            params.delete("name")
            window.history.replaceState({}, "", `${location.pathname}`);
        }

    }

    switchElement.addEventListener("change", function (e) {
        let currentName = e.target.value
        setActiveStyleSheet(currentName)
    })

    let name = params.get("name")
    if (name) {
        switchElement.value = name
        switchElement.dispatchEvent(new Event("change"))
    }

})
