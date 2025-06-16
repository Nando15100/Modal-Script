'use strict'

const botao_Cadastrar_Cliente = document.getElementById('cadastrarCliente');

botao_Cadastrar_Cliente.addEventListener('click', abrir_Modal);

function abrir_Modal(){
    document.getElementById('modal').classList.add('active');
}



const botao_Cancelar = document.getElementById('cancelar');

botao_Cancelar.addEventListener('click', fechar_Modal);

function fechar_Modal(){
    document.getElementById('modal').classList.remove('active');
}
