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

// ======================================================
// 2. CONSULTA: PACIENTES COM PLANO UNIMED
// ======================================================
// Listar pacientes que possuem plano de saúde cadastrado da Unimed

dbNeuro.pacientes.find({
  "possuiPlanoSaude": true,
  "planoSaude": "Unimed"
});

// ======================================================
// 3. CONSULTA: CONSULTAS CONFIRMADAS DE UM PACIENTE
// ======================================================
// Buscar todas as consultas com status CONFIRMADA para o paciente Enzo Gabriel

dbNeuro.consultas.find({
  "pacienteId": "6acb977e9b47f86c598630fa",
  "status": "CONFIRMADA"
});

// ======================================================
// 4. CONSULTA: PROFISSIONAIS PSICÓLOGOS ONLINE
// ======================================================
// Filtrar profissionais da categoria Psicólogo que realizam atendimento online

dbNeuro.profissionais.find({
  "categoria": "Psicólogo",
  "atendeOnline": true
});

// ======================================================
// 5. CONSULTA: EXAMES COM RESULTADO DE TDAH
// ======================================================
// Buscar exames cujo parecer de resultado contenha o termo TDAH (case-insensitive)

dbNeuro.exames.find({
  "resultado": { "$regex": "TDAH", "$options": "i" }
});

// ======================================================
// 6. CONSULTA: DISPONIBILIDADE NA TERÇA DE MANHÃ
// ======================================================
// Listar horários de atendimento ativos cadastrados para a Terça-feira no período matutino

dbNeuro.disponibilidade.find({
  "diaSemana": "TERCA_FEIRA",
  "periodo": "MANHA",
  "ativo": true
});

// ======================================================
// 7. CONSULTA: PRONTUÁRIOS RECENTES
// ======================================================
// Listar prontuários médicos/terapêuticos criados a partir de 01/06/2026

dbNeuro.prontuarios.find({
  "criadoEm": { "$gte": ISODate("2026-06-01T00:00:00.000Z") }
});

// ======================================================
// 8. CONSULTA: VÍNCULO FAMILIAR DO PACIENTE
// ======================================================
// Identificar o responsável cadastrado com grau de parentesco 'Pai' para um paciente

dbNeuro.vinculosResponsaveis.find({
  "pacienteId": "6acb977e9b47f86c598630fa",
  "grauParentesco": "Pai"
});

// ======================================================
// 9. CONSULTA: TRATAMENTOS DE LONGA DURAÇÃO
// ======================================================
// Listar planos de tratamento prescritos com duração de 6 ou 12 meses

dbNeuro.tratamentos.find({
  "duracao": { "$in": ["6 meses", "12 meses"] }
});

// ======================================================
// 10. CONSULTA: DIAGNÓSTICOS EMITIDOS POR PROFISSIONAL
// ======================================================
// Buscar todos os diagnósticos (CID-11) laudados por um profissional específico

dbNeuro.diagnosticos.find({
  "profissionalId": "6acb963a9b47f86c598630f1"
});
