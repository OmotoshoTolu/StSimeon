let fo = document.getElementById('col1')
let fov = document.getElementById('col2')
let lin = document.getElementById('lin')
let sec = document.getElementById('sec')
let bac_img = document.getElementById('bac_img')
let main = document.getElementById('main')
let pos = -500
const info_btn = document.querySelectorAll('#info')
let us = document.getElementById('us')
let x_but = document.getElementById('x_but')


function resize() {
    let tex = document.getElementById('tex')

    if (window.innerWidth <= 982 && window.innerHeight >= 1200) {
        tex.classList.add('tex')
        main.classList.add('mai')
    }
    else {
        tex.classList.remove('tex')
        main.classList.remove('mai')
    }
}

function getposition() {
    let rect = bac_img.getBoundingClientRect()
    if (rect.y <= pos) {
        main.classList.add('opa')
        main.classList.add('opa1')
        main.classList.remove('non')
        prin()
    }
    else if (rect.y > pos) {
        main.classList.remove('opa1')
        main.classList.add('opa')
        main.classList.add('non')
        print()
    }
}

function print() {
    fo.classList.add('sho')
    fov.classList.add('sho')
    fo.classList.remove('dis')
    fov.classList.remove('dis')
    lin.classList.add('sho')
    lin.classList.remove('dis')
    resize()
}
function prin() {
    fo.classList.remove('sho')
    fov.classList.remove('sho')
    fo.classList.add('dis')
    fov.classList.add('dis')
    lin.classList.remove('sho')
    lin.classList.add('dis')
}

//sticky main scroll
scrollTrigger = 50;

window.onscroll = function() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      main.classList.add('scroll')
  } else {
      main.classList.remove('scroll')
  }
}
