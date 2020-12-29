// https://github.com/troxler/awesome-css-frameworks
// https://cdnjs.com/
// https://rawgit.com
// https://unpkg.com/

let styles = [
    {
        "name": "awsm",
        "href": "https://unpkg.com/awsm.css/dist/awsm.min.css",
        "source": "https://github.com/igoradamenko/awsm.css"
    },
    {
        "name": "bootstrap",
        "href": "https://unpkg.com/bootstrap/dist/css/bootstrap.min.css",
        "source": "https://github.com/twbs/bootstrap"
    },
    {
        "name": "bulma",
        "href": "https://unpkg.com/bulma",
        "source": "https://github.com/jgthms/bulma"
    },
    {
        "name": "chota",
        "href": "https://unpkg.com/chota",
        "source": "https://github.com/jenil/chota"
    },
    {
        "name": "hyper-reset-css",
        "href": "https://unpkg.com/hyper-reset-css",
        "source": "https://github.com/heyallan/hyper-reset-css"
    },
    {
        "name": "kube-6.5.2",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/kube/6.5.2/css/kube.min.css",
        "source": "https://github.com/imperavi/kube"
    },
    {
        "name": "marx",
        "href": "https://unpkg.com/marx-css/css/marx.min.css",
        "source": "https://github.com/mblode/marx"
    },
    {
        "name": "milligram",
        "href": "https://unpkg.com/milligram",
        "source": "https://github.com/milligram/milligram"
    },
    {
        "name": "mini-3.0.1",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css",
        "source": "https://github.com/Chalarangelo/mini.css"
    },
    {
        "name": "minireset",
        "href": "https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css",
        "source": "https://github.com/jgthms/minireset.css"
    },
    {
        "name": "mobi",
        "href": "https://unpkg.com/mobi.css/dist/mobi.min.css",
        "source": "https://github.com/mobi-css/mobi.css"
    },
    {
        "name": "mvp",
        "href": "https://unpkg.com/mvp.css",
        "source": "https://github.com/andybrewer/mvp"
    },
    {
        "name": "new.css",
        "href": "https://newcss.net/new.min.css",
        "source": "https://github.com/xz/new.css"
    },
    {
        "name": "normalize",
        "href": "https://unpkg.com/normalize.css",
        "source": "https://github.com/necolas/normalize.css"
    },
    {
        "name": "primer",
        "href": "https://unpkg.com/@primer/css/dist/primer.css",
        "source": "https://github.com/primer/primer-css"
    },
    {
        "name": "pure",
        "href": "https://unpkg.com/purecss",
        "source": "https://github.com/pure-css/pure/"
    },
    {
        "name": "sakura",
        "href": "https://unpkg.com/sakura.css/css/sakura.css",
        "source": "https://github.com/oxalorg/sakura"
    },
    {
        "name": "sanitize",
        "href": "https://unpkg.com/sanitize.css",
        "source": "https://github.com/csstools/sanitize.css"
    },
    {
        "name": "skeleton-2.0.4",
        "href": "http://getskeleton.com/dist/css/skeleton.css",
        "source": "https://github.com/dhg/Skeleton"
    },
    {
        "name": "spectre",
        "href": "https://unpkg.com/spectre.css/dist/spectre.min.css",
        "source": "https://github.com/picturepan2/spectre"
    },
    {
        "name": "style.css",
        "href": "https://unpkg.com/style.css",
        "source": "https://github.com/css-pkg/style.css"
    },
    {
        "name": "stylizer",
        "href": "https://cdn.jsdelivr.net/npm/stylizercss/build/stylizer.min.css",
        "source": "https://github.com/amine1107/Stylizer"
    },
    {
        "name": "superstylin",
        "href": "https://unpkg.com/superstylin",
        "source": "https://github.com/caiogondim/superstylin"
    },
    {
        "name": "tachyons",
        "href": "https://unpkg.com/tachyons",
        "source": "https://github.com/tachyons-css/tachyons/"
    },
    {
        "name": "tufte",
        "href": "https://cdn.jsdelivr.net/gh/edwardtufte/tufte-css@gh-pages/tufte.css",
        "source": "https://github.com/edwardtufte/tufte-css"
    },
    {
        "name": "turret",
        "href": "https://unpkg.com/turretcss/dist/turretcss.min.css",
        "source": "https://github.com/turretcss/turretcss"
    },
    {
        "name": "typebase.css-0.5.0",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/typebase.css/0.5.0/typebase.min.css",
        "source": "https://github.com/devinhunt/typebase.css"
    },
    {
        "name": "uikit",
        "href": "https://unpkg.com/uikit/dist/css/uikit.css",
        "source": "https://github.com/uikit/uikit"
    },
    {
        "name": "wing",
        "href": "https://unpkg.com/wingcss",
        "source": "https://github.com/kbrsh/wing"
    },
    {
        "name": "[WIP] base-elements",
        "href": "css/base-elements.css",
        "source": ""
    },
]

let setActiveStyleSheet = function (title) {
    [].forEach.call(
        document.querySelectorAll('link'),
        function (el) {
          if (el.getAttribute('rel').indexOf('style') != -1 && el.getAttribute('title')) {
            el.disabled = true
            if (el.getAttribute('title') == title) {
              el.disabled = false
            }
          }
        }
    )
}

let toolbar = document.querySelector('#toolbar')

let switchElement = document.querySelector('#switch-css')

for (let style of styles) {

    // Add <link> elements in the <head> section.
    let link = document.createElement('link')
    link.rel = 'alternate stylesheet'
    link.href = style.href
    link.title = style.name
    document.head.appendChild(link)

    // Create <option>s.
    let option = document.createElement('option')
    option.value = style.name
    option.text = style.name.replace('-', ' ')

    // Add <option>s to <select>.
    switchElement.appendChild(option)

}

switchElement.addEventListener('change', function (e) {
    setActiveStyleSheet(e.target.value)
})
