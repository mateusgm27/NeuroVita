// ======================================================
// NEUROVITA - Banco de Dados MongoDB
// Script de criação das 24 collections, validators ($jsonSchema) e índices
// Projeto ADS
// ======================================================

const dbNeuro = db.getSiblingDB("Neurovita");

// ======================================================
// 1. COLLECTION: USUARIOS
// ======================================================
dbNeuro.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "email", "senha", "perfil", "senhaProvisoria", "ativo", "entidadeId"],
      properties: {
        nome: { bsonType: "string" },
        email: { bsonType: "string" },
        senha: { bsonType: "string" },
        perfil: { bsonType: "string" },
        senhaProvisoria: { bsonType: "bool" },
        ativo: { bsonType: "bool" },
        entidadeId: { bsonType: "string" },
        senhaAlteradaEm: { bsonType: ["date", "null"] },
        tokenVersion: { bsonType: ["long", "null"] }
      }
    }
  }
});
dbNeuro.usuarios.createIndex({ email: 1 }, { unique: true, collation: { locale: "pt", strength: 2 } });
dbNeuro.usuarios.createIndex({ entidadeId: 1 });

// ======================================================
// 2. COLLECTION: ADMINISTRADORES
// ======================================================
dbNeuro.createCollection("administradores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "email", "perfil", "criadoEm"],
      properties: {
        nome: { bsonType: "string" },
        email: { bsonType: "string" },
        perfil: { bsonType: "string" },
        cpf: { bsonType: ["string", "null"] },
        telefone: { bsonType: ["string", "null"] },
        criadoEm: { bsonType: "date" }
      }
    }
  }
});

// ======================================================
// 3. COLLECTION: SECRETARIAS
// ======================================================
dbNeuro.createCollection("secretarias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "email"],
      properties: {
        nome: { bsonType: "string" },
        email: { bsonType: "string" },
        telefone: { bsonType: ["string", "null"] },
        emailContato: { bsonType: ["string", "null"] },
        dataNascimento: { bsonType: ["date", "null"] },
        cpf: { bsonType: ["string", "null"] },
        endereco: { bsonType: ["string", "null"] },
        cep: { bsonType: ["string", "null"] },
        cidade: { bsonType: ["string", "null"] },
        cargo: { bsonType: ["string", "null"] },
        admissao: { bsonType: ["date", "null"] },
        ativo: { bsonType: ["bool", "null"] }
      }
    }
  }
});

// ======================================================
// 4. COLLECTION: PACIENTES
// ======================================================
dbNeuro.createCollection("pacientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "dataNascimento", "ativo"],
      properties: {
        nome: { bsonType: "string" },
        dataNascimento: { bsonType: "date" },
        email: { bsonType: ["string", "null"] },
        cpf: { bsonType: ["string", "null"] },
        telefone: { bsonType: ["string", "null"] },
        endereco: { bsonType: ["string", "null"] },
        cep: { bsonType: ["string", "null"] },
        cidade: { bsonType: ["string", "null"] },
        ativo: { bsonType: "bool" },
        possuiPlanoSaude: { bsonType: ["bool", "null"] },
        planoSaude: { bsonType: ["string", "null"] },
        numeroCarteirinha: { bsonType: ["string", "null"] },
        validadePlano: { bsonType: ["date", "null"] }
      }
    }
  }
});

// ======================================================
// 5. COLLECTION: RESPONSAVEIS
// ======================================================
dbNeuro.createCollection("responsaveis", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome"],
      properties: {
        nome: { bsonType: "string" },
        cpf: { bsonType: ["string", "null"] },
        email: { bsonType: ["string", "null"] },
        telefone: { bsonType: ["string", "null"] },
        dataNascimento: { bsonType: ["date", "null"] },
        endereco: { bsonType: ["string", "null"] }
      }
    }
  }
});

// ======================================================
// 6. COLLECTION: VINCULOSRESPONSAVEIS
// ======================================================
dbNeuro.createCollection("vinculosResponsaveis", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "responsavelId", "grauParentesco"],
      properties: {
        pacienteId: { bsonType: "string" },
        responsavelId: { bsonType: "string" },
        grauParentesco: { bsonType: "string" }
      }
    }
  }
});
dbNeuro.vinculosResponsaveis.createIndex({ pacienteId: 1, responsavelId: 1 }, { unique: true });
dbNeuro.vinculosResponsaveis.createIndex({ responsavelId: 1 });

// ======================================================
// 7. COLLECTION: PROFISSIONAIS
// ======================================================
dbNeuro.createCollection("profissionais", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "email", "categoria", "atendePresencial", "ativo"],
      properties: {
        nome: { bsonType: "string" },
        email: { bsonType: "string" },
        emailContato: { bsonType: ["string", "null"] },
        dataNascimento: { bsonType: ["date", "null"] },
        cpf: { bsonType: ["string", "null"] },
        telefone: { bsonType: ["string", "null"] },
        categoria: { bsonType: "string" },
        formacaoAcademica: { bsonType: ["string", "null"] },
        numeroRegistro: { bsonType: ["string", "null"] },
        anoConclusao: { bsonType: ["int", "null"] },
        atendeOnline: { bsonType: ["bool", "null"] },
        atendePresencial: { bsonType: "bool" },
        ativo: { bsonType: "bool" },
        disponibilidadeIds: {
          bsonType: ["array", "null"],
          items: { bsonType: "string" }
        }
      }
    }
  }
});
dbNeuro.profissionais.createIndex({ disponibilidadeIds: 1 });

// ======================================================
// 8. COLLECTION: VINCULOS_PROFISSIONAL_PACIENTE
// ======================================================
dbNeuro.createCollection("vinculos_profissional_paciente", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "iniciadoEm"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        iniciadoEm: { bsonType: "date" },
        iniciadoPor: { bsonType: ["string", "null"] },
        encerradoEm: { bsonType: ["date", "null"] },
        encerradoPor: { bsonType: ["string", "null"] }
      }
    }
  }
});
dbNeuro.vinculos_profissional_paciente.createIndex({ pacienteId: 1, encerradoEm: 1, iniciadoEm: 1 });
dbNeuro.vinculos_profissional_paciente.createIndex({ profissionalId: 1, encerradoEm: 1 });

// ======================================================
// 9. COLLECTION: DISPONIBILIDADES
// ======================================================
dbNeuro.createCollection("disponibilidades", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["diaSemana", "horaInicio", "horaFim", "ativo"],
      properties: {
        diaSemana: { bsonType: "string" },
        horaInicio: { bsonType: "date" },
        horaFim: { bsonType: "date" },
        ativo: { bsonType: "bool" }
      }
    }
  }
});

// ======================================================
// 10. COLLECTION: CONSULTAS
// ======================================================
dbNeuro.createCollection("consultas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "dataHora", "tipoAtendimento", "local", "modalidade", "duracao", "status"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        dataHora: { bsonType: "date" },
        tipoAtendimento: { bsonType: "string" },
        local: { bsonType: "string" },
        modalidade: { bsonType: "string" },
        duracao: { bsonType: "int" },
        status: { bsonType: "string" },
        historico: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              profissionalId: { bsonType: "string" },
              dataHora: { bsonType: "date" },
              tipoAtendimento: { bsonType: "string" },
              local: { bsonType: "string" },
              modalidade: { bsonType: "string" },
              duracao: { bsonType: "int" },
              status: { bsonType: "string" },
              alteradaPor: { bsonType: "string" },
              alteradaEm: { bsonType: "date" }
            }
          }
        },
        unidadeId: { bsonType: ["string", "null"] },
        salaId: { bsonType: ["string", "null"] }
      }
    }
  }
});
dbNeuro.consultas.createIndex({ profissionalId: 1, dataHora: 1 });
dbNeuro.consultas.createIndex({ pacienteId: 1, dataHora: 1 });
dbNeuro.consultas.createIndex({ dataHora: 1 });

// ======================================================
// 11. COLLECTION: PRONTUARIOS
// ======================================================
dbNeuro.createCollection("prontuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "criadoEm", "atualizadoEm"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        consultaId: { bsonType: ["string", "null"] },
        queixaPrincipal: { bsonType: ["string", "null"] },
        avaliacao: { bsonType: ["string", "null"] },
        planoTratamento: { bsonType: ["string", "null"] },
        prescricao: { bsonType: ["string", "null"] },
        criadoEm: { bsonType: "date" },
        atualizadoEm: { bsonType: "date" }
      }
    }
  }
});
dbNeuro.prontuarios.createIndex({ pacienteId: 1 }, { unique: true });

// ======================================================
// 12. COLLECTION: DOCUMENTOS_CLINICOS
// ======================================================
dbNeuro.createCollection("documentos_clinicos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "secao", "titulo", "dataSessao", "tipoAtendimento", "conteudo", "criadoEm", "atualizadoEm", "ativo"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        secao: { bsonType: "string" },
        titulo: { bsonType: "string" },
        dataSessao: { bsonType: "date" },
        tipoAtendimento: { bsonType: "string" },
        conteudo: { bsonType: "string" },
        criadoEm: { bsonType: "date" },
        atualizadoEm: { bsonType: "date" },
        ativo: { bsonType: "bool" },
        arquivadoEm: { bsonType: ["date", "null"] },
        anexos: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              nome: { bsonType: "string" },
              conteudoBase64: { bsonType: "string" },
              tipoMime: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});
dbNeuro.documentos_clinicos.createIndex({ pacienteId: 1, dataSessao: 1 });
dbNeuro.documentos_clinicos.createIndex({ pacienteId: 1, secao: 1, dataSessao: 1 });
dbNeuro.documentos_clinicos.createIndex({ profissionalId: 1, dataSessao: 1 });

// ======================================================
// 13. COLLECTION: DIAGNOSTICOS
// ======================================================
dbNeuro.createCollection("diagnosticos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "descricao", "ativo"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        descricao: { bsonType: "string" },
        cid: { bsonType: ["string", "null"] },
        ativo: { bsonType: "bool" },
        arquivadoEm: { bsonType: ["date", "null"] }
      }
    }
  }
});
dbNeuro.diagnosticos.createIndex({ pacienteId: 1 });

// ======================================================
// 14. COLLECTION: TRATAMENTOS
// ======================================================
dbNeuro.createCollection("tratamentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "descricao", "ativo"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        descricao: { bsonType: "string" },
        objetivo: { bsonType: ["string", "null"] },
        frequencia: { bsonType: ["string", "null"] },
        duracao: { bsonType: ["string", "null"] },
        observacoes: { bsonType: ["string", "null"] },
        ativo: { bsonType: "bool" },
        arquivadoEm: { bsonType: ["date", "null"] }
      }
    }
  }
});
dbNeuro.tratamentos.createIndex({ pacienteId: 1 });

// ======================================================
// 15. COLLECTION: EXAMES
// ======================================================
dbNeuro.createCollection("exames", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "nome", "ativo"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        nome: { bsonType: "string" },
        tipo: { bsonType: ["string", "null"] },
        dataRealizacao: { bsonType: ["date", "null"] },
        resultado: { bsonType: ["string", "null"] },
        observacoes: { bsonType: ["string", "null"] },
        solicitadoEm: { bsonType: ["date", "null"] },
        criadoEm: { bsonType: ["date", "null"] },
        resultadoAtualizadoEm: { bsonType: ["date", "null"] },
        anexosResultado: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              nome: { bsonType: "string" },
              conteudoBase64: { bsonType: "string" },
              tipoMime: { bsonType: "string" }
            }
          }
        },
        historicoResultados: {
          bsonType: ["array", "null"],
          items: { bsonType: "object" }
        },
        ativo: { bsonType: "bool" },
        arquivadoEm: { bsonType: ["date", "null"] },
        descricaoSolicitacao: { bsonType: ["string", "null"] }
      }
    }
  }
});
dbNeuro.exames.createIndex({ pacienteId: 1, solicitadoEm: 1 });

// ======================================================
// 16. COLLECTION: PRESCRICOES
// ======================================================
dbNeuro.createCollection("prescricoes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "conteudo", "criadaEm", "atualizadaEm"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        conteudo: { bsonType: "string" },
        criadaEm: { bsonType: "date" },
        atualizadaEm: { bsonType: "date" },
        medicamentos: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              medicamento: { bsonType: "string" },
              dosagem: { bsonType: "string" },
              posologia: { bsonType: "string" },
              frequencia: { bsonType: "string" },
              duracao: { bsonType: "string" }
            }
          }
        },
        historico: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              conteudo: { bsonType: "string" },
              medicamentos: { bsonType: "array" },
              atualizadaEm: { bsonType: "date" },
              registradaEm: { bsonType: "date" },
              registradaPor: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});
dbNeuro.prescricoes.createIndex({ pacienteId: 1, criadaEm: 1 });
dbNeuro.prescricoes.createIndex({ profissionalId: 1, criadaEm: 1 });

// ======================================================
// 17. COLLECTION: PREFERENCIAS_USUARIOS
// ======================================================
dbNeuro.createCollection("preferencias_usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email"],
      properties: {
        email: { bsonType: "string" },
        lembretesConsultaEmail: { bsonType: ["bool", "null"] },
        alertasConsultasPendentes: { bsonType: ["bool", "null"] },
        notificacoesSistema: { bsonType: ["bool", "null"] },
        tema: { bsonType: ["string", "null"] },
        idioma: { bsonType: ["string", "null"] },
        formatoData: { bsonType: ["string", "null"] },
        duracaoPadraoConsulta: { bsonType: ["int", "null"] },
        inicioSemana: { bsonType: ["string", "null"] },
        atualizadaEm: { bsonType: ["date", "null"] }
      }
    }
  }
});
dbNeuro.preferencias_usuarios.createIndex({ email: 1 }, { unique: true });

// ======================================================
// 18. COLLECTION: RECUPERACOES_SENHA
// ======================================================
dbNeuro.createCollection("recuperacoes_senha", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "codigoHash", "expiraEm", "tentativas"],
      properties: {
        email: { bsonType: "string" },
        codigoHash: { bsonType: "string" },
        tokenHash: { bsonType: ["string", "null"] },
        expiraEm: { bsonType: "date" },
        tentativas: { bsonType: "int" }
      }
    }
  }
});

// ======================================================
// 19. COLLECTION: EVOLUCOES
// ======================================================
dbNeuro.createCollection("evolucoes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "tipoEvolucao", "titulo", "dataAtendimento", "conteudo", "status", "criadoEm", "atualizadoEm", "versao"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        consultaId: { bsonType: ["string", "null"] },
        tipoEvolucao: { bsonType: "string" },
        areaAtendimento: { bsonType: ["string", "null"] },
        titulo: { bsonType: "string" },
        dataAtendimento: { bsonType: "date" },
        conteudo: { bsonType: "string" },
        status: { bsonType: "string" },
        criadoEm: { bsonType: "date" },
        atualizadoEm: { bsonType: "date" },
        versao: { bsonType: "int" },
        prontuarioId: { bsonType: ["string", "null"] },
        objetivosTrabalhados: {
          bsonType: ["array", "null"],
          items: { bsonType: "string" }
        },
        observacoes: { bsonType: ["string", "null"] },
        conduta: { bsonType: ["string", "null"] },
        encaminhamentos: {
          bsonType: ["array", "null"],
          items: { bsonType: "string" }
        },
        retificadaPorId: { bsonType: ["string", "null"] },
        motivoRetificacao: { bsonType: ["string", "null"] }
      }
    }
  }
});
dbNeuro.evolucoes.createIndex({ pacienteId: 1, dataAtendimento: 1 });
dbNeuro.evolucoes.createIndex({ profissionalId: 1, dataAtendimento: 1 });

// ======================================================
// 20. COLLECTION: AVALIACOES_CLINICAS (Preparação MVP)
// ======================================================
dbNeuro.createCollection("avaliacoes_clinicas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "profissionalId", "tipoAvaliacao", "titulo", "dataInicio", "status", "criadoEm", "atualizadoEm"],
      properties: {
        pacienteId: { bsonType: "string" },
        profissionalId: { bsonType: "string" },
        consultaId: { bsonType: ["string", "null"] },
        tipoAvaliacao: { bsonType: "string" },
        especialidade: { bsonType: ["string", "null"] },
        titulo: { bsonType: "string" },
        dataInicio: { bsonType: "date" },
        dataConclusao: { bsonType: ["date", "null"] },
        objetivo: { bsonType: ["string", "null"] },
        secoes: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              identificador: { bsonType: "string" },
              titulo: { bsonType: "string" },
              descricao: { bsonType: "string" },
              conteudo: { bsonType: "string" },
              ordem: { bsonType: "int" }
            }
          }
        },
        resultado: { bsonType: ["string", "null"] },
        conclusao: { bsonType: ["string", "null"] },
        status: { bsonType: "string" },
        criadoEm: { bsonType: "date" },
        atualizadoEm: { bsonType: "date" }
      }
    }
  }
});
dbNeuro.avaliacoes_clinicas.createIndex({ pacienteId: 1, criadoEm: 1 });
dbNeuro.avaliacoes_clinicas.createIndex({ profissionalId: 1, dataInicio: 1 });

// ======================================================
// 21. COLLECTION: ARQUIVOS_CLINICOS (Preparação MVP)
// ======================================================
dbNeuro.createCollection("arquivos_clinicos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteId", "nomeOriginal", "nomeArmazenado", "tipoMime", "tamanhoBytes", "storageProvider", "storageKey", "hashSha256", "enviadoPor", "enviadoEm", "ativo"],
      properties: {
        pacienteId: { bsonType: "string" },
        documentoId: { bsonType: ["string", "null"] },
        exameId: { bsonType: ["string", "null"] },
        evolucaoId: { bsonType: ["string", "null"] },
        avaliacaoId: { bsonType: ["string", "null"] },
        nomeOriginal: { bsonType: "string" },
        nomeArmazenado: { bsonType: "string" },
        tipoMime: { bsonType: "string" },
        extensao: { bsonType: ["string", "null"] },
        tamanhoBytes: { bsonType: "long" },
        storageProvider: { bsonType: "string" },
        storageKey: { bsonType: "string" },
        hashSha256: { bsonType: "string" },
        enviadoPor: { bsonType: "string" },
        enviadoEm: { bsonType: "date" },
        ativo: { bsonType: "bool" }
      }
    }
  }
});
dbNeuro.arquivos_clinicos.createIndex({ pacienteId: 1, enviadoEm: 1 });

// ======================================================
// 22. COLLECTION: AUDITORIA_EVENTOS (Preparação MVP)
// ======================================================
dbNeuro.createCollection("auditoria_eventos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuarioId", "perfil", "acao", "recurso", "dataHora"],
      properties: {
        usuarioId: { bsonType: "string" },
        perfil: { bsonType: "string" },
        acao: { bsonType: "string" },
        recurso: { bsonType: "string" },
        recursoId: { bsonType: ["string", "null"] },
        pacienteId: { bsonType: ["string", "null"] },
        descricao: { bsonType: ["string", "null"] },
        camposAlterados: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              campo: { bsonType: "string" },
              tipoAlteracao: { bsonType: "string" }
            }
          }
        },
        dataHora: { bsonType: "date" },
        ip: { bsonType: ["string", "null"] },
        requestId: { bsonType: ["string", "null"] }
      }
    }
  }
});
dbNeuro.auditoria_eventos.createIndex({ usuarioId: 1, dataHora: 1 });
dbNeuro.auditoria_eventos.createIndex({ pacienteId: 1, dataHora: 1 });

// ======================================================
// 23. COLLECTION: UNIDADES_ATENDIMENTO (Preparação MVP)
// ======================================================
dbNeuro.createCollection("unidades_atendimento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "ativo", "criadoEm", "atualizadoEm"],
      properties: {
        nome: { bsonType: "string" },
        descricao: { bsonType: ["string", "null"] },
        endereco: {
          bsonType: ["object", "null"],
          properties: {
            logradouro: { bsonType: "string" },
            numero: { bsonType: "string" },
            complemento: { bsonType: "string" },
            bairro: { bsonType: "string" },
            cidade: { bsonType: "string" },
            estado: { bsonType: "string" },
            cep: { bsonType: "string" },
            pais: { bsonType: "string" }
          }
        },
        telefone: { bsonType: ["string", "null"] },
        email: { bsonType: ["string", "null"] },
        ativo: { bsonType: "bool" },
        criadoEm: { bsonType: "date" },
        atualizadoEm: { bsonType: "date" }
      }
    }
  }
});
dbNeuro.unidades_atendimento.createIndex({ nome: 1 });

// ======================================================
// 24. COLLECTION: SALAS (Preparação MVP)
// ======================================================
dbNeuro.createCollection("salas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["unidadeId", "nome", "ativo", "criadoEm", "atualizadoEm"],
      properties: {
        unidadeId: { bsonType: "string" },
        nome: { bsonType: "string" },
        descricao: { bsonType: ["string", "null"] },
        ativo: { bsonType: "bool" },
        criadoEm: { bsonType: "date" },
        atualizadoEm: { bsonType: "date" }
      }
    }
  }
});
dbNeuro.salas.createIndex({ unidadeId: 1, nome: 1 });




