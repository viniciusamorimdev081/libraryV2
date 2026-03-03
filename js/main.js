//LOGICA PARA MENU LATERAL DESKTOP
const menuPrincipal = document.querySelectorAll('#menu-lateral-desktop nav ul li');
const telas = document.querySelectorAll('main section');
menuPrincipal.forEach(menu => {
    menu.addEventListener('click', ()=>{
        //REMOVER A CLASE MENU CELECIONADA DE TODAS OS MENUS
        menuPrincipal.forEach(m => m.classList.remove('menu-selecionado'));
        //ADICIONAR A CLASSE NO MENU SELECIONADO
        menu.classList.add('menu-selecionado');
        //esconder todas as telas
        telas.forEach(tela => {
            return tela.style.display = 'none'
        })
        const idTelaAlvo = menu.id.replace('menu', 'tela');
        const telaAlvo = document.getElementById(idTelaAlvo);

        if(telaAlvo){
            telaAlvo.style.display = 'block'
        }
    })

})

const menuSair = document.querySelector("#menuSair");
menuSair.addEventListener('click', ()=> {
    window.location = './index.html';
})