/* ==========================================================================
   EB Agro — shared scripts: header/footer, icons, lot data, interactions
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Brand logo (logo oficial EB Agro, sem alterações) ---------- */
  const LOGO = (onDark) => {
    const cls = onDark ? 'brand-logo brand-logo--chip' : 'brand-logo';
    return `<img src="assets/eb-agro-logo.png" alt="EB Agro" class="${cls}">`;
  };
  window.EBLogo = LOGO;

  /* ---------- Icons ---------- */
  const I = {
    animals: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c0-1 .5-2 1.5-2S7 9 7 10m10 0c0-1 .5-2 1.5-2S20 9 20 10"/><path d="M5 9c-1-2-1-4 0-5m14 5c1-2 1-4 0-5"/><path d="M7 10c0 3 2 6 5 6s5-3 5-6"/><path d="M9.5 13.5h.01M14.5 13.5h.01"/></svg>',
    breed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.5 5 5.5.8-4 3.9 1 5.5L12 20l-5 2.6 1-5.5-4-3.9 5.5-.8z"/></svg>',
    kg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16l-1.5 12h-13z"/><circle cx="12" cy="5" r="2.4"/></svg>',
    price: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M8 7h6.5a2.5 2.5 0 010 5H9m0 0h6.5a2.5 2.5 0 010 5H8"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-9.5-9C1 8 2.5 4.5 6 4.5c2 0 3 1 6 4 3-3 4-4 6-4 3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12l2.5 2.5a1.6 1.6 0 002.3 0l4-4 3 2M3 8l4-2 5 3M3 8v6l3 3M21 8l-4-2-3 2"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10M4 7l4-1 4 1M4 7l-2 5a3 3 0 006 0zM20 7l-4-1-4 1m8 0l2 5a3 3 0 01-6 0z"/></svg>',
    speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 13l4-4M20.5 16a9 9 0 10-17 0"/><circle cx="12" cy="13" r="1"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.8 2.1z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 00-.7.3A3 3 0 006 9.6c0 1.8 1.3 3.5 1.5 3.7s2.6 4 6.3 5.5c2.3 1 2.7.7 3.2.7s1.4-.6 1.6-1.1.2-1 .1-1.1z"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    face: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.6 21v-7.4h2.5l.4-3h-2.9V8.7c0-.9.3-1.5 1.5-1.5h1.5V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.2v3h2.5V21z"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20l1.2-6.5L2.5 8.9 9.1 8z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
  };
  window.EBIcons = I;

  /* ---------- Pasture SVG scene (brand-colored, no external imagery) ---------- */
  /* Silhueta de boi Nelore (cupim, barbela, orelha caída) — reutilizada em cenas e selos */
  const BULL_BODY = 'M14 92C12 84 16 72 24 64C30 58 36 54 42 52L44 50C44 38 48 30 56 32C54 40 52 46 54 52C62 50 70 46 80 40C88 30 100 22 112 26C122 30 128 36 136 38L186 38C198 40 206 46 208 56C210 70 210 90 212 112C213 122 216 130 214 136C208 134 206 124 205 112C204 96 202 80 200 66C198 78 196 90 194 102C194 116 196 130 196 140L184 142C183 128 182 114 180 104C178 98 176 94 172 94C150 106 120 106 98 100C94 100 92 100 90 98C91 112 92 128 92 140L78 142C78 128 76 112 74 100C70 100 66 104 62 108C56 114 48 116 44 108C40 100 38 94 34 92C28 94 20 96 14 92Z';
  const BULL_EAR  = 'M44 56C36 68 28 92 30 106C40 100 50 82 52 64Z';                      /* orelha pendente, fora da mandibula */
  const BULL_FAR  = 'M98 100L110 100L112 138L100 140ZM166 96L178 96L182 138L170 140Z';     /* patas do lado oposto */
  const BULL_PATHS = '<path d="' + BULL_BODY + '"/><path d="' + BULL_EAR + '"/><path d="' + BULL_FAR + '" opacity=".8"/>';
  window.EBBull = function (fill, opacity) { return '<g fill="' + (fill || '#002846') + '" opacity="' + (opacity == null ? 1 : opacity) + '">' + BULL_PATHS + '</g>'; };

  /* Selo de marca: boi Nelore em silhueta sobre azul-marinho, anel dourado */
  window.EBBadge = function () {
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-label="EB Agro — Nelore">' +
      '<circle cx="60" cy="60" r="58" fill="#002846"/>' +
      '<circle cx="60" cy="60" r="51" fill="none" stroke="#B2903E" stroke-width="1.4" opacity=".9"/>' +
      '<path d="M20 84Q60 76 100 84" stroke="#238246" stroke-width="3" stroke-linecap="round" fill="none" opacity=".95"/>' +
      '<g transform="translate(18.6 28.5) scale(.36)">' + window.EBBull('#F5F0EB', 1) + '</g>' +
      '<text x="60" y="103" text-anchor="middle" font-family="Archivo, sans-serif" font-size="7.5" font-weight="700" letter-spacing="2.4" fill="#B2903E">EB AGRO</text>' +
      '</svg>';
  };

  function pasture(seed) {
    seed = seed || 0;
    const hue = ['#cfe6d6', '#d3e7d8', '#cde3d3'][seed % 3];
    return `<svg class="pasture" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky${seed}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e9f2ea"/><stop offset="1" stop-color="${hue}"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#sky${seed})"/>
      <circle cx="${330 - seed * 20}" cy="52" r="26" fill="#B2903E" opacity=".28"/>
      <path d="M0 150 Q100 108 200 140 T400 132 V240 H0Z" fill="#238246" opacity=".18"/>
      <path d="M0 178 Q120 140 240 170 T400 160 V240 H0Z" fill="#238246" opacity=".30"/>
      <path d="M0 205 Q100 182 220 200 T400 196 V240 H0Z" fill="#1A6537" opacity=".45"/>
      <g fill="#002846"><g transform="translate(112 172) scale(.30)" opacity=".66">${BULL_PATHS}</g><g transform="translate(252 150) scale(.19)" opacity=".5">${BULL_PATHS}</g></g>
    </svg>`;
  }
  window.EBPasture = pasture;

  /* ---------- Lot data (amostra realista do mercado) ---------- */
  const LOTS = [
    { code: '0224', title: '30 Machos Nelore', qty: '30 Machos', breed: 'Nelore', weight: '223,00', price: '16,50', loc: 'Rosário Oeste/MT', region: 'Centro-Oeste', cat: 'Corte', sex: 'Macho', tag: 'Destaque' },
    { code: '0231', title: '48 Fêmeas Brangus', qty: '48 Fêmeas', breed: 'Brangus', weight: '318,50', price: '15,20', loc: 'Campo Grande/MS', region: 'Centro-Oeste', cat: 'Genética', sex: 'Fêmea', tag: 'Novo' },
    { code: '0237', title: '72 Machos Senepol', qty: '72 Machos', breed: 'Senepol', weight: '265,00', price: '17,80', loc: 'Barretos/SP', region: 'Sudeste', cat: 'Corte', sex: 'Macho', tag: 'Premium' },
    { code: '0242', title: '25 Machos ½ Angus', qty: '25 Machos', breed: '½ Aberdeen Angus', weight: '341,00', price: '18,40', loc: 'Uberaba/MG', region: 'Sudeste', cat: 'Genética', sex: 'Macho', tag: 'Premium' },
    { code: '0248', title: '60 Fêmeas Nelore P.O', qty: '60 Fêmeas', breed: 'Nelore P.O', weight: '295,00', price: '19,10', loc: 'Água Boa/MT', region: 'Centro-Oeste', cat: 'Genética', sex: 'Fêmea', tag: 'Novo' },
    { code: '0253', title: '90 Machos Anelorado', qty: '90 Machos', breed: 'Anelorado', weight: '210,00', price: '16,10', loc: 'Redenção/PA', region: 'Norte', cat: 'Corte', sex: 'Macho', tag: '' },
    { code: '0259', title: '40 Machos Brahmanel', qty: '40 Machos', breed: 'Brahmanel', weight: '278,00', price: '17,00', loc: 'Rio Verde/GO', region: 'Centro-Oeste', cat: 'Corte', sex: 'Macho', tag: '' },
    { code: '0264', title: '55 Fêmeas ½ Senepol', qty: '55 Fêmeas', breed: '½ Senepol', weight: '302,00', price: '16,90', loc: 'Feira de Santana/BA', region: 'Nordeste', cat: 'Corte', sex: 'Fêmea', tag: 'Novo' },
    { code: '0270', title: '80 Machos Cruz. Ind.', qty: '80 Machos', breed: 'Cruzamento Industrial', weight: '245,00', price: '17,30', loc: 'Dourados/MS', region: 'Centro-Oeste', cat: 'Corte', sex: 'Macho', tag: 'Destaque' },
  ];
  window.EBLots = LOTS;

  function lotCard(lot, i) {
    const tag = lot.tag ? `<span class="lot-tag">${lot.tag}</span>` : '';
    return `<article class="lot-card reveal" data-region="${lot.region}" data-sex="${lot.sex}" data-cat="${lot.cat}" data-breed="${lot.breed}">
      <div class="lot-media">
        ${tag}
        <button class="lot-fav" aria-label="Favoritar">${I.heart}</button>
        ${pasture(i)}
      </div>
      <div class="lot-body">
        <div class="lot-head">
          <span class="lot-code">Lote ${lot.code}</span>
          <h3 class="lot-title">${lot.title}</h3>
          <span class="lot-loc">${I.pin} ${lot.loc}</span>
        </div>
        <div class="lot-specs">
          <div class="spec"><span class="ic">${I.animals}</span><span><span class="k">Quantidade</span><span class="v">${lot.qty}</span></span></div>
          <div class="spec"><span class="ic">${I.breed}</span><span><span class="k">Raça</span><span class="v">${lot.breed}</span></span></div>
          <div class="spec"><span class="ic">${I.kg}</span><span><span class="k">Peso méd.</span><span class="v">${lot.weight} kg</span></span></div>
          <div class="spec"><span class="ic">${I.price}</span><span><span class="k">Categoria</span><span class="v">${lot.cat}</span></span></div>
        </div>
        <div class="lot-foot">
          <div class="lot-price">
            <span class="kg">R$ ${lot.price}</span><span class="unit"> /kg</span>
            <small>@ estimada · ${lot.qty}</small>
          </div>
          <a class="lot-cta" href="lote.html?lote=${lot.code}" aria-label="Ver detalhes do lote ${lot.code}">${I.arrow}</a>
        </div>
      </div>
    </article>`;
  }
  window.EBLotCard = lotCard;

  /* ---------- Header / Footer markup ---------- */
  function currentPage() {
    const p = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
    if (p === 'janela') return 'janelas';           // detalhe herda o destaque da listagem
    if (p === 'cadastrar-lote') return 'conta';
    return p;
  }

  function header() {
    const page = currentPage();
    const link = (href, label, key) => `<a href="${href}" class="${page === key ? 'active' : ''}">${label}</a>`;
    return `<header class="site-header">
      <div class="wrap nav">
        <a class="brand" href="index.html" aria-label="EB Agro — início">${LOGO(false)}</a>
        <nav class="nav-links">
          ${link('index.html', 'Home', 'index')}
          ${link('oportunidades.html', 'Oportunidades', 'oportunidades')}
          ${link('janelas.html', 'Janelas de Ofertas', 'janelas')}
          ${link('radar.html', 'Radar de Mercado', 'radar')}
          ${link('como-funciona.html', 'Como Funciona', 'como-funciona')}
        </nav>
        <div class="nav-actions">
          <a class="nav-login" href="login.html">Entrar</a>
          <a class="btn btn--primary" href="cadastrar.html">Cadastrar</a>
          <button class="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
      <div class="nav-mobile">
        <a href="index.html">Home</a>
        <a href="oportunidades.html">Catálogo de Oportunidades</a>
        <a href="janelas.html">Janelas de Ofertas</a>
        <a href="radar.html">Radar de Mercado</a>
        <a href="como-funciona.html">Como Funciona</a>
        <a href="conta.html">Área do Cliente</a>
        <a href="login.html">Entrar</a>
        <a class="btn btn--primary" href="cadastrar.html">Cadastrar agora</a>
      </div>
    </header>`;
  }

  function footer() {
    return `<footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            ${LOGO(true)}
            <p>A plataforma da Estância Bahia para compra e venda de lotes de bovinos. Tecnologia e conhecimento de mercado, com a palavra firme que o campo exige.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram">${I.insta}<span>Instagram</span></a>
              <a href="#" aria-label="Facebook">${I.face}<span>Facebook</span></a>
              <a href="https://wa.me/5565999968158" aria-label="WhatsApp">${I.whatsapp}<span>WhatsApp</span></a>
            </div>
          </div>
          <div>
            <h4>Plataforma</h4>
            <ul class="footer-links">
              <li><a href="oportunidades.html">Catálogo de Oportunidades</a></li>
              <li><a href="janelas.html">Janelas de Ofertas</a></li>
              <li><a href="radar.html">Radar de Mercado</a></li>
              <li><a href="conta.html">Área do Cliente</a></li>
              <li><a href="cadastrar-lote.html">Quero Vender um lote</a></li>
              <li><a href="parceiros.html">Parceiros Indicadores</a></li>
              <li><a href="como-funciona.html">Como Funciona</a></li>
              <li><a href="#">Regulamento Geral</a></li>
              <li><a href="crm-dashboard.html" style="opacity:.55">Acesso interno (CRM)</a></li>
            </ul>
          </div>
          <div>
            <h4>Entre em contato</h4>
            <ul class="footer-contact">
              <li>${I.phone}<span>(65) 2121-6700</span></li>
              <li>${I.mail}<span>suporte1@ebagro.com.br</span></li>
              <li>${I.map}<span>Av. Historiador Rubens de Mendonça, 1234 — Baú, Cuiabá/MT</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Estância Bahia. Todos os direitos reservados.</span>
          <span>EB Agro · Rede de serviços pecuários</span>
        </div>
      </div>
    </footer>`;
  }

  /* ---------- Contour SVG (topographic atmosphere) ---------- */
  window.EBContour = function () {
    return `<svg class="contour" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="#002846" stroke-opacity=".07" stroke-width="1.4">
        <path d="M-50 120 Q300 40 600 120 T1250 110"/>
        <path d="M-50 180 Q300 100 600 180 T1250 170"/>
        <path d="M-50 240 Q300 160 600 240 T1250 230"/>
        <path d="M-50 320 Q300 240 600 320 T1250 310"/>
        <path d="M-50 400 Q300 320 600 400 T1250 390"/>
        <path d="M-50 480 Q300 400 600 480 T1250 470"/>
      </g>
      <g fill="none" stroke="#238246" stroke-opacity=".08" stroke-width="1.4">
        <path d="M-50 150 Q300 70 600 150 T1250 140"/>
        <path d="M-50 360 Q300 280 600 360 T1250 350"/>
      </g>
    </svg>`;
  };

  /* ---------- Mount + interactions ---------- */
  function mount() {
    const h = document.querySelector('[data-header]');
    if (h) h.outerHTML = header();
    const f = document.querySelector('[data-footer]');
    if (f) f.outerHTML = footer();

    // Nav toggle
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        const open = document.body.classList.contains('nav-open');
        toggle.setAttribute('aria-expanded', open);
      });
      document.querySelectorAll('.nav-mobile a').forEach(a =>
        a.addEventListener('click', () => document.body.classList.remove('nav-open')));
    }

    // Header shadow on scroll
    const head = document.querySelector('.site-header');
    const onScroll = () => head && head.classList.toggle('is-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Favorite buttons (delegated)
    document.addEventListener('click', (e) => {
      const fav = e.target.closest('.lot-fav');
      if (fav) { e.preventDefault(); fav.classList.toggle('is-on'); fav.querySelector('svg').style.fill = fav.classList.contains('is-on') ? '#238246' : 'none'; fav.style.color = '#238246'; }
    });

    // Segmented toggles
    document.querySelectorAll('.segment').forEach(seg => {
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if (!b) return;
        seg.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        const hidden = seg.parentElement.querySelector('input[type=hidden]');
        if (hidden) hidden.value = b.dataset.value || b.textContent.trim();
      });
    });
  }

  function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }
  ready(mount);
  window.EBReady = ready;
})();
