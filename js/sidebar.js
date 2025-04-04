// const { response } = require("express");

function loadSideBar() {
    fetch('/sidebar/side.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('sidebar-container').innerHTML = html
        })
        .catch(err => console.warn("Error loading the Side Navigation", err))

}

document.addEventListener('DOMContentLoaded', loadSideBar);