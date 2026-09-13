// Services shown on the Home and Services pages.
// Exactly five services per the specification — do not add a separate
// generic "Maintenance" category; after-installation support is a company
// strength, mentioned elsewhere, not a sixth service.

const services = [
  {
    id: "system-design",
    icon: "bi-vector-pen",
    name: { ps: "د سولر سیستم ډیزاین", fa: "طراحی سیستم سولر", en: "Solar System Design" },
    description: {
      ps: "ستاسو د اړتیاوو سره سم د سولر سیستم مسلکي پلان جوړونه.",
      fa: "طراحی حرفه‌ای سیستم سولر متناسب با نیازهای شما.",
      en: "Professional solar system planning tailored to your needs.",
    },
  },
  {
    id: "installation",
    icon: "bi-tools",
    name: { ps: "مسلکي نصب", fa: "نصب حرفه‌ای", en: "Professional Installation" },
    description: {
      ps: "زموږ مسلکي ټیم ستاسو سولر سیستم په خوندي او دقیق ډول نصبوي.",
      fa: "تیم مسلکی ما سیستم سولر شما را به شکل ایمن و دقیق نصب می‌کند.",
      en: "Our trained team installs your solar system safely and precisely.",
    },
  },
  {
    id: "repair-troubleshooting",
    icon: "bi-wrench-adjustable",
    name: { ps: "ترمیم او عیبیابي", fa: "ترمیم و عیب‌یابی", en: "Repair & Troubleshooting" },
    description: {
      ps: "د سولر سیستمونو د عیبونو ښه کول او د ستونزو حل کول.",
      fa: "رفع نواقص و حل مشکلات سیستم‌های سولر.",
      en: "Diagnosing and resolving issues in existing solar systems.",
    },
  },
  {
    id: "electrical-technical",
    icon: "bi-lightning-charge",
    name: { ps: "برېښنایي او تخنیکي خدمات", fa: "خدمات برقی و تخنیکی", en: "Electrical & Technical Services" },
    description: {
      ps: "بشپړ برېښنایي او تخنیکي خدمات چې ستاسو د سولر سیستم بشپړوي.",
      fa: "خدمات کامل برقی و تخنیکی مکمل کننده سیستم سولر شما.",
      en: "Complementary electrical and technical work to complete your setup.",
    },
  },
  {
    id: "full-scale-projects",
    icon: "bi-building",
    name: {
      ps: "د کورونو، دوکانونو، شرکتونو او لویو پروژو سولري سیستمونه",
      fa: "سیستم‌های سولر برای خانه‌ها، مغازه‌ها، شرکت‌ها و پروژه‌های بزرگ",
      en: "Solar Systems for Homes, Shops, Companies & Large Projects",
    },
    description: {
      ps: "د بېلابېلو کچو سولر حلونه، له کوچني کور څخه تر لویو سوداګریزو پروژو پورې.",
      fa: "راه‌حل‌های سولر در مقیاس‌های مختلف، از خانه‌های کوچک تا پروژه‌های بزرگ تجارتی.",
      en: "Solar solutions at every scale, from small homes to large commercial projects.",
    },
  },
];

export default services;
