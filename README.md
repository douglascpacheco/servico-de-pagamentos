# 💳 Serviço de Pagamento

Projeto desenvolvido em JavaScript como parte da atividade prática da disciplina, utilizando Programação Orientada a Objetos (POO) e testes automatizados com Mocha e Node Assert.

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

---

## 📂 Estrutura do Projeto

```text
src/
 └── ServicoDePagamento.js

test/
 └── ServicoDePagamento.test.js
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

Foram desenvolvidos testes utilizando Mocha e Node Assert para validar:

- Validação dos dados armazenados no pagamento
- Registro de pagamento com categoria "cara"
- Registro de pagamento com categoria "padrão"
- Consulta do último pagamento realizado

---

## ▶️ Como Executar o Projeto

Instalar as dependências:

```bash
npm install
```

Executar os testes:

```bash
npm test
```

ou

```bash
npx mocha
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
