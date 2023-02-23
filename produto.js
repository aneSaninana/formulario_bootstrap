function calcular(){
    validaDescricao();
    let nTotal =  quantidade.value * precoUni.value;
    precoTotal.value = nTotal;
}

function validaDescricao(){
    if(descricao.value.trim()=== "" ){
    descricao.style.background= "yellow";
    mensagem.innnerHTML = "Preeencha o campo descrição do Produto!";
    $('#alerta').modal('show');
    } else{
        descricao.style.background = "white"
    }
}