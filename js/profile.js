(() => {
  const STORAGE_KEY = 'milappli_profile';
  const DEFAULT_PROFILE = 'institut';

  // Un seul objet de config : deux jeux de contenus, même structure de clés.
  // Les sections HTML restent identiques ; seul ce qui est référencé par
  // data-p-key="chemin.vers.la.valeur" est remplacé au changement de profil.
  const PROFILES = {
    institut: {
      meta: {
        title: "Milappli — Votre application mobile pour fidéliser vos clientes"
      },
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
          { title: "Support", text: "Un accompagnement humain pour vous aider à prendre en main la solution." },
          { title: "Carte de fidélité", text: "Chaque visite ou achat rapproche votre cliente d'une récompense, sans carte à perdre." }
        ]
      },
      mockup: {
        float1: { title: "Votre soin Éclat vous attend", sub: "notification de votre institut" },
        float2: { title: "Récompense débloquée !", sub: "−15 € sur votre prochaine visite" }
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
        lead2: '<strong style="color:var(--ink); font-weight:500">Avec Milappli, reprenez votre place de référence beauté.</strong> Partagez vos conseils, vos recommandations, vos nouveautés et votre expertise directement dans l\'univers de votre institut. Vos clientes savent où retrouver une information fiable : auprès de la professionnelle qui les connaît réellement.'
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
      },
      universe: {
        eyebrow: "Elles vous découvrent ailleurs. Elles reviennent chez vous.",
        title: 'Les plateformes peuvent vous aider à être découverte. <span class="serif">Milappli vous aide à ne pas la perdre ensuite.</span>',
        lead: "Les plateformes peuvent vous aider à être découverte. Milappli prend le relais pour construire une relation durable avec les clientes qui vous connaissent déjà.",
        step1: "Elle vous trouve.",
        step2: "Elle vous découvre.",
        step3: "Vous restez présente.",
        step4: "Elle revient."
      },
      solution: {
        title: 'Restez présente, <span class="serif">même entre deux rendez-vous.</span>',
        items: [
          { text: "Partagez routines, recommandations et conseils beauté directement avec vos clientes." },
          { text: "Faites découvrir vos nouveaux soins et produits sans dépendre des algorithmes des réseaux sociaux." },
          { text: "Vos clientes savent toujours où elles en sont et retrouvent facilement leurs séances restantes." },
          { text: "Communiquez directement et restez présente au moment qui compte, par notification push." },
          { text: "Valorisez une prestation, un produit ou une nouveauté auprès de clientes qui connaissent déjà votre institut." },
          { text: "Créez un véritable espace beauté autour de votre expertise et de votre univers." }
        ]
      },
      atYourImage: {
        title: 'Votre univers. Votre expertise. <span class="serif">Votre relation client.</span>',
        lead: "Milappli devient le prolongement digital de votre institut. Votre logo, vos couleurs, vos photos et votre contenu créent un espace immédiatement reconnaissable par vos clientes.",
        items: {
          1: { text: "Une interface adaptée à l'univers visuel de votre institut." },
          2: { text: "Soins, forfaits, conseils et actualités présentés avec votre ton." },
          3: { text: "Vos clientes retrouvent votre institut dans un espace clair, utile et immédiatement reconnaissable." }
        }
      },
      wishlist: {
        title: 'Ses envies, <span class="serif">déjà toutes trouvées.</span>',
        lead: "Votre cliente compose sa wishlist au fil de ses envies — soins, produits ou prestations. Lorsqu'un proche souhaite lui faire plaisir, il peut la consulter et choisir directement ce qui lui correspond.",
        step1: "Elle découvre",
        step2: "Elle ajoute à sa wishlist",
        step4: "Votre institut, destination cadeau",
        tagName: "Wishlist de Camille"
      },
      results: {
        title: 'Une relation qui <span class="serif">se voit.</span>',
        lead: "Le lien que vous entretenez entre deux rendez-vous finit toujours par se voir.",
        items: {
          0: '<strong>Plus de clientes qui reviennent :</strong> le lien entretenu entre deux rendez-vous se traduit naturellement en nouvelles visites.',
          1: '<strong>Une clientèle plus engagée :</strong> vos clientes suivent leurs forfaits, vos actualités et vos conseils au quotidien.',
          2: '<strong>Une relation plus personnelle :</strong> chaque cliente retrouve son parcours et se sent reconnue, pas seulement servie.',
          3: '<strong>Une fréquence de visite plus importante :</strong> les clientes entretiennent leur cure jusqu\'au bout, et les rendez-vous suivants se prennent plus naturellement.',
          4: '<strong>Un fichier client réellement exploité :</strong> les clientes que vous avez déjà reçues restent actives, pas oubliées.'
        }
      },
      reflex: {
        title1: 'Lorsqu\'une cliente pense beauté, <span class="serif">où va-t-elle en premier ?</span>',
        sub: "Google ? Instagram ? Une influenceuse ?",
        lead: "En restant présente entre deux rendez-vous, votre institut devient progressivement l'endroit où vos clientes viennent chercher un soin, un produit, une nouveauté ou simplement un conseil."
      },
      how: {
        items: {
          0: { title: 'Découverte de <em>votre institut</em>' },
          1: { text: "Nous intégrons votre logo, vos couleurs, vos contenus, vos soins et vos forfaits." },
          2: { text: "Votre application est préparée, vérifiée puis mise à disposition de vos clientes." },
          3: { text: "Vous êtes accompagnée dans la prise en main et les ajustements nécessaires." }
        }
      },
      preview: {
        eyebrow: "L'expérience cliente",
        title: 'Découvrez l\'expérience <span class="serif">cliente.</span>',
        card1: { caption: "Votre institut, en un geste" },
        card2: { captionStrong: "Ma fidélité" }
      },
      further: {
        lead: "Milappli fait vivre la relation avec vos clientes. Pour les instituts qui le souhaitent, une solution complémentaire permet d'aller plus loin.",
        stepChoice: "Choix du soin",
        level1: "Vos conseils, vos nouveautés et le suivi de vos forfaits font vivre la relation entre deux rendez-vous et donnent envie à vos clientes de revenir.",
        level2: "De l'envie au prochain rendez-vous, sans quitter votre univers. Vos clientes réservent directement depuis votre application, et vous centralisez la gestion de vos rendez-vous.",
        closing: "Avec ou sans agenda intégré : vous choisissez la formule adaptée à votre institut, au moment de la démonstration."
      },
      devis: {
        title: 'Une solution adaptée <span class="serif">à votre institut.</span>',
        lead: "Chaque institut est unique. Nous établissons un devis sur mesure, sans surprise.",
        factorClients: "Votre nombre de clientes"
      },
      partners: {
        text: "Vous connaissez le monde de la beauté et du bien-être ? Rejoignez notre réseau de partenaires indépendants et présentez Milappli aux instituts de votre région."
      },
      finalCta: {
        title: 'Ne soyez plus seulement l\'esthéticienne de vos clientes.<br>Devenez leur <span class="serif">référence beauté.</span>',
        text: "Transformez chaque rendez-vous en une relation qui continue bien après le soin."
      }
    },
    coiffeur: {
      meta: {
        title: "Milappli — Votre application mobile pour fidéliser vos clients"
      },
      hero: {
        eyebrow: "La plateforme qui transforme chaque coupe en une relation durable",
        h1: 'Bien plus que coiffer vos clientes.<br>Devenez leur <span class="serif">référence pour leurs cheveux.</span>',
        sub: "Vos clientes ne viennent pas seulement chez vous pour une coupe ou une couleur. Elles vous confient leur image, leurs envies et la santé de leurs cheveux.<br><br>Vous connaissez leur cheveu, leur historique, leurs habitudes, leurs problématiques… et parfois même leurs envies de changement avant qu'elles ne sachent vraiment les exprimer.<br><br>Milappli vous permet de transformer cette connaissance en une relation qui continue bien au-delà du rendez-vous.<br><br>Restez présent entre deux visites, partagez vos conseils, recommandez les soins et produits réellement adaptés, inspirez de nouvelles envies et accompagnez les changements de coupe, de couleur ou de style."
      },
      features: {
        eyebrow: "Fonctionnalités",
        title: 'Tout ce dont votre salon <span class="serif">a besoin.</span>',
        lead: "Une application complète, pensée pour améliorer l'expérience client et simplifier votre communication au quotidien.",
        items: [
          { title: "Historique des coupes", text: "Chaque client retrouve facilement ses coupes réalisées et vos recommandations." },
          { title: "Suivi des prestations", text: "Historique des prestations réalisées visible en un coup d'œil." },
          { title: "Promotions", text: "Vos offres mises en avant au bon moment, au bon endroit." },
          { title: "Notifications push", text: "Rappels, actualités et promotions directement sur le téléphone." },
          { title: "Conseils personnalisés", text: "Vos recommandations capillaires prolongent l'expérience entre deux rendez-vous." },
          { title: "Espace client", text: "Un espace clair où chaque client retrouve l'essentiel." },
          { title: "Réservation / agenda", text: "Une prise de rendez-vous plus fluide selon la formule choisie." },
          { title: "Automatisations marketing", text: "Relances et campagnes pour garder le lien sans y passer des heures." },
          { title: "Support", text: "Un accompagnement humain pour vous aider à prendre en main la solution." },
          { title: "Carte de fidélité", text: "Chaque visite ou achat rapproche votre client d'une récompense, sans carte à perdre." }
        ]
      },
      mockup: {
        float1: { title: "Votre coupe du mois vous attend", sub: "notification de votre salon" },
        float2: { title: "Récompense débloquée !", sub: "−15 € sur votre prochaine visite" }
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
        lead2: '<strong style="color:var(--ink); font-weight:500">Avec Milappli, reprenez votre place de référence coiffure.</strong> Partagez vos conseils, vos recommandations, vos nouveautés et votre expertise directement dans l\'univers de votre salon. Vos clients savent où retrouver une information fiable : auprès du professionnel qui les connaît réellement.'
      },
      benefits: {
        title: 'Votre clientèle est votre première <span class="serif">source de chiffre d\'affaires.</span>',
        lead: "Un conseil au bon moment peut déclencher un soin.<br>Une inspiration peut provoquer une envie de changement.<br>Une recommandation personnalisée peut générer une vente de produit.<br>Un échange peut faire naître un nouveau rendez-vous.<br><br>Vous ne vous contentez plus d'attendre que votre cliente revienne. Vous restez son coiffeur, son conseiller et son interlocuteur privilégié entre deux rendez-vous.",
        items: [
          { title: "Plus de <em>rendez-vous</em>", text: "Un client qui pense régulièrement à son salon pense plus facilement à reprendre rendez-vous." },
          { title: "Plus de <em>prestations réalisées</em>", text: "Le suivi et la présence régulière favorisent le retour des clients jusqu'au bout de leur parcours." },
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
        clientDownloadA: "Oui, l'objectif est de leur offrir un espace simple et pratique pour retrouver votre salon, vos offres, leurs rendez-vous et vos conseils.",
        clientPayQ: "Mes clients doivent-ils payer ?",
        clientPayA: "Non, l'application est pensée pour être mise à disposition de vos clients par votre salon."
      },
      footer: {
        brandDesc: "Des applications mobiles personnalisées pour les salons de coiffure, barbershops et espaces capillaires. France · Belgique · Suisse · Luxembourg."
      },
      universe: {
        eyebrow: "Ils vous découvrent ailleurs. Ils reviennent chez vous.",
        title: 'Les plateformes peuvent vous aider à être découvert. <span class="serif">Milappli vous aide à ne pas la perdre ensuite.</span>',
        lead: "Les plateformes peuvent vous aider à être découvert. Milappli prend le relais pour construire une relation durable avec les clients qui vous connaissent déjà.",
        step1: "Il vous trouve.",
        step2: "Il vous découvre.",
        step3: "Vous restez présent.",
        step4: "Il revient."
      },
      solution: {
        title: 'Restez présent, <span class="serif">même entre deux rendez-vous.</span>',
        items: [
          { text: "Partagez routines, recommandations et conseils coiffure directement avec vos clients." },
          { text: "Faites découvrir vos nouvelles coupes et produits sans dépendre des algorithmes des réseaux sociaux." },
          { text: "Vos clients savent toujours où ils en sont et retrouvent facilement leurs séances restantes." },
          { text: "Communiquez directement et restez présent au moment qui compte, par notification push." },
          { text: "Valorisez une prestation, un produit ou une nouveauté auprès de clients qui connaissent déjà votre salon." },
          { text: "Créez un véritable espace coiffure autour de votre expertise et de votre univers." }
        ]
      },
      atYourImage: {
        title: "Une relation personnalisée jusque dans la prise de rendez-vous",
        lead: "Toutes vos clientes sont différentes. Pourquoi leur attribuer systématiquement le même temps pour une même prestation ?<br><br>Avec Milappli, le temps nécessaire peut être personnalisé selon chaque cliente, son cheveu et ses habitudes.<br><br>Vous connaissez mieux votre planning, vous anticipez mieux chaque rendez-vous et vous offrez une expérience réellement personnalisée.",
        items: {
          1: { text: "Une interface adaptée à l'univers visuel de votre salon." },
          2: { text: "Coupes, prestations, conseils et actualités présentés avec votre ton." },
          3: { text: "Vos clients retrouvent votre salon dans un espace clair, utile et immédiatement reconnaissable." }
        }
      },
      wishlist: {
        title: 'Ses envies, <span class="serif">déjà toutes trouvées.</span>',
        lead: "Votre client compose sa wishlist au fil de ses envies — coupes, produits ou prestations. Lorsqu'un proche souhaite lui faire plaisir, il peut la consulter et choisir directement ce qui lui correspond.",
        step1: "Il découvre",
        step2: "Il ajoute à sa wishlist",
        step4: "Votre salon, destination cadeau",
        tagName: "Wishlist de Thomas"
      },
      results: {
        title: 'Reprenez votre place dans le <span class="serif">conseil et la vente.</span>',
        lead: "Vous êtes la personne qui connaît réellement les cheveux de votre cliente.<br><br>Pourtant, une partie importante de ses achats capillaires peut aujourd'hui se faire ailleurs : sites Internet, réseaux sociaux, recommandations extérieures ou vente directe.<br><br>Chaque produit acheté ailleurs est une vente que votre expertise aurait pu générer.<br><br>Milappli vous permet de prolonger votre diagnostic et vos conseils après le rendez-vous : recommandations personnalisées, routines, produits adaptés, nouveautés et conseils d'entretien.<br><br>Vous ne vendez plus simplement un produit. Vous poursuivez l'accompagnement commencé au salon.",
        items: {
          0: '<strong>Plus de clients qui reviennent :</strong> le lien entretenu entre deux rendez-vous se traduit naturellement en nouvelles visites.',
          1: '<strong>Une clientèle plus engagée :</strong> vos clients suivent leurs rendez-vous, vos actualités et vos conseils au quotidien.',
          2: '<strong>Une relation plus personnelle :</strong> chaque client retrouve son parcours et se sent reconnu, pas seulement servi.',
          3: '<strong>Une fréquence de visite plus importante :</strong> les clients reviennent régulièrement, et les rendez-vous suivants se prennent plus naturellement.',
          4: '<strong>Un fichier client réellement exploité :</strong> les clients que vous avez déjà reçus restent actifs, pas oubliés.'
        }
      },
      reflex: {
        title1: "Faites de votre expertise leur premier réflexe",
        sub: "",
        lead: "Une couleur à entretenir, des cheveux fragilisés, une envie de changement, un nouveau style, un problème de cuir chevelu ou simplement besoin d'un bon produit…<br><br>Avant de chercher sur Internet ou de suivre le conseil de quelqu'un qui ne connaît pas ses cheveux, votre cliente devrait penser à vous.<br><br>Milappli crée un lien simple et direct avec elle pour communiquer, conseiller et recommander au bon moment."
      },
      how: {
        items: {
          0: { title: 'Découverte de <em>votre salon</em>' },
          1: { text: "Nous intégrons votre logo, vos couleurs, vos contenus, vos coupes et vos prestations." },
          2: { text: "Votre application est préparée, vérifiée puis mise à disposition de vos clients." },
          3: { text: "Vous êtes accompagné dans la prise en main et les ajustements nécessaires." }
        }
      },
      preview: {
        eyebrow: "L'expérience client",
        title: 'Découvrez l\'expérience <span class="serif">client.</span>',
        card1: { caption: "Votre salon, en un geste" },
        card2: { captionStrong: "Ma fidélité" }
      },
      further: {
        lead: "Milappli fait vivre la relation avec vos clients. Pour les salons qui le souhaitent, une solution complémentaire permet d'aller plus loin.",
        stepChoice: "Choix de la coupe",
        level1: "Vos conseils, vos nouveautés et le suivi de vos rendez-vous font vivre la relation entre deux rendez-vous et donnent envie à vos clients de revenir.",
        level2: "De l'envie au prochain rendez-vous, sans quitter votre univers. Vos clients réservent directement depuis votre application, et vous centralisez la gestion de vos rendez-vous.",
        closing: "Avec ou sans agenda intégré : vous choisissez la formule adaptée à votre salon, au moment de la démonstration."
      },
      devis: {
        title: 'Une solution adaptée <span class="serif">à votre salon.</span>',
        lead: "Chaque salon est unique. Nous établissons un devis sur mesure, sans surprise.",
        factorClients: "Votre nombre de clients"
      },
      partners: {
        text: "Vous connaissez le monde de la coiffure et du bien-être ? Rejoignez notre réseau de partenaires indépendants et présentez Milappli aux salons de votre région."
      },
      finalCta: {
        title: 'Ne soyez plus seulement le coiffeur de vos clients.<br>Devenez leur <span class="serif">référence coiffure.</span>',
        text: "Transformez chaque rendez-vous en une relation qui continue bien après la coupe."
      }
    }
  };

  function getPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function render(profile) {
    const data = PROFILES[profile];
    if (data.meta && data.meta.title) document.title = data.meta.title;
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
