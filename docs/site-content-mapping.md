# Mapeamento de conteudo do site

Data: 2026-07-12

## Estrutura atual do projeto

- Tecnologia: HTML, CSS e JavaScript estaticos.
- Pagina principal: `index.html`.
- Estilos: `styles.css`.
- Interacoes: `script.js`.
- Assets: `assets/`.
- Documentacao: `docs/`.

## Mapeamento de conteudo confirmado

| Origem | Conteudo confirmado | Uso no site | Arquivo/secao | Observacoes |
| --- | --- | --- | --- | --- |
| Briefing | Nome Dra. Maria Fernanda Mello | Header, SEO, footer, secao sobre | `index.html` | Nao foram adicionados registros ou credenciais |
| Briefing | Perfil `@dra.mafermello` | Link de Instagram e canal de referencia | Header, faixa social, footer | Sem embed para nao depender do Instagram em runtime |
| Briefing | Posicionamento "Sua beleza com naturalidade" | Hero e rodape | `#inicio` | Mantido como conceito central |
| Projeto | WhatsApp `+55 35 99715-6033` | CTAs e formulario | `script.js` | Numero limpo automaticamente para `wa.me` |
| Briefing | Harmonizacao facial | Card de procedimento e CTA contextual | `#procedimentos` | Sem pagina individual porque nao ha conteudo real suficiente |
| Briefing | Preenchimento com acido hialuronico | Card de procedimento e CTA contextual | `#procedimentos` | Texto moderado, sem promessa de resultado |
| Briefing | Rinomodelacao sem cirurgia | Card de procedimento e CTA contextual | `#procedimentos` | Texto moderado, sem promessa de resultado |
| Briefing | Tratamentos personalizados | Card de planejamento estetico | `#procedimentos` | Conduz para avaliacao |

## Mapeamento de imagem atual

| Arquivo | Origem | Uso | Alt/descricao acessivel | Status |
| --- | --- | --- | --- | --- |
| `assets/dra-mafer/instagram-originals/placeholder-clinica-estetica-original.png` | Imagem provisoria local gerada anteriormente no projeto | Preservacao do original | Nao usada diretamente no site | Provisorio, nao e imagem do Instagram |
| `assets/dra-mafer/institucional/placeholder-clinica-estetica.webp` | Versao WebP otimizada do placeholder local | Hero visual | Ambiente de atendimento estetico preparado para cuidado facial | Provisorio ate receber foto real autorizada |

## Conteudo removido ou suspenso

Itens removidos da interface publica por falta de confirmacao nesta auditoria:

- toxina botulinica;
- bioestimuladores;
- skinbooster;
- peelings;
- microagulhamento;
- limpeza de pele;
- protocolos corporais;
- cuidados capilares.

## Onde entrar o conteudo real do Instagram depois

- Melhor retrato profissional autorizado -> hero ou secao `#sobre`.
- Foto de atendimento real -> hero secundario ou secao `#metodo`.
- Foto de harmonizacao facial -> card/pagina de harmonizacao facial.
- Foto de preenchimento com acido hialuronico -> card/pagina de preenchimento.
- Foto de rinomodelacao -> card/pagina de rinomodelacao.
- Foto de curso, congresso ou certificado -> futura secao de autoridade.
- Foto de ambiente/clinica -> futura secao de ambiente ou contato.
- Resultado autorizado -> futura secao de resultados com aviso de variacao individual.

## Rotas

Nenhuma rota individual de procedimento foi criada nesta etapa.

Motivo: a arquitetura atual e estatica e nao ha conteudo real suficiente do Instagram para criar paginas individuais sem risco de inventar informacoes. A estrutura de cards foi preparada para futura expansao.

## Pendencias de confirmacao humana

- Exportar fotos e videos autorizados do Instagram.
- Confirmar formacao e registro profissional.
- Confirmar endereco, cidade, clinica e horarios.
- Confirmar lista completa de procedimentos.
- Confirmar se ha resultados autorizados para exibicao.
- Confirmar se o telefone `+55 35 99715-6033` deve permanecer como WhatsApp principal.

