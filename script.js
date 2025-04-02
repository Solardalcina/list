<script>
    function incrementar(id) {
        const input = document.getElementById(id);
        input.value = parseInt(input.value) + 1;
    }

    function decrementar(id) {
        const input = document.getElementById(id);
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
        }
    }

    document.getElementById('listaComprasForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const itens = [
            { nomeSimples: 'Mussarela', nomeDetalhado: 'Bandeja de Mussarela 500g', quantidade: document.getElementById('Mussarela').value },
            { nomeSimples: 'Queijo prato', nomeDetalhado: 'Bandeja de Queijo Prato 500g', quantidade: document.getElementById('Queijo prato').value },
            { nomeSimples: 'Queijo Minas', nomeDetalhado: 'Queijo Minas', quantidade: document.getElementById('Queijo Minas').value },
            { nomeSimples: 'Requeijao', nomeDetalhado: 'Requeijao (frimesa, ou superior)', quantidade: document.getElementById('Requeijao').value },
            { nomeSimples: 'Milk Mix', nomeDetalhado: 'Milk Mix Frimesa Saquinho', quantidade: document.getElementById('Milk Mix').value },
            { nomeSimples: 'Iogurte', nomeDetalhado: 'Copinho iogurte natural', quantidade: document.getElementById('Iogurte').value },
            { nomeSimples: 'Pão de queijo', nomeDetalhado: 'Pão de Queijo 400g mais em conta', quantidade: document.getElementById('Pão de queijo').value },
            { nomeSimples: 'Manteiga', nomeDetalhado: 'Manteiga (frimesa taubate ou outra melhor)', quantidade: document.getElementById('Manteiga').value },
            { nomeSimples: 'Abacaxi', nomeDetalhado: 'Abacaxi', quantidade: document.getElementById('Abacaxi').value },
            { nomeSimples: 'Hortelã', nomeDetalhado: 'Maço de Hortelã', quantidade: document.getElementById('Hortelã').value },
            { nomeSimples: 'Mamão', nomeDetalhado: 'Mamão Formosa', quantidade: document.getElementById('Mamão').value },
            { nomeSimples: 'Melão', nomeDetalhado: 'Melão', quantidade: document.getElementById('Melão').value },
            { nomeSimples: 'Banana', nomeDetalhado: 'Penca de Banana', quantidade: document.getElementById('Banana').value },
            { nomeSimples: 'Maracujá', nomeDetalhado: 'Maracujá', quantidade: document.getElementById('Maracujá').value },
            { nomeSimples: 'Tomate', nomeDetalhado: 'Tomate Italiano', quantidade: document.getElementById('Tomate').value },
            { nomeSimples: 'Manga', nomeDetalhado: 'Manga mais em conta', quantidade: document.getElementById('Manga').value },
            { nomeSimples: 'Uva', nomeDetalhado: 'Caixa de Uva Verde sem Caroço', quantidade: document.getElementById('Uva').value },
            { nomeSimples: 'Maçã', nomeDetalhado: 'Saquinho de Maçã', quantidade: document.getElementById('Maçã').value },
            { nomeSimples: 'Pêra', nomeDetalhado: 'Saquinho de Pêra', quantidade: document.getElementById('Pêra').value },
            { nomeSimples: 'Açucar', nomeDetalhado: 'Açucar refinado 1kg', quantidade: document.getElementById('Açucar').value },
            { nomeSimples: 'Açucar sachê', nomeDetalhado: 'Caixa de açucar sachê', quantidade: document.getElementById('Açucar sachê').value },
            { nomeSimples: 'Geléia', nomeDetalhado: 'Geléia', quantidade: document.getElementById('Geléia').value },
            { nomeSimples: 'Sucrilhos', nomeDetalhado: 'Sucrilhos Superbom', quantidade: document.getElementById('Sucrilhos').value },
            { nomeSimples: 'Granola', nomeDetalhado: 'Granola Tradicional 1kg', quantidade: document.getElementById('Granola').value },
            { nomeSimples: 'Pão de forma', nomeDetalhado: 'Pão de Forma Panco', quantidade: document.getElementById('Pão de forma').value },
            { nomeSimples: 'Pão integral', nomeDetalhado: 'Pão Integral Panco', quantidade: document.getElementById('Pão integral').value },
            { nomeSimples: 'Ovos', nomeDetalhado: 'Cartela de Ovos c/20', quantidade: document.getElementById('Ovos').value },
            { nomeSimples: 'Massa de tapioca', nomeDetalhado: 'Massa de Tapioca', quantidade: document.getElementById('Massa de tapioca').value },
            { nomeSimples: 'Nescau', nomeDetalhado: 'Nescau', quantidade: document.getElementById('Nescau').value },
            { nomeSimples: 'Toddy', nomeDetalhado: 'Toddy', quantidade: document.getElementById('Toddy').value },
            { nomeSimples: 'Aveia', nomeDetalhado: 'Aveia em Flocos Finos', quantidade: document.getElementById('Aveia').value },
            { nomeSimples: 'Papel Toalha', nomeDetalhado: 'Papel Toalha', quantidade: document.getElementById('Papel Toalha').value },
            { nomeSimples: 'Guardanapo', nomeDetalhado: 'Guardanapo Gran Hotel', quantidade: document.getElementById('Guardanapo').value },
            { nomeSimples: 'Papel higienico', nomeDetalhado: 'Papel Higienico F.Dupla c/12', quantidade: document.getElementById('Papel higienico').value },
            { nomeSimples: 'Sabão em pó', nomeDetalhado: 'Sabão em Pó', quantidade: document.getElementById('Sabão em pó').value },
            { nomeSimples: 'Cera Liquida', nomeDetalhado: 'Cera Liquida Incolor', quantidade: document.getElementById('Cera Liquida').value },
            { nomeSimples: 'Lustra Moveis', nomeDetalhado: 'Lustra Moveis', quantidade: document.getElementById('Lustra Moveis').value },
            { nomeSimples: 'Limpa Vidros', nomeDetalhado: 'Limpa Vidros', quantidade: document.getElementById('Limpa Vidros').value },
            { nomeSimples: 'Detergente', nomeDetalhado: 'Detergente Transparente', quantidade: document.getElementById('Detergente').value },
            { nomeSimples: 'Alcool', nomeDetalhado: 'Alcool 70', quantidade: document.getElementById('Alcool').value },
            { nomeSimples: 'Agua sanitaria', nomeDetalhado: 'Água sanitária 5L', quantidade: document.getElementById('Agua sanitaria').value },
            { nomeSimples: 'Desinfetante', nomeDetalhado: 'Desinfetante Urca Lavanda', quantidade: document.getElementById('Desinfetante').value },
        ];

        let listaTexto = "Bom dia,\n\n";
        for (const item of itens) {
            if (parseInt(item.quantidade) > 0) {
                listaTexto += `${item.quantidade}, ${item.nomeDetalhado}\n`;
            }
        }

        const agora = new Date();
        const opcoes = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const titulo = "Lista de compra de " + agora.toLocaleDateString('pt-BR', opcoes);

        const novaJanela = window.open('', '_blank');
        novaJanela.document.write('<html><head><title>' + titulo + '</title>');
        novaJanela.document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
        novaJanela.document.write('<style> body { font-size: 18px; } #tituloLista { margin-bottom: 30px; } #lista { margin-top: 15px; } button { padding: 10px 20px; font-size: 18px; } </style>');
        novaJanela.document.write('</head><body>');
        novaJanela.document.write('<h3 id="tituloLista">' + titulo + '</h3>');
        novaJanela.document.write('<pre id="lista">' + listaTexto + '</pre>');
        novaJanela.document.write('<button onclick="copiarLista()">Copiar Lista</button>');
        novaJanela.document.write('<script>function copiarLista() { const conteudo = document.getElementById("tituloLista").textContent + "\\n\\n" + document.getElementById("lista").textContent; const tempInput = document.createElement("textarea"); tempInput.value = conteudo; document.body.appendChild(tempInput); tempInput.select(); document.execCommand("copy"); document.body.removeChild(tempInput); alert("Lista copiada!"); }<\/script>');
        novaJanela.document.write('</body></html>');
        novaJanela.document.close();
    });
</script>
