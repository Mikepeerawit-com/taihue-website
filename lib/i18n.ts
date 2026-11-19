export const locales = ["en", "th", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://taihue.com").replace(/\/$/, "");
export const contactEmail = "contact@taihue.com";
export const formAction = `https://formsubmit.co/${contactEmail}`;

export const htmlLang: Record<Locale, string> = { en: "en", th: "th", zh: "zh-Hans" };
export const ogLocale: Record<Locale, string> = { en: "en_US", th: "th_TH", zh: "zh_CN" };
export const localeLabel: Record<Locale, string> = { en: "EN", th: "ไทย", zh: "中文" };

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

const en = {
  companyName: "Taihue International Medical Co., Ltd.",
  brand: "Taihue",
  ui: { menu: "Menu", language: "Language", explore: "Explore" },
  photos: {
    hero: "Interior of a large steel-frame industrial warehouse in Thailand",
    delivery: "Workers unloading wrapped equipment from a shipping container at a factory in Thailand",
    install: "Steel racking beams laid out and being installed inside a factory warehouse",
    materials: "Racking parts sorted in wire mesh trolleys on a factory floor",
  },
  meta: {
    title: "Taihue | Local Thai Sourcing & Procurement for Chinese Factories in Thailand",
    description:
      "Taihue sources, quotes and delivers industrial, MRO, office, canteen and general supplies from Thai suppliers for Chinese factories operating in Thailand. Send us your RFQ.",
  },
  nav: {
    home: "Home",
    services: "Services",
    buyers: "For buyers",
    suppliers: "For suppliers",
    contact: "Contact",
    cta: "Request a quote",
  },
  hero: {
    eyebrow: "Sourcing & procurement in Thailand",
    title: "Local Thai sourcing and procurement for Chinese factories in Thailand",
    lead: "Send us your RFQ. We find the right Thai suppliers, quote, and deliver industrial, MRO, office, canteen and general supplies to your factory.",
    primary: "Request a quote",
    secondary: "Become a supplier",
    points: ["One contact for all your local purchases", "Thai tax invoices and documents", "中文 · ไทย · English"],
  },
  services: {
    title: "What we supply",
    lead: "From a single spare part to a regular monthly order, we handle the everyday purchases that keep a factory running.",
    items: [
      { title: "Industrial supplies", desc: "Consumables and materials for production lines, workshops and warehouses." },
      { title: "MRO & spare parts", desc: "Maintenance, repair and operations items, tools, fittings and replacement parts." },
      { title: "Safety & PPE", desc: "Gloves, masks, footwear, workwear and other on-site safety equipment." },
      { title: "Office supplies", desc: "Stationery, printing supplies, furniture and office equipment." },
      { title: "Canteen & pantry", desc: "Kitchen equipment, utensils, consumables and supplies for staff canteens." },
      { title: "General supplies", desc: "Cleaning products, packaging, dormitory and facility items, and other one-off requests." },
    ],
    note: "Can't see what you need? Send the list anyway. If it can be bought in Thailand, we will look for it.",
  },
  why: {
    title: "Why Taihue",
    lead: "Buying locally is easier with a partner who knows the Thai market and speaks your language.",
    items: [
      { title: "Local supplier network", desc: "We work directly with Thai manufacturers, distributors and wholesalers to find the right source for each item." },
      { title: "Fast quotes", desc: "Send a list, a photo or a spec sheet. We come back with clear pricing and lead times so you can decide quickly." },
      { title: "Thai tax invoices and documents", desc: "Quotations, tax invoices, delivery notes and receipts issued properly in Thailand, ready for your accounting team." },
      { title: "Chinese, Thai and English", desc: "Talk to us in the language you prefer. We handle the communication with Thai suppliers for you." },
    ],
  },
  how: {
    title: "How it works",
    lead: "Four simple steps from request to delivery.",
    steps: [
      { title: "RFQ", desc: "Send us your request: item list, specifications, quantities, photos or an existing file." },
      { title: "Quote", desc: "We source from Thai suppliers and send you a quotation with prices and lead times." },
      { title: "PO", desc: "Confirm the quotation and issue your purchase order." },
      { title: "Delivery", desc: "We arrange delivery to your factory, with the tax invoice and documents." },
    ],
  },
  form: {
    company: "Company name",
    contact: "Contact name",
    email: "Email",
    phone: "Phone",
    optional: "optional",
    fileHint: "Excel, PDF or image. Max 5 MB.",
    honeypot: "Leave this field empty",
  },
  quote: {
    title: "Request a quote",
    lead: "Tell us what you need. Attach your RFQ file or a photo if you have one, and we will reply by email.",
    items: "Items / description",
    itemsPlaceholder: "Item names, specifications, brands, quantities, delivery location…",
    file: "Attach a file",
    submit: "Send request",
    subject: "Quote request from taihue.com",
  },
  supplier: {
    title: "Sell through Taihue",
    lead: "Are you a Thai manufacturer, distributor or wholesaler? Register your company and we will contact you when a request matches your products.",
    categories: "Product categories",
    categoriesPlaceholder: "e.g. hand tools, PPE, packaging, electrical parts, cleaning products…",
    location: "Province / location",
    file: "Company profile or catalogue",
    submit: "Register as a supplier",
    subject: "Supplier sign-up from taihue.com",
  },
  choose: {
    title: "How can we help you?",
    lead: "Choose the path that fits you.",
    buyer: {
      tag: "For buyers / factories",
      title: "Request a quote",
      points: ["Send your RFQ, item list or a photo", "Get a quotation with prices and lead times", "Delivery to your factory with a Thai tax invoice"],
      button: "Request a quote",
    },
    supplier: {
      tag: "For suppliers",
      title: "Become a supplier",
      points: ["Receive requests from Chinese factories in Thailand", "One contact for RFQs and purchase orders", "Communicate in Thai, English or Chinese"],
      button: "Become a supplier",
    },
  },
  quotePage: {
    metaTitle: "Request a Quote | Taihue, Local Purchasing for Chinese Factories in Thailand",
    metaDescription:
      "Send your RFQ to Taihue. We source from Thai suppliers, quote, and deliver to your factory in Thailand with Thai tax invoices. Chinese, Thai and English.",
    eyebrow: "For buyers / factories",
    title: "Request a quote for your factory in Thailand",
    lead: "Taihue helps Chinese factories in Thailand buy locally. Send us your RFQ in Chinese, Thai or English. We source from Thai suppliers, quote, and deliver with Thai tax invoices.",
    toForm: "Go to the form",
    howTitle: "How quoting works",
  },
  supplierPage: {
    metaTitle: "Become a Supplier | Taihue, Sell to Chinese Factories in Thailand",
    metaDescription:
      "Thai manufacturers, distributors and wholesalers: register as a Taihue supplier to receive requests from Chinese factories in Thailand. One contact, in Thai, English or Chinese.",
    eyebrow: "For suppliers",
    title: "Sell to Chinese factories in Thailand through Taihue",
    lead: "Taihue buys from Thai manufacturers, distributors and wholesalers on behalf of Chinese factories operating in Thailand. Register your company and we will send you the requests that match your products.",
    toForm: "Register now",
    whyTitle: "Why sell through Taihue",
    whyLead: "We bring the requests to you and handle the communication with the factory.",
    why: [
      { title: "Steady orders from Chinese factories", desc: "Factories need supplies all year round. When a request matches your products, we come to you for a quotation." },
      { title: "One contact", desc: "You deal with Taihue only. We send the RFQ, issue the purchase order and coordinate the delivery." },
      { title: "Thai, English or Chinese", desc: "Work with us in Thai or English. We take care of the communication with Chinese-speaking buyers." },
    ],
    needTitle: "What we need from suppliers",
    needLead: "A few basics, so we can quote quickly and deliver properly.",
    needs: [
      { title: "A Thai company", desc: "A company or business registered in Thailand that we can buy from directly." },
      { title: "Tax invoice", desc: "You can issue a full Thai tax invoice with every order." },
      { title: "Stock and lead time", desc: "Tell us clearly what is in stock and how long delivery takes, so we can quote the factory accurately." },
    ],
    formTitle: "Supplier sign-up",
  },
  contact: {
    title: "Contact us",
    lead: "Questions, RFQs or supplier enquiries. Write to us in Chinese, Thai or English.",
    emailLabel: "Email",
  },
  footer: {
    tagline: "Local Thai sourcing and procurement for Chinese factories in Thailand.",
    rights: "All rights reserved.",
  },
  thanks: {
    title: "Thank you. We have received your message.",
    body: "Our team will review it and reply to you by email. If it is urgent, write to us directly at",
    back: "Back to home",
  },
};

export type Dictionary = typeof en;

const th: Dictionary = {
  companyName: "บริษัท ไทหือ อินเตอร์เนชั่นแนล เมดิเคิล จำกัด",
  brand: "Taihue",
  ui: { menu: "เมนู", language: "ภาษา", explore: "เมนูหลัก" },
  photos: {
    hero: "ภายในคลังสินค้าอุตสาหกรรมโครงสร้างเหล็กขนาดใหญ่ในประเทศไทย",
    delivery: "พนักงานกำลังขนถ่ายอุปกรณ์ที่ห่อหุ้มไว้ออกจากตู้คอนเทนเนอร์ที่โรงงานในประเทศไทย",
    install: "คานชั้นวางเหล็กที่จัดเรียงและกำลังติดตั้งภายในคลังสินค้าของโรงงาน",
    materials: "ชิ้นส่วนชั้นวางที่คัดแยกไว้ในรถเข็นตะแกรงเหล็กบนพื้นโรงงาน",
  },
  meta: {
    title: "Taihue ไทหือ | จัดหาและจัดซื้อสินค้าในไทยสำหรับโรงงานจีนในประเทศไทย",
    description:
      "ไทหือ จัดหา เสนอราคา และจัดส่งสินค้าอุตสาหกรรม MRO อุปกรณ์สำนักงาน ของใช้โรงอาหาร และสินค้าทั่วไปจากซัพพลายเออร์ไทย ให้โรงงานจีนในประเทศไทย ส่ง RFQ มาได้เลย",
  },
  nav: {
    home: "หน้าแรก",
    services: "บริการ",
    buyers: "สำหรับผู้ซื้อ",
    suppliers: "สำหรับซัพพลายเออร์",
    contact: "ติดต่อ",
    cta: "ขอใบเสนอราคา",
  },
  hero: {
    eyebrow: "จัดหาและจัดซื้อในประเทศไทย",
    title: "จัดหาและจัดซื้อสินค้าในไทย สำหรับโรงงานจีนในประเทศไทย",
    lead: "ส่ง RFQ มาให้เรา เราหาซัพพลายเออร์ไทยที่เหมาะสม เสนอราคา และจัดส่งสินค้าอุตสาหกรรม MRO อุปกรณ์สำนักงาน ของใช้โรงอาหาร และสินค้าทั่วไปถึงโรงงานของคุณ",
    primary: "ขอใบเสนอราคา",
    secondary: "สมัครเป็นซัพพลายเออร์",
    points: ["ติดต่อที่เดียว ครบทุกรายการจัดซื้อในประเทศ", "ใบกำกับภาษีและเอกสารไทยครบถ้วน", "中文 · ไทย · English"],
  },
  services: {
    title: "สินค้าที่เราจัดหา",
    lead: "ตั้งแต่อะไหล่ชิ้นเดียวไปจนถึงคำสั่งซื้อประจำทุกเดือน เราดูแลการจัดซื้อประจำวันที่ทำให้โรงงานเดินหน้าได้ไม่สะดุด",
    items: [
      { title: "สินค้าอุตสาหกรรม", desc: "วัสดุสิ้นเปลืองและวัสดุสำหรับสายการผลิต งานช่าง และคลังสินค้า" },
      { title: "MRO และอะไหล่", desc: "สินค้าสำหรับงานซ่อมบำรุง เครื่องมือ ข้อต่อ และอะไหล่ทดแทน" },
      { title: "อุปกรณ์เซฟตี้และ PPE", desc: "ถุงมือ หน้ากาก รองเท้านิรภัย ชุดปฏิบัติงาน และอุปกรณ์ความปลอดภัยอื่น ๆ" },
      { title: "อุปกรณ์สำนักงาน", desc: "เครื่องเขียน วัสดุการพิมพ์ เฟอร์นิเจอร์ และอุปกรณ์สำนักงาน" },
      { title: "โรงอาหารและแพนทรี", desc: "อุปกรณ์ครัว ภาชนะ วัสดุสิ้นเปลือง และของใช้สำหรับโรงอาหารพนักงาน" },
      { title: "สินค้าทั่วไป", desc: "ผลิตภัณฑ์ทำความสะอาด บรรจุภัณฑ์ ของใช้ในหอพักและอาคาร รวมถึงรายการเฉพาะกิจอื่น ๆ" },
    ],
    note: "ไม่เห็นสินค้าที่ต้องการ? ส่งรายการมาได้เลย ถ้าหาซื้อได้ในไทย เราจะช่วยหาให้",
  },
  why: {
    title: "ทำไมต้องไทหือ",
    lead: "การซื้อของในประเทศง่ายขึ้น เมื่อมีพาร์ตเนอร์ที่รู้จักตลาดไทยและพูดภาษาเดียวกับคุณ",
    items: [
      { title: "เครือข่ายซัพพลายเออร์ในไทย", desc: "เราทำงานโดยตรงกับผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย เพื่อหาแหล่งที่เหมาะกับสินค้าแต่ละรายการ" },
      { title: "เสนอราคารวดเร็ว", desc: "ส่งรายการ รูปถ่าย หรือสเปกมาให้เรา เราแจ้งราคาและระยะเวลาส่งมอบอย่างชัดเจน ให้คุณตัดสินใจได้เร็ว" },
      { title: "ใบกำกับภาษีและเอกสารไทย", desc: "ใบเสนอราคา ใบกำกับภาษี ใบส่งของ และใบเสร็จรับเงิน ออกถูกต้องในประเทศไทย พร้อมสำหรับฝ่ายบัญชีของคุณ" },
      { title: "สื่อสารได้ทั้งจีน ไทย และอังกฤษ", desc: "คุยกับเราด้วยภาษาที่คุณถนัด ส่วนการประสานงานกับซัพพลายเออร์ไทย เราจัดการให้" },
    ],
  },
  how: {
    title: "ขั้นตอนการทำงาน",
    lead: "สี่ขั้นตอนง่าย ๆ จากคำขอถึงการส่งมอบ",
    steps: [
      { title: "RFQ", desc: "ส่งคำขอของคุณ: รายการสินค้า สเปก จำนวน รูปถ่าย หรือไฟล์ที่มีอยู่แล้ว" },
      { title: "ใบเสนอราคา", desc: "เราจัดหาจากซัพพลายเออร์ไทย และส่งใบเสนอราคาพร้อมราคาและระยะเวลาส่งมอบ" },
      { title: "PO", desc: "ยืนยันใบเสนอราคาและออกใบสั่งซื้อ" },
      { title: "จัดส่ง", desc: "เราจัดส่งถึงโรงงานของคุณ พร้อมใบกำกับภาษีและเอกสาร" },
    ],
  },
  form: {
    company: "ชื่อบริษัท",
    contact: "ชื่อผู้ติดต่อ",
    email: "อีเมล",
    phone: "โทรศัพท์",
    optional: "ไม่บังคับ",
    fileHint: "ไฟล์ Excel, PDF หรือรูปภาพ ขนาดไม่เกิน 5 MB",
    honeypot: "กรุณาเว้นช่องนี้ว่างไว้",
  },
  quote: {
    title: "ขอใบเสนอราคา",
    lead: "บอกเราว่าคุณต้องการอะไร แนบไฟล์ RFQ หรือรูปถ่ายได้ถ้ามี แล้วเราจะตอบกลับทางอีเมล",
    items: "รายการสินค้า / รายละเอียด",
    itemsPlaceholder: "ชื่อสินค้า สเปก ยี่ห้อ จำนวน สถานที่จัดส่ง…",
    file: "แนบไฟล์",
    submit: "ส่งคำขอ",
    subject: "Quote request from taihue.com (TH)",
  },
  supplier: {
    title: "ขายสินค้าผ่านไทหือ",
    lead: "คุณเป็นผู้ผลิต ตัวแทนจำหน่าย หรือผู้ค้าส่งในไทยใช่ไหม ลงทะเบียนบริษัทของคุณไว้ เราจะติดต่อกลับเมื่อมีคำขอที่ตรงกับสินค้าของคุณ",
    categories: "หมวดหมู่สินค้า",
    categoriesPlaceholder: "เช่น เครื่องมือช่าง PPE บรรจุภัณฑ์ อะไหล่ไฟฟ้า ผลิตภัณฑ์ทำความสะอาด…",
    location: "จังหวัด / ที่ตั้ง",
    file: "โปรไฟล์บริษัทหรือแค็ตตาล็อก",
    submit: "ลงทะเบียนเป็นซัพพลายเออร์",
    subject: "Supplier sign-up from taihue.com (TH)",
  },
  choose: {
    title: "เราช่วยอะไรคุณได้บ้าง",
    lead: "เลือกเส้นทางที่ตรงกับคุณ",
    buyer: {
      tag: "สำหรับผู้ซื้อ / โรงงาน",
      title: "ขอใบเสนอราคา",
      points: ["ส่ง RFQ รายการสินค้า หรือรูปถ่ายมาได้เลย", "รับใบเสนอราคาพร้อมราคาและระยะเวลาส่งมอบ", "จัดส่งถึงโรงงาน พร้อมใบกำกับภาษีไทย"],
      button: "ขอใบเสนอราคา",
    },
    supplier: {
      tag: "สำหรับซัพพลายเออร์",
      title: "สมัครเป็นซัพพลายเออร์",
      points: ["รับคำขอซื้อจากโรงงานจีนในประเทศไทย", "ติดต่อที่เดียว ทั้ง RFQ และใบสั่งซื้อ", "สื่อสารได้ทั้งภาษาไทย อังกฤษ และจีน"],
      button: "สมัครเป็นซัพพลายเออร์",
    },
  },
  quotePage: {
    metaTitle: "ขอใบเสนอราคา | Taihue ไทหือ จัดซื้อในไทยสำหรับโรงงานจีน",
    metaDescription:
      "ส่ง RFQ ให้ไทหือ เราจัดหาจากซัพพลายเออร์ไทย เสนอราคา และจัดส่งถึงโรงงานของคุณในประเทศไทย พร้อมใบกำกับภาษีไทย ติดต่อได้ทั้งภาษาจีน ไทย และอังกฤษ",
    eyebrow: "สำหรับผู้ซื้อ / โรงงาน",
    title: "ขอใบเสนอราคาสำหรับโรงงานของคุณในประเทศไทย",
    lead: "ไทหือช่วยโรงงานจีนในประเทศไทยจัดซื้อสินค้าในประเทศ ส่ง RFQ มาได้ทั้งภาษาจีน ไทย หรืออังกฤษ เราจัดหาจากซัพพลายเออร์ไทย เสนอราคา และจัดส่งพร้อมใบกำกับภาษีไทย",
    toForm: "ไปที่แบบฟอร์ม",
    howTitle: "ขั้นตอนการขอใบเสนอราคา",
  },
  supplierPage: {
    metaTitle: "สมัครเป็นซัพพลายเออร์ | Taihue ไทหือ ขายสินค้าให้โรงงานจีนในไทย",
    metaDescription:
      "ผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย ลงทะเบียนเป็นซัพพลายเออร์ของไทหือ เพื่อรับคำขอซื้อจากโรงงานจีนในประเทศไทย ติดต่อที่เดียว สื่อสารได้ทั้งภาษาไทย อังกฤษ และจีน",
    eyebrow: "สำหรับซัพพลายเออร์",
    title: "ขายสินค้าให้โรงงานจีนในประเทศไทยผ่านไทหือ",
    lead: "ไทหือจัดซื้อสินค้าจากผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย ให้กับโรงงานจีนที่ดำเนินกิจการในประเทศไทย ลงทะเบียนบริษัทของคุณไว้ แล้วเราจะส่งคำขอที่ตรงกับสินค้าของคุณให้",
    toForm: "ลงทะเบียนเลย",
    whyTitle: "ทำไมควรขายผ่านไทหือ",
    whyLead: "เรานำคำขอซื้อมาให้คุณ และดูแลการสื่อสารกับโรงงานให้",
    why: [
      { title: "คำสั่งซื้อต่อเนื่องจากโรงงานจีน", desc: "โรงงานต้องใช้สินค้าตลอดทั้งปี เมื่อมีคำขอที่ตรงกับสินค้าของคุณ เราจะติดต่อขอใบเสนอราคาจากคุณ" },
      { title: "ติดต่อที่เดียว", desc: "คุณประสานงานกับไทหือเพียงที่เดียว เราส่ง RFQ ออกใบสั่งซื้อ และประสานการจัดส่ง" },
      { title: "ไทย อังกฤษ หรือจีน", desc: "ทำงานกับเราเป็นภาษาไทยหรืออังกฤษได้เลย ส่วนการสื่อสารกับผู้ซื้อที่ใช้ภาษาจีน เราดูแลให้" },
    ],
    needTitle: "สิ่งที่เราต้องการจากซัพพลายเออร์",
    needLead: "ข้อมูลพื้นฐานไม่กี่อย่าง เพื่อให้เราเสนอราคาได้เร็วและส่งมอบได้ถูกต้อง",
    needs: [
      { title: "บริษัทไทย", desc: "เป็นบริษัทหรือกิจการที่จดทะเบียนในประเทศไทย ซึ่งเราสั่งซื้อได้โดยตรง" },
      { title: "ใบกำกับภาษี", desc: "ออกใบกำกับภาษีเต็มรูปได้ทุกคำสั่งซื้อ" },
      { title: "สต็อกและระยะเวลาส่งมอบ", desc: "แจ้งให้ชัดเจนว่ามีสินค้าในสต็อกหรือไม่ และใช้เวลาส่งมอบนานเท่าไร เพื่อให้เราเสนอราคาให้โรงงานได้แม่นยำ" },
    ],
    formTitle: "ลงทะเบียนซัพพลายเออร์",
  },
  contact: {
    title: "ติดต่อเรา",
    lead: "สอบถามข้อมูล ส่ง RFQ หรือติดต่อเรื่องซัพพลายเออร์ เขียนถึงเราได้ทั้งภาษาจีน ไทย หรืออังกฤษ",
    emailLabel: "อีเมล",
  },
  footer: {
    tagline: "จัดหาและจัดซื้อสินค้าในไทย สำหรับโรงงานจีนในประเทศไทย",
    rights: "สงวนลิขสิทธิ์",
  },
  thanks: {
    title: "ขอบคุณ เราได้รับข้อความของคุณแล้ว",
    body: "ทีมงานจะตรวจสอบและตอบกลับทางอีเมล หากเป็นเรื่องเร่งด่วน เขียนถึงเราโดยตรงได้ที่",
    back: "กลับหน้าแรก",
  },
};

const zh: Dictionary = {
  companyName: "Taihue International Medical Co., Ltd.",
  brand: "Taihue",
  ui: { menu: "菜单", language: "语言", explore: "导航" },
  photos: {
    hero: "泰国大型钢结构工业仓库内部",
    delivery: "工人在泰国工厂从集装箱卸下包装好的设备",
    install: "工厂仓库内摆放并正在安装的钢制货架横梁",
    materials: "工厂地面上分类放在铁丝网周转车里的货架配件",
  },
  meta: {
    title: "Taihue | 在泰中资工厂的本地寻源与采购服务",
    description:
      "Taihue 为在泰国运营的中资工厂提供本地采购服务：对接泰国供应商，报价并配送工业用品、MRO、办公用品、食堂用品及各类日常物资。欢迎发送询价单。",
  },
  nav: {
    home: "首页",
    services: "服务范围",
    buyers: "采购方",
    suppliers: "供应商",
    contact: "联系我们",
    cta: "获取报价",
  },
  hero: {
    eyebrow: "泰国本地寻源与采购",
    title: "为在泰中资工厂提供泰国本地寻源与采购服务",
    lead: "把询价单发给我们。我们为您寻找合适的泰国供应商、报价，并将工业用品、MRO、办公用品、食堂用品及各类日常物资送到工厂。",
    primary: "获取报价",
    secondary: "成为供应商",
    points: ["本地采购，一个窗口全部对接", "提供泰国税务发票及相关单据", "中文 · ไทย · English"],
  },
  services: {
    title: "供应品类",
    lead: "小到一个备件，大到每月固定订单，工厂日常运转所需的采购都可以交给我们。",
    items: [
      { title: "工业用品", desc: "生产线、车间和仓库所需的耗材与物料。" },
      { title: "MRO 与备品备件", desc: "维护、维修和运行所需的物品、工具、管件及替换零件。" },
      { title: "劳保与安全用品", desc: "手套、口罩、安全鞋、工作服及其他现场安全防护用品。" },
      { title: "办公用品", desc: "文具、打印耗材、办公家具及办公设备。" },
      { title: "食堂与茶水间用品", desc: "厨房设备、餐具、耗材及员工食堂所需物资。" },
      { title: "综合物资", desc: "清洁用品、包装材料、宿舍及厂区用品，以及其他临时性需求。" },
    ],
    note: "没有找到您需要的品类？直接把清单发给我们。只要在泰国能买到，我们就帮您找。",
  },
  why: {
    title: "为什么选择 Taihue",
    lead: "有一个熟悉泰国市场、又能用中文沟通的伙伴，本地采购会轻松很多。",
    items: [
      { title: "本地供应商网络", desc: "我们直接对接泰国的生产厂家、经销商和批发商，为每一项物品寻找合适的货源。" },
      { title: "报价迅速", desc: "发来清单、照片或规格书即可。我们会给出清晰的价格和交期，方便您尽快决定。" },
      { title: "泰国税务发票与单据", desc: "报价单、税务发票、送货单和收据均在泰国合规开具，方便财务入账。" },
      { title: "中文、泰语、英语沟通", desc: "用您习惯的语言与我们沟通，与泰国供应商的对接由我们负责。" },
    ],
  },
  how: {
    title: "合作流程",
    lead: "从询价到交货，只需四步。",
    steps: [
      { title: "询价 RFQ", desc: "发送您的需求：物品清单、规格、数量、照片或现有文件。" },
      { title: "报价", desc: "我们向泰国供应商寻源，并向您提供包含价格和交期的报价单。" },
      { title: "下单 PO", desc: "确认报价后，下达采购订单。" },
      { title: "交货", desc: "我们安排送货到厂，并随货提供税务发票及相关单据。" },
    ],
  },
  form: {
    company: "公司名称",
    contact: "联系人",
    email: "电子邮箱",
    phone: "电话",
    optional: "选填",
    fileHint: "支持 Excel、PDF 或图片，不超过 5 MB。",
    honeypot: "请勿填写此栏",
  },
  quote: {
    title: "获取报价",
    lead: "告诉我们您的需求。如有询价单或照片，可一并上传，我们会通过邮件回复。",
    items: "物品 / 需求说明",
    itemsPlaceholder: "品名、规格、品牌、数量、送货地点……",
    file: "上传附件",
    submit: "提交询价",
    subject: "Quote request from taihue.com (ZH)",
  },
  supplier: {
    title: "通过 Taihue 销售",
    lead: "您是泰国的生产厂家、经销商或批发商吗？欢迎登记贵公司信息，有匹配的需求时我们会与您联系。",
    categories: "产品类别",
    categoriesPlaceholder: "例如：手动工具、劳保用品、包装材料、电气配件、清洁用品……",
    location: "府 / 所在地",
    file: "公司简介或产品目录",
    submit: "登记成为供应商",
    subject: "Supplier sign-up from taihue.com (ZH)",
  },
  choose: {
    title: "我们能为您做什么？",
    lead: "请选择适合您的入口。",
    buyer: {
      tag: "采购方 / 工厂",
      title: "获取报价",
      points: ["发送询价单、物品清单或照片", "收到包含价格和交期的报价单", "送货到厂，并提供泰国税务发票"],
      button: "获取报价",
    },
    supplier: {
      tag: "供应商",
      title: "成为供应商",
      points: ["承接在泰中资工厂的采购需求", "询价和订单由一个窗口对接", "可用泰语、英语或中文沟通"],
      button: "成为供应商",
    },
  },
  quotePage: {
    metaTitle: "获取报价 | Taihue 在泰中资工厂本地采购",
    metaDescription:
      "把询价单发给 Taihue：我们向泰国供应商寻源、报价并送货到厂，提供泰国税务发票。支持中文、泰语、英语沟通。",
    eyebrow: "采购方 / 工厂",
    title: "为您在泰国的工厂获取报价",
    lead: "Taihue 帮助在泰中资工厂完成本地采购。您可以用中文、泰语或英语发送询价单，我们向泰国供应商寻源、报价，并送货到厂、提供泰国税务发票。",
    toForm: "填写询价表",
    howTitle: "报价流程",
  },
  supplierPage: {
    metaTitle: "成为供应商 | Taihue 向在泰中资工厂供货",
    metaDescription:
      "泰国的生产厂家、经销商和批发商可登记成为 Taihue 供应商，承接在泰中资工厂的采购需求。一个窗口对接，支持泰语、英语和中文沟通。",
    eyebrow: "供应商",
    title: "通过 Taihue 向在泰中资工厂供货",
    lead: "Taihue 代表在泰国运营的中资工厂，向泰国的生产厂家、经销商和批发商采购。登记贵公司信息后，有匹配的需求我们会发给您。",
    toForm: "立即登记",
    whyTitle: "为什么通过 Taihue 销售",
    whyLead: "我们把采购需求带给您，并负责与工厂的沟通。",
    why: [
      { title: "来自中资工厂的持续订单", desc: "工厂全年都有物资需求。有与您产品匹配的需求时，我们会向您询价。" },
      { title: "一个窗口对接", desc: "您只需对接 Taihue：询价、采购订单和送货安排都由我们统一协调。" },
      { title: "泰语、英语或中文", desc: "您可以用泰语或英语与我们合作，与中文买家的沟通由我们负责。" },
    ],
    needTitle: "我们对供应商的要求",
    needLead: "只需几项基本条件，方便我们快速报价、顺利交货。",
    needs: [
      { title: "泰国公司", desc: "在泰国注册的公司或商户，我们可以直接向其采购。" },
      { title: "税务发票", desc: "每笔订单均可开具泰国正式税务发票。" },
      { title: "库存与交期", desc: "明确告知是否有现货以及交货所需时间，方便我们向工厂准确报价。" },
    ],
    formTitle: "供应商登记",
  },
  contact: {
    title: "联系我们",
    lead: "咨询、询价或供应商合作，欢迎用中文、泰语或英语给我们来信。",
    emailLabel: "电子邮箱",
  },
  footer: {
    tagline: "为在泰中资工厂提供泰国本地寻源与采购服务。",
    rights: "版权所有。",
  },
  thanks: {
    title: "谢谢，我们已收到您的信息。",
    body: "我们的团队会尽快查看并通过邮件回复。如有紧急需求，请直接来信：",
    back: "返回首页",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, th, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
