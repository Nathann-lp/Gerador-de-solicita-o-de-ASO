function validarCampos(campos) {
  for (let campo of campos) {
    if (!campo.valor.trim()) {
      alert(`Preencha o campo: ${campo.nome}`);
      return false;
    }
  }
  return true;
}

function limparCampos() {
  document.querySelectorAll("input").forEach(input => input.value = "");
  document.getElementById("tipo_exame").selectedIndex = 0;
  document.getElementById("tipo_identificacao").selectedIndex = 0;
  atualizarPlaceholder();
  preencherDataAutomatica();
}

function preencherDataAutomatica() {
  const inputData = document.getElementById("local_data");
  const hoje = new Date();
  const opcoes = { day: "numeric", month: "long", year: "numeric" };
  const dataFormatada = hoje.toLocaleDateString("pt-BR", opcoes);
  inputData.value = `Palmeiras de Goiás, ${dataFormatada}`;
}

function atualizarPlaceholder() {
  const tipo = document.getElementById("tipo_identificacao").value;
  const input = document.getElementById("identificacao");
  if (tipo === "CNPJ") input.placeholder = "Ex: 00.000.000/0001-00";
  if (tipo === "CPF") input.placeholder = "Ex: 000.000.000-00";
  if (tipo === "CAEPF") input.placeholder = "Ex: 000.000.000/0000-00";
}

async function gerarASO() {
  const { jsPDF } = window.jspdf;

  const tipoExame = document.getElementById('tipo_exame').value;
  const empregador = document.getElementById('empregador').value;
  const tipoIdentificacao = document.getElementById('tipo_identificacao').value;
  const identificacao = document.getElementById('identificacao').value;
  const empregado = document.getElementById('empregado').value;
  const cpf = document.getElementById('cpf').value;
  const funcao = document.getElementById('funcao').value;
  const localData = document.getElementById('local_data').value;

  if (!validarCampos([
    { nome: "Tipo do Exame", valor: tipoExame },
    { nome: "Empregador", valor: empregador },
    { nome: "Identificação do Empregador", valor: identificacao },
    { nome: "Empregado", valor: empregado },
    { nome: "CPF", valor: cpf },
    { nome: "Função", valor: funcao },
    { nome: "Local e Data", valor: localData }
  ])) return;

  const doc = new jsPDF();

  // Título
  doc.setFontSize(18);
  doc.setFont(undefined, "bold");
  doc.text("PENDÊNCIA DE DOCUMENTOS", 105, 20, { align: "center" });

  // Texto principal
  doc.setFontSize(14);
  doc.setFont(undefined, "normal");
  doc.text(
    `Favor providenciar o exame ${tipoExame} (ASO – Atestado de Saúde Ocupacional) do empregado abaixo.`,
    20, 40, { maxWidth: 170, align: "justify" }
  );

  doc.text("Informações necessárias para o médico responsável:", 20, 60);

  // Informações
  doc.setFont(undefined, "bold");
  doc.text(`EMPREGADOR(A): ${empregador}`, 20, 80);
  doc.text(`${tipoIdentificacao}: ${identificacao}`, 20, 90);
  doc.text(`EMPREGADO(A): ${empregado}`, 20, 100);
  doc.text(`CPF: ${cpf}`, 20, 110);
  doc.text(`FUNÇÃO: ${funcao}`, 20, 120);

  // Rodapé com data
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text(localData, 105, 280, { align: "center" });

  doc.save(`Solicitacao_ASO_${tipoExame}_${empregado.replace(/\s+/g, "_")}.pdf`);
}

// Preenche a data automática ao carregar a página
window.onload = () => {
  preencherDataAutomatica();
  atualizarPlaceholder();
};
