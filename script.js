const itens = [
  { nomeSimples: 'Mussarela', nomeDetalhado: 'Bandeja de Mussarela 500g', categoria: 'Laticínios' },
  { nomeSimples: 'Queijo_prato', nomeDetalhado: 'Bandeja de Queijo Prato 500g', categoria: 'Laticínios' },
  { nomeSimples: 'Queijo_Minas', nomeDetalhado: 'Queijo Minas', categoria: 'Laticínios' },
  { nomeSimples: 'Requeijao', nomeDetalhado: 'Requeijão (frimesa ou superior)', categoria: 'Laticínios' },
  { nomeSimples: 'Manteiga', nomeDetalhado: 'Manteiga (frimesa ou melhor)', categoria: 'Laticínios' },
  { nomeSimples: 'Milk_Mix', nomeDetalhado: 'Milk Mix Frimesa Saquinho', categoria: 'Laticínios' },
  { nomeSimples: 'Iogurte', nomeDetalhado: 'Copinho iogurte natural', categoria: 'Laticínios' },
  { nomeSimples: 'Pao_de_queijo', nomeDetalhado: 'Pão de Queijo 400g', categoria: 'Café da Manhã' },
  { nomeSimples: 'Pao_de_forma', nomeDetalhado: 'Pão de Forma Panco', categoria: 'Café da Manhã' },
  { nomeSimples: 'Ovos', nomeDetalhado: 'Cartela de Ovos c/20', categoria: 'Café da Manhã' },
  { nomeSimples: 'Massa_de_tapioca', nomeDetalhado: 'Massa de Tapioca', categoria: 'Café da Manhã' },
  { nomeSimples: 'Nescau', nomeDetalhado: 'Nescau', categoria: 'Café da Manhã' },
  { nomeSimples: 'Toddy', nomeDetalhado: 'Toddy', categoria: 'Café da Manhã' },
  { nomeSimples: 'Aveia', nomeDetalhado: 'Aveia em Flocos Finos', categoria: 'Café da Manhã' },
  { nomeSimples: 'Geleia', nomeDetalhado: 'Geléia', categoria: 'Café da Manhã' },
  { nomeSimples: 'Sucrilhos', nomeDetalhado: 'Sucrilhos Superbom', categoria: 'Café da Manhã' },
  { nomeSimples: 'Granola', nomeDetalhado: 'Granola Tradicional 1kg', categoria: 'Café da Manhã' },
  { nomeSimples: 'Abacaxi', nomeDetalhado: 'Abacaxi', categoria: 'Frutas' },
  { nomeSimples: 'Hortela', nomeDetalhado: 'Maço de Hortelã', categoria: 'Frutas' },
  { nomeSimples: 'Mamao', nomeDetalhado: 'Mamão Formosa', categoria: 'Frutas' },
  { nomeSimples: 'Melao', nomeDetalhado: 'Melão', categoria: 'Frutas' },
  { nomeSimples: 'Banana', nomeDetalhado: 'Penca de Banana', categoria: 'Frutas' },
  { nomeSimples: 'Maracuja', nomeDetalhado: 'Maracujá', categoria: 'Frutas' },
  { nomeSimples: 'Tomate', nomeDetalhado: 'Tomate Italiano', categoria: 'Frutas' },
  { nomeSimples: 'Manga', nomeDetalhado: 'Manga mais em conta', categoria: 'Frutas' },
  { nomeSimples: 'Uva', nomeDetalhado: 'Caixa de Uva Verde sem Caroço', categoria: 'Frutas' },
  { nomeSimples: 'Maca', nomeDetalhado: 'Saquinho de Maçã', categoria: 'Frutas' },
  { nomeSimples: 'Pera', nomeDetalhado: 'Saquinho de Pêra', categoria: 'Frutas' },
  { nomeSimples: 'Papel_Toalha', nomeDetalhado: 'Papel Toalha', categoria: 'Limpeza' },
  { nomeSimples: 'Guardanapo', nomeDetalhado: 'Guardanapo Gran Hotel', categoria: 'Limpeza' },
  { nomeSimples: 'Papel_higienico', nomeDetalhado: 'Papel Higienico F.Dupla c/12', categoria: 'Limpeza' },
  { nomeSimples: 'Sabao_em_po', nomeDetalhado: 'Sabão em Pó', categoria: 'Limpeza' },
  { nomeSimples: 'Cera_Liquida', nomeDetalhado: 'Cera Liquida Incolor', categoria: 'Limpeza' },
  { nomeSimples: 'Lustra_Moveis', nomeDetalhado: 'Lustra Moveis', categoria: 'Limpeza' },
  { nomeSimples: 'Limpa_Vidros', nomeDetalhado: 'Limpa Vidros', categoria: 'Limpeza' },
  { nomeSimples: 'Detergente', nomeDetalhado: 'Detergente Transparente', categoria: 'Limpeza' },
  { nomeSimples: 'Alcool', nomeDetalhado: 'Álcool 70', categoria: 'Limpeza' },
  { nomeSimples: 'Agua_sanitaria', nomeDetalhado: 'Água sanitária 5L', categoria: 'Limpeza' },
  { nomeSimples: 'Desinfetante', nomeDetalhado: 'Desinfetante Urca Lavanda', categoria: 'Limpeza' },
  { nomeSimples: 'Lava_roupas_liquido', nomeDetalhado: 'Lava roupas liquido OMO 3L', categoria: 'Limpeza' },
  { nomeSimples: 'Lousa', nomeDetalhado: 'Lousa', categoria: 'Outros' }
];

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

window.onload = () => {
  const form = document.getElementById('listaComprasForm');
  const categorias = [...new Set(itens.map(i => i.categoria))];

  categorias.forEach(cat => {
    const divCategoria = document.createElement('div');
    divCategoria.className = 'categoria';
    divCategoria.innerHTML = `<h3>${cat}</h3>`;

    itens.filter(i => i.categoria === cat).forEach(item => {
      divCategoria.innerHTML += `
        <div class="item">
          <button onclick="decrementar('${item.nomeSimples}')" type="button">-</button>
          <input id="${item.nomeSimples}" type="number" value="0" readonly>
          <button onclick="incrementar('${item.nomeSimples}')" type="button">+</button>
          <label>${item.nomeDetalhado}</label>
        </div>`;
    });

    form.appendChild(divCategoria);
  });
};
