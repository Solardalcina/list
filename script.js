const itens = [
  { nomeSimples: 'Mussarela', nomeDetalhado: 'Bandeja de Mussarela 500g', categoria: 'Laticínios' },
  { nomeSimples: 'Queijo Prato', nomeDetalhado: 'Bandeja de Queijo Prato 500g', categoria: 'Laticínios' },
  { nomeSimples: 'Queijo Minas', nomeDetalhado: 'Queijo Minas', categoria: 'Laticínios' },
  { nomeSimples: 'Requeijao', nomeDetalhado: 'Requeijão (frimesa, ou superior)', categoria: 'Laticínios' },
  { nomeSimples: 'Leite', nomeDetalhado: 'Caixinha de Leite', categoria: 'Laticínios' },
  { nomeSimples: 'Manteiga', nomeDetalhado: 'Manteiga (frimesa taubate ou melhor)', categoria: 'Laticínios' },
  { nomeSimples: 'Milk Mix', nomeDetalhado: 'Milk Mix Frimesa Saquinho', categoria: 'Laticínios' },
  { nomeSimples: 'Iogurte', nomeDetalhado: 'Copinho iogurte natural', categoria: 'Laticínios' },
  { nomeSimples: 'Pó de Café', nomeDetalhado: 'Pó de Café 500g', categoria: 'Café da Manhã' },
  { nomeSimples: 'Pão de queijo', nomeDetalhado: 'Pão de Queijo 400g mais em conta', categoria: 'Café da Manhã' },
  { nomeSimples: 'Pão de forma', nomeDetalhado: 'Pão de Forma Panco', categoria: 'Café da Manhã' },
  { nomeSimples: 'Pão integral', nomeDetalhado: 'Pão Integral Panco', categoria: 'Café da Manhã' },
  { nomeSimples: 'Ovos', nomeDetalhado: 'Cartela de Ovos c/20', categoria: 'Café da Manhã' },
  { nomeSimples: 'Massa de tapioca', nomeDetalhado: 'Massa de Tapioca', categoria: 'Café da Manhã' },
  { nomeSimples: 'Granola', nomeDetalhado: 'Granola Tradicional 1kg', categoria: 'Café da Manhã' },
  { nomeSimples: 'Abacaxi', nomeDetalhado: 'Abacaxi', categoria: 'Frutas' },
  { nomeSimples: 'Banana', nomeDetalhado: 'Penca de Banana', categoria: 'Frutas' },
  { nomeSimples: 'Mamão', nomeDetalhado: 'Mamão Formosa', categoria: 'Frutas' },
  { nomeSimples: 'Melão', nomeDetalhado: 'Melão', categoria: 'Frutas' },
  { nomeSimples: 'Manga', nomeDetalhado: 'Manga (unidade)', categoria: 'Frutas' },
  { nomeSimples: 'Uva Verde', nomeDetalhado: 'Caixinha de Uva Verde', categoria: 'Frutas' },
  { nomeSimples: 'Maracujá', nomeDetalhado: 'Maracujá', categoria: 'Frutas' },
  { nomeSimples: 'Tomate kg', nomeDetalhado: 'Tomate Italiano', categoria: 'Frutas' },
  { nomeSimples: 'Maçã', nomeDetalhado: 'Saquinho de Maçã', categoria: 'Frutas' },
  { nomeSimples: 'Papel Toalha', nomeDetalhado: 'Papel Toalha', categoria: 'Limpeza' },
  { nomeSimples: 'Guardanapo', nomeDetalhado: 'Guardanapo Gran Hotel', categoria: 'Limpeza' },
  { nomeSimples: 'Papel higienico', nomeDetalhado: 'Papel Higienico F.Dupla c/12', categoria: 'Limpeza' },
  { nomeSimples: 'Sabão em pó', nomeDetalhado: 'Sabão em Pó', categoria: 'Limpeza' },
  { nomeSimples: 'Detergente', nomeDetalhado: 'Detergente Transparente', categoria: 'Limpeza' },
  { nomeSimples: 'Alcool', nomeDetalhado: 'Alcool 70', categoria: 'Limpeza' },
  { nomeSimples: 'Agua sanitaria', nomeDetalhado: 'Água sanitária 5L', categoria: 'Limpeza' },
  { nomeSimples: 'Desinfetante', nomeDetalhado: 'Desinfetante Urca Lavanda', categoria: 'Limpeza' },
  { nomeSimples: 'Lava roupas liquido', nomeDetalhado: 'Lava roupas liquido OMO 3L', categoria: 'Limpeza' },
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('listaComprasForm');
  const categorias = [...new Set(itens.map(i => i.categoria))];

  categorias.forEach(cat => {
    const divCat = document.createElement('div');
    divCat.className = 'categoria';
    divCat.innerHTML = `<h3>${cat}</h3>`;

    itens.filter(i => i.categoria === cat).forEach(item => {
      const id = item.nomeSimples.replace(/\s+/g, '_');
      divCat.innerHTML += `
        <div class="item">
          <button type="button" onclick="decrementar('${id}')">-</button>
          <input type="number" id="${id}" value="0" readonly>
          <button type="button" onclick="incrementar('${id}')">+</button>
          <label for="${id}">${item.nomeSimples}</label>
        </div>
      `;
    });

    form.appendChild(divCat);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let texto = 'Bom dia, segue a lista:\n\n';

    itens.forEach(item => {
      const id = item.nomeSimples.replace(/\s+/g, '_');
      const qtd = parseInt(document.getElementById(id).value);
      if(qtd > 0) texto += `${qtd}, ${item.nomeDetalhado}\n`;
    });

    const win = window.open('', '_blank');
    win.document.write(`<pre>${texto}</pre>`);
    win.document.write('<button onclick="navigator.clipboard.writeText(document.querySelector(\'pre\').innerText).then(()=>alert(\'Lista copiada!\'))">Copiar Lista</button>');
    win.document.close();
  });
});

function incrementar(id) {
  const el = document.getElementById(id);
  el.value = parseInt(el.value) + 1;
}

function decrementar(id) {
  const el = document.getElementById(id);
  if(parseInt(el.value) > 0) el.value = parseInt(el.value) - 1;
}
