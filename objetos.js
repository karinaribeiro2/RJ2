function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function() { return this.ddd; };
    this.setDdd = function(novoDdd) { this.ddd = novoDdd; };

    this.getNumero = function() { return this.numero; };
    this.setNumero = function(novoNumero) { this.numero = novoNumero; };
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function() { return this.estado; };
    this.setEstado = function(novoEstado) { this.estado = novoEstado; };

    this.getCidade = function() { return this.cidade; };
    this.setCidade = function(novaCidade) { this.cidade = novaCidade; };

    this.getRua = function() { return this.rua; };
    this.setRua = function(novaRua) { this.rua = novaRua; };

    this.getNumero = function() { return this.numero; };
    this.setNumero = function(novoNumero) { this.numero = novoNumero; };

    this.getEstadoMaiusculo = function() { return this.estado.toUpperCase(); };
    this.getEstadoMinusculo = function() { return this.estado.toLowerCase(); };

    this.getCidadeMaiusculo = function() { return this.cidade.toUpperCase(); };
    this.getCidadeMinusculo = function() { return this.cidade.toLowerCase(); };
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function() { return this.nome; };
    this.setNome = function(novoNome) { this.nome = novoNome; };

    this.getEmail = function() { return this.email; };
    this.setEmail = function(novoEmail) { this.email = novoEmail; };

    this.getEndereco = function() { return this.endereco; };
    this.setEndereco = function(novoEndereco) { this.endereco = novoEndereco; };

    this.getNomeMaiusculo = function() { return this.nome.toUpperCase(); };
    this.getNomeMinusculo = function() { return this.nome.toLowerCase(); };

    this.getEmailMaiusculo = function() { return this.email.toUpperCase(); };
    this.getEmailMinusculo = function() { return this.email.toLowerCase(); };

    Object.defineProperty(this, "descricao", {
        get: function() {
            return `Cliente: ${this.nome}\nTelefone: (${this.telefoneCelular.getDdd()}) ${this.telefoneCelular.getNumero()}\nEmail: ${this.email}\nEndereço: ${this.endereco.getRua()}, ${this.endereco.getNumero()} - ${this.endereco.getCidade()}, ${this.endereco.getEstado()}`;
        }
    });
}

function ordenarClientesPorNome(clientes) {
    return clientes.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

let telefone1 = new TelefoneCelular('11', '999999999');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1);

let telefone2 = new TelefoneCelular('21', '988888888');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Flores', '123');
let cliente2 = new Cliente('Amanda Silva', telefone2, 'amanda@email.com', endereco2);

let telefone3 = new TelefoneCelular('31', '977777777');
let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Av. Contorno', '456');
let cliente3 = new Cliente('Bruno Souza', telefone3, 'bruno@email.com', endereco3);

let listaClientes = [cliente1, cliente2, cliente3];

console.log("Lista de clientes antes da ordenação:");
listaClientes.forEach(c => console.log(c.descricao));

let clientesOrdenados = ordenarClientesPorNome(listaClientes);

console.log("\nLista de clientes depois da ordenação:");
clientesOrdenados.forEach(c => console.log(c.descricao));
