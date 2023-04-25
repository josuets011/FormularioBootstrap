function retornarValores(conteudo) { // captar o dado e imprimir no formulário
    if (!("erro" in conteudo)) { // ! - sinal de negação
        document.getElementById('endereco').value = (conteudo.logradouro)
        document.getElementById('bairro').value = (conteudo.bairro)
        document.getElementById('cidade').value = (conteudo.localidade)
        document.getElementById('complemento').value = (conteudo.complemento)
    }else{
        alert("CEP não encontrado")
    }
}

function buscaCEP(valor) {
    var cep = valor.replace(/\D/g, '')   // Regex - expressão regular
    if(cep != ""){
        var validarCEP = /^[0-9]{8}$/  // Máscara pro cep
        if(validarCEP.test(cep)){ // test retorna booleano - verifica se o cep está de acordo com a máscara
            document.getElementById('endereco').value = ". . ."
            var script = document.createElement('script')  // manipulando dom - criando tag html no js
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`
            document.body.appendChild(script)
        }else{
            alert("formato inválido")
        }
    }   
}