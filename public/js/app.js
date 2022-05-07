function id(params) {
    return document.getElementById(params)
}

id('m-icon').addEventListener('click',()=>{
    id('menu').classList.toggle('show')
})