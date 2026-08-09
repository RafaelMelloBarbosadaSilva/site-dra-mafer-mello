# Mapeamento de conteudo do site

Data: 2026-08-02

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
| Briefing | Nome Dra. Maria Fernanda Mello | Header, SEO, footer e secao sobre | `index.html` | Nome publico padronizado como Dra. Maria Fernanda Mello |
| Briefing | Instagram da Dra. Maria Fernanda | Faixa social, secao sobre, contato e footer | `index.html` | `https://www.instagram.com/dra.mafermello/` |
| Briefing | Instagram da Clinica Amesse | Contato e footer | `index.html` | `https://www.instagram.com/clinica_amesse/` |
| Briefing | Posicionamento "Sua beleza com naturalidade" | Hero e rodape | `#inicio` | Mantido como conceito central |
| Projeto | WhatsApp `+55 35 99715-6033` | CTAs e formulario | `script.js` | Numero limpo automaticamente para `wa.me` |
| Briefing | Harmonizacao facial | Card de procedimento e CTA contextual | `#procedimentos` | Sem pagina individual porque nao ha conteudo real suficiente |
| Briefing | Preenchimento com acido hialuronico | Card de procedimento e CTA contextual | `#procedimentos` | Texto moderado, sem promessa de resultado |
| Briefing | Rinomodelacao sem cirurgia | Card de procedimento e CTA contextual | `#procedimentos` | Texto moderado, sem promessa de resultado |
| Briefing | Tratamentos personalizados | Card de planejamento estetico | `#procedimentos` | Conduz para avaliacao |
| Briefing | Biomedica, Master em Harmonizacao Facial e pos-graduada em Estetica Avancada e Cosmetologia | Secao sobre e SEO estruturado | `#sobre` | Numero do registro profissional ainda nao informado |
| Briefing | Clinica Amesse | Bloco de contato | `#contato` | Logo oficial inserida a partir do diretorio de fotos fornecido |
| Briefing | Coronel Nicolino Rossi, 25 - Centro, Ouro Fino - MG, 37570-000 | Contato e SEO estruturado | `#contato` | Endereco ligado ao Google Maps |
| Briefing | Horarios a combinar | Contato e secao sobre | `#sobre`, `#contato` | Informacao confirmada pelo usuario |

## Mapeamento de imagem atual

| Arquivo | Origem | Uso | Alt/descricao acessivel | Status |
| --- | --- | --- | --- | --- |
| `assets/maria-fernanda-mello/retratos/maria-fernanda-hero.jpg` | Arquivo autorizado fornecido pelo usuario | Hero visual e compartilhamento social | Retrato profissional da Dra. Maria Fernanda Mello | Em uso |
| `assets/maria-fernanda-mello/retratos/maria-fernanda-sobre.jpg` | Arquivo autorizado fornecido pelo usuario | Secao sobre | Dra. Maria Fernanda Mello, biomedica especializada em estetica | Em uso |
| `assets/maria-fernanda-mello/marca/logo-clinica-amesse.jpg` | Arquivo oficial indicado pelo usuario | Bloco da Clinica Amesse | Logo da Clinica Amesse - Estetica e Saude | Em uso; origem tem 150 x 150 px |

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

## Onde entrar novo conteudo depois

- Foto de atendimento real -> secao `#metodo` ou futura galeria da clinica.
- Foto de harmonizacao facial -> card/pagina de harmonizacao facial.
- Foto de preenchimento com acido hialuronico -> card/pagina de preenchimento.
- Foto de rinomodelacao -> card/pagina de rinomodelacao.
- Foto de curso, congresso ou certificado -> futura secao de autoridade.
- Foto de ambiente/clinica -> futura secao de ambiente ou contato.
- Resultado autorizado -> futura secao de resultados com aviso de variacao individual.
- Depoimentos autorizados -> futura secao de depoimentos ja preparada no HTML.

## Rotas

Nenhuma rota individual de procedimento foi criada nesta etapa.

Motivo: a arquitetura atual e estatica e nao ha conteudo real suficiente do Instagram para criar paginas individuais sem risco de inventar informacoes. A estrutura de cards foi preparada para futura expansao.

## Pendencias de confirmacao humana

- Informar numero do registro profissional e conselho aplicavel.
- Confirmar lista completa de procedimentos.
- Enviar depoimentos reais com autorizacao de publicacao.
- Enviar imagens de antes e depois com autorizacao de publicacao.
- Definir dominio e publicacao em etapa futura.
