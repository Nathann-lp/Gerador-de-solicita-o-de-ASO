# Gerador de Solicitação de ASO

Aplicação web simples para gerar, em PDF, o documento de **Solicitação de Exame ASO** (Atestado de Saúde Ocupacional) — o formulário que o RH/DP entrega ao funcionário para levar à clínica no momento do exame admissional, demissional ou de mudança de função.

🔗 **Acesse online:** [gerador-de-solicita-o-de-aso.vercel.app](https://gerador-de-solicita-o-de-aso.vercel.app)

## Contexto

No dia a dia do Departamento Pessoal, sempre que um novo funcionário chegava para o exame admissional, havia dúvida sobre quais informações constavam na solicitação. Antes, esse documento era montado manualmente em um Word a cada novo caso — um processo lento e sujeito a erro de digitação ou esquecimento de campos.

Este projeto nasceu para resolver esse problema: um formulário simples, no navegador, que gera o PDF pronto em segundos, padronizando as informações e eliminando o retrabalho.

## Funcionalidades

- Seleção do **tipo de exame**: Admissional, Demissional ou Mudança de Função
- Dados do **empregador**, com identificação flexível por **CNPJ**, **CPF** ou **CAEPF**
- Dados do **empregado**: nome, CPF e função
- Campo de **local e data**
- Geração do documento em **PDF**, pronto para impressão ou envio à clínica
- Botão para **limpar os campos** e iniciar uma nova solicitação rapidamente

## Como usar

1. Acesse a aplicação ([link online](https://gerador-de-solicita-o-de-aso.vercel.app)) ou abra o `index.html` localmente
2. Preencha os dados do exame, do empregador e do empregado
3. Clique em **Gerar PDF**
4. O arquivo é baixado automaticamente, pronto para ser entregue ao funcionário

## Tecnologias

- **HTML5** e **CSS3** — estrutura e estilo do formulário
- **JavaScript** (vanilla) — lógica de preenchimento e geração do documento
- [**jsPDF**](https://github.com/parallax/jsPDF) — biblioteca usada para montar o PDF diretamente no navegador, sem necessidade de backend
- **Vercel** — hospedagem e deploy

## Estrutura do projeto

```
├── index.html   # Formulário e estrutura da página
├── style.css    # Estilização
└── script.js    # Lógica de preenchimento dos campos e geração do PDF
```

Por ser um projeto 100% front-end (sem build ou dependências instaláveis), não há etapa de instalação: basta abrir o `index.html` em um navegador para rodar localmente.

## Possíveis melhorias futuras

- [ ] Validação de CPF e CNPJ nos campos de identificação
- [ ] Máscaras automáticas de digitação (CPF, CNPJ, data)
- [ ] Marcar campos obrigatórios antes de gerar o PDF
- [ ] Guardar o último empregador usado (localStorage) para agilizar solicitações recorrentes
- [ ] Adicionar logotipo/timbre da empresa no PDF gerado
- [ ] Suporte a múltiplos funcionários em uma única solicitação (exames em lote)

## Autor

Desenvolvido por [Nathan Lopes](https://github.com/Nathann-lp), Analista de Departamento Pessoal, a partir de uma necessidade real observada no escritório de contabilidade onde trabalha.
