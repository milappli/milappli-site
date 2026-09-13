(() => {
  const STORAGE_KEY = 'milappli_profile';
  const DEFAULT_PROFILE = 'institut';

  // Un seul objet de config : deux jeux de contenus, même structure de clés.
  // Les sections HTML restent identiques ; seul ce qui est référencé par
  // data-p-key="chemin.vers.la.valeur" est remplacé au changement de profil.
  const PROFILES = {
    institut: {
      hero: {
        eyebrow: "La plateforme qui transforme chaque rendez-vous en une relation durable",
        h1: 'Ne soyez plus seulement l\'esthéticienne de vos clientes.<br>Devenez leur <span class="serif">référence beauté.</span>',
        sub: "Votre expertise ne devrait pas s'arrêter lorsqu'une cliente quitte votre institut. Avec Milappli, restez présente dans son quotidien, entretenez le lien entre deux rendez-vous et devenez naturellement son premier réflexe lorsqu'elle pense beauté."
      },
      features: {
        eyebrow: "Fonctionnalités",
        title: 'Tout ce dont votre institut <span class="serif">a besoin.</span>',
        lead: "Une application complète, pensée pour améliorer l'expérience cliente et simplifier votre communication au quotidien.",
        items: [
          { title: "Historique des soins", text: "Chaque cliente retrouve facilement ses soins réalisés et ses recommandations." },
          { title: "Suivi des forfaits", text: "Séances utilisées et restantes visibles en un coup d'œil." },
          { title: "Promotions", text: "Vos offres mises en avant au bon moment, au bon endroit." },
          { title: "Notifications push", text: "Rappels, actualités et promotions directement sur le téléphone." },
          { title: "Conseils personnalisés", text: "Vos recommandations prolongent l'expérience entre deux rendez-vous." },
          { title: "Espace cliente", text: "Un espace clair où chaque cliente retrouve l'essentiel." },
          { title: "Réservation / agenda", text: "Une prise de rendez-vous plus fluide selon la formule choisie." },
          { title: "Automatisations marketing", text: "Relances et campagnes pour garder le lien sans y passer des heures." },
          { title: "Support", text: "Un accompagnement humain pour vous aider à prendre en main la solution." }
        ]
      },
      mockup: {
        imgAlt: "Écran d'accueil de l'app - Milappli",
        float1: { title: "Votre soin Éclat vous attend", sub: "notification de votre institut" },
        float2: { title: "Cure anti-âge", sub: "3 séances restantes" }
      },
      problem: {
        title: 'Votre relation avec vos clientes ne devrait pas s\'arrêter à la porte de <span class="serif">votre institut.</span>',
        lead: "Vous consacrez du temps à écouter, conseiller et prendre soin de chaque cliente. Pourtant, une fois le rendez-vous commencé, votre institut disparaît progressivement de son quotidien. Et c'est justement entre deux rendez-vous que se prennent de nombreuses décisions : refaire un soin, terminer une cure, acheter un produit ou découvrir une nouveauté.",
        items: [
          { title: "Les réseaux sociaux ne suffisent plus", text: "Vos publications se perdent rapidement dans le fil d'actualité. Même vos meilleures clientes ne voient pas toujours vos conseils et vos nouveautés." },
          { title: "Vos clientes sont sollicitées partout", text: "Réseaux sociaux, publicités, influenceuses, Google… entre deux rendez-vous, de nombreuses marques cherchent à attirer leur attention." },
          { title: "Vos offres doivent arriver au bon moment", text: "Un nouveau soin, un produit ou une offre n'a d'impact que si votre cliente le découvre lorsqu'elle en a besoin." },
          { title: "Votre expertise mérite de rester présente", text: "Vous connaissez vos clientes, leurs besoins et leurs habitudes. Cette relation ne devrait pas disparaître entre deux visites." }
        ]
      },
      reference: {
        eyebrow: "L'idée Milappli",
        title: 'Et si l\'influenceuse beauté de vos clientes… <span class="serif">c\'était vous ?</span>',
        lead1: "Chaque jour, vos clientes découvrent des conseils, des produits et des routines auprès de personnes qui ne les connaissent pas. Pourtant, vous connaissez leur peau, leurs habitudes, leurs objectifs et les soins qu'elles réalisent.",
        lead2: '<strong style="color:var(--ink); font-weight:500">Avec Milappli, reprenez votre place de référence beauté.</strong> Partagez vos conseils, vos recommandations, vos nouveautés et votre expertise directement dans l\'univers de votre institut. Vos clientes savent où retrouver une information fiable : auprès de la professionnelle qui les connaît réellement.',
        mockHeaderTitle: "Conseils",
        mockHeaderSub: "Votre référence beauté",
        post1Title: "3 gestes pour prolonger votre soin éclat",
        post1Sub: "Les conseils de votre institut pour une peau lumineuse toute la semaine.",
        post2Title: "Notre nouvelle routine anti-âge",
        post2Sub: "Découvrez le protocole recommandé par votre esthéticienne."
      },
      benefits: {
        title: 'Une relation plus forte. Une clientèle <span class="serif">qui revient naturellement.</span>',
        lead: "Milappli ne cherche pas à vous apporter de nouvelles clientes. L'objectif est de mieux exploiter et fidéliser celle que vous possédez déjà.",
        items: [
          { title: "Plus de <em>rendez-vous</em>", text: "Une cliente qui pense régulièrement à son institut pense plus facilement à reprendre rendez-vous." },
          { title: "Plus de soins et de <em>cures terminées</em>", text: "Le suivi et la présence régulière favorisent le retour des clientes jusqu'au bout de leur parcours." },
          { title: "Plus de <em>ventes de produits</em>", text: "Vos conseils prolongent le soin et facilitent la recommandation de produits adaptés." },
          { title: "Plus de <em>fidélité</em>", text: "La cliente ne voit plus votre institut comme un lieu ponctuel, mais comme sa référence beauté." },
          { title: "Une relation <em>directe</em>", text: "Vous communiquez avec votre propre clientèle sans dépendre entièrement d'un réseau social externe, et sans coût supplémentaire." },
          { title: "Une image <em>plus premium</em>", text: "Une application à votre nom rassure et crédibilise votre institut auprès de vos clientes." }
        ]
      },
      offers: {
        lead: "Choisissez le niveau d'accompagnement adapté à votre institut. Tarif établi sur devis.",
        essential: {
          sub: "Idéal pour les instituts qui veulent renforcer leur image, fidéliser leurs clientes et rester visibles entre deux rendez-vous.",
          espaceItem: "Espace cliente",
          historiqueItem: "Historique des soins"
        },
        premium: {
          sub: "Idéal pour les instituts qui veulent aller plus loin avec réservation, agenda et automatisations marketing."
        }
      },
      faq: {
        installDelay: "Le délai dépend du niveau de personnalisation et des éléments transmis par l'institut. Une fois les contenus reçus, nous vous accompagnons dans une mise en place progressive et claire.",
        branding: "Oui. La personnalisation est au cœur de Milappli : votre logo, vos couleurs et vos contenus sont intégrés pour créer une expérience cohérente avec votre institut.",
        clientDownloadQ: "Mes clientes doivent-elles télécharger l'application ?",
        clientDownloadA: "Oui, l'objectif est de leur offrir un espace simple et pratique pour retrouver votre institut, vos offres, leurs forfaits et vos conseils.",
        clientPayQ: "Mes clientes doivent-elles payer ?",
        clientPayA: "Non, l'application est pensée pour être mise à disposition de vos clientes par votre institut."
      },
      footer: {
        brandDesc: "Des applications mobiles personnalisées pour les instituts de beauté, spas et centres esthétiques. France · Belgique · Suisse · Luxembourg."
      }
    },
    coiffeur: {
      hero: {
        eyebrow: "La plateforme qui transforme chaque coupe en une relation durable",
        h1: 'Ne soyez plus seulement le coiffeur de vos clients.<br>Devenez leur <span class="serif">référence coiffure.</span>',
        sub: "Votre expertise ne devrait pas s'arrêter lorsqu'un client quitte votre salon. Avec Milappli, restez présent dans son quotidien, entretenez le lien entre deux coupes et devenez naturellement son premier réflexe lorsqu'il pense coiffure."
      },
      features: {
        eyebrow: "Fonctionnalités",
        title: 'Tout ce dont votre salon <span class="serif">a besoin.</span>',
        lead: "Une application complète, pensée pour améliorer l'expérience client et simplifier votre communication au quotidien.",
        items: [
          { title: "Historique des coupes", text: "Chaque client retrouve facilement ses coupes réalisées et vos recommandations." },
          { title: "Suivi des forfaits", text: "Séances utilisées et restantes visibles en un coup d'œil." },
          { title: "Promotions", text: "Vos offres mises en avant au bon moment, au bon endroit." },
          { title: "Notifications push", text: "Rappels, actualités et promotions directement sur le téléphone." },
          { title: "Conseils personnalisés", text: "Vos recommandations capillaires prolongent l'expérience entre deux rendez-vous." },
          { title: "Espace client", text: "Un espace clair où chaque client retrouve l'essentiel." },
          { title: "Réservation / agenda", text: "Une prise de rendez-vous plus fluide selon la formule choisie." },
          { title: "Automatisations marketing", text: "Relances et campagnes pour garder le lien sans y passer des heures." },
          { title: "Support", text: "Un accompagnement humain pour vous aider à prendre en main la solution." }
        ]
      },
      mockup: {
        imgAlt: "Écran d'accueil de l'app - Milappli",
        float1: { title: "Votre coupe du mois vous attend", sub: "notification de votre salon" },
        float2: { title: "Forfait coloration", sub: "3 séances restantes" }
      },
      problem: {
        title: 'Votre relation avec vos clients ne devrait pas s\'arrêter à la porte de <span class="serif">votre salon.</span>',
        lead: "Vous consacrez du temps à écouter, conseiller et coiffer chaque client. Pourtant, une fois le rendez-vous terminé, votre salon disparaît progressivement de son quotidien. Et c'est justement entre deux coupes que se prennent de nombreuses décisions : refaire une coloration, renouveler un soin capillaire, acheter un produit ou découvrir une nouveauté.",
        items: [
          { title: "Les réseaux sociaux ne suffisent plus", text: "Vos publications se perdent rapidement dans le fil d'actualité. Même vos meilleurs clients ne voient pas toujours vos conseils et vos nouveautés." },
          { title: "Vos clients sont sollicités partout", text: "Réseaux sociaux, publicités, influenceurs, Google… entre deux rendez-vous, de nombreuses marques cherchent à attirer leur attention." },
          { title: "Vos offres doivent arriver au bon moment", text: "Une nouvelle coupe, un produit ou une offre n'a d'impact que si votre client la découvre lorsqu'il en a besoin." },
          { title: "Votre expertise mérite de rester présente", text: "Vous connaissez vos clients, leurs besoins et leurs habitudes. Cette relation ne devrait pas disparaître entre deux visites." }
        ]
      },
      reference: {
        eyebrow: "L'idée Milappli",
        title: 'Et si l\'influenceur coiffure de vos clients… <span class="serif">c\'était vous ?</span>',
        lead1: "Chaque jour, vos clients découvrent des conseils, des produits et des tendances auprès de personnes qui ne les connaissent pas. Pourtant, vous connaissez leurs cheveux, leurs habitudes, leurs envies et les coupes qu'ils réalisent.",
        lead2: '<strong style="color:var(--ink); font-weight:500">Avec Milappli, reprenez votre place de référence coiffure.</strong> Partagez vos conseils, vos recommandations, vos nouveautés et votre expertise directement dans l\'univers de votre salon. Vos clients savent où retrouver une information fiable : auprès du professionnel qui les connaît réellement.',
        mockHeaderTitle: "Conseils",
        mockHeaderSub: "Votre référence coiffure",
        post1Title: "3 gestes pour prolonger votre couleur",
        post1Sub: "Les conseils de votre salon pour une coloration éclatante toute la semaine.",
        post2Title: "Notre nouvelle routine soin capillaire",
        post2Sub: "Découvrez le protocole recommandé par votre coiffeur."
      },
      benefits: {
        title: 'Une relation plus forte. Une clientèle <span class="serif">qui revient naturellement.</span>',
        lead: "Milappli ne cherche pas à vous apporter de nouveaux clients. L'objectif est de mieux exploiter et fidéliser celui que vous possédez déjà.",
        items: [
          { title: "Plus de <em>rendez-vous</em>", text: "Un client qui pense régulièrement à son salon pense plus facilement à reprendre rendez-vous." },
          { title: "Plus de coupes et de <em>forfaits terminés</em>", text: "Le suivi et la présence régulière favorisent le retour des clients jusqu'au bout de leur parcours." },
          { title: "Plus de <em>ventes de produits</em>", text: "Vos conseils prolongent la coupe et facilitent la recommandation de produits adaptés." },
          { title: "Plus de <em>fidélité</em>", text: "Le client ne voit plus votre salon comme un lieu ponctuel, mais comme sa référence coiffure." },
          { title: "Une relation <em>directe</em>", text: "Vous communiquez avec votre propre clientèle sans dépendre entièrement d'un réseau social externe, et sans coût supplémentaire." },
          { title: "Une image <em>plus premium</em>", text: "Une application à votre nom rassure et crédibilise votre salon auprès de vos clients." }
        ]
      },
      offers: {
        lead: "Choisissez le niveau d'accompagnement adapté à votre salon. Tarif établi sur devis.",
        essential: {
          sub: "Idéal pour les salons qui veulent renforcer leur image, fidéliser leurs clients et rester visibles entre deux rendez-vous.",
          espaceItem: "Espace client",
          historiqueItem: "Historique des coupes"
        },
        premium: {
          sub: "Idéal pour les salons qui veulent aller plus loin avec réservation, agenda et automatisations marketing."
        }
      },
      faq: {
        installDelay: "Le délai dépend du niveau de personnalisation et des éléments transmis par le salon. Une fois les contenus reçus, nous vous accompagnons dans une mise en place progressive et claire.",
        branding: "Oui. La personnalisation est au cœur de Milappli : votre logo, vos couleurs et vos contenus sont intégrés pour créer une expérience cohérente avec votre salon.",
        clientDownloadQ: "Mes clients doivent-ils télécharger l'application ?",
        clientDownloadA: "Oui, l'objectif est de leur offrir un espace simple et pratique pour retrouver votre salon, vos offres, leurs forfaits et vos conseils.",
        clientPayQ: "Mes clients doivent-ils payer ?",
        clientPayA: "Non, l'application est pensée pour être mise à disposition de vos clients par votre salon."
      },
      footer: {
        brandDesc: "Des applications mobiles personnalisées pour les salons de coiffure, barbershops et espaces capillaires. France · Belgique · Suisse · Luxembourg."
      }
    }
  };

  function getPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function render(profile) {
    const data = PROFILES[profile];
    document.querySelectorAll('[data-p-key]').forEach((el) => {
      const value = getPath(data, el.dataset.pKey);
      if (value == null) return;
      const attr = el.dataset.pAttr;
      if (attr) el.setAttribute(attr, value);
      else if (el.dataset.pHtml === 'true') el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll('.profile-tab').forEach((btn) => {
      btn.setAttribute('aria-selected', String(btn.dataset.profile === profile));
    });
    const tabs = document.querySelector('.profile-switch-tabs');
    if (tabs) tabs.dataset.active = profile;
    document.body.dataset.profile = profile;
  }

  function switchProfile(profile) {
    if (!PROFILES[profile] || profile === document.body.dataset.profile) return;
    try { localStorage.setItem(STORAGE_KEY, profile); } catch (e) {}
    const dynamics = document.querySelectorAll('.profile-dynamic');
    dynamics.forEach((el) => el.classList.add('is-swapping'));
    window.setTimeout(() => {
      render(profile);
      requestAnimationFrame(() => dynamics.forEach((el) => el.classList.remove('is-swapping')));
    }, 200);
  }

  document.addEventListener('DOMContentLoaded', () => {
    let saved = DEFAULT_PROFILE;
    try { saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_PROFILE; } catch (e) {}
    if (!PROFILES[saved]) saved = DEFAULT_PROFILE;
    render(saved);

    document.querySelectorAll('.profile-tab').forEach((btn) => {
      btn.addEventListener('click', () => switchProfile(btn.dataset.profile));
    });
  });
})();
