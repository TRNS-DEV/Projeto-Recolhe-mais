const botaoEmpresa = document.querySelector(".btn-empresa");
const camposMorador = document.querySelector(".campos-morador");
const camposEmpresa = document.querySelector(".campos-empresa");
const botaoMorador = document.querySelector(".btn-morador");

botaoEmpresa.addEventListener("click",function(){
    camposEmpresa.hidden =false;
    camposMorador.hidden =true;

    botaoEmpresa.classList.add("ativo");
    botaoMorador.classList.remove("ativo");
});
botaoMorador.addEventListener("click",function(){
    camposMorador.hidden =false;
    camposEmpresa.hidden =true;

    botaoMorador.classList.add("ativo")
    botaoEmpresa.classList.remove("ativo")
});
