function setActive (e:any):void {
    e.preventDefault()
    const navBarList = document.getElementById("navbar-nav-list");
    const navBarElements:HTMLCollectionOf<HTMLLIElement> | undefined = navBarList?.getElementsByTagName('li');

    if(navBarElements) {
        for (let i = 0; i < navBarElements.length; i++) {
            navBarElements[i].getElementsByTagName('a')[0].classList.remove('active')
        }
        e.srcElement.classList.add("active")
    }
}

function scrollToSection (keyword:string):void {
    document.getElementById(`section-${keyword}`)?.scrollIntoView()
}