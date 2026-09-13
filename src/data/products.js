// Product categories shown on the Home and Products pages.
// Exactly six categories per the specification — do not add or remove any.
// No prices, brands, specifications, or warranties are stored here by design.

import solarPanelImage from "../assets/images/FB_IMG_1789237426019.jpg";
import inverterImage from "../assets/images/FB_IMG_1789237509357.jpg";
import lithiumBatteryImage from "../assets/images/FB_IMG_1789237435450.jpg";
import leadAcidBatteryImage from "../assets/images/FB_IMG_1789237537095.jpg";
import cablesImage from "../assets/images/FB_IMG_1789237709627.jpg";
import accessoriesImage from "../assets/images/FB_IMG_1789237506547.jpg";

const products = [
  {
    id: "solar-panels",
    icon: "bi-grid-3x3-gap",
    placeholder: "panel",
    image: solarPanelImage,
    name: { ps: "پینلونه سولر", fa: "پنل‌های سولر", en: "Solar Panels" },
    description: {
      ps: "د لوړ کیفیت سولر پینلونه چې د کورونو، دوکانونو او سوداګریزو ځایونو لپاره مناسب دي.",
      fa: "پنل‌های خورشیدی باکیفیت، مناسب برای خانه‌ها، مغازه‌ها و مراکز تجارتی.",
      en: "Quality solar panels suited to homes, shops, and commercial spaces.",
    },
  },
  {
    id: "inverters",
    icon: "bi-cpu",
    placeholder: "inverter",
    image: inverterImage,
    name: { ps: "انورټرونه", fa: "اینورترها", en: "Inverters" },
    description: {
      ps: "د باور وړ انورټرونه چې ستاسو د سولر سیستم د بریښنا اړتیاوې پوره کوي.",
      fa: "اینورترهای مطمئن که نیازهای برقی سیستم سولر شما را برآورده می‌سازند.",
      en: "Reliable inverters that match your solar system's power needs.",
    },
  },
  {
    id: "lithium-batteries",
    icon: "bi-battery-full",
    placeholder: "battery",
    image: lithiumBatteryImage,
    name: { ps: "بیټرۍ لیتیم", fa: "بتری‌های لیتیمی", en: "Lithium Batteries" },
    description: {
      ps: "د لیتیم بیټرۍ چې اوږد عمر او د ذخیرې غوره وړتیا لري.",
      fa: "بتری‌های لیتیمی با عمر طولانی و ظرفیت ذخیره‌سازی مناسب.",
      en: "Lithium batteries offering long service life and dependable storage.",
    },
  },
  {
    id: "lead-acid-batteries",
    icon: "bi-battery-half",
    placeholder: "battery",
    image: leadAcidBatteryImage,
    name: { ps: "بیټرۍ تیزابي", fa: "بتری‌های اسیدی", en: "Lead-Acid Batteries" },
    description: {
      ps: "د تیزابي بیټریو مختلف ډولونه چې د بودجې سره سم انتخاب ورکوي.",
      fa: "بتری‌های اسیدی در گزینه‌های متنوع، متناسب با بودجه شما.",
      en: "A range of lead-acid batteries to match different budgets.",
    },
  },
  {
    id: "cables",
    icon: "bi-plug",
    placeholder: "cable",
    image: cablesImage,
    name: { ps: "کیبلونه", fa: "کیبل‌ها", en: "Cables" },
    description: {
      ps: "مناسب سولر کیبلونه چې خوندي او مؤثره لیږد برېښنا ډاډمنوي.",
      fa: "کیبل‌های مناسب سولر برای انتقال ایمن و مؤثر برق.",
      en: "Solar cabling suited to safe, efficient power transfer.",
    },
  },
  {
    id: "accessories",
    icon: "bi-tools",
    placeholder: "accessory",
    image: accessoriesImage,
    name: { ps: "سولري لوازمات", fa: "لوازم سولر", en: "Accessories" },
    description: {
      ps: "د سولر سیستمونو بشپړونکي لوازمات او فرعي وسایل.",
      fa: "لوازم جانبی و تکمیلی سیستم‌های سولر.",
      en: "Complementary accessories to complete your solar setup.",
    },
  },
];

export default products;
