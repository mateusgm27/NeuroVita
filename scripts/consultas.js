// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de Consultas (Queries de Busca - find)
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// ======================================================
// 1. CONSULTA: USUÁRIOS PROFISSIONAIS ATIVOS
// ======================================================
// Buscar todos os usuários ativos com perfil de Profissional

dbNeuro.usuarios.find({
  "perfil": "PROFISSIONAL",
  "ativo": true
});

/* RESULTADO RETORNADO (7 documentos):
[

  _id: ObjectId('6aeb29c839385bd877cc2d60'),
  nome: 'Rafael Carlos',
  email: 'carloss@gmail.com',
  senha: '$2a$10$g/ld8Owg7X7JFV36HzzH7uYMErLIiQFjdxqq0/0ltuQUx6aQg4YPS',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: true,
  ativo: true,
  entidadeId: '6aeb29c839385bd877cc2d5f',
  _class: 'com.neurovita.model.Usuario'
}

{
  _id: ObjectId('6acb963a9b47f86c598630f4'),
  nome: 'Dra.Adriana Alves',
  email: 'profissional@gmail.com',
  senha: '$2b$12$XABO33aMLEeaR4FK9ws.9eb2o73Nlks5rUjFZZXxNf1SVcGHevYhG',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: false,
  ativo: true,
  entidadeId: ObjectId('6acb963a9b47f86c598630f4')
}

{
  _id: ObjectId('670da2000000000000000031'),
  nome: 'Dra. Letícia Camargo',
  email: 'leticia.psico@neuro.com',
  senha: '$2b$12$j0CcFL2Vf.9t2VFNocVFQuFJYERUgFZgKmZtM4OzLMrwBHUnr5b1a',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: false,
  ativo: true,
  entidadeId: '6acb963a9b47f86c598630ea',
  senhaAlteradaEm: null,
  tokenVersion: Long('1')
}


{
  _id: ObjectId('670da2000000000000000032'),
  nome: 'Dra. Beatriz Rocha',
  email: 'beatriz.psico@neuro.com',
  senha: '$2b$12$j0CcFL2Vf.9t2VFNocVFQuFJYERUgFZgKmZtM4OzLMrwBHUnr5b1a',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: false,
  ativo: true,
  entidadeId: '6acb963a9b47f86c598630eb',
  senhaAlteradaEm: null,
  tokenVersion: Long('1')
}

{
  _id: ObjectId('670da2000000000000000033'),
  nome: 'Dra. Glória Pires',
  email: 'gloria.psi@neuro.com',
  senha: '$2b$12$j0CcFL2Vf.9t2VFNocVFQuFJYERUgFZgKmZtM4OzLMrwBHUnr5b1a',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: false,
  ativo: true,
  entidadeId: '6acb963a9b47f86c598630f1',
  senhaAlteradaEm: null,
  tokenVersion: Long('1')
}

{
  _id: ObjectId('670da2000000000000000034'),
  nome: 'Dra. Fernanda Vasconcelos',
  email: 'fernanda.neuro@neuro.com',
  senha: '$2b$12$j0CcFL2Vf.9t2VFNocVFQuFJYERUgFZgKmZtM4OzLMrwBHUnr5b1a',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: false,
  ativo: true,
  entidadeId: '6acb963a9b47f86c598630f5',
  senhaAlteradaEm: null,
  tokenVersion: Long('1')

  {
  _id: ObjectId('670da2000000000000000035'),
  nome: 'Dr. Rafael Mendes',
  email: 'rafael.psi@neuro.com',
  senha: '$2b$12$j0CcFL2Vf.9t2VFNocVFQuFJYERUgFZgKmZtM4OzLMrwBHUnr5b1a',
  perfil: 'PROFISSIONAL',
  senhaProvisoria: false,
  ativo: true,
  entidadeId: '6acb963a9b47f86c598630f6',
  senhaAlteradaEm: null,
  tokenVersion: Long('1')
}
]

*/

// ======================================================
// 2. CONSULTA: PACIENTES COM PLANO UNIMED
// ======================================================
// Listar pacientes que possuem plano de saúde cadastrado da Unimed

dbNeuro.pacientes.find({
  "possuiPlanoSaude": true,
  "planoSaude": "Unimed"
});

/* RESULTADO RETORNADO (6 Documentos)

{
  _id: ObjectId('6acb977e9b47f86c598630fa'),
  nome: 'Enzo Gabriel',
  dataNascimento: ISODate('2015-04-12T00:00:00.000Z'),
  cpf: '121.121.121-12',
  telefone: '(61) 99999-1111',
  email: 'enzo@gmail.com',
  possuiPlanoSaude: true,
  planoSaude: 'Unimed',
  numeroCarteirinha: '111222333',
  validadePlano: ISODate('2027-12-31T00:00:00.000Z')
}

{
  _id: ObjectId('6acb977e9b47f86c598630ff'),
  nome: 'Laura Rocha',
  dataNascimento: ISODate('2016-03-25T00:00:00.000Z'),
  cpf: '676.676.676-67',
  telefone: '(61) 99999-6666',
  email: 'laura@gmail.com',
  possuiPlanoSaude: true,
  planoSaude: 'Unimed',
  numeroCarteirinha: '333444555',
  validadePlano: ISODate('2027-12-31T00:00:00.000Z')
}

{
  _id: ObjectId('6acb977e9b47f86c59863104'),
  nome: 'Davi Lucca',
  dataNascimento: ISODate('2015-05-14T00:00:00.000Z'),
  cpf: '111.222.333-44',
  telefone: '(61) 98888-1234',
  email: 'davi@gmail.com',
  possuiPlanoSaude: true,
  planoSaude: 'Unimed',
  numeroCarteirinha: '123456789',
  validadePlano: ISODate('2027-12-31T00:00:00.000Z')
}

{
  _id: ObjectId('6acb977e9b47f86c59863109'),
  nome: 'Matheus Nunes',
  dataNascimento: ISODate('2012-12-31T00:00:00.000Z'),
  cpf: '666.777.888-99',
  telefone: '(61) 98888-6789',
  email: 'matheus.n@gmail.com',
  possuiPlanoSaude: true,
  planoSaude: 'Unimed',
  numeroCarteirinha: '998877665',
  validadePlano: ISODate('2027-12-31T00:00:00.000Z')
}

{
  _id: ObjectId('6acb977e9b47f86c5986310e'),
  nome: 'Mariana Rios',
  dataNascimento: ISODate('2016-11-20T00:00:00.000Z'),
  cpf: '123.456.789-01',
  telefone: '(61) 97777-1234',
  email: 'mariana.r@gmail.com',
  possuiPlanoSaude: true,
  planoSaude: 'Unimed',
  numeroCarteirinha: '887766990',
  validadePlano: ISODate('2027-12-31T00:00:00.000Z')
}

{
  _id: ObjectId('6acb977e9b47f86c59863113'),
  nome: 'Guilherme Font',
  dataNascimento: ISODate('2012-06-12T00:00:00.000Z'),
  cpf: '678.901.234-56',
  telefone: '(61) 97777-6789',
  email: 'gui@gmail.com',
  possuiPlanoSaude: true,
  planoSaude: 'Unimed',
  numeroCarteirinha: '772211009',
  validadePlano: ISODate('2027-12-31T00:00:00.000Z')
}

*/

// ======================================================
// 3. CONSULTA: CONSULTAS CONFIRMADAS DE UM PACIENTE
// ======================================================
// Buscar todas as consultas com status CONFIRMADA para o paciente Enzo Gabriel

dbNeuro.consultas.find({
  "pacienteId": "6acb977e9b47f86c598630fa",
  "status": "CONFIRMADA"
});

/* Resultado RETORNADO (3 Documentos)

 _id: ObjectId('6ad76c1a9d17b0cfc70372bf'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  dataHora: ISODate('2026-06-01T09:00:00.000Z'),
  tipoAtendimento: 'Retorno de rotina médica',
  local: 'Consultório 1',
  modalidade: 'PRESENCIAL',
  duracao: 50,
  status: 'CONFIRMADA',
  criadoEm: ISODate('2026-05-31T09:00:00.000Z'),
  atualizadoEm: ISODate('2026-05-31T09:00:00.000Z')
}



  _id: ObjectId('6ad76c1a9d17b0cfc70372c9'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630ea',
  dataHora: ISODate('2026-06-08T08:30:00.000Z'),
  tipoAtendimento: 'Acompanhamento Psicopedagógico',
  local: 'Consultório 1',
  modalidade: 'PRESENCIAL',
  duracao: 50,
  status: 'CONFIRMADA',
  criadoEm: ISODate('2026-06-07T08:15:00.000Z'),
  atualizadoEm: ISODate('2026-06-07T08:15:00.000Z')
}

{
  _id: ObjectId('6ad76c1a9d17b0cfc70372d3'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630ea',
  dataHora: ISODate('2026-06-11T14:30:00.000Z'),
  tipoAtendimento: 'Apoio psicopedagógico em leitura',
  local: 'Consultório 2',
  modalidade: 'PRESENCIAL',
  duracao: 50,
  status: 'CONFIRMADA',
  criadoEm: ISODate('2026-06-10T11:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-10T11:00:00.000Z')
}
*/


// ======================================================
// 4. CONSULTA: PROFISSIONAIS PSICÓLOGOS ONLINE
// ======================================================
// Filtrar profissionais da categoria Psicólogo que realizam atendimento online

dbNeuro.profissionais.find({
  "categoria": "Psicólogo",
  "atendeOnline": true
});

/* RESULTADO RETORNADO (3 Documentos)
{
  _id: ObjectId('6acb963a9b47f86c598630f1'),
  nome: 'Dra. Glória Pires',
  email: 'gloria.psi@neuro.com',
  emailContato: 'gloria.contato@neuro.com',
  dataNascimento: ISODate('1989-12-10T00:00:00.000Z'),
  cpf: '606.606.606-60',
  telefone: '(61) 99111-0006',
  categoria: 'Psicólogo',
  formacaoAcademica: 'Suporte Emocional e Desenvolvimento',
  numeroRegistro: 'CRP-DF 44556',
  anoConclusao: 2014,
  atendeOnline: true,
  atendePresencial: true,
  ativo: true,
  disponibilidadeIds: [
    '6ad67e2fc2f9210dff48bf2a'
  ]
}


  _id: ObjectId('6acb963a9b47f86c598630f4'),
  nome: 'Dr. Carlos Eduardo',
  email: 'carlos.edu@gmail.com',
  emailContato: 'carlos.clinica@neuro.com',
  dataNascimento: ISODate('1990-06-25T00:00:00.000Z'),
  cpf: '111.222.333-44',
  telefone: '(61) 97777-0000',
  categoria: 'Psicólogo',
  formacaoAcademica: 'Psicologia Clínica',
  numeroRegistro: 'CRP 01/12345',
  anoConclusao: 2018,
  atendeOnline: true,
  atendePresencial: true,
  ativo: true,
  disponibilidadeIds: [
    '6ad67e2fc2f9210dff48bf2b'
  ]
}

{
  _id: ObjectId('6acb963a9b47f86c598630f6'),
  nome: 'Dr. Rafael Mendes',
  email: 'rafael.psi@neuro.com',
  emailContato: 'rafael.contato@neuro.com',
  dataNascimento: ISODate('1991-11-28T00:00:00.000Z'),
  cpf: '404.404.404-41',
  telefone: '(61) 99111-0008',
  categoria: 'Psicólogo',
  formacaoAcademica: 'Terapia Cognitivo-Comportamental (TCC)',
  numeroRegistro: 'CRP-DF 78901',
  anoConclusao: 2016,
  atendeOnline: true,
  atendePresencial: true,
  ativo: true,
  disponibilidadeIds: [
    '6ad67e2fc2f9210dff48bf28'
  ]
}

*/

// ======================================================
// 5. CONSULTA: EXAMES COM RESULTADO DE TDAH
// ======================================================
// Buscar exames cujo parecer de resultado contenha o termo TDAH (case-insensitive)

dbNeuro.exames.find({
  "resultado": { "$regex": "TDAH", "$options": "i" }
});

/* RESULTADO RETORNADO(1 Documentos)

{
  _id: ObjectId('6ad77e359d17b0cfc70372fd'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  nome: 'Avaliação Neuropsicológica Completa',
  tipo: 'Neuropsicológico',
  dataRealizacao: ISODate('2026-05-20T10:00:00.000Z'),
  resultado: 'Indicativos de TDAH com oscilação na atenção sustentada.',
  observacoes: 'Recomendada intervenção psicopedagógica semanal.',
  criadoEm: ISODate('2026-06-01T09:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T09:00:00.000Z')
}

*/



// ======================================================
// 6. CONSULTA: DISPONIBILIDADE NA TERÇA DE MANHÃ
// ======================================================
// Listar horários de atendimento ativos cadastrados para a Terça-feira no período matutino

dbNeuro.disponibilidade.find({
  "diaSemana": "TERCA_FEIRA",
  "periodo": "MANHA",
  "ativo": true
});

/* Resultado RETORNADO ( 3 Documentos)


  _id: ObjectId('6ad67e2fc2f9210dff48bf28'),
  diaSemana: 'TERCA_FEIRA',
  periodo: 'MANHA',
  horaInicio: '08:00:00',
  horaFim: '12:00:00',
  ativo: true,
  data: null,
  criadoEm: ISODate('2026-01-08T08:00:00.000Z'),
  atualizadoEm: ISODate('2026-01-08T08:00:00.000Z')
}

{
  _id: ObjectId('6ad67e2fc2f9210dff48bf36'),
  diaSemana: 'TERCA_FEIRA',
  periodo: 'MANHA',
  horaInicio: '09:00:00',
  horaFim: '12:00:00',
  ativo: true,
  data: null,
  criadoEm: ISODate('2026-01-08T08:00:00.000Z'),
  atualizadoEm: ISODate('2026-01-08T08:00:00.000Z')
}

{
  _id: ObjectId('6ad67e2fc2f9210dff48bf40'),
  diaSemana: 'TERCA_FEIRA',
  periodo: 'MANHA',
  horaInicio: '08:30:00',
  horaFim: '11:30:00',
  ativo: true,
  data: null,
  criadoEm: ISODate('2026-01-08T08:00:00.000Z'),
  atualizadoEm: ISODate('2026-01-08T08:00:00.000Z')
}

*/

// ======================================================
// 7. CONSULTA: PRONTUÁRIOS RECENTES
// ======================================================
// Listar prontuários médicos/terapêuticos criados a partir de 01/06/2026

dbNeuro.prontuarios.find({
  "criadoEm": { "$gte": ISODate("2026-06-01T00:00:00.000Z") }
});


/* Resultado Retornado ( 5 Documentos)

{
  _id: ObjectId('6ad778e29d17b0cfc70372e6'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  consultaId: null,
  queixaPrincipal: 'Dificuldade de concentração na escola e agitação nas tarefas.',
  avaliacao: 'Apresenta sinais compatíveis com TDAH, hiperatividade leve.',
  planoTratamento: 'Sessões semanais de psicopedagogia e treino de foco.',
  prescricao: 'Sem medicação indicada nesta fase inicial.',
  criadoEm: ISODate('2026-06-01T09:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T09:00:00.000Z')
}

{
  _id: ObjectId('6ad778e29d17b0cfc70372e7'),
  pacienteId: '6acb977e9b47f86c598630fb',
  profissionalId: '6acb963a9b47f86c598630ec',
  consultaId: null,
  queixaPrincipal: 'Atraso no desenvolvimento da leitura e escrita.',
  avaliacao: 'Indicativos de dislexia e dificuldade na identificação fonêmica.',
  planoTratamento: 'Estimulação fonológica e apoio escolar individualizado.',
  prescricao: 'Exercícios práticos de alfabetização lúdica.',
  criadoEm: ISODate('2026-06-01T10:30:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T10:30:00.000Z')
}

{
  _id: ObjectId('6ad778e29d17b0cfc70372e8'),
  pacienteId: '6acb977e9b47f86c598630fc',
  profissionalId: '6acb963a9b47f86c598630ea',
  consultaId: null,
  queixaPrincipal: 'Resistência para realizar atividades em grupo.',
  avaliacao: 'Dificuldade de interação social e regulação emocional.',
  planoTratamento: 'Terapia comportamental e treino de habilidades sociais.',
  prescricao: 'Orientação para ambiente familiar e rotina estruturada.',
  criadoEm: ISODate('2026-06-02T14:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-02T14:00:00.000Z')
}

{
  _id: ObjectId('6ad778e29d17b0cfc70372e9'),
  pacienteId: '6acb977e9b47f86c598630fd',
  profissionalId: '6acb963a9b47f86c598630f0',
  consultaId: null,
  queixaPrincipal: 'Choro frequente e medo excessivo de separação dos pais.',
  avaliacao: 'Ansiedade infantil de separação em grau moderado.',
  planoTratamento: 'Ludoterapia semanal e acolhimento familiar.',
  prescricao: 'Estratégias lúdicas de segurança emocional.',
  criadoEm: ISODate('2026-06-02T15:30:00.000Z'),
  atualizadoEm: ISODate('2026-06-02T15:30:00.000Z')
}

{
  _id: ObjectId('6ad778e29d17b0cfc70372ea'),
  pacienteId: '6acb977e9b47f86c598630fe',
  profissionalId: '6acb963a9b47f86c598630eb',
  consultaId: null,
  queixaPrincipal: 'Inflexibilidade cognitiva e seletividade alimentar.',
  avaliacao: 'Características do espectro autista (TEA Nível 1 de suporte).',
  planoTratamento: 'Intervenção precoce com método ABA e integração sensorial.',
  prescricao: 'Encaminhamento para terapia ocupacional complementar.',
  criadoEm: ISODate('2026-06-03T08:30:00.000Z'),
  atualizadoEm: ISODate('2026-06-03T08:30:00.000Z')
}

*/



// ======================================================
// 8. CONSULTA: VÍNCULO FAMILIAR DO PACIENTE
// ======================================================
// Identificar o responsável cadastrado com grau de parentesco 'Pai' para um paciente

dbNeuro.vinculosResponsaveis.find({
  "pacienteId": "6acb977e9b47f86c598630fa",
  "grauParentesco": "Pai"
});
/* Resultado Retornado (1 Documentos)

{
  _id: ObjectId('6ad786389d17b0cfc703730b'),
  pacienteId: '6acb977e9b47f86c598630fa',
  responsavelId: '6ad01bf645efb8e84b4936de',
  grauParentesco: 'Pai'
}

*/


// ======================================================
// 9. CONSULTA: TRATAMENTOS DE LONGA DURAÇÃO
// ======================================================
// Listar planos de tratamento prescritos com duração de 6 ou 12 meses

dbNeuro.tratamentos.find({
  "duracao": { "$in": ["6 meses", "12 meses"] }
});

/* RESULTADO RETORNADO( 3 Documentos)

{
  _id: ObjectId('6ad77dd29d17b0cfc70372f5'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  descricao: 'Treino de Foco e Organização Cognitiva',
  objetivo: 'Melhorar a atenção sustentada em atividades escolares',
  frequencia: '2x por semana',
  duracao: '6 meses',
  observacoes: 'Acompanhamento conjunto com a equipe pedagógica da escola',
  criadoEm: ISODate('2026-06-01T09:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T09:00:00.000Z')
}

{
  _id: ObjectId('6ad77dd29d17b0cfc70372f7'),
  pacienteId: '6acb977e9b47f86c598630fc',
  profissionalId: '6acb963a9b47f86c598630ea',
  descricao: 'Treino de Habilidades Sociais (THS)',
  objetivo: 'Desenvolver autonomia na interação e cooperação com pares',
  frequencia: '1x por semana',
  duracao: '6 meses',
  observacoes: 'Atividades em pequenos grupos para simulação de cenários reais',
  criadoEm: ISODate('2026-06-02T14:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-02T14:00:00.000Z')
}

{
  _id: ObjectId('6ad77dd29d17b0cfc70372f9'),
  pacienteId: '6acb977e9b47f86c598630fe',
  profissionalId: '6acb963a9b47f86c598630eb',
  descricao: 'Intervenção Precoce baseada em ABA',
  objetivo: 'Ampliar repertório comunicativo e diminuir comportamentos de esquiva',
  frequencia: '3x por semana',
  duracao: '12 meses',
  observacoes: 'Avaliação contínua a cada 30 dias de aplicação',
  criadoEm: ISODate('2026-06-03T08:30:00.000Z'),
  atualizadoEm: ISODate('2026-06-03T08:30:00.000Z')
}

*/



// ======================================================
// 10. CONSULTA: DIAGNÓSTICOS EMITIDOS POR PROFISSIONAL
// ======================================================
// Buscar todos os diagnósticos (CID-11) laudados por um profissional específico

dbNeuro.diagnosticos.find({
  "profissionalId": "6acb963a9b47f86c598630f1"
});

/*  RESULTADOS RETORNADO ( 1 Documento)

{
  _id: ObjectId('6ad779f79d17b0cfc70372ed'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  descricao: 'Transtorno do Deficit de Atencao e Hiperatividade (TDAH - CID-11: 6A05)',
  criadoEm: ISODate('2026-06-01T09:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T09:00:00.000Z')
}

*/

// ======================================================
// 11. CONSULTA: EVOLUÇÕES CLÍNICAS FINALIZADAS DE MÚLTIPLOS PACIENTES
// ======================================================
// Buscar o histórico de evoluções terapêuticas finalizadas de 5 pacientes em acompanhamento

dbNeuro.evolucoes.find({
  "pacienteId": {
    "$in": [
      "6acb977e9b47f86c598630fa", // Enzo Gabriel
      "6acb977e9b47f86c598630fb", // Valentina Souza
      "6acb977e9b47f86c598630fc", // Arthur Lima
      "6acb977e9b47f86c598630fd", // Maria Alice
      "6acb977e9b47f86c598630fe"  // João Miguel
    ]
  },
  "status": "FINALIZADA"
});

/* RESULTADOS RETORNADOS(5 Documentos)

{
  _id: ObjectId('6ad78d009d17b0cfc7037751'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  consultaId: '6ad76c1a9d17b0cfc70372bf',
  tipoEvolucao: 'SESSAO_TERAPEUTICA',
  areaAtendimento: 'Psicologia Clínica',
  titulo: 'Sessão 01 - Avaliação de Atenção e Rotina (Enzo Gabriel)',
  dataAtendimento: ISODate('2026-06-01T09:00:00.000Z'),
  conteudo: 'Paciente realizou atividades lúdicas de memória visual com bom engajamento nos primeiros 25 minutos.',
  status: 'FINALIZADA',
  criadoEm: ISODate('2026-06-01T09:50:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T09:50:00.000Z'),
  versao: 1,
  prontuarioId: '6ad778e29d17b0cfc70372e6',
  objetivosTrabalhados: [
    'Atenção sustentada',
    'Controle inibitório'
  ],
  observacoes: 'Responde bem a reforço positivo visual.',
  conduta: 'Manter sessões semanais e orientar quadro de rotina em casa.',
  encaminhamentos: [
    'Psicopedagogia'
  ],
  retificadaPorId: null,
  motivoRetificacao: null
}

{
  _id: ObjectId('6ad78d009d17b0cfc7037752'),
  pacienteId: '6acb977e9b47f86c598630fb',
  profissionalId: '6acb963a9b47f86c598630eb',
  consultaId: '6ad76c1a9d17b0cfc70372c0',
  tipoEvolucao: 'INTERVENCAO_PSICOPEDAGOGICA',
  areaAtendimento: 'Psicopedagogia',
  titulo: 'Sessão 02 - Consciência Fonológica e Leitura (Valentina Souza)',
  dataAtendimento: ISODate('2026-06-02T10:30:00.000Z'),
  conteudo: 'Trabalhada associação grafema-fonema com jogos de sílabas; apresentou avanço na leitura de palavras simples.',
  status: 'FINALIZADA',
  criadoEm: ISODate('2026-06-02T11:20:00.000Z'),
  atualizadoEm: ISODate('2026-06-02T11:20:00.000Z'),
  versao: 1,
  prontuarioId: '6ad778e29d17b0cfc70372e7',
  objetivosTrabalhados: [
    'Decodificação fonêmica',
    'Fluência de leitura'
  ],
  observacoes: 'Menor resistência às atividades escritas em comparação à sessão anterior.',
  conduta: 'Prosseguir com exercícios de consciência silábica e leitura compartilhada.',
  encaminhamentos: [],
  retificadaPorId: null,
  motivoRetificacao: null
}

{
  _id: ObjectId('6ad78d009d17b0cfc7037753'),
  pacienteId: '6acb977e9b47f86c598630fc',
  profissionalId: '6acb963a9b47f86c598630ea',
  consultaId: '6ad76c1a9d17b0cfc70372c1',
  tipoEvolucao: 'SESSAO_TERAPEUTICA',
  areaAtendimento: 'Psicopedagogia',
  titulo: 'Sessão 01 - Organização de Estudos e Funções Executivas (Arthur Lima)',
  dataAtendimento: ISODate('2026-06-03T14:00:00.000Z'),
  conteudo: 'Aplicado planejamento semanal de tarefas escolares utilizando cronograma visual por cores.',
  status: 'FINALIZADA',
  criadoEm: ISODate('2026-06-03T14:50:00.000Z'),
  atualizadoEm: ISODate('2026-06-03T14:50:00.000Z'),
  versao: 1,
  prontuarioId: null,
  objetivosTrabalhados: [
    'Planejamento',
    'Memória operacional'
  ],
  observacoes: 'Paciente demonstrou autonomia ao montar sua lista de prioridades.',
  conduta: 'Revisar cumprimento das metas na próxima sessão.',
  encaminhamentos: [],
  retificadaPorId: null,
  motivoRetificacao: null
}

{
  _id: ObjectId('6ad78d009d17b0cfc7037754'),
  pacienteId: '6acb977e9b47f86c598630fd',
  profissionalId: '6acb963a9b47f86c598630f7',
  consultaId: null,
  tipoEvolucao: 'TERAPIA_FONOAUDIOLOGICA',
  areaAtendimento: 'Fonoaudiologia',
  titulo: 'Sessão 03 - Estimulação de Linguagem Expressiva (Maria Alice)',
  dataAtendimento: ISODate('2026-06-04T09:00:00.000Z'),
  conteudo: 'Realizados exercícios de articulação e ampliação de vocabulário por meio de contação de histórias.',
  status: 'FINALIZADA',
  criadoEm: ISODate('2026-06-04T09:50:00.000Z'),
  atualizadoEm: ISODate('2026-06-04T09:50:00.000Z'),
  versao: 1,
  prontuarioId: null,
  objetivosTrabalhados: [
    'Articulação fonética',
    'Construção frasal'
  ],

  observacoes: 'Boa participação durante toda a sessão com apoio da mãe na sala de espera.',
  conduta: 'Manter treino articulatório e enviar orientações de estímulo verbal para casa.',
  encaminhamentos: [],
  retificadaPorId: null,
  motivoRetificacao: null
}

observacoes: 'Boa participação durante toda a sessão com apoio da mãe na sala de espera.',
  conduta: 'Manter treino articulatório e enviar orientações de estímulo verbal para casa.',
  encaminhamentos: [],
  retificadaPorId: null,
  motivoRetificacao: null
}

{
  _id: ObjectId('6ad78d009d17b0cfc7037755'),
  pacienteId: '6acb977e9b47f86c598630fe',
  profissionalId: '6acb963a9b47f86c598630f6',
  consultaId: null,
  tipoEvolucao: 'SESSAO_TERAPEUTICA',
  areaAtendimento: 'Psicologia - TCC',
  titulo: 'Sessão 02 - Regulação Emocional e Habilidades Sociais (João Miguel)',
  dataAtendimento: ISODate('2026-06-05T15:00:00.000Z'),
  conteudo: 'Trabalhado reconhecimento de emoções e estratégias de autorregulação diante de frustrações escolares.',
  status: 'FINALIZADA',
  criadoEm: ISODate('2026-06-05T15:50:00.000Z'),
  atualizadoEm: ISODate('2026-06-05T15:50:00.000Z'),
  versao: 1,
  prontuarioId: null,
  objetivosTrabalhados: [
    'Regulação emocional',
    'Tolerância à frustração'
  ],

  {
  _id: ObjectId('6ad78d009d17b0cfc7037755'),
  pacienteId: '6acb977e9b47f86c598630fe',
  profissionalId: '6acb963a9b47f86c598630f6',
  consultaId: null,
  tipoEvolucao: 'SESSAO_TERAPEUTICA',
  areaAtendimento: 'Psicologia - TCC',
  titulo: 'Sessão 02 - Regulação Emocional e Habilidades Sociais (João Miguel)',
  dataAtendimento: ISODate('2026-06-05T15:00:00.000Z'),
  conteudo: 'Trabalhado reconhecimento de emoções e estratégias de autorregulação diante de frustrações escolares.',
  status: 'FINALIZADA',
  criadoEm: ISODate('2026-06-05T15:50:00.000Z'),
  atualizadoEm: ISODate('2026-06-05T15:50:00.000Z'),
  versao: 1,
  prontuarioId: null,
  objetivosTrabalhados: [
    'Regulação emocional',
    'Tolerância à frustração'
  ],

*/
  // ======================================================
// 12. CONSULTA: AVALIAÇÕES CLÍNICAS CONCLUÍDAS
// ======================================================
// Listar avaliações clínicas (anamnese/testes) concluídas na especialidade Psicologia

dbNeuro.avaliacoes_clinicas.find({
  "especialidade": "Psicologia",
  "status": "CONCLUIDA"
});

/* Resultado RETORNADOS (2 Documentos)

{
  _id: ObjectId('6ad78e009d17b0cfc7037801'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  consultaId: '6ad76c1a9d17b0cfc70372bf',
  tipoAvaliacao: 'ANAMNESE_INFANTIL',
  especialidade: 'Psicologia',
  titulo: 'Anamnese Inicial - Desenvolvimento Neuropsicomotor (Enzo Gabriel)',
  dataInicio: ISODate('2026-06-01T09:00:00.000Z'),
  dataConclusao: ISODate('2026-06-01T09:45:00.000Z'),
  objetivo: 'Mapear histórico escolar, familiar e marcos do desenvolvimento.',
  secoes: [
    {
      identificador: 'SEC_01',
      titulo: 'Histórico Escolar',
      descricao: 'Desempenho e comportamento em sala de aula',
      conteudo: 'Professora relata dispersão frequente durante cópia do quadro.',
      ordem: 1
    }
  ],
  resultado: 'Perfil compatível com necessidade de suporte atencional.',
  conclusao: 'Indicado acompanhamento multidisciplinar.',
  status: 'CONCLUIDA',
  criadoEm: ISODate('2026-06-01T09:00:00.000Z'),
  atualizadoEm: ISODate('2026-06-01T09:45:00.000Z')
}
*/

// ======================================================
// 13. CONSULTA: PRESCRIÇÕES EMITIDAS POR PROFISSIONAL
// ======================================================
// Buscar prescrições e planos de suporte emitidos pela Dra. Glória Pires

dbNeuro.prescricoes.find({
  "profissionalId": "6acb963a9b47f86c598630f1"
});

 /* Resultados Retornados(1 Documento)

 {
  _id: ObjectId('6ad78a009d17b0cfc7037601'),
  pacienteId: '6acb977e9b47f86c598630fa',
  profissionalId: '6acb963a9b47f86c598630f1',
  conteudo: 'Plano de suporte vitamínico e higiene do sono para auxílio cognitivo.',
  criadaEm: ISODate('2026-06-01T09:30:00.000Z'),
  atualizadaEm: ISODate('2026-06-01T09:30:00.000Z'),
  medicamentos: [
    {
      medicamento: 'Ômega 3 DHA Infantil',
      dosagem: '500mg',
      posologia: '1 cápsula após o almoço',
      frequencia: '1x ao dia',
      duracao: '90 dias'
    }
  ],
  historico: []
}

*/

// ======================================================
// 14. CONSULTA: DOCUMENTOS CLÍNICOS ATIVOS (LAUDOS DE MÚLTIPLOS PACIENTES)
// ======================================================
// Listar laudos clínicos ativos vinculados a 9 pacientes atendidos na clínica

dbNeuro.documentos_clinicos.find({
  "pacienteId": {
    "$in": [
      "6acb977e9b47f86c598630fa", // Enzo Gabriel
      "6acb977e9b47f86c598630fb", // Valentina Souza
      "6acb977e9b47f86c598630fc", // Arthur Lima
      "6acb977e9b47f86c598630fd", // Maria Alice
      "6acb977e9b47f86c598630fe", // João Miguel
      "6acb977e9b47f86c598630ff", // Laura Rocha
      "6acb977e9b47f86c59863100", // Pedro Henrique
      "6acb977e9b47f86c59863101", // Sophia Mendes
      "6acb977e9b47f86c59863102"  // Heitor Alves
    ]
  },
  "secao": "LAUDOS",
  "ativo": true
}).toArray();


/* Resultados Retornados (9 Documentos)

[
  {
    _id: ObjectId('6ad789009d17b0cfc7037501'),
    pacienteId: '6acb977e9b47f86c598630fa',
    profissionalId: '6acb963a9b47f86c598630f1',
    secao: 'LAUDOS',
    titulo: 'Laudo Psicológico Inicial - Enzo Gabriel',
    dataSessao: 2026-06-01T09:00:00.000Z,
    tipoAtendimento: 'Avaliação Psicológica',
    conteudo: 'Paciente demonstra boa interação verbal, porém apresenta oscilação atencional sustentada.',
    criadoEm: 2026-06-01T10:00:00.000Z,
    atualizadoEm: 2026-06-01T10:00:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_enzo_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },

 {
    _id: ObjectId('6ad789009d17b0cfc7037502'),
    pacienteId: '6acb977e9b47f86c598630fb',
    profissionalId: '6acb963a9b47f86c598630eb',
    secao: 'LAUDOS',
    titulo: 'Laudo Psicopedagógico - Valentina Souza',
    dataSessao: 2026-06-02T10:30:00.000Z,
    tipoAtendimento: 'Avaliação Psicopedagógica',
    conteudo: 'Apresenta dificuldade na decodificação fonêmica inicial, com boa memória visual e engajamento.',
    criadoEm: 2026-06-02T11:30:00.000Z,
    atualizadoEm: 2026-06-02T11:30:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_valentina_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },

{
    _id: ObjectId('6ad789009d17b0cfc7037503'),
    pacienteId: '6acb977e9b47f86c598630fc',
    profissionalId: '6acb963a9b47f86c598630ea',
    secao: 'LAUDOS',
    titulo: 'Laudo de Funções Executivas - Arthur Lima',
    dataSessao: 2026-06-03T14:00:00.000Z,
    tipoAtendimento: 'Avaliação Psicopedagógica',
    conteudo: 'Bom raciocínio lógico-matemático; necessita de suporte estruturado para planejamento e organização de rotina.',
    criadoEm: 2026-06-03T15:00:00.000Z,
    atualizadoEm: 2026-06-03T15:00:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_arthur_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },


   {
    _id: ObjectId('6ad789009d17b0cfc7037504'),
    pacienteId: '6acb977e9b47f86c598630fd',
    profissionalId: '6acb963a9b47f86c598630f7',
    secao: 'LAUDOS',
    titulo: 'Laudo Fonoaudiológico - Maria Alice',
    dataSessao: 2026-06-04T09:00:00.000Z,
    tipoAtendimento: 'Avaliação Fonoaudiológica',
    conteudo: 'Trocas fonêmicas esperadas para a faixa etária em fase de superação; compreensão auditiva preservada.',
    criadoEm: 2026-06-04T10:00:00.000Z,
    atualizadoEm: 2026-06-04T10:00:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_maria_alice_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },

  
{
    _id: ObjectId('6ad789009d17b0cfc7037505'),
    pacienteId: '6acb977e9b47f86c598630fe',
    profissionalId: '6acb963a9b47f86c598630f6',
    secao: 'LAUDOS',
    titulo: 'Laudo Psicológico Comportamental - João Miguel',
    dataSessao: 2026-06-05T15:00:00.000Z,
    tipoAtendimento: 'Avaliação Psicológica',
    conteudo: 'Apresenta ansiedade situacional em ambiente escolar com boa resposta a estratégias cognitivo-comportamentais.',
    criadoEm: 2026-06-05T16:00:00.000Z,
    atualizadoEm: 2026-06-05T16:00:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_joao_miguel_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },


  {
    _id: ObjectId('6ad789009d17b0cfc7037506'),
    pacienteId: '6acb977e9b47f86c598630ff',
    profissionalId: '6acb963a9b47f86c598630f5',
    secao: 'LAUDOS',
    titulo: 'Laudo Neuropsicológico - Laura Rocha',
    dataSessao: 2026-06-06T08:30:00.000Z,
    tipoAtendimento: 'Avaliação Neuropsicológica',
    conteudo: 'Perfil cognitivo dentro da média esperada, com destaque positivo em memória verbal e visuoconstrução.',
    criadoEm: 2026-06-06T09:30:00.000Z,
    atualizadoEm: 2026-06-06T09:30:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_laura_rocha_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },

   {
    _id: ObjectId('6ad789009d17b0cfc7037507'),
    pacienteId: '6acb977e9b47f86c59863100',
    profissionalId: '6acb963a9b47f86c598630f4',
    secao: 'LAUDOS',
    titulo: 'Laudo Clínico de Acompanhamento - Pedro Henrique',
    dataSessao: 2026-06-08T10:00:00.000Z,
    tipoAtendimento: 'Avaliação Psicológica',
    conteudo: 'Evolução consistente nas habilidades socioemocionais e autorregulação em atividades em grupo.',
    criadoEm: 2026-06-08T11:00:00.000Z,
    atualizadoEm: 2026-06-08T11:00:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_pedro_henrique_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },

  {
    _id: ObjectId('6ad789009d17b0cfc7037508'),
    pacienteId: '6acb977e9b47f86c59863101',
    profissionalId: '6acb963a9b47f86c598630f5',
    secao: 'LAUDOS',
    titulo: 'Laudo Neuropsicológico Infantil - Sophia Mendes',
    dataSessao: 2026-06-09T14:00:00.000Z,
    tipoAtendimento: 'Avaliação Neuropsicológica',
    conteudo: 'Necessidade de adaptação pedagógica com estímulos visuais para potencializar atenção seletiva.',
    criadoEm: 2026-06-09T15:00:00.000Z,
    atualizadoEm: 2026-06-09T15:00:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_sophia_mendes_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  },

   {
    _id: ObjectId('6ad789009d17b0cfc7037509'),
    pacienteId: '6acb977e9b47f86c59863102',
    profissionalId: '6acb963a9b47f86c598630f1',
    secao: 'LAUDOS',
    titulo: 'Laudo Psicológico Inicial - Heitor Alves',
    dataSessao: 2026-06-10T09:30:00.000Z,
    tipoAtendimento: 'Avaliação Psicológica',
    conteudo: 'Boa comunicação receptiva; recomendado acompanhamento interdisciplinar semanal.',
    criadoEm: 2026-06-10T10:30:00.000Z,
    atualizadoEm: 2026-06-10T10:30:00.000Z,
    ativo: true,
    arquivadoEm: null,
    anexos: [
      {
        nome: 'laudo_heitor_alves_assinado.pdf',
        conteudoBase64: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoK',
        tipoMime: 'application/pdf'
      }
    ]
  }
]

*/

// ======================================================
// 15. CONSULTA: SALAS ATIVAS POR UNIDADE DE ATENDIMENTO
// ======================================================
// Listar consultórios e salas ativas da unidade principal (Asa Sul)

dbNeuro.salas.find({
  "unidadeId": "6ad790009d17b0cfc7037901",
  "ativo": true
});


/* Resultados Retornados(2 Documentos)

{
  _id: ObjectId('6ad790009d17b0cfc7037911'),
  unidadeId: '6ad790009d17b0cfc7037901',
  nome: 'Consultório 1 - Ludoterapia',
  descricao: 'Sala equipada com recursos lúdicos e integração sensorial',
  ativo: true,
  criadoEm: ISODate('2026-01-02T08:30:00.000Z'),
  atualizadoEm: ISODate('2026-01-02T08:30:00.000Z')
}

{
  _id: ObjectId('6ad790009d17b0cfc7037912'),
  unidadeId: '6ad790009d17b0cfc7037901',
  nome: 'Consultório 2 - Avaliação Neurocognitiva',
  descricao: 'Sala acústica para aplicação de testes neuropsicológicos',
  ativo: true,
  criadoEm: ISODate('2026-01-02T08:35:00.000Z'),
  atualizadoEm: ISODate('2026-01-02T08:35:00.000Z')
}

*/

// ======================================================
// 16. CONSULTA: AUDITORIA DE EVENTOS ADMINISTRATIVOS
// ======================================================
// Rastrear logs de auditoria referentes ao cadastro de novos usuários

dbNeuro.auditoria_eventos.find({
  "acao": "CRIACAO_USUARIO",
  "perfil": "ADMINISTRADOR"
});

/* Resultado Retornados(1 Documento)

{

  _id: ObjectId('6ad78f509d17b0cfc7037881'),
  usuarioId: '670da2000000000000000001',
  perfil: 'ADMINISTRADOR',
  acao: 'CRIACAO_USUARIO',
  recurso: 'usuarios',
  recursoId: '670da2000000000000000030',
  pacienteId: null,
  descricao: 'Cadastro de novo profissional Dr. Carlos Eduardo no sistema.',
  camposAlterados: [
    {
      campo: 'perfil',
      tipoAlteracao: 'INSERIDO'
    },
    {
      campo: 'ativo',
      tipoAlteracao: 'INSERIDO'
    }
  ],
  dataHora: ISODate('2026-05-01T14:20:00.000Z'),
  ip: '187.54.120.10',
  requestId: 'req-99887766'
} 

*/












