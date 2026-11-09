// Liste des activités affichées sur l'index général.
// Pour ajouter une activité : ajouter une ligne dans la bonne unité.
//   { titre: "Épeler en français", ar: "التهجئة بالفرنسية", lien: "epeler/", icone: "🔤" }
// Sans « lien », la vignette s'affiche grisée avec « Bientôt ».
// « ar » = traduction arabe affichée sous le titre français.
window.ACTIVITES = [
  { unite: "Bienvenue", uniteAr: "أهلًا وسهلًا", badge: "★", titre: "Découvrir la France", ar: "اكتشف فرنسا", activites: [
    { titre: "La France en images", ar: "فرنسا بالصور", lien: "france/", icone: "🎬" }
  ] },
  { unite: "Unité 0", titre: "Les lettres", ar: "الحروف", activites: [
    { titre: "Épeler en français", ar: "التهجئة بالفرنسية", lien: "epeler/", icone: "🔤" }
  ] },
  { unite: "Unité 1", titre: "Bonjour !", ar: "مرحبًا!", activites: [
    { titre: "La BD : Karim et Youssef", ar: "قصة مصوّرة: كريم ويوسف", lien: "karim-youssef/", icone: "💬" },
    { titre: "À l’accueil de la mairie", ar: "في استقبال البلدية", lien: "accueil-mairie/", icone: "🏛️" }
  ] },
  { unite: "Unité 2", titre: "Quel jour ? Quelle heure ?", ar: "أيّ يوم؟ كم الساعة؟", activites: [] },
  { unite: "Unité 3", titre: "À l'aéroport", ar: "في المطار", activites: [] },
  { unite: "Unité 4", titre: "Je cherche la gare", ar: "أبحث عن محطة القطار", activites: [] },
  { unite: "Unité 5", titre: "À la boulangerie", ar: "في المخبز", activites: [] },
  { unite: "Unité 6", titre: "Au supermarché", ar: "في السوبرماركت", activites: [] },
  { unite: "Unité 7", titre: "J'ai mal", ar: "أشعر بألم", activites: [] },
  { unite: "Unité 8", titre: "Se soigner", ar: "العلاج", activites: [] }
];
