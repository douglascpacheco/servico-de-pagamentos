# 💳 Serviço de Pagamento

Projeto desenvolvido em JavaScript como atividade de conclusão da disciplina **Programação para Automação de Testes**, com o objetivo de aplicar conceitos de **Programação Orientada a Objetos (POO)**, regras de negócio e testes automatizados utilizando **Mocha**, **Node Assert** e **Mochawesome**.

## 📋 Objetivo da Atividade

Criar uma classe capaz de:

- Realizar pagamentos
- Armazenar pagamentos em uma lista
- Consultar o último pagamento realizado

Cada pagamento deve possuir as seguintes propriedades:

- Código de Barras
- Empresa
- Valor
- Categoria

### Regras de Negócio

- Quando o valor do pagamento for maior que **R$ 100,00**, a categoria deverá ser **"cara"**.
- Quando o valor do pagamento for menor ou igual a **R$ 100,00**, a categoria deverá ser **"padrão"**.
- O método de consulta deve retornar apenas o último pagamento realizado.

---

## 🚀 Tecnologias Utilizadas

- JavaScript
- Node.js
- Mocha
- Node Assert
- Mochawesome

---

## 📂 Estrutura do Projeto

```text
SERVICO-DE-PAGAMENTOS/
│
├── src/
│   └── servicoDePagamento.js
│
├── test/
│   └── servicoDePagamento.test.js
│
├── mochawesome-report/
│   ├── mochawesome.html
│   └── mochawesome.json
│
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Funcionalidades

### Realizar Pagamento

```javascript
const servicoDePagamento = new ServicoDePagamento();

servicoDePagamento.pagar(
    '0987-7656-3475',
    'Samar',
    156.87
);
```

### Consultar Último Pagamento

```javascript
console.log(
    servicoDePagamento.consultarUltimoPagamento()
);
```

### Exemplo de Retorno

```javascript
{
    codigoBarras: '0987-7656-3475',
    empresa: 'Samar',
    valor: 156.87,
    categoria: 'cara'
}
```

---

## 🧪 Testes Automatizados

Foram desenvolvidos testes para validar:

- Validação dos dados armazenados no pagamento
- Registro de pagamento com categoria "cara"
- Registro de pagamento com categoria "padrão"
- Consulta do último pagamento realizado

---

## 📊 Relatório de Testes

Executar os testes:

```bash
npx mocha
```

Gerar relatório Mochawesome:

```bash
npx mocha --reporter mochawesome
```

Os relatórios são gerados automaticamente na pasta:

```text
mochawesome-report/
```

---

## 🎓 Conceitos Praticados

- Classes
- Métodos
- Objetos JavaScript
- Arrays
- Encapsulamento
- Regras de Negócio
- Testes Automatizados
- Mocha
- Node Assert

---

## 👨‍💻 Autor

Douglas Pacheco

Projeto desenvolvido para fins acadêmicos e prática de JavaScript.
