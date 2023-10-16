document.getElementById('listaComprasForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const itens = [
        { nomeSimples: 'Arroz', nomeDetalhado: 'Arroz', quantidade: document.getElementById('arroz').value },
        { nomeSimples: 'Feijão', nomeDetalhado: 'Feijão', quantidade: document.getElementById('feijao').value },
        { nomeSimples: 'Detergente', nomeDetalhado: 'Detergente', quantidade: document.getElementById('detergente').value },
        { nomeSimples: 'Cloro', nomeDetalhado: 'Cloro', quantidade: document.getElementById('cloro').value },
    ];

    let listaTexto = "";
    for (const item of itens) {
        if (item.quantidade > 0) {
            // Formata a lista como CSV
            listaTexto += `${item.nomeDetalhado}, ${item.quantidade}\n`;
        }
    }

    const agora = new Date();
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const titulo = "Lista de compra de " + agora.toLocaleDateString('pt-BR', opcoes);
    const mensagemFinal = "Qualquer dúvida, entre em contato pelo WhatsApp.";

    const novaJanela = window.open('', '_blank');
    novaJanela.document.write('<html><head><title>' + titulo + '</title></head><body>');
    novaJanela.document.write('<h3 id="tituloLista">' + titulo + '</h3>');
    novaJanela.document.write('<pre id="lista">' + listaTexto + '</pre>');
    novaJanela.document.write('<p id="mensagemFinal">' + mensagemFinal + '</p>');
    novaJanela.document.write('<button onclick="copiarLista()">Copiar Lista</button>');
    novaJanela.document.write('<script>function copiarLista() { const conteudo = document.getElementById("tituloLista").textContent + "\\n" + document.getElementById("lista").textContent + "\\n" + document.getElementById("mensagemFinal").textContent; const tempInput = document.createElement("textarea"); tempInput.value = conteudo; document.body.appendChild(tempInput); tempInput.select(); document.execCommand("copy"); document.body.removeChild(tempInput); alert("Lista copiada!"); }<\/script>');
    novaJanela.document.write('</body></html>');
    novaJanela.document.close();
});
