// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de criação das collections (Branch: homologacao)
// Ambiente preparado para inserção de DADOS REAIS
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// Criando todas as 13 coleções limpas do sistema
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

print("Estrutura de Homologação do banco Neurovita criada com sucesso! Coleções prontas para receber os DADOS REAIS do cliente.");




