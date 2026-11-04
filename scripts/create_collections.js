// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de criação das collections e estrutura base (Branch: testes)
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// ======================================================
// 1. COLLECTION: ADMINISTRADORES
// ======================================================

const administradores = [
  {
    _id: ObjectId("6acb95c69b47f86c598630f9"),
    nome: "Administrador Teste 1",
    email: "admin.teste1@gmail.com",
    senha: "hash_senha_teste",
    perfil: "ADMINISTRADOR"
  },
  {
    _id: ObjectId("6acb95c69b47f86c598630e4"),
    nome: "Administrador Teste 2",
    email: "admin.teste2@gmail.com",
    senha: "hash_senha_teste",
    perfil: "ADMINISTRADOR"
  }
];

// ======================================================
// 2. COLLECTION: USUARIOS
// ======================================================

const usuarios = [
  {
    _id: ObjectId("670da2000000000000000001"),
    nome: "Usuario Admin Teste",
    email: "admin.teste@gmail.com",
    senha: "hash_senha_teste",
    perfil: "ADMINISTRADOR",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb95c69b47f86c598630f9"
  },
  {
    _id: ObjectId("670da2000000000000000020"),
    nome: "Usuario Secretaria Teste",
    email: "secretaria.teste@gmail.com",
    senha: "hash_senha_teste",
    perfil: "SECRETARIA",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb95c69b47f86c598630ea"
  },
  {
    _id: ObjectId("670da2000000000000000030"),
    nome: "Usuario Profissional Teste",
    email: "profissional.teste@gmail.com",
    senha: "hash_senha_teste",
    perfil: "PROFISSIONAL",
    senhaProvisoria: false,
    ativo: true,
    entidadeId: "6acb963a9b47f86c598630f4"
  },
  {
    _id: ObjectId("670da2000000000000000040"),
    nome: "Usuario Paciente Teste",
    email: "paciente.teste@gmail.com",
    senha: "hash_senha_teste",
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
    _id: ObjectId("6acb95c69b47f86c598630ea"),
    nome: "Secretaria Teste",
    email: "secretaria.teste@gmail.com",
    telefone: "(00) 00000-0000"
  }
];

// ======================================================
// 4. COLLECTION: PACIENTES
// ======================================================

const pacientes = [
  {
    _id: ObjectId("6acb977e9b47f86c598630fa"),
    nome: "Paciente Teste 1",
    dataNascimento: ISODate("2020-01-01T00:00:00.000Z"),
    cpf: "000.000.000-00",
    telefone: "(00) 00000-0000",
    email: "paciente.teste1@gmail.com",
    possuiPlanoSaude: true,
    planoSaude: "Plano Teste",
    numeroCarteirinha: "000000000",
    validadePlano: ISODate("2028-12-31T00:00:00.000Z")
  },
  {
    _id: ObjectId("6acb977e9b47f86c598630fb"),
    nome: "Paciente Teste 2",
    dataNascimento: ISODate("2020-01-01T00:00:00.000Z"),
    cpf: "000.000.000-00",
    telefone: "(00) 00000-0000",
    email: "paciente.teste2@gmail.com",
    possuiPlanoSaude: false,
    planoSaude: null,
    numeroCarteirinha: null,
    validadePlano: null
  }
];

// ======================================================
// 5. COLLECTION: RESPONSAVEIS
// ======================================================

const responsaveis = [
  {
    _id: ObjectId("6ad01bf645efb8e84b4936de"),
    nome: "Responsavel Teste",
    cpf: "000.000.000-00",
    email: "responsavel.teste@gmail.com",
    telefone: "(00) 00000-0000"
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
    grauParentesco: "Pai / Mãe / Responsável Teste"
  }
];

// ======================================================
// 7. COLLECTION: PROFISSIONAIS
// ======================================================

const profissionais = [
  {
    _id: ObjectId("6acb963a9b47f86c598630f4"),
    nome: "Profissional Teste",
    email: "profissional.teste@gmail.com",
    cpf: "000.000.000-00",
    telefone: "(00) 00000-0000",
    categoria: "Especialidade Teste",
    formacaoAcademica: "Formação Teste",
    numeroRegistro: "REGISTRO-TESTE 0000",
    anoConclusao: NumberInt("2020"),
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
    periodo: "MANHA",
    horaInicio: "08:00:00",
    horaFim: "12:00:00",
    ativo: true,
    data: null,
    criadoEm: ISODate("2026-01-01T08:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-01T08:00:00.000Z")
  }
];

// ======================================================
// 9. COLLECTION: CONSULTAS
// ======================================================

const consultas = [
  {
    _id: ObjectId("6ad76c1a9d17b0cfc70372bf"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f4",
    dataHora: ISODate("2026-06-01T09:00:00.000Z"),
    tipoAtendimento: "Atendimento Teste",
    local: "Consultório Teste",
    modalidade: "PRESENCIAL",
    duracao: NumberInt("50"),
    status: "CONFIRMADA",
    criadoEm: ISODate("2026-01-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-01T09:00:00.000Z")
  }
];

// ======================================================
// 10. COLLECTION: PRONTUARIOS
// ======================================================

const prontuarios = [
  {
    _id: ObjectId("6ad778e29d17b0cfc70372e6"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f4",
    consultaId: null,
    queixaPrincipal: "Queixa de teste.",
    avaliacacao: "Avaliação de teste.",
    planoTratamento: "Plano de tratamento de teste.",
    prescricao: "Prescrição de teste.",
    criadoEm: ISODate("2026-01-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-01T09:00:00.000Z")
  }
];

// ======================================================
// 11. COLLECTION: DIAGNOSTICOS
// ======================================================

const diagnosticos = [
  {
    _id: ObjectId("6ad779f79d17b0cfc70372ed"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f4",
    descricao: "Diagnóstico de Teste (CID-11: 0000)",
    criadoEm: ISODate("2026-01-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-01T09:00:00.000Z")
  }
];

// ======================================================
// 12. COLLECTION: TRATAMENTOS
// ======================================================

const tratamentos = [
  {
    _id: ObjectId("6ad77dd29d17b0cfc70372f5"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f4",
    descricao: "Descrição do tratamento teste",
    objetivo: "Objetivo do tratamento teste",
    frequencia: "1x por semana",
    duracao: "3 meses",
    observacoes: "Observações de teste",
    criadoEm: ISODate("2026-01-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-01T09:00:00.000Z")
  }
];

// ======================================================
// 13. COLLECTION: EXAMES
// ======================================================

const exames = [
  {
    _id: ObjectId("6ad77e359d17b0cfc70372fd"),
    pacienteId: "6acb977e9b47f86c598630fa",
    profissionalId: "6acb963a9b47f86c598630f4",
    nome: "Exame de Teste",
    tipo: "Tipo Teste",
    dataRealizacao: ISODate("2026-01-01T10:00:00.000Z"),
    resultado: "Resultado do exame teste.",
    observacoes: "Observações do exame teste.",
    criadoEm: ISODate("2026-01-01T09:00:00.000Z"),
    atualizadoEm: ISODate("2026-01-01T09:00:00.000Z")
  }
];
