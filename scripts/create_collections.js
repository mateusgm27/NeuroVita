// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de criação e estruturação das collections (Ambiente Limpo)
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// Criando todas as 13 coleções do sistema para receber dados
dbNeuro.createCollection("administradores");
dbNeuro.createCollection("usuarios");
dbNeuro.createCollection("secretarias");
dbNeuro.createCollection("pacientes");
dbNeuro.createCollection("responsaveis");
dbNeuro.createCollection("vinculosResponsaveis");
dbNeuro.createCollection("profissionais");
dbNeuro.createCollection("disponibilidades");
dbNeuro.createCollection("consultas");
dbNeuro.createCollection("prontuarios");
dbNeuro.createCollection("diagnosticos");
dbNeuro.createCollection("tratamentos");
dbNeuro.createCollection("exames");

print("Estrutura do banco Neurovita criada com sucesso! Coleções prontas para inserção de dados.");
