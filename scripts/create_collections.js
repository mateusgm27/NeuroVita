// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de criação das collections (Branch: produto-final)
// Ambiente de Produção Final - Estrutura pronta para consolidação dos dados reais
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// Criando todas as 13 coleções do sistema
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

print("Estrutura do Produto Final do banco Neurovita criada com sucesso! Coleções prontas para produção.");



