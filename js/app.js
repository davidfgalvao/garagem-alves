const hoje = new Date().toISOString().split('T')[0];
document.getElementById('data-os').value = hoje;

const numSalvo = localStorage.getItem('garagem-alves-numero-os');
if (numSalvo) document.getElementById('numero-os').value = numSalvo;

for (let i = 0; i < 9; i++) adicionarLinha();

function linhaVazia(tr) {
  const desc = tr.querySelector('td:first-child input')?.value.trim();
  const unit = tr.querySelector('.val-unit')?.value.trim();
  const total = tr.querySelector('.val-total')?.value.trim();
  return !desc && !unit && !total;
}

function prepararImpressao() {
  const rows = Array.from(document.querySelectorAll('#itens-body tr'));
  let linhasVaziasVisiveis = 0;
  const maxLinhasVazias = 9;

  rows.forEach(tr => {
    if (!linhaVazia(tr)) {
      tr.classList.remove('print-hide');
    } else if (linhasVaziasVisiveis < maxLinhasVazias) {
      tr.classList.remove('print-hide');
      linhasVaziasVisiveis++;
    } else {
      tr.classList.add('print-hide');
    }
  });

  document.body.classList.add('printing');
}

function restaurarAposImpressao() {
  document.querySelectorAll('#itens-body tr.print-hide').forEach(tr => {
    tr.classList.remove('print-hide');
  });
  document.body.classList.remove('printing');
}

window.addEventListener('afterprint', restaurarAposImpressao);

  function adicionarLinha() {
    const tbody = document.getElementById('itens-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" placeholder="Descrição do serviço ou peça"></td>
      <td><input type="text" placeholder="R$ 0,00" class="val-unit" inputmode="decimal" oninput="formatarMoedaInput(this); calcularLinha(this)"></td>
      <td><input type="number" placeholder="1" min="1" class="qtd" value="1" inputmode="numeric" oninput="calcularLinha(this)"></td>
      <td><input type="text" placeholder="R$ 0,00" class="val-total" readonly tabindex="-1"></td>
    `;
    tbody.appendChild(tr);
  }

  function parseMoeda(str) {
    if (!str) return 0;
    const limpo = str.replace(/[R$\s.]/g, '').replace(',', '.');
    return parseFloat(limpo) || 0;
  }

  function formatMoeda(val) {
    return 'R$ ' + val.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function formatarMoedaInput(el) {
    let v = el.value.replace(/\D/g, '');
    if (!v) { el.value = ''; return; }
    v = (parseInt(v, 10) / 100).toFixed(2);
    el.value = formatMoeda(parseFloat(v));
  }

  function calcularLinha(el) {
    const tr = el.closest('tr');
    const unit = parseMoeda(tr.querySelector('.val-unit').value);
    const qtd = parseFloat(tr.querySelector('.qtd').value) || 1;
    const total = unit * qtd;
    tr.querySelector('.val-total').value = total > 0 ? formatMoeda(total) : '';
    atualizarTotal();
  }

  function atualizarTotal() {
    const totais = document.querySelectorAll('.val-total');
    let soma = 0;
    totais.forEach(t => soma += parseMoeda(t.value));
    document.getElementById('total-geral').textContent = formatMoeda(soma);
    document.getElementById('valor-total').value = formatMoeda(soma);
    calcularFinal();
  }

  function calcularFinal() {
    const total = parseMoeda(document.getElementById('valor-total').value);
    const desc = parseMoeda(document.getElementById('desconto').value);
    document.getElementById('valor-final').value = formatMoeda(Math.max(0, total - desc));
  }

  function toggleForma(btn) {
    btn.classList.toggle('ativo');
  }

  function mascaraTel(el) {
    let v = el.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 10)
      el.value = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    else if (v.length > 6)
      el.value = `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`;
    else if (v.length > 2)
      el.value = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else
      el.value = v.length ? `(${v}` : v;
  }

  function mascaraPlaca(el) {
    let v = el.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (v.length > 7) v = v.slice(0, 7);
    if (v.length > 3)
      el.value = v.slice(0, 3) + '-' + v.slice(3);
    else
      el.value = v;
  }

function imprimir() {
  const num = document.getElementById('numero-os').value;
  localStorage.setItem('garagem-alves-numero-os', num);
  prepararImpressao();
  window.print();
}

  function limparFormulario() {
    if (!confirm('Limpar todos os campos? Esta ação não pode ser desfeita.')) return;

    document.querySelectorAll('input[type=text], input[type=tel], input[type=number], textarea').forEach(el => {
      if (el.id !== 'numero-os') el.value = '';
    });

    document.getElementById('data-os').value = hoje;
    document.getElementById('total-geral').textContent = 'R$ 0,00';
    document.getElementById('valor-total').value = '';
    document.getElementById('valor-final').value = '';
    document.querySelectorAll('.forma-btn').forEach(b => b.classList.remove('ativo'));
    document.getElementById('cond-vista').checked = false;
    document.getElementById('cond-prazo').checked = false;

    const tbody = document.getElementById('itens-body');
    tbody.innerHTML = '';
    for (let i = 0; i < 9; i++) adicionarLinha();

    const numAtual = parseInt(document.getElementById('numero-os').value, 10) || 1;
    const proximo = String(numAtual + 1).padStart(4, '0');
    document.getElementById('numero-os').value = proximo;
    localStorage.setItem('garagem-alves-numero-os', proximo);
  }
