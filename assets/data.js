/* ==========================================================================
   EB Agro 2.0 — dados de exemplo e helpers do modelo "mesa assistida"
   (Janelas, Oportunidades, Clientes, Funis, Pré-venda, Radar, Integrações)
   Carregar depois de main.js. Piloto: regiões Sul, Baixada e Guaporé do MT.
   ========================================================================== */
(function () {
  'use strict';
  const I = window.EBIcons;

  /* ---------- Ícones extras ---------- */
  Object.assign(I, {
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5c3 0 5.5 1.6 5.5 4.5"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M12 3v9l6.4 6.4"/></svg>',
    funnel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/></svg>',
    plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0zM12 17v4"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5h.01"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/></svg>',
    window: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 20V9"/></svg>',
    handshake2: I.handshake,
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4H5a1 1 0 00-1 1v14a1 1 0 001 1h5M15 8l4 4-4 4M9 12h10"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  });

  /* ---------- Ciclo da Janela e status ---------- */
  window.EBCycle = [
    { k: 'pre-demanda',  l: 'Pré-demanda',  s: 'compradores mapeados' },
    { k: 'pre-abertura', l: 'Pré-abertura', s: 'checklist bloqueante' },
    { k: 'aberta',       l: 'Aberta',       s: '08h às 18h' },
    { k: 'fechamento',   l: 'Fechamento',   s: 'aceite assistido' },
    { k: 'pos-janela',   l: 'Pós-Janela',   s: 'Acertos EB · SLI' },
  ];

  const S = {
    'pre-demanda':  { l: 'Pré-demanda',       c: 'status--pre' },
    'pre-abertura': { l: 'Pré-abertura',      c: 'status--pre' },
    'aberta':       { l: 'Aberta · 08h–18h',  c: 'status--aberta' },
    'fechamento':   { l: 'Em fechamento',     c: 'status--info' },
    'pos-janela':   { l: 'Pós-Janela',        c: 'status--pos' },
    'fechada':      { l: 'Encerrada',         c: 'status--fechada' },
    // Catálogo de Oportunidades
    'ativa':        { l: 'Medindo interesse', c: 'status--ok' },
    'em-analise':   { l: 'Em análise EB Agro',c: 'status--warn' },
    'migrada':      { l: 'Migrou p/ Janela',  c: 'status--info' },
    'expirada':     { l: 'Expirada · 10 dias',c: 'status--fechada' },
    // Cadastro
    'inicial':      { l: 'Cadastro inicial',  c: 'status--neutral' },
    'pendente':     { l: 'Em validação',      c: 'status--warn' },
    'validado':     { l: 'Completo · validado', c: 'status--ok' },
    // Ofertas
    'enviada':      { l: 'Enviada',           c: 'status--info' },
    'em-conducao':  { l: 'Em condução',       c: 'status--warn' },
    'aceita':       { l: 'Aceita',            c: 'status--ok' },
    'recusada':     { l: 'Não aceita',        c: 'status--fechada' },
    // Integrações / exceções
    'ativo':        { l: 'Ativo',             c: 'status--ok' },
    'homologacao':  { l: 'Em homologação',    c: 'status--warn' },
    'aprovada':     { l: 'Aprovada',          c: 'status--ok' },
    'negada':       { l: 'Negada',            c: 'status--danger' },
  };
  window.EBStatusMap = S;
  window.EBStatus = function (k) { const s = S[k] || { l: k, c: 'status--neutral' }; return '<span class="status ' + s.c + '">' + s.l + '</span>'; };

  /* ---------- Checklist bloqueante de abertura ---------- */
  window.EBChecklistItems = [
    { t: 'Lote filmado',                         s: 'vídeo validado pela equipe de campo',            who: 'Campo' },
    { t: 'Lote pesado',                          s: 'pesagem com método e controle',                  who: 'Campo' },
    { t: 'Lote validado',                        s: 'critério e clareza — padrão EB Agro',            who: 'Comercial' },
    { t: 'Preço calibrado',                      s: 'referência do Radar + alinhamento com vendedor', who: 'Comercial' },
    { t: 'Compradores compatíveis mapeados',     s: 'mín. 10 com interesse real (Pré-venda)',         who: 'Pré-venda' },
    { t: 'Responsável definido',                 s: 'consultor que conduz a Janela',                  who: 'Gestão' },
    { t: 'Horário definido',                     s: 'abertura 08h · fechamento 18h',                  who: 'Gestão' },
  ];

  /* ---------- Janelas de Ofertas ---------- */
  window.EBJanelas = [
    { id: 'JAN-0924', lote: '0224', title: '30 Machos Nelore',           cat: 'Corte',    sexo: 'Macho', qty: 30, peso: '223,00', raca: 'Nelore',           loc: 'Rosário Oeste/MT',      regiao: 'Baixada', status: 'aberta',       data: '24/09/2026', precoRef: '16,50', melhor: '16,80', ofertas: 4, mapeados: 14, ativados: 9,  resp: 'Carlos M.', ck: [1,1,1,1,1,1,1] },
    { id: 'JAN-0925', lote: '0242', title: '25 Machos ½ Angus',          cat: 'Genética', sexo: 'Macho', qty: 25, peso: '341,00', raca: '½ Aberdeen Angus', loc: 'Cáceres/MT',            regiao: 'Baixada', status: 'pre-abertura', data: '25/09/2026', precoRef: '18,40', melhor: null,    ofertas: 0, mapeados: 11, ativados: 0,  resp: 'Ana P.',    ck: [1,1,1,1,0,1,1] },
    { id: 'JAN-0926', lote: '0248', title: '60 Fêmeas Nelore P.O',       cat: 'Genética', sexo: 'Fêmea', qty: 60, peso: '295,00', raca: 'Nelore P.O',       loc: 'Pontes e Lacerda/MT',   regiao: 'Guaporé', status: 'pre-demanda',  data: '26/09/2026', precoRef: '19,10', melhor: null,    ofertas: 0, mapeados: 6,  ativados: 0,  resp: 'Carlos M.', ck: [1,1,0,0,0,1,0] },
    { id: 'JAN-0919', lote: '0270', title: '80 Machos Cruz. Industrial', cat: 'Corte',    sexo: 'Macho', qty: 80, peso: '245,00', raca: 'Cruzamento Industrial', loc: 'Rondonópolis/MT',  regiao: 'Sul',     status: 'fechamento',   data: '19/09/2026', precoRef: '17,30', melhor: '17,45', ofertas: 6, mapeados: 16, ativados: 12, resp: 'Ana P.',    ck: [1,1,1,1,1,1,1] },
    { id: 'JAN-0917', lote: '0259', title: '40 Machos Brahmanel',        cat: 'Corte',    sexo: 'Macho', qty: 40, peso: '278,00', raca: 'Brahmanel',        loc: 'Jaciara/MT',            regiao: 'Sul',     status: 'pos-janela',   data: '17/09/2026', precoRef: '17,00', melhor: '17,10', ofertas: 5, mapeados: 13, ativados: 10, resp: 'Carlos M.', ck: [1,1,1,1,1,1,1], fechado: true, valorFechado: '17,10' },
    { id: 'JAN-0912', lote: '0237', title: '72 Machos Senepol',          cat: 'Corte',    sexo: 'Macho', qty: 72, peso: '265,00', raca: 'Senepol',          loc: 'Vila Bela/MT',          regiao: 'Guaporé', status: 'fechada',      data: '12/09/2026', precoRef: '17,80', melhor: '17,60', ofertas: 3, mapeados: 12, ativados: 8,  resp: 'Ana P.',    ck: [1,1,1,1,1,1,1], fechado: false, motivoPerda: 'Preço abaixo do mínimo do vendedor' },
  ];

  /* ---------- Catálogo de Oportunidades (pré-cadastro, 10 dias) ---------- */
  window.EBOportunidades = [
    { id: 'OP-118', title: '48 Fêmeas Brangus',     cat: 'Genética', sexo: 'Fêmea', qty: 48, peso: '318,50', raca: 'Brangus',   loc: 'Poconé/MT',                    regiao: 'Baixada', publicado: '14/09/2026', restam: 6,  interessados: 9,  status: 'ativa' },
    { id: 'OP-121', title: '55 Fêmeas ½ Senepol',   cat: 'Corte',    sexo: 'Fêmea', qty: 55, peso: '302,00', raca: '½ Senepol', loc: 'Primavera do Leste/MT',        regiao: 'Sul',     publicado: '17/09/2026', restam: 9,  interessados: 3,  status: 'ativa' },
    { id: 'OP-115', title: '90 Machos Anelorado',   cat: 'Corte',    sexo: 'Macho', qty: 90, peso: '210,00', raca: 'Anelorado', loc: 'Comodoro/MT',                  regiao: 'Guaporé', publicado: '11/09/2026', restam: 2,  interessados: 14, status: 'ativa' },
    { id: 'OP-123', title: '35 Machos Nelore',      cat: 'Corte',    sexo: 'Macho', qty: 35, peso: '236,00', raca: 'Nelore',    loc: 'Sto. Antônio de Leverger/MT',  regiao: 'Baixada', publicado: '19/09/2026', restam: 10, interessados: 0,  status: 'em-analise' },
    { id: 'OP-109', title: '60 Fêmeas Nelore P.O',  cat: 'Genética', sexo: 'Fêmea', qty: 60, peso: '295,00', raca: 'Nelore P.O',loc: 'Pontes e Lacerda/MT',          regiao: 'Guaporé', publicado: '05/09/2026', restam: 0,  interessados: 12, status: 'migrada', janela: 'JAN-0926' },
    { id: 'OP-104', title: '22 Machos Brangus',     cat: 'Corte',    sexo: 'Macho', qty: 22, peso: '288,00', raca: 'Brangus',   loc: 'Alto Araguaia/MT',             regiao: 'Sul',     publicado: '01/09/2026', restam: 0,  interessados: 2,  status: 'expirada' },
  ];

  /* ---------- CRM: clientes ---------- */
  window.EBClientes = [
    { nome: 'Fazenda Santa Luzia',     contato: 'João Almeida',  mun: 'Rosário Oeste/MT',   regiao: 'Baixada', nivel: 'validado', carteira: 'EB Leilões', resp: 'Carlos M.', perfil: 'Vendedor',  cat: 'Corte',                     ultimo: 'hoje',      sla: 'ok' },
    { nome: 'Agropecuária Vale Verde', contato: 'Marta Rocha',   mun: 'Rondonópolis/MT',    regiao: 'Sul',     nivel: 'validado', carteira: 'EB Agro',    resp: 'Ana P.',    perfil: 'Comprador', cat: 'Corte · Machos 180–260 kg', ultimo: 'ontem',     sla: 'ok' },
    { nome: 'Rancho Guaporé',          contato: 'Pedro Lima',    mun: 'Pontes e Lacerda/MT',regiao: 'Guaporé', nivel: 'pendente', carteira: 'EB Agro',    resp: 'Carlos M.', perfil: 'Ambos',     cat: 'Genética',                  ultimo: 'há 2 dias', sla: 'late' },
    { nome: 'Sítio Boa Esperança',     contato: 'Luciana Teles', mun: 'Cáceres/MT',         regiao: 'Baixada', nivel: 'inicial',  carteira: '—',          resp: '—',         perfil: 'Comprador', cat: '—',                         ultimo: 'há 3h',     sla: 'ok' },
    { nome: 'Fazenda Três Lagoas',     contato: 'Roberto Nunes', mun: 'Jaciara/MT',         regiao: 'Sul',     nivel: 'validado', carteira: 'EB Leilões', resp: 'Ana P.',    perfil: 'Comprador', cat: 'Corte · Fêmeas',            ultimo: 'hoje',      sla: 'ok' },
    { nome: 'Estância Rio Branco',     contato: 'Helena Prado',  mun: 'Vila Bela/MT',       regiao: 'Guaporé', nivel: 'validado', carteira: 'EB Agro',    resp: 'Carlos M.', perfil: 'Vendedor',  cat: 'Corte',                     ultimo: 'há 5 dias', sla: 'late' },
    { nome: 'Agro Leverger',           contato: 'Tiago Souza',   mun: 'Sto. A. de Leverger/MT', regiao: 'Baixada', nivel: 'pendente', carteira: 'EB Agro', resp: 'Ana P.',  perfil: 'Vendedor',  cat: 'Corte',                     ultimo: 'hoje',      sla: 'ok' },
    { nome: 'Fazenda Ipê Amarelo',     contato: 'Sérgio Matos',  mun: 'Cáceres/MT',         regiao: 'Baixada', nivel: 'validado', carteira: 'EB Leilões', resp: 'Carlos M.', perfil: 'Vendedor',  cat: 'Corte',                     ultimo: 'ontem',     sla: 'ok' },
  ];

  /* ---------- CRM: funis ---------- */
  window.EBFunilVendedores = {
    'Lead':                 [{ t: 'Faz. Água Limpa', m: 'Cáceres',        d: '2h',   sla: 'ok' }, { t: 'Sítio Recanto', m: 'Poconé', d: '5h', sla: 'ok' }],
    'Contato feito':        [{ t: 'Agro Leverger',   m: 'Leverger',       d: '1d',   sla: 'ok' }],
    'Lote pré-cadastrado':  [{ t: 'Faz. Santa Luzia',m: 'Rosário Oeste',  d: '3d',   sla: 'late' }, { t: 'Est. Rio Branco', m: 'Vila Bela', d: '2d', sla: 'ok' }],
    'Lote validado':        [{ t: 'Faz. Ipê Amarelo',m: 'Cáceres',        d: '1d',   sla: 'ok' }],
    'Em Janela':            [{ t: 'Faz. Boa Vista',  m: 'Rondonópolis',   d: 'hoje', sla: 'ok' }, { t: 'Faz. Santa Luzia', m: 'Rosário Oeste', d: 'hoje', sla: 'ok' }],
    'Fechado':              [{ t: 'Faz. Serra Azul', m: 'Jaciara',        d: '17/09',sla: 'ok' }],
  };
  window.EBFunilCompradores = {
    'Lead':                 [{ t: 'Sítio Boa Esperança', m: 'Cáceres',     d: '3h',   sla: 'ok' }, { t: 'Faz. Paraíso', m: 'Jaciara', d: '1d', sla: 'ok' }],
    'Qualificado':          [{ t: 'Rancho Guaporé',      m: 'P. e Lacerda',d: '2d',   sla: 'late' }],
    'Interesse em lote':    [{ t: 'Agrop. Vale Verde',   m: 'Rondonópolis',d: 'ontem',sla: 'ok' }, { t: 'Faz. Três Lagoas', m: 'Jaciara', d: 'hoje', sla: 'ok' }],
    'Ativado p/ Janela':    [{ t: 'Faz. Três Lagoas',    m: 'Jaciara',     d: 'hoje', sla: 'ok' }, { t: 'Agrop. Vale Verde', m: 'Rondonópolis', d: 'hoje', sla: 'ok' }, { t: 'Faz. Cachoeira', m: 'Cáceres', d: 'hoje', sla: 'ok' }],
    'Oferta registrada':    [{ t: 'Agrop. Vale Verde',   m: 'Rondonópolis',d: 'hoje', sla: 'ok' }],
    'Fechado':              [{ t: 'Faz. Monte Alto',     m: 'Rondonópolis',d: '17/09',sla: 'ok' }],
  };

  /* ---------- CRM: Pré-venda (compradores por categoria) ---------- */
  window.EBPreVenda = [
    { cat: 'Corte · Machos 180–260 kg',          compradores: 18, ativos: 11, regioes: 'Sul, Baixada',    janelas: 'JAN-0924' },
    { cat: 'Corte · Machos 260–350 kg',          compradores: 14, ativos: 9,  regioes: 'Sul',             janelas: 'JAN-0919, JAN-0917' },
    { cat: 'Corte · Fêmeas',                     compradores: 12, ativos: 7,  regioes: 'Baixada, Guaporé',janelas: '—' },
    { cat: 'Genética · Nelore P.O',              compradores: 9,  ativos: 5,  regioes: 'Guaporé',         janelas: 'JAN-0926' },
    { cat: 'Genética · Cruzados (Angus/Brangus)',compradores: 11, ativos: 6,  regioes: 'Sul, Baixada',    janelas: 'JAN-0925' },
  ];

  /* ---------- CRM: motivos de perda e exceções ---------- */
  window.EBMotivosPerda = [
    { m: 'Preço abaixo do mínimo do vendedor',      n: 7 },
    { m: 'Comprador sem cadastro completo a tempo', n: 4 },
    { m: 'Logística / frete inviável',              n: 3 },
    { m: 'Prazo de pagamento (somente à vista)',    n: 3 },
    { m: 'Lote reprovado na validação',             n: 2 },
    { m: 'Desistência do vendedor',                 n: 1 },
  ];
  window.EBExcecoes = [
    { data: '18/09/2026', janela: 'JAN-0919', tipo: 'Taxa 4%',   motivo: 'Volume relevante (80 cab.) + cliente estratégico', alcada: 'Gerência',              resp: 'Marlus C.', impacto: '−R$ 3,4 mil', status: 'aprovada' },
    { data: '12/09/2026', janela: 'JAN-0912', tipo: 'Taxa 3,5%', motivo: 'Solicitação do captador sem volume',              alcada: 'Diretoria (colegiado)', resp: '—',         impacto: '—',           status: 'negada' },
  ];

  /* ---------- Radar de Mercado (dados próprios) ---------- */
  window.EBRadar = {
    categorias: ['Machos 180–260', 'Machos 260–350', 'Fêmeas corte', 'Nelore P.O', 'Cruzados'],
    series: { 'Sul': [16.4, 17.1, 15.9, 18.8, 17.9], 'Baixada': [16.6, 17.3, 16.1, 19.0, 18.2], 'Guaporé': [16.1, 16.9, 15.7, 19.1, 17.6] },
    hist: [15.8, 16.0, 16.2, 16.1, 16.4, 16.5, 16.7, 16.6, 16.8, 16.9, 17.0, 16.9],
    fonte: 'Dados próprios: histórico Estância Bahia Leilões + negócios EB Agro, com validação humana. Sem IA e sem fontes externas nesta fase (piloto interno).',
    atualizado: '19/09/2026',
  };

  /* ---------- Integrações ---------- */
  window.EBIntegracoes = [
    { n: 'SLI',         d: 'Separação dos negócios EB Agro dentro do SLI · relatórios próprios', status: 'homologacao', resp: 'Jonathan Souza / Leopoldo', ultimo: 'sync há 12 min' },
    { n: 'Acertos EB',  d: 'Envio automático dos dados do negócio fechado ao setor de Acertos',  status: 'ativo',       resp: 'Financeiro',                ultimo: 'último envio: JAN-0917 · 17/09' },
    { n: 'CRM EB Agro', d: 'Registro de 100% dos eventos comerciais críticos',                   status: 'ativo',       resp: 'Rodrigo Costa',             ultimo: '0 lacunas de dado desde o MVP' },
  ];

  /* ==========================================================================
     Helpers de renderização
     ========================================================================== */
  const num = s => parseFloat(String(s).replace('.', '').replace(',', '.'));
  window.EBnum = num;
  window.EBbrl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  window.EBCycleHTML = function (status) {
    const order = ['pre-demanda', 'pre-abertura', 'aberta', 'fechamento', 'pos-janela'];
    let idx = order.indexOf(status); if (status === 'fechada') idx = 5;
    return '<div class="cycle">' + window.EBCycle.map((c, i) => {
      const cls = i < idx ? 'done' : (i === idx ? 'now' : '');
      return '<div class="c ' + cls + '"><span class="n">' + (i < idx ? I.check : (i + 1)) + '</span><b>' + c.l + '</b><small>' + c.s + '</small></div>';
    }).join('') + '</div>';
  };

  window.EBVBadges = function (ck) {
    const labels = [['Filmado', I.video], ['Pesado', I.scale], ['Validado', I.shield]];
    return '<div class="vbadges">' + labels.map((l, i) => '<span class="vbadge ' + (ck[i] ? '' : 'off') + '">' + l[1] + l[0] + '</span>').join('') + '</div>';
  };

  window.EBChecklistHTML = function (ck, editable) {
    return '<div class="checklist">' + window.EBChecklistItems.map((it, i) =>
      '<div class="ck ' + (ck[i] ? 'ok' : '') + '" data-i="' + i + '" ' + (editable ? '' : 'style="cursor:default"') + '>' +
      '<span class="box">' + I.check + '</span>' +
      '<span class="t">' + it.t + '<small>' + it.s + '</small></span>' +
      '<span class="who">' + it.who + '</span></div>').join('') + '</div>';
  };

  window.EBJanelaCard = function (j, i) {
    const done = j.ck.filter(Boolean).length;
    const right = j.status === 'aberta' || j.status === 'fechamento'
      ? '<span class="t">Melhor oferta</span><span class="big green">R$ ' + j.melhor + '<small style="font-size:.8rem;color:var(--muted)"> /kg</small></span><span class="small muted">' + j.ofertas + ' ofertas · ' + j.ativados + ' compradores ativados</span>'
      : j.status === 'pos-janela' || j.status === 'fechada'
        ? '<span class="t">' + (j.fechado ? 'Fechado em' : 'Encerrada') + '</span><span class="big">' + (j.fechado ? 'R$ ' + j.valorFechado : '—') + '</span><span class="small muted">' + (j.fechado ? 'aceite assistido · Acertos EB' : j.motivoPerda) + '</span>'
        : '<span class="t">Preço de referência</span><span class="big">R$ ' + j.precoRef + '<small style="font-size:.8rem;color:var(--muted)"> /kg</small></span><span class="small muted">checklist ' + done + '/7 · ' + j.mapeados + ' compradores mapeados</span>';
    return '<a class="jcard reveal in" href="janela.html?janela=' + j.id + '">' +
      '<div class="jm">' + window.EBStatus(j.status) + window.EBPasture(i % 3) + '</div>' +
      '<div class="jb"><span class="lot-code">' + j.id + ' · Lote ' + j.lote + '</span><h3>' + j.title + '</h3>' +
      '<div class="jmeta"><span>' + I.pin + ' ' + j.loc + '</span><span><b>' + j.peso + ' kg</b> médio</span><span><b>' + j.cat + '</b></span><span>Janela <b>' + j.data + '</b></span></div>' +
      window.EBVBadges(j.ck) + '</div>' +
      '<div class="jr">' + right + '</div></a>';
  };

  window.EBOpCard = function (o, i) {
    const pct = Math.round((o.restam / 10) * 100);
    const urgent = o.restam <= 2 && o.restam > 0;
    const foot = o.status === 'ativa'
      ? '<button class="btn btn--interest" data-op="' + o.id + '">' + I.heart + ' Tenho interesse</button>'
      : o.status === 'migrada' ? '<a class="btn btn--ghost" href="janela.html?janela=' + o.janela + '">Ver Janela</a>'
      : o.status === 'em-analise' ? '<span class="small muted">Aguardando validação EB Agro</span>'
      : '<span class="small muted">Prazo de 10 dias encerrado</span>';
    return '<article class="lot-card reveal in">' +
      '<div class="lot-media"><span class="lot-tag">' + o.id + '</span>' + window.EBPasture(i % 3) + '</div>' +
      '<div class="lot-body">' +
      '<div class="row between"><span class="lot-code">Oportunidade</span>' + window.EBStatus(o.status) + '</div>' +
      '<h3 class="lot-title" style="margin-top:.4rem">' + o.title + '</h3>' +
      '<span class="lot-loc">' + I.pin + ' ' + o.loc + ' · ' + o.regiao + '</span>' +
      '<div class="lot-specs">' +
      '<div class="spec"><span class="ic">' + I.animals + '</span><span><span class="k">Quantidade</span><span class="v">' + o.qty + ' ' + (o.sexo === 'Fêmea' ? 'Fêmeas' : 'Machos') + '</span></span></div>' +
      '<div class="spec"><span class="ic">' + I.breed + '</span><span><span class="k">Raça</span><span class="v">' + o.raca + '</span></span></div>' +
      '<div class="spec"><span class="ic">' + I.kg + '</span><span><span class="k">Peso méd.</span><span class="v">' + o.peso + ' kg</span></span></div>' +
      '<div class="spec"><span class="ic">' + I.users + '</span><span><span class="k">Interessados</span><span class="v">' + o.interessados + '</span></span></div>' +
      '</div>' +
      (o.status === 'ativa' ? '<div class="deadline ' + (urgent ? 'urgent' : '') + '"><div class="track"><div class="fill" style="width:' + pct + '%"></div></div><div class="meta"><span>Publicado ' + o.publicado + '</span><span><b>' + o.restam + ' dia' + (o.restam === 1 ? '' : 's') + '</b> restante' + (o.restam === 1 ? '' : 's') + '</span></div></div>' : '') +
      '<div class="lot-foot" style="margin-top:1rem">' + foot + '<a class="lot-cta" href="janela.html?op=' + o.id + '" aria-label="Ver oportunidade">' + I.arrow + '</a></div>' +
      '</div></article>';
  };

  /* ---------- CRM shell (sidebar + topo) ---------- */
  window.EBCrmShell = function (active, title, sub) {
    const items = [
      ['crm-dashboard.html', 'Dashboard', I.chart, 'dashboard'],
      ['crm-janelas.html',   'Janelas & Checklist', I.window, 'janelas'],
      ['crm-funil.html',     'Funis comerciais', I.funnel, 'funil'],
      ['crm-pre-venda.html', 'Pré-venda', I.users, 'pre-venda'],
      ['crm-clientes.html',  'Clientes', I.user, 'clientes'],
      ['crm-lotes.html',     'Lotes & Oportunidades', I.tag, 'lotes'],
      ['crm-excecoes.html',  'Perdas & Exceções', I.alert, 'excecoes'],
      ['radar.html',         'Radar de Mercado', I.radar, 'radar'],
    ];
    const side = '<aside class="crm-side">' +
      '<a class="logo-chip" href="index.html"><img src="assets/eb-agro-logo.png" alt="EB Agro"></a>' +
      '<div class="env">CRM EB Agro · interno</div>' +
      '<div class="sec">Operação</div>' +
      items.slice(0, 4).map(it => '<a href="' + it[0] + '" class="' + (active === it[3] ? 'active' : '') + '">' + it[2] + it[1] + '</a>').join('') +
      '<div class="sec">Base</div>' +
      items.slice(4).map(it => '<a href="' + it[0] + '" class="' + (active === it[3] ? 'active' : '') + '">' + it[2] + it[1] + '</a>').join('') +
      '<div class="sec">Integrações</div>' +
      '<a href="crm-dashboard.html#integracoes">' + I.plug + 'SLI · Acertos EB</a>' +
      '<div class="foot">Piloto MT · Sul, Baixada e Guaporé<br>Fase 3 — Set/2026<br><a href="index.html" style="padding:.5rem 0;font-size:.8rem">' + I.logout + 'Voltar ao site</a></div>' +
      '</aside>';
    const top = '<div class="crm-top"><div class="row"><button class="btn btn--ghost crm-toggle" id="crmToggle" style="padding:.5rem .7rem">' + I.list + '</button><div><h1>' + title + '</h1><div class="sub">' + (sub || '') + '</div></div></div>' +
      '<div class="who"><span>Rodrigo Costa · Ger. Tecnologia</span><span class="av">RC</span></div></div>';
    return { side, top };
  };

  window.EBMountCrm = function (active, title, sub) {
    const sh = window.EBCrmShell(active, title, sub);
    const root = document.querySelector('.crm');
    root.insertAdjacentHTML('afterbegin', sh.side);
    const main = root.querySelector('.crm-main');
    main.insertAdjacentHTML('afterbegin', sh.top);
    const t = document.getElementById('crmToggle');
    if (t) t.addEventListener('click', () => document.body.classList.toggle('crm-open'));
    document.addEventListener('click', e => { if (document.body.classList.contains('crm-open') && !e.target.closest('.crm-side') && !e.target.closest('#crmToggle')) document.body.classList.remove('crm-open'); });
  };

  /* Tabs genéricas */
  window.EBTabs = function (root) {
    root = root || document;
    root.querySelectorAll('.tabs').forEach(tabs => {
      tabs.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        tabs.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active');
        const wrap = tabs.parentElement;
        wrap.querySelectorAll(':scope > .tab-panel').forEach(p => p.classList.toggle('active', p.dataset.tab === b.dataset.tab));
      });
    });
  };

  /* Barra de demonstração: simula o nível de cadastro do visitante (protótipo) */
  window.EBDemoBar = function () {
    const lv = window.EBSession.level;
    const opts = [['visitante', 'Visitante'], ['inicial', 'Cadastro inicial'], ['pendente', 'Completo · em validação'], ['validado', 'Completo · validado']];
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;left:1rem;bottom:1rem;z-index:400;background:#002846;color:#fff;border-radius:100px;padding:.45rem .6rem .45rem .9rem;font-size:.78rem;display:flex;align-items:center;gap:.5rem;box-shadow:0 10px 30px -10px rgba(0,40,70,.6)';
    el.innerHTML = '<span style="opacity:.75">Demonstração · simular como</span><select id="ebDemoLv" style="background:#fff;color:#002846;border:none;border-radius:100px;padding:.3rem .7rem;font-weight:700;font-size:.78rem;font-family:inherit">' +
      opts.map(o => '<option value="' + o[0] + '" ' + (o[0] === lv ? 'selected' : '') + '>' + o[1] + '</option>').join('') + '</select>';
    document.body.appendChild(el);
    el.querySelector('select').addEventListener('change', function () { window.EBSession.level = this.value; location.reload(); });
  };

  /* Estado local de "sessão" (mock): nível de cadastro do visitante */
  window.EBSession = {
    get level() { try { return localStorage.getItem('eb_level') || 'visitante'; } catch (e) { return 'visitante'; } },
    set level(v) { try { localStorage.setItem('eb_level', v); } catch (e) {} },
    get name() { try { return localStorage.getItem('eb_name') || 'João Almeida'; } catch (e) { return 'João Almeida'; } },
    set name(v) { try { localStorage.setItem('eb_name', v); } catch (e) {} },
  };
})();
