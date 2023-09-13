const tabs=document.querySelector("ul");
tabs.addEventListener('click',tabchange);
function tabchange(e){
    const allclass=document.querySelectorAll('ul .active');
    allclass.forEach(element => {
        element.classList.remove("active")
    });
    e.target.parentElement.classList+="active";
    const hre=e.target.href.split("#")[1];
    const id=document.getElementById(hre)
    const pages=document.querySelectorAll('.pages .active')
    pages.forEach(element=>{
        element.classList.remove('active')
    })
    id.classList.add('active')
    
    
}