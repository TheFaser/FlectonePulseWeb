let linkElement = document.getElementById("themeHref")
const darkThemeEn = "../assets/css/dark.css"
const lightThemeEn = "../assets/css/light.css"
const darkThemeRu = "./assets/css/dark.css"
const lightThemeRu = "./assets/css/light.css"

if (localStorage.getItem('theme') === 'dark') {
    switch(window.location.href.includes('/en')) {
        case true:
            linkElement.setAttribute('href', darkThemeEn);
            break
        case false:
            linkElement.setAttribute('href', darkThemeRu);
            break
    }
}
else if (localStorage.getItem('theme') === 'light') {
    switch (window.location.href.includes('/en')) {
        case true:
            linkElement.setAttribute('href', lightThemeEn);
            break
        case false:
            linkElement.setAttribute('href', lightThemeRu);
            break
    }
}
else if (localStorage.getItem('theme') === null) {
    switch (window.location.href.includes('/en')) {
        case true:
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                linkElement.setAttribute('href', darkThemeEn);
            }
            else {
                linkElement.setAttribute('href', lightThemeEn);
            }
            break
        case false:
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                linkElement.setAttribute('href', darkThemeRu);
            }
            else {
                linkElement.setAttribute('href', lightThemeRu);
            }
            break
    }
}

function switchLinkElement(darkTheme, lightTheme) {

    if (linkElement.getAttribute('href') === darkTheme) {
        console.log(linkElement.getAttribute('href'));
        linkElement.setAttribute('href', lightTheme);
        localStorage.setItem('theme', 'light');

    }
    else if (linkElement.getAttribute('href') === lightTheme) {
        console.log(linkElement.getAttribute('href'));
        linkElement.setAttribute('href', darkTheme);
        localStorage.setItem('theme', 'dark');
    }
}
