let listaDeNumeros = [];
let multiplicadorNumeroSecreto = 4;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let mensagemInicial = `Escolha um número de 1 a ${multiplicadorNumeroSecreto}`;

    console.log (numeroSecreto);

        function exibirMensagemInicial() {
            exibirTextoNaTela('h1' ,'Bem vindo ao jogo do número sécreto');
            exibirTextoNaTela('p' , mensagemInicial);
        }

        function exibirTextoNaTela(tag ,texto) {
            let campo = document.querySelector (tag);
            campo.innerHTML = texto;
            
                }
exibirMensagemInicial();
            

        function verificarChute() {
            
            let chute = document.querySelector('input').value;
            let palavraTentativa = tentativas >1? 'tentativas' : 'tentativa';

            if(numeroSecreto == chute){
                exibirTextoNaTela('h1', 'Acertou');
                let mensagemTentativas = (`Você descobriu o numero sécreto com ${tentativas} ${palavraTentativa}`);
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
                }else if(chute > numeroSecreto){
                    exibirTextoNaTela('h1', `O numero sécreto é menor que ${chute}`);
                }else {
                    exibirTextoNaTela('h1', `O numero sécreto é maior que ${chute}`);
                }
                tentativas++
                limparCampo();
        }

        function gerarNumeroAleatorio() {
            
            let numeroSorteado = parseInt(Math.random() *multiplicadorNumeroSecreto + 1);
            let quantidadeDeElementosNaLista = listaDeNumeros.length;
            if (quantidadeDeElementosNaLista == multiplicadorNumeroSecreto) {
                listaDeNumeros = [];
            }

            if (listaDeNumeros.includes(numeroSorteado)) {
                return gerarNumeroAleatorio();
            } else{
                listaDeNumeros.push(numeroSorteado);
                console.log(listaDeNumeros);
                return numeroSorteado;
            }
        }

        function limparCampo() {
            let campoChute = document.querySelector('input');
            campoChute.value = '';
        }

        function reiniciarJogo() {
            numeroSecreto = gerarNumeroAleatorio();
            limparCampo();
            tentativas = 1;
            exibirMensagemInicial();
            console.log (numeroSecreto);
            document.getElementById('reiniciar').setAttribute('disabled', true);
        }