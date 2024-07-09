const sideBarTogglers =document.querySelectorAll('.sideBarToggler')
sideBarTogglers.forEach((eachSideBarToggler)=>{
    eachSideBarToggler.addEventListener('click',(e)=>{
        document.querySelector('.targetedSideBar').classList.toggle('targetedSideBarEffect')

        const allSideBarCLosers=document.querySelectorAll('.sideBarCloser')
        allSideBarCLosers.forEach((eachSideBarCloser)=>{
            eachSideBarCloser.classList.toggle('sideBarTogglerEffect')
        })

        const allSideBarOpeners=document.querySelectorAll('.sideBarOpener')
        allSideBarOpeners.forEach((eachSideBarOpener)=>{
            eachSideBarOpener.classList.toggle('sideBarTogglerEffect')
        })
    })
})