# Gerenciamento de Clientes em JavaScript

## 📌 Sobre a aplicação
Este projeto foi desenvolvido como parte de uma atividade acadêmica para praticar conceitos fundamentais de **JavaScript**, com foco em **objetos** e **funções construtoras**. A aplicação permite a criação e manipulação de objetos representando **clientes, telefones e endereços**, além de funcionalidades para exibição formatada e ordenação de clientes.

## 🎯 Objetivos
A atividade foi dividida em duas partes principais:

### ✅ Parte 1: Construção de Objetos
- Criar **funções construtoras** para os tipos de objeto:
  - `Cliente`
  - `TelefoneCelular`
  - `Endereco`
- Criar **métodos de acesso** (`get` e `set`) para cada atributo.
- Criar métodos para retornar valores em **caixa alta** e **caixa baixa** quando aplicável.
- Implementar um método `descricao`, que retorna uma saída formatada com os dados do cliente:

```javascript
let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log(cliente.descricao);
```

### ✅ Parte 2: Ordenação de Clientes
- Implementar uma função que receba uma lista de clientes e os ordene **alfabeticamente pelo nome**.

## 🚀 Funcionalidades Implementadas
- Estruturação dos objetos `Cliente`, `TelefoneCelular` e `Endereco`.
- Métodos `get` e `set` para cada atributo.
- Formatação de saída dos objetos (`descricao`).
- Ordenação de clientes por nome.

## 🛠 Como executar o código
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Execute o arquivo JavaScript em um ambiente Node.js ou diretamente no console do navegador.

## 📚 Tecnologias Utilizadas
- **JavaScript** (ES6)

## 📌 Considerações Finais
Este projeto foi desenvolvido como parte de uma **atividade acadêmica** para reforçar os conceitos de **Programação Orientada a Objetos (POO) em JavaScript**. Ele cobre a criação de objetos, manipulação de métodos de acesso e ordenação de dados. 🚀

