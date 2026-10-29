// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de criação das collections e carga inicial
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// ======================================================
// 1. COLLECTION: ADMINISTRADORES
// ======================================================

// Os documentos já cadastrados no MongoDB Atlas.
// Este bloco documenta a estrutura da collection.
// Não execute insertMany se esses registros já existirem.

const administradores = [
  {
    _id: ObjectId("6acb95c69b47f86c598630f9"),
    nome: "Marcos",
    email: "administrador@gmail.com",
    senha: "2b$12$UVX5AqZMUNmyTRUasF.i8uxfyKLCQ/yEvMCHSbdJB.AyN97WQVusu",
    perfil: "ADMINISTRADOR"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e4"),
    nome: "Ana Oliveira",
    email: "anaadmin@gmail.com",
    senha: "$2a$10$3p/7QhK8d8W/kE3kY4Z7.u6N/J0nF5v/g6H7i8J9k0L1m2N3o4P5Q",
    perfil: "ADMINISTRADOR"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e7"),
    nome: "Roberto Alves",
    email: "admin123@gmail.com",
    senha: "$2a$10$3p/7QhK8d8W/kE3kY4Z7.u6N/J0nF5v/g6H7i8J9k0L1m2N3o4P5Q",
    perfil: "ADMINISTRADOR"
  },
  {
    _id: ObjectId("670da1000000000000000001"),
    nome: "Victor Hugo",
    email: "victorhugo@gmail.com",
    senha: "$2a$10$eGOG0CwgWOGItd/mMaWjeefosviQjutwhsz0RDgO/5HCOOZpFOhXq",
    perfil: "ADMINISTRADOR"
  }
];

// ======================================================
// 2.  COLLECTION: USUARIOS
// ======================================================

  const usuarios = [
  {
    _id: ObjectId("670da2000000000000000001"),
    nome: "Victor Hugo",
    email: "victorhugo@gmail.com",
    senha: "$2a$10$eGOG0CwgWOGItd/mMaWjeefosviQjutwhsz0RDgO/5HCOOZpFOhXq",
    perfil: "ADMINISTRADOR",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "670da1000000000000000001"
  },
  {
    _id: ObjectId("670da2000000000000000099"),
    nome: "marcos",
    email: "administrador@gmail.com",
    senha: "$2b$12$UVX5AqZMUNmyTRUasF.i8uxfyKLCQ/yEvMCHSbdJB.AyN97WQVusu",
    perfil: "ADMINISTRADOR",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb95c69b47f86c598630f9"
  },
  {
    _id: ObjectId("670da2000000000000000020"),
    nome: "Adriana Alves",
    email: "AdrianaSecre@gmail.com",
    senha: "$2b$12$Jp7eFknakf1OWXnFUaaVIeqrbPcGDMdFcdfUJk5RFUmq4gCyAfdFi",
    perfil: "SECRETARIA",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb95c69b47f86c598630ea"
  },
  {
    _id: ObjectId("670da2000000000000000030"),
    nome: "Dr. Carlos Eduardo",
    email: "carlos.edu@gmail.com",
    senha: "$2b$12$j0CcFL2Vf.9t2VFNocVFQuFJYERUgFZgKmZtM4OzLMrwBHUnr5b1a",
    perfil: "PROFISSIONAL",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb963a9b47f86c598630f4"
  },

      {
    _id: ObjectId("670da2000000000000000040"),
    nome: "Enzo Gabriel",
    email: "enzo@gmail.com",
    senha: "$2a$10$w8T9O9Q7j7oE4PZ4oO3mleQ7V6wF9mR3yI8mZ8N1p4Q7r2S3t4U5V",
    perfil: "PACIENTE",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb977e9b47f86c598630fa"
  }
  
];

// ======================================================
// 3. COLLECTION: SECRETARIAS
// ======================================================

const secretarias = [
  {
    _id: ObjectId("6acb95c69b47f86c598630e4"),
    nome: "Ana Oliveira",
    email: "ana.recepcao@gmail.com",
    telefone: "(61) 98888-0001"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e5"),
    nome: "Carla Mendes",
    email: "carla.atendimento@gmail.com",
    telefone: "(61) 98888-0002"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e6"),
    nome: "Mariana Costa",
    email: "mariana.recepcao@gmail.com",
    telefone: "(61) 98888-0003"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e7"),
    nome: "Juliana Santos",
    email: "juliana.atendimento@gmail.com",
    telefone: "(61) 98888-0004"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e8"),
    nome: "Fernanda Lima",
    email: "fernanda.recepcao@gmail.com",
    telefone: "(61) 98888-0005"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630ea"),
    nome: "Adriana Alves",
    email: "AdrianaSecre@gmail.com",
    telefone: "(61) 98888-0000"
  }
];

// ======================================================
// 4. COLLECTION: PACIENTES
// ======================================================

const pacientes = [
  {
    _id: ObjectId("6acb977e9b47f86c598630fa"),
    nome: "Enzo Gabriel",
    dataNascimento: ISODate("2015-04-12T00:00:00.000Z"),
    cpf: "121.121.121-12",
    telefone: "(61) 99999-1111",
    email: "enzo@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Unimed",
    numeroCarteirinha: "111222333",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c598630fb"),
    nome: "Valentina Souza",
    dataNascimento: ISODate("2018-08-22T00:00:00.000Z"),
    cpf: "232.232.232-23",
    telefone: "(61) 99999-2222",
    email: "valentina@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "SulAmérica",
    numeroCarteirinha: "444555666",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c598630fc"),
    nome: "Arthur Lima",
    dataNascimento: ISODate("2012-01-30T00:00:00.000Z"),
    cpf: "343.343.343-34",
    telefone: "(61) 99999-3333",
    email: "arthur@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Bradesco Saúde",
    numeroCarteirinha: "777888999",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c598630fd"),
    nome: "Maria Alice",
    dataNascimento: ISODate("2019-11-05T00:00:00.000Z"),
    cpf: "454.454.454-45",
    telefone: "(61) 99999-4444",
    email: "alice@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Amil",
    numeroCarteirinha: "000111222",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c598630fe"),
    nome: "João Miguel",
    dataNascimento: ISODate("2014-06-15T00:00:00.000Z"),
    cpf: "565.565.565-56",
    telefone: "(61) 99999-5555",
    email: "joao@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  },
  {
    _id: ObjectId("6acb977e9b47f86c598630ff"),
    nome: "Laura Rocha",
    dataNascimento: ISODate("2016-03-25T00:00:00.000Z"),
    cpf: "676.676.676-67",
    telefone: "(61) 99999-6666",
    email: "laura@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Unimed",
    numeroCarteirinha: "333444555",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863100"),
    nome: "Pedro Henrique",
    dataNascimento: ISODate("2011-09-18T00:00:00.000Z"),
    cpf: "787.787.787-78",
    telefone: "(61) 99999-7777",
    email: "pedro.h@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Cassi",
    numeroCarteirinha: "999888777",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863101"),
    nome: "Sophia Mendes",
    dataNascimento: ISODate("2017-07-07T00:00:00.000Z"),
    cpf: "898.898.898-89",
    telefone: "(61) 99999-8888",
    email: "sophia@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863102"),
    nome: "Heitor Alves",
    dataNascimento: ISODate("2013-12-12T00:00:00.000Z"),
    cpf: "909.909.909-90",
    telefone: "(61) 99999-9999",
    email: "heitor@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Geap",
    numeroCarteirinha: "555666777",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863103"),
    nome: "Heloísa Garcia",
    dataNascimento: ISODate("2020-02-02T00:00:00.000Z"),
    cpf: "010.210.010-02",
    telefone: "(61) 99999-0000",
    email: "heloisa@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Amil",
    numeroCarteirinha: "888999000",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },

    {
    _id: ObjectId("6acb977e9b47f86c59863104"),
    nome: "Davi Lucca",
    dataNascimento: ISODate("2015-05-14T00:00:00.000Z"),
    cpf: "111.222.333-44",
    telefone: "(61) 98888-1234",
    email: "davi@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Unimed",
    numeroCarteirinha: "123456789",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863105"),
    nome: "Manuela Costa",
    dataNascimento: ISODate("2017-09-19T00:00:00.000Z"),
    cpf: "222.333.444-55",
    telefone: "(61) 98888-2345",
    email: "manuela@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "SulAmérica",
    numeroCarteirinha: "987654321",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863106"),
    nome: "Bernardo Silva",
    dataNascimento: ISODate("2013-02-11T00:00:00.000Z"),
    cpf: "333.444.554-66",
    telefone: "(61) 98888-3456",
    email: "bernardo@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863107"),
    nome: "Gabriel Oliveira",
    dataNascimento: ISODate("2014-10-25T00:00:00.000Z"),
    cpf: "444.555.666-77",
    telefone: "(61) 98888-4567",
    email: "gabriel.O@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Bradesco Saúde",
    numeroCarteirinha: "112233445",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863108"),
    nome: "Isabella Melo",
    dataNascimento: ISODate("2016-07-04T00:00:00.000Z"),
    cpf: "555.666.777-88",
    telefone: "(61) 98888-5678",
    email: "isabella@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Amil",
    numeroCarteirinha: "556677889",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863109"),
    nome: "Matheus Nunes",
    dataNascimento: ISODate("2012-12-31T00:00:00.000Z"),
    cpf: "666.777.888-99",
    telefone: "(61) 98888-6789",
    email: "matheus.n@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Unimed",
    numeroCarteirinha: "998877665",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c5986310a"),
    nome: "Giovanna Anton",
    dataNascimento: ISODate("2018-04-15T00:00:00.000Z"),
    cpf: "777.888.999-00",
    telefone: "(61) 98888-7890",
    email: "giovanna.a@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Cassi",
    numeroCarteirinha: "443322110",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c5986310b"),
    nome: "Lucas Gabriel",
    dataNascimento: ISODate("2015-01-08T00:00:00.000Z"),
    cpf: "888.999.000-11",
    telefone: "(61) 98888-8901",
    email: "lucas.g@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  },
  {
    _id: ObjectId("6acb977e9b47f86c5986310c"),
    nome: "Beatriz Ramos",
    dataNascimento: ISODate("2019-06-22T00:00:00.000Z"),
    cpf: "999.000.111-22",
    telefone: "(61) 98888-9012",
    email: "beatriz.r@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Geap",
    numeroCarteirinha: "776655443",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c5986310d"),
    nome: "Samuel Dias",
    dataNascimento: ISODate("2013-08-14T00:00:00.000Z"),
    cpf: "000.111.222-33",
    telefone: "(61) 98888-0123",
    email: "samuel@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Amil",
    numeroCarteirinha: "221100334",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c5986310e"),
    nome: "Mariana Rios",
    dataNascimento: ISODate("2016-11-20T00:00:00.000Z"),
    cpf: "123.456.789-01",
    telefone: "(61) 97777-1234",
    email: "mariana.r@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Unimed",
    numeroCarteirinha: "887766990",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c5986310f"),
    nome: "Vitor Hugo",
    dataNascimento: ISODate("2014-03-03T00:00:00.000Z"),
    cpf: "234.567.890-12",
    telefone: "(61) 97777-2345",
    email: "vitor@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "SulAmérica",
    numeroCarteirinha: "110099223",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863110"),
    nome: "Ana Clara",
    dataNascimento: ISODate("2017-05-17T00:00:00.000Z"),
    cpf: "345.678.901-23",
    telefone: "(61) 97777-3456",
    email: "anaclara@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863111"),
    nome: "Nicolas Vieira",
    dataNascimento: ISODate("2015-07-29T00:00:00.000Z"),
    cpf: "456.788.901-34",
    telefone: "(61) 97777-4567",
    email: "nicolas@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Bradesco Saúde",
    numeroCarteirinha: "665544778",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863112"),
    nome: "Beatriz Ortiz",
    dataNascimento: ISODate("2018-10-02T00:00:00.000Z"),
    cpf: "567.890.123-45",
    telefone: "(61) 97777-5678",
    email: "ortiz@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Amil",
    numeroCarteirinha: "993322114",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863113"),
    nome: "Guilherme Font",
    dataNascimento: ISODate("2012-06-12T00:00:00.000Z"),
    cpf: "678.901.234-56",
    telefone: "(61) 97777-6789",
    email: "gui@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Unimed",
    numeroCarteirinha: "772211009",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863114"),
    nome: "Lara Croft",
    dataNascimento: ISODate("2019-01-24T00:00:00.000Z"),
    cpf: "789.012.345-67",
    telefone: "(61) 97777-7890",
    email: "lara@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Cassi",
    numeroCarteirinha: "339988771",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863115"),
    nome: "Gustavo Rocha",
    dataNascimento: ISODate("2014-09-09T00:00:00.000Z"),
    cpf: "890.123.456-78",
    telefone: "(61) 97777-8901",
    email: "gustavol@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863116"),
    nome: "Cecília Meire",
    dataNascimento: ISODate("2016-02-14T00:00:00.000Z"),
    cpf: "901.234.567-89",
    telefone: "(61) 97777-9012",
    email: "cecilia@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Geap",
    numeroCarteirinha: "441100882",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c59863117"),
    nome: "Murilo Couto",
    dataNascimento: ISODate("2015-08-08T00:00:00.000Z"),
    cpf: "012.345.678-90",
    telefone: "(61) 97777-0123",
    email: "muriloc@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Amil",
    numeroCarteirinha: "552233114",
    validadePlano: ISODate("2027-12-31T00:00:00.000Z")
  }
  ];

    // ======================================================
// 5. COLLECTION: RESPONSAVEIS
// ======================================================

const responsaveis = [
  {
    _id: ObjectId("6ad01bf645efb8e84b4936de"),
    nome: "Leandro Henrique Gabriel",
    cpf: "404.404.404-40",
    email: "leandrohenrique@gmail.com",
    telefone: "(61) 99761-2048"
  },
  {
    _id: ObjectId("6ad01e3845efb8e84b4936e1"),
    nome: "Mariana Souza Oliveira",
    cpf: "222.222.222-22",
    email: "marianaoliveira@gmail.com",
    telefone: "(61) 99842-7153"
  },
  {
    _id: ObjectId("6ad01eef45efb8e84b4936e4"),
    nome: "Ricardo Lima Ferreira",
    cpf: "333.333.333-33",
    email: "ricardoLima2gmail.com",
    telefone: "(61) 99173-6084"
  },
  {
    _id: ObjectId("6ad0318345efb8e84b4936e7"),
    nome: "Fernanda Alice",
    cpf: "451.451.451-45",
    email: "fernandaalicegmail.com",
    telefone: "(61) 87000-1004"
  },
  {
    _id: ObjectId("6ad0379845efb8e84b4936f6"),
    nome: "Ricardo Miguel",
    cpf: "700.100.002-02",
    email: "ricardomiguel@gmail.com",
    telefone: "(61) 90000-1005"
  },
  {
    _id: ObjectId("6ad037cc45efb8e84b4936f8"),
    nome: "Patrícia Rocha",
    cpf: "700.100.003-03",
    email: "patriciarocha21@gmail.com",
    telefone: "(61) 90000-1006"
  },
  {
    _id: ObjectId("6ad0382145efb8e84b4936fa"),
    nome: "Eduardo Henrique",
    cpf: "700.100.004-04",
    email: "eduardohenrique171@gmail.com",
    telefone: "(61) 90000-1007"
  },
  {
    _id: ObjectId("6ad0387145efb8e84b4936fc"),
    nome: "Camila Mendes",
    cpf: "700.100.005-05",
    email: "camilamendes@gmail.com",
    telefone: "(61) 90000-1008"
  },
  {
    _id: ObjectId("6ad0389e45efb8e84b4936fe"),
    nome: "Marcelo Alves",
    cpf: "700.100.006-06",
    email: "marceloalves198@gmail.com",
    telefone: "(61) 90000-1009"
  },
  {
    _id: ObjectId("6ad038da45efb8e84b493700"),
    nome: "Juliana Garcia",
    cpf: "700.100.007-07",
    email: "julianagarcia014@gmail.com",
    telefone: "(61) 90000-1010"
  },
  {
    _id: ObjectId("6ad12669ac631eaabaac2877"),
    nome: "Heloisa Lucca",
    cpf: "100.100.009-07",
    email: "heloisa15@gmail.com",
    telefone: "(61) 90000-1010"
  },
  {
    _id: ObjectId("6ad14142ac631eaabaac2879"),
    nome: "Francisco Costa",
    cpf: "589.521.283-20",
    email: "franscicocosta@gmail.com",
    telefone: "(61) 99000-2020"
  },
  {
    _id: ObjectId("6ad142b1ac631eaabaac287b"),
    nome: "Alessandra Silva",
    cpf: "078.095.893-42",
    email: "alessandrasilva145@gmail.com",
    telefone: "(61) 99000-1919"
  },
  {
    _id: ObjectId("6ad143c5ac631eaabaac287d"),
    nome: "Renato Jesus",
    cpf: "859.880.904-78",
    email: "renato11@gmail.com",
    telefone: "(61) 99000-1818"
  },
  {
    _id: ObjectId("6ad1456dac631eaabaac287f"),
    nome: "Leandro Melo",
    cpf: "725.559.087-06",
    email: "Leandromelo.0516@gmail.com",
    telefone: "(61) 99000-1717"
  },
  {
    _id: ObjectId("6ad1468bac631eaabaac2882"),
    nome: "Fernanda Nunes",
    cpf: "205.716.853-07",
    email: "Fernandanunes.07@gmail.com",
    telefone: "(61) 99000-1616"
  },
  {
    _id: ObjectId("6ad14783ac631eaabaac2884"),
    nome: "Reginaldo Anton",
    cpf: "653.327.322-10",
    email: "reginaldoanton8519@gmail.com",
    telefone: "(61) 99000-1515"
  },
  {
    _id: ObjectId("6ad1487cac631eaabaac2886"),
    nome: "Larissa Gabriel",
    cpf: "119.792.949-50",
    email: "Larissagabriel4552gmail.com",
    telefone: "(61) 99000-1414"
  },
  {
    _id: ObjectId("6ad1495cac631eaabaac2889"),
    nome: "Everaldo Ramos",
    cpf: "119.082.134-69",
    email: "everaldoramos.01@gmail.com",
    telefone: "(61) 99000-1313"
  },
  {
    _id: ObjectId("6ad149eaac631eaabaac288b"),
    nome: "Adriana Dias",
    cpf: "041.887.167-11",
    email: "adrianadias943@gmail.com",
    telefone: "(61) 99000-1212"
  },
  {
    _id: ObjectId("6ad14a8bac631eaabaac288d"),
    nome: "Helena Rios",
    cpf: "397.601.661-60",
    email: "rioshelena1012@gmail.com",
    telefone: "(61) 99000-1111"
  },
  {
    _id: ObjectId("6ad14bafac631eaabaac288f"),
    nome: "Geraldo Hugo",
    cpf: "008.743.403-22",
    email: "geraldo73.hugo@gmail.com",
    telefone: "(61) 99000-1010"
  },
  {
    _id: ObjectId("6ad14c50ac631eaabaac2891"),
    nome: "Marcela Clara",
    cpf: "650.218.765-03",
    email: "marcelaclara.90@gmail.com",
    telefone: "(61) 99000-0909"
  },
  {
    _id: ObjectId("6ad14d01ac631eaabaac2893"),
    nome: "Andréia Vieira",
    cpf: "648.609.650-00",
    email: "andreiavieira77@gmail.com",
    telefone: "(61) 99000-0808"
  },
  {
    _id: ObjectId("6ad14d9bac631eaabaac2895"),
    nome: "Leandra Ortiz",
    cpf: "402.658.965-09",
    email: "leandraortiz124@gmail.com",
    telefone: "(61) 99000-0707"
  },
  {
    _id: ObjectId("6ad14e2fac631eaabaac2897"),
    nome: "Bruno Font",
    cpf: "106.773.872-02",
    email: "brunofont2101@gmail.com",
    telefone: "(61) 99000-0606"
  },
  {
    _id: ObjectId("6ad14ec9ac631eaabaac2899"),
    nome: "Luciana Front",
    cpf: "060.499.729-90",
    email: "lucianafront1902@gmail.com",
    telefone: "(61) 99000-0505"
  },
  {
    _id: ObjectId("6ad14f53ac631eaabaac289b"),
    nome: "Alessandra Lima",
    cpf: "692.869.531-51",
    email: "Alessandralima21@gmail.com",
    telefone: "(61) 99000-0404"
  },
  {
    _id: ObjectId("6ad15014ac631eaabaac289d"),
    nome: "Bruna Meire",
    cpf: "277.108.431-74",
    email: "brunameire9515@gmail.com",
    telefone: "(61) 99000-0303"
  },
  {
    _id: ObjectId("6ad150acac631eaabaac289f"),
    nome: "Lucas Couto",
    cpf: "990.755.454-52",
    email: "Lucascouto.0788@gmail.com",
    telefone: "(61) 99000-0202"
  }
];

// ======================================================
// 6. COLLECTION: VINCULOSRESPONSAVEIS
// ======================================================

const vinculosResponsaveis = [
  {
    _id: ObjectId("6ad786389d17b0cfc703730b"),
    pacienteId: "6acb977e9b47f86c598630fa",
    responsavelId: "6ad01bf645efb8e84b4936de",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703730c"),
    pacienteId: "6acb977e9b47f86c598630fb",
    responsavelId: "6ad01e3845efb8e84b4936e1",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703730d"),
    pacienteId: "6acb977e9b47f86c598630fc",
    responsavelId: "6ad01eef45efb8e84b4936e4",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703730e"),
    pacienteId: "6acb977e9b47f86c598630fd",
    responsavelId: "6ad0318345efb8e84b4936e7",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703730f"),
    pacienteId: "6acb977e9b47f86c598630fe",
    responsavelId: "6ad0379845efb8e84b4936f6",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037310"),
    pacienteId: "6acb977e9b47f86c598630ff",
    responsavelId: "6ad037cc45efb8e84b4936f8",
    grauParentesco: "Tia"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037311"),
    pacienteId: "6acb977e9b47f86c59863100",
    responsavelId: "6ad0382145efb8e84b4936fa",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037312"),
    pacienteId: "6acb977e9b47f86c59863101",
    responsavelId: "6ad0387145efb8e84b4936fc",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037313"),
    pacienteId: "6acb977e9b47f86c59863102",
    responsavelId: "6ad0389e45efb8e84b4936fe",
    grauParentesco: "Tio"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037314"),
    pacienteId: "6acb977e9b47f86c59863103",
    responsavelId: "6ad038da45efb8e84b493700",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037315"),
    pacienteId: "6acb977e9b47f86c59863104",
    responsavelId: "6ad12669ac631eaabaac2877",
    grauParentesco: "Tia"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037316"),
    pacienteId: "6acb977e9b47f86c59863105",
    responsavelId: "6ad14142ac631eaabaac2879",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037317"),
    pacienteId: "6acb977e9b47f86c59863106",
    responsavelId: "6ad142b1ac631eaabaac287b",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037318"),
    pacienteId: "6acb977e9b47f86c59863107",
    responsavelId: "6ad143c5ac631eaabaac287d",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037319"),
    pacienteId: "6acb977e9b47f86c59863108",
    responsavelId: "6ad1456dac631eaabaac287f",
    grauParentesco: "Irmão"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703731a"),
    pacienteId: "6acb977e9b47f86c59863109",
    responsavelId: "6ad1468bac631eaabaac2882",
    grauParentesco: "Irmã"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703731b"),
    pacienteId: "6acb977e9b47f86c5986310a",
    responsavelId: "6ad14783ac631eaabaac2884",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703731c"),
    pacienteId: "6acb977e9b47f86c5986310b",
    responsavelId: "6ad1487cac631eaabaac2886",
    grauParentesco: "Irmã"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703731d"),
    pacienteId: "6acb977e9b47f86c5986310c",
    responsavelId: "6ad1495cac631eaabaac2889",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703731e"),
    pacienteId: "6acb977e9b47f86c5986310d",
    responsavelId: "6ad149eaac631eaabaac288b",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc703731f"),
    pacienteId: "6acb977e9b47f86c5986310e",
    responsavelId: "6ad14a8bac631eaabaac288d",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037320"),
    pacienteId: "6acb977e9b47f86c5986310f",
    responsavelId: "6ad14bafac631eaabaac288f",
    grauParentesco: "Avô"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037321"),
    pacienteId: "6acb977e9b47f86c59863110",
    responsavelId: "6ad14c50ac631eaabaac2891",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037322"),
    pacienteId: "6acb977e9b47f86c59863111",
    responsavelId: "6ad14d01ac631eaabaac2893",
    grauParentesco: "Avó"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037323"),
    pacienteId: "6acb977e9b47f86c59863112",
    responsavelId: "6ad14d9bac631eaabaac2895",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037324"),
    pacienteId: "6acb977e9b47f86c59863113",
    responsavelId: "6ad14e2fac631eaabaac2897",
    grauParentesco: "Pai"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037325"),
    pacienteId: "6acb977e9b47f86c59863114",
    responsavelId: "6ad14ec9ac631eaabaac2899",
    grauParentesco: "Mãe"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037326"),
    pacienteId: "6acb977e9b47f86c59863115",
    responsavelId: "6ad14f53ac631eaabaac289b",
    grauParentesco: "Avó"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037327"),
    pacienteId: "6acb977e9b47f86c59863116",
    responsavelId: "6ad15014ac631eaabaac289d",
    grauParentesco: "Irmã"
  },
  {
    _id: ObjectId("6ad786389d17b0cfc7037328"),
    pacienteId: "6acb977e9b47f86c59863117",
    responsavelId: "6ad150acac631eaabaac289f",
    grauParentesco: "Pai"
  }
];

// ======================================================
// 7. COLLECTION: PROFISSIONAIS
// ======================================================

const profissionais = [
  {
    _id: ObjectId("6acb963a9b47f86c598630ea"),
    nome: "Dra. Letícia Camargo",
    email: "leticia.psico@neuro.com",
    cpf: "101.101.101-10",
    telefone: "(61) 99111-0001",
    categoria: "Psicopedagoga",
    formacaoAcademica: "Dificuldades de Aprendizagem e Escrita",
    numeroRegistro: "CRP-DF 12345",
    anoConclusao: NumberInt("2019"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630eb"),
    nome: "Dra. Beatriz Rocha",
    email: "beatriz.psico@neuro.com",
    cpf: "202.202.202-20",
    telefone: "(61) 99111-0002",
    categoria: "Psicopedagoga",
    formacaoAcademica: "Intervenção Cognitiva Infantil",
    numeroRegistro: "CRP-DF 54321",
    anoConclusao: NumberInt("2020"),
    atendeOnline: false,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630ec"),
    nome: "Dra. Paula Coelho",
    email: "paula.psico@neuro.com",
    cpf: "909.909.909-90",
    telefone: "(61) 99111-0009",
    categoria: "Psicopedagoga",
    formacaoAcademica: "Transtornos de Leitura e Escrita",
    numeroRegistro: "CRP-DF 22334",
    anoConclusao: NumberInt("2018"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630ed"),
    nome: "Dra. Amanda Silva",
    email: "amanda.neuro@neuro.com",
    cpf: "303.303.303-30",
    telefone: "(61) 99111-0003",
    categoria: "Neuropsicopedagoga",
    formacaoAcademica: "Avaliação Neurocognitiva e Aplicadora ABA",
    numeroRegistro: "CRP-DF 67890",
    anoConclusao: NumberInt("2021"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630ee"),
    nome: "Dra. Heloísa Meireles",
    email: "heloisa.neuro@neuro.com",
    cpf: "343.343.343-34",
    telefone: "(61) 99111-0011",
    categoria: "Neuropsicopedagoga",
    formacaoAcademica: "Intervenção no Espectro Autista",
    numeroRegistro: "CRP-DF 11445",
    anoConclusao: NumberInt("2017"),
    atendeOnline: false,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630ef"),
    nome: "Dra. Simone Tebet",
    email: "simone.psi@neuro.com",
    cpf: "404.404.404-40",
    telefone: "(61) 99111-0004",
    categoria: "Psicólogo",
    formacaoAcademica: "Manejo de Comportamento e Métodos ABA",
    numeroRegistro: "CRP-DF 09876",
    anoConclusao: NumberInt("2015"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630f0"),
    nome: "Dra. Adriana Esteves",
    email: "adriana.ludo@neuro.com",
    cpf: "505.505.505-50",
    telefone: "(61) 99111-0005",
    categoria: "Psicólogo",
    formacaoAcademica: "Ludoterapia e Psicoterapia Infantil",
    numeroRegistro: "CRP-DF 11223",
    anoConclusao: NumberInt("2016"),
    atendeOnline: false,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630f1"),
    nome: "Dra. Glória Pires",
    email: "gloria.psi@neuro.com",
    cpf: "606.606.606-60",
    telefone: "(61) 99111-0006",
    categoria: "Psicólogo",
    formacaoAcademica: "Suporte Emocional e Desenvolvimento",
    numeroRegistro: "CRP-DF 44556",
    anoConclusao: NumberInt("2014"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630f2"),
    nome: "Dr. Renato Aragão",
    email: "renato.med@neuro.com",
    cpf: "707.707.707-70",
    telefone: "(61) 99111-0007",
    categoria: "Psiquiatra Infantil",
    formacaoAcademica: "Autismo, TDAH e Transtornos de Humor",
    numeroRegistro: "CRM-DF 77889",
    anoConclusao: NumberInt("2010"),
    atendeOnline: false,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630f3"),
    nome: "Dr. Roberto Cláudio",
    email: "roberto.med@neuro.com",
    cpf: "808.808.808-80",
    telefone: "(61) 99111-0008",
    categoria: "Psiquiatra Infantil",
    formacaoAcademica: "Transtornos do Neurodesenvolvimento e Tiques",
    numeroRegistro: "CRM-DF 99001",
    anoConclusao: NumberInt("2012"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  },
  {
    _id: ObjectId("6acb963a9b47f86c598630f4"),
    nome: "Dr. Carlos Eduardo",
    email: "carlos.edu@gmail.com",
    cpf: "111.222.333-44",
    telefone: "(61) 97777-0000",
    categoria: "Psicólogo",
    formacaoAcademica: "Psicologia Clínica",
    numeroRegistro: "CRP 01/12345",
    anoConclusao: NumberInt("2018"),
    atendeOnline: true,
    ativo: true,
    disponibilidadeIds: []
  }
];

// ======================================================
// 8. COLLECTION: DISPONIBILIDADE
// ======================================================

const disponibilidade = [
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf27"),
    diaSemana: "SEGUNDA_FEIRA",
    periodo: "TARDE",
    horaInicio: "15:00:00",
    horaFim: "16:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf28"),
    diaSemana: "TERCA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf29"),
    diaSemana: "TERCA_FEIRA",
    periodo: "TARDE",
    horaInicio: "13:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf2a"),
    diaSemana: "QUARTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf2b"),
    diaSemana: "QUARTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "13:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf2c"),
    diaSemana: "QUINTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf2d"),
    diaSemana: "QUINTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "13:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf2e"),
    diaSemana: "SEXTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf2f"),
    diaSemana: "SEXTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "13:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf30"),
    diaSemana: "SABADO",
    periodo: "MANHA",
    horaInicio: "08:00:00",
    horaFim: "13:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf31"),
    diaSemana: "TERCA_FEIRA",
    periodo: "TARDE",
    horaInicio: "14:00:00",
    horaFim: "18:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf32"),
    diaSemana: "QUARTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "14:00:00",
    horaFim: "18:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf33"),
    diaSemana: "QUINTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "14:00:00",
    horaFim: "18:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf34"),
    diaSemana: "SEXTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "14:00:00",
    horaFim: "18:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf35"),
    diaSemana: "SABADO",
    periodo: "MANHA",
    horaInicio: "09:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf36"),
    diaSemana: "TERCA_FEIRA",
    periodo: "MANHA",
    horaInicio: "09:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf37"),
    diaSemana: "QUARTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "09:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf38"),
    diaSemana: "QUINTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "09:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf39"),
    diaSemana: "SEXTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "09:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf3a"),
    diaSemana: "SEGUNDA_FEIRA",
    periodo: "TARDE",
    horaInicio: "15:30:00",
    horaFim: "16:30:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf3b"),
    diaSemana: "TERCA_FEIRA",
    periodo: "TARDE",
    horaInicio: "15:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf3c"),
    diaSemana: "QUARTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "15:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf3d"),
    diaSemana: "QUINTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "15:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf3e"),
    diaSemana: "SEXTA_FEIRA",
    periodo: "TARDE",
    horaInicio: "15:00:00",
    horaFim: "17:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf3f"),
    diaSemana: "SABADO",
    periodo: "MANHA",
    horaInicio: "10:00:00",
    horaFim: "13:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf40"),
    diaSemana: "TERCA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:30:00",
    horaFim: "11:30:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf41"),
    diaSemana: "QUARTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:30:00",
    horaFim: "11:30:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf42"),
    diaSemana: "QUINTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:30:00",
    horaFim: "11:30:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf43"),
    diaSemana: "SEXTA_FEIRA",
    periodo: "MANHA",
    horaInicio: "08:30:00",
    horaFim: "11:30:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad67e2fc2f9210dff48bf44"),
    diaSemana: "SABADO",
    periodo: "MANHA",
    horaInicio: "08:30:00",
    horaFim: "12:30:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-08T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-08T08:00:00.000Z")
  }
];

// ======================================================
// 9. COLLECTION: CONSULTAS
// ======================================================

const consultas = [
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372bf"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f1",
    dataHora: ISODate("2026-06-01T09:00:00.000Z"),
    tipoAtendimento: "Retorno de rotina médica",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-05-31T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-05-31T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c0"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630ec",
    dataHora: ISODate("2026-06-01T10:30:00.000Z"),
    tipoAtendimento: "Avaliação Neuropsicopedagógica",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-05-31T10:00:00.000Z"),
    atualizadoEm: ISODate("2026-05-31T10:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c1"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ea",
    dataHora: ISODate("2026-06-02T14:00:00.000Z"),
    tipoAtendimento: "Sessão psicopedagógica",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-01T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c2"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630f0",
    dataHora: ISODate("2026-06-02T14:30:00.000Z"),
    tipoAtendimento: "Sessão com Psicólogo",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-01T09:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T09:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c3"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630eb",
    dataHora: ISODate("2026-06-03T09:30:00.000Z"),
    tipoAtendimento: "Acompanhamento Terapêutico",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-02T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c4"),
    pacienteId: "6acb977e9b47f86c598630ff",
    profissionalId: "6acb963a9b47f86c598630ed",
    dataHora: ISODate("2026-06-03T10:30:00.000Z"),
    tipoAtendimento: "Avaliação Neurocognitiva",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-02T09:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T09:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c5"),
    pacienteId: "6acb977e9b47f86c59863100",
    profissionalId: "6acb963a9b47f86c598630f3",
    dataHora: ISODate("2026-06-04T11:00:00.000Z"),
    tipoAtendimento: "Consulta Psiquiátrica",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-03T11:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-03T11:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c6"),
    pacienteId: "6acb977e9b47f86c59863101",
    profissionalId: "6acb963a9b47f86c598630ee",
    dataHora: ISODate("2026-06-04T16:00:00.000Z"),
    tipoAtendimento: "Intervenção TEA",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-03T14:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-03T14:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c7"),
    pacienteId: "6acb977e9b47f86c59863102",
    profissionalId: "6acb963a9b47f86c598630ef",
    dataHora: ISODate("2026-06-05T09:30:00.000Z"),
    tipoAtendimento: "Manejo Comportamental ABA",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-04T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-04T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c8"),
    pacienteId: "6acb977e9b47f86c59863103",
    profissionalId: "6acb963a9b47f86c598630f2",
    dataHora: ISODate("2026-06-05T14:30:00.000Z"),
    tipoAtendimento: "Consulta Médica Infantil",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-04T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-04T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372c9"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630ea",
    dataHora: ISODate("2026-06-08T08:30:00.000Z"),
    tipoAtendimento: "Acompanhamento Psicopedagógico",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-07T08:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-07T08:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372ca"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630eb",
    dataHora: ISODate("2026-06-08T09:00:00.000Z"),
    tipoAtendimento: "Intervenção Cognitiva",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-07T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-07T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372cb"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ec",
    dataHora: ISODate("2026-06-08T14:00:00.000Z"),
    tipoAtendimento: "Transtornos de Leitura",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-07T09:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-07T09:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372cc"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630ed",
    dataHora: ISODate("2026-06-09T09:00:00.000Z"),
    tipoAtendimento: "Aplicadora ABA",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-08T14:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-08T14:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372cd"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630ee",
    dataHora: ISODate("2026-06-09T13:30:00.000Z"),
    tipoAtendimento: "Sessão de Aprendizagem",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-08T15:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-08T15:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372ce"),
    pacienteId: "6acb977e9b47f86c598630ff",
    profissionalId: "6acb963a9b47f86c598630ef",
    dataHora: ISODate("2026-06-10T08:00:00.000Z"),
    tipoAtendimento: "Sessão semanal de ludoterapia",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-09T09:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-09T09:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372cf"),
    pacienteId: "6acb977e9b47f86c59863100",
    profissionalId: "6acb963a9b47f86c598630f0",
    dataHora: ISODate("2026-06-10T09:30:00.000Z"),
    tipoAtendimento: "Treino fonológico focado em fala",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-09T10:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-09T10:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d0"),
    pacienteId: "6acb977e9b47f86c59863101",
    profissionalId: "6acb963a9b47f86c598630f1",
    dataHora: ISODate("2026-06-10T14:00:00.000Z"),
    tipoAtendimento: "Acompanhamento de manejo medicamentoso",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-09T11:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-09T11:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d1"),
    pacienteId: "6acb977e9b47f86c59863102",
    profissionalId: "6acb963a9b47f86c598630f2",
    dataHora: ISODate("2026-06-11T09:30:00.000Z"),
    tipoAtendimento: "Terapia ABA individualizada",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-10T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-10T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d2"),
    pacienteId: "6acb977e9b47f86c59863103",
    profissionalId: "6acb963a9b47f86c598630f3",
    dataHora: ISODate("2026-06-11T13:00:00.000Z"),
    tipoAtendimento: "Intervenção para seletividade alimentar",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-10T10:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-10T10:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d3"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630ea",
    dataHora: ISODate("2026-06-11T14:30:00.000Z"),
    tipoAtendimento: "Apoio psicopedagógico em leitura",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-10T11:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-10T11:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d4"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630eb",
    dataHora: ISODate("2026-06-12T08:00:00.000Z"),
    tipoAtendimento: "Sessão regular de psicomotricidade",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-11T09:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-11T09:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d5"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ec",
    dataHora: ISODate("2026-06-12T09:30:00.000Z"),
    tipoAtendimento: "Avaliação de marcos do neurodesenvolvimento",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-11T10:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-11T10:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d6"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630ed",
    dataHora: ISODate("2026-06-13T08:00:00.000Z"),
    tipoAtendimento: "Treino de habilidades sociais lúdicas",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-12T10:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-12T10:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d7"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630ee",
    dataHora: ISODate("2026-06-13T09:30:00.000Z"),
    tipoAtendimento: "Manejo comportamental para TOD",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-12T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-12T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d8"),
    pacienteId: "6acb977e9b47f86c598630ff",
    profissionalId: "6acb963a9b47f86c598630ef",
    dataHora: ISODate("2026-06-15T08:00:00.000Z"),
    tipoAtendimento: "TCC focada em ansiedade escolar",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-13T10:15:00.000Z"),
    atualizadoEm: ISODate("2026-06-13T10:15:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372d9"),
    pacienteId: "6acb977e9b47f86c59863100",
    profissionalId: "6acb963a9b47f86c598630f0",
    dataHora: ISODate("2026-06-15T09:30:00.000Z"),
    tipoAtendimento: "Exercícios de comunicação alternativa",
    local: "Consultório 3",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-13T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-13T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372da"),
    pacienteId: "6acb977e9b47f86c59863101",
    profissionalId: "6acb963a9b47f86c598630f1",
    dataHora: ISODate("2026-06-15T14:30:00.000Z"),
    tipoAtendimento: "Análise de resposta sensorial tátil",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-13T11:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-13T11:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372db"),
    pacienteId: "6acb977e9b47f86c59863102",
    profissionalId: "6acb963a9b47f86c598630f2",
    dataHora: ISODate("2026-06-17T08:30:00.000Z"),
    tipoAtendimento: "Sessão de estimulação cognitiva precoce",
    local: "Consultório 1",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-15T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-15T08:00:00.000Z")
  },
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372dc"),
    pacienteId: "6acb977e9b47f86c59863103",
    profissionalId: "6acb963a9b47f86c598630f3",
    dataHora: ISODate("2026-06-17T09:00:00.000Z"),
    tipoAtendimento: "Orientação parental e entrega de relatório",
    local: "Consultório 2",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-06-15T08:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-15T08:30:00.000Z")
  },
  ];

  // ======================================================
  // 10. Collection: PRONTUARIOS
   // ======================================================

const prontuarios = [
  {
    _id: ObjectId("6ad778e29d17b0cfc70372e6"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f1",
    consultaId: null,
    queixaPrincipal: "Dificuldade de concentração na escola e agitação nas tarefas.",
    avaliacao: "Apresenta sinais compatíveis com TDAH, hiperatividade leve.",
    planoTratamento: "Sessões semanais de psicopedagogia e treino de foco.",
    prescricao: "Sem medicação indicada nesta fase inicial.",
    criadoEm: ISODate("2026-06-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad778e29d17b0cfc70372e7"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630ec",
    consultaId: null,
    queixaPrincipal: "Atraso no desenvolvimento da leitura e escrita.",
    avaliacao: "Indicativos de dislexia e dificuldade na identificação fonêmica.",
    planoTratamento: "Estimulação fonológica e apoio escolar individualizado.",
    prescricao: "Exercícios práticos de alfabetização lúdica.",
    criadoEm: ISODate("2026-06-01T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad778e29d17b0cfc70372e8"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ea",
    consultaId: null,
    queixaPrincipal: "Resistência para realizar atividades em grupo.",
    avaliacao: "Dificuldade de interação social e regulação emocional.",
    planoTratamento: "Terapia comportamental e treino de habilidades sociais.",
    prescricao: "Orientação para ambiente familiar e rotina estruturada.",
    criadoEm: ISODate("2026-06-02T14:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T14:00:00.000Z")
  },
  {
    _id: ObjectId("6ad778e29d17b0cfc70372e9"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630f0",
    consultaId: null,
    queixaPrincipal: "Choro frequente e medo excessivo de separação dos pais.",
    avaliacao: "Ansiedade infantil de separação em grau moderado.",
    planoTratamento: "Ludoterapia semanal e acolhimento familiar.",
    prescricao: "Estratégias lúdicas de segurança emocional.",
    criadoEm: ISODate("2026-06-02T15:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T15:30:00.000Z")
  },
  {
    _id: ObjectId("6ad778e29d17b0cfc70372ea"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630eb",
    consultaId: null,
    queixaPrincipal: "Inflexibilidade cognitiva e seletividade alimentar.",
    avaliacao: "Características do espectro autista (TEA Nível 1 de suporte).",
    planoTratamento: "Intervenção precoce com método ABA e integração sensorial.",
    prescricao: "Encaminhamento para terapia ocupacional complementar.",
    criadoEm: ISODate("2026-06-03T08:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-03T08:30:00.000Z")
  }
];

// ======================================================
// 11. COLLECTION: DIAGNOSTICOS
// ======================================================
const diagnosticos = [
  {
    _id: ObjectId("6ad779f79d17b0cfc70372ed"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f1",
    descricao: "Transtorno do Deficit de Atencao e Hiperatividade (TDAH - CID-11: 6A05)",
    criadoEm: ISODate("2026-06-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad779f79d17b0cfc70372ee"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630ec",
    descricao: "Transtorno Especifico da Aprendizagem com Prejuizo na Leitura (Dislexia - CID-11: 6A03.0)",
    criadoEm: ISODate("2026-06-01T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad779f79d17b0cfc70372ef"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ea",
    descricao: "Transtorno de Ansiedade Social na Infancia (CID-11: 6B00)",
    criadoEm: ISODate("2026-06-02T14:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T14:00:00.000Z")
  },
  {
    _id: ObjectId("6ad779f79d17b0cfc70372f0"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630f0",
    descricao: "Transtorno de Ansiedade de Separacao (CID-11: 6B05)",
    criadoEm: ISODate("2026-06-02T15:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T15:30:00.000Z")
  },
  {
    _id: ObjectId("6ad779f79d17b0cfc70372f1"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630eb",
    descricao: "Transtorno do Espectro do Autismo - Nivel 1 de Suporte (TEA - CID-11: 6A02.0)",
    criadoEm: ISODate("2026-06-03T08:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-03T08:30:00.000Z")
  }
];


// ======================================================
// 12. COLLECTION: TRATAMENTO
// ======================================================
const tratamentos = [
  {
    _id: ObjectId("6ad77dd29d17b0cfc70372f5"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f1",
    descricao: "Treino de Foco e Organização Cognitiva",
    objetivo: "Melhorar a atenção sustentada em atividades escolares",
    frequencia: "2x por semana",
    duracao: "6 meses",
    observacoes: "Acompanhamento conjunto com a equipe pedagógica da escola",
    criadoEm: ISODate("2026-06-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad77dd29d17b0cfc70372f6"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630ec",
    descricao: "Intervenção em Consciência Fonológica",
    objetivo: "Superar barreiras de decodificação de leitura e escrita",
    frequencia: "1x por semana",
    duracao: "4 meses",
    observacoes: "Uso de jogos lúdicos e materiais visuais estruturados",
    criadoEm: ISODate("2026-06-01T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad77dd29d17b0cfc70372f7"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ea",
    descricao: "Treino de Habilidades Sociais (THS)",
    objetivo: "Desenvolver autonomia na interação e cooperação com pares",
    frequencia: "1x por semana",
    duracao: "6 meses",
    observacoes: "Atividades em pequenos grupos para simulação de cenários reais",
    criadoEm: ISODate("2026-06-02T14:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T14:00:00.000Z")
  },
  {
    _id: ObjectId("6ad77dd29d17b0cfc70372f8"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630f0",
    descricao: "Ludoterapia e Regulação Emocional",
    objetivo: "Reduzir picos de ansiedade no ambiente escolar e familiar",
    frequencia: "2x por semana",
    duracao: "3 meses",
    observacoes: "Orientação quinzenal com os pais incluída no plano",
    criadoEm: ISODate("2026-06-02T15:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T15:30:00.000Z")
  },
  {
    _id: ObjectId("6ad77dd29d17b0cfc70372f9"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630eb",
    descricao: "Intervenção Precoce baseada em ABA",
    objetivo: "Ampliar repertório comunicativo e diminuir comportamentos de esquiva",
    frequencia: "3x por semana",
    duracao: "12 meses",
    observacoes: "Avaliação contínua a cada 30 dias de aplicação",
    criadoEm: ISODate("2026-06-03T08:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-03T08:30:00.000Z")
  }
];

// =======================================
// 14. COLLECTION: EXAMES
// ======================================
const exames = [
  {
    _id: ObjectId("6ad77e359d17b0cfc70372fd"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f1",
    nome: "Avaliação Neuropsicológica Completa",
    tipo: "Neuropsicológico",
    dataRealizacao: ISODate("2026-05-20T10:00:00.000Z"),
    resultado: "Indicativos de TDAH com oscilação na atenção sustentada.",
    observacoes: "Recomendada intervenção psicopedagógica semanal.",
    criadoEm: ISODate("2026-06-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T09:00:00.000Z")
  },
  {
    _id: ObjectId("6ad77e359d17b0cfc70372fe"),
    pacienteId: "6acb977e9b47f86c598630fb",
    profissionalId: "6acb963a9b47f86c598630ec",
    nome: "Processamento Auditivo Central (PAC)",
    tipo: "Audiológico",
    dataRealizacao: ISODate("2026-05-22T14:30:00.000Z"),
    resultado: "Alteração na ordenação temporal e figura-fundo.",
    observacoes: "Acompanhamento fonoaudiológico sugerido.",
    criadoEm: ISODate("2026-06-01T10:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-01T10:30:00.000Z")
  },
  {
    _id: ObjectId("6ad77e359d17b0cfc70372ff"),
    pacienteId: "6acb977e9b47f86c598630fc",
    profissionalId: "6acb963a9b47f86c598630ea",
    nome: "Eletroencefalograma (EEG) em Sono e Vigília",
    tipo: "Neurológico",
    dataRealizacao: ISODate("2026-05-25T08:00:00.000Z"),
    resultado: "Atividade elétrica cerebral dentro dos padrões da normalidade.",
    observacoes: "Sem paroxismos epileptiformes detectados.",
    criadoEm: ISODate("2026-06-02T14:00:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T14:00:00.000Z")
  },
  {
    _id: ObjectId("6ad77e359d17b0cfc7037300"),
    pacienteId: "6acb977e9b47f86c598630fd",
    profissionalId: "6acb963a9b47f86c598630f0",
    nome: "Avaliação de Linguagem e Fala",
    tipo: "Fonoaudiológico",
    dataRealizacao: ISODate("2026-05-28T11:00:00.000Z"),
    resultado: "Ligeiro atraso na estruturação sintática.",
    observacoes: "Estimulação contínua com suporte familiar.",
    criadoEm: ISODate("2026-06-02T15:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-02T15:30:00.000Z")
  },
  {
    _id: ObjectId("6ad77e359d17b0cfc7037301"),
    pacienteId: "6acb977e9b47f86c598630fe",
    profissionalId: "6acb963a9b47f86c598630eb",
    nome: "Triagem do Desenvolvimento Infantil (DENVER II)",
    tipo: "Observacional / Comportamental",
    dataRealizacao: ISODate("2026-05-29T09:30:00.000Z"),
    resultado: "Atrasos em domínio pessoal-social e linguagem.",
    observacoes: "Encaminhado para plano de intervenção precoce.",
    criadoEm: ISODate("2026-06-03T08:30:00.000Z"),
    atualizadoEm: ISODate("2026-06-03T08:30:00.000Z")
  }
];




