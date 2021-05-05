$(document).ready(function(){
    var tamanhoTabuleiro = 10;
    var bombas = ["00", "02", "03", "10"];
    var aoRedor = [];

    montaTabuleiro();

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
                    <td id="${linha}${coluna}"></td>
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

        //console.log(bombas[]);
    }

    $("#tabuleiro td").click(function() {
        //console.log($(this).attr('id'));

        if(bombas.indexOf($(this).attr('id')) > -1){
            console.log("bomba");
        }
        verificaPosicao($(this).attr('id'));
    });

    // Método que verifica a quantidade de bombas ao redor da posição selecionada
    function verificaPosicao(posicao){
        //console.log(typeof posicao);
        let pos = parseInt(posicao);
        gerarAoRedor(pos);
        //let aoRedor = [(pos-1).toString()];
        //aoRedor.push((pos+1).toString());
        //console.log(typeof pos[0]);
        //console.log(aoRedor);
        let quant = 0;
        for(let i = 0; i < 8; i++){
            if(bombas.indexOf(aoRedor[i]) > -1){
                quant++;
            }
        }
        console.log(quant);
        /*if(bombas.indexOf($(this).attr('id')) > -1){
            console.log("jdasuoijdaosjd");
        }*/
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