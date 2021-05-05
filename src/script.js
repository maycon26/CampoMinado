$(document).ready(function(){
    var tamanhoTabuleiro = 10;
    var bombas = ["00", "02", "03", "10", "14", "15", "18", "21"]; //vetor de bombas
    var aoRedor = []; //vetor com as posições adjacentes
    var quantBombas; //quantidade de bombas ao redor

    montaTabuleiro();

    /**
     * data-hidden - True se a posição está escondida (não foi clicada pelo usuário)
     */
    function montaTabuleiro(){
        let tabuleiro = document.getElementById('tabuleiro');
        var tabela = `
            <table border="6" class="tabuleiro">
        `;
        for(let linha = 0; linha < tamanhoTabuleiro; linha++){
            tabela = tabela + `
                <tr>
            `;
            for(let coluna = 0; coluna < tamanhoTabuleiro; coluna++){
                tabela = tabela + `
                    <td id="${linha}${coluna}" data-hidden="true"></td>
                `;
            }
            tabela = tabela + `
                </tr>
            `;
        }
        tabela = tabela + `
            </table>
        `;
        tabuleiro.innerHTML = tabela;
    }

    $("#tabuleiro td").click(function() {

        if($(this).data("hidden") == true){ //Se está escondido (não foi clicado ainda), faz as verificações
            if(bombas.indexOf($(this).attr('id')) > -1){ //Se for uma bomba
                console.log("bomba game over");
                $(this).text("*");
            }
            else{
                verificaPosicao($(this).attr('id'));
                $(this).text(quantBombas);
            }

            $(this).data("hidden", "false"); //Muda o atributo indicando que já foi clicado
        }
    });

    // Método que verifica a quantidade de bombas ao redor da posição selecionada
    function verificaPosicao(posicao){
        let pos = parseInt(posicao);
        gerarAoRedor(pos);
        quantBombas = 0;
        for(let i = 0; i < 8; i++){
            if(bombas.indexOf(aoRedor[i]) > -1){
                quantBombas++;
            }
        }
    }

    // Método para gerar vetor com as posições ao redor da selecionada.
    function gerarAoRedor(pos){
        if(pos < 10){
            aoRedor = [("0"+(pos-1).toString()), ("0"+(pos+1).toString()),
                    ];
        }
        else if(pos < 20){
            aoRedor = [("0"+(pos-11).toString()), ("0"+(pos-10).toString()), ("0"+(pos-9).toString()),
                    (pos-1).toString(), (pos+1).toString(),
                    ];
        }
        else{
            aoRedor = [(pos-11).toString(), (pos-10).toString(), (pos-9).toString(),
                    (pos-1).toString(), (pos+1).toString(),
                    ];
        }
        
        aoRedor.push((pos+9).toString(), (pos+10).toString(), (pos+11).toString());

        console.log(aoRedor);
    }

});