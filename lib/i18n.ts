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
  ui: { menu: "Menu", language: "Language", explore: "Pages" },
  photos: {
    hero: "Interior of a large steel-frame industrial warehouse in Thailand",
    delivery: "Workers unloading wrapped equipment from a shipping container at a factory in Thailand",
    install: "Steel racking beams laid out and being installed inside a factory warehouse",
    materials: "Racking parts sorted in wire mesh trolleys on a factory floor",
  },
  meta: {
    title: "Taihue | Industrial and Medical Supplies from Thai Suppliers for Factories in Thailand",
    description:
      "Taihue buys industrial and medical supplies from Thai suppliers for factories in Thailand, including Chinese-owned factories. We send RFQs, quote, take your PO, coordinate delivery and issue Thai tax invoices.",
  },
  nav: {
    home: "Home",
    services: "What we supply",
    quote: "Request a quote",
    suppliers: "For suppliers",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Procurement company in Thailand",
    title: "Industrial and medical supplies from Thai suppliers, delivered to your factory",
    lead: "Taihue buys for factories in Thailand, including Chinese-owned factories. Send us your RFQ. We get prices from Thai suppliers, send you one quotation, and coordinate delivery once you issue the PO.",
    primary: "Request a quote",
    secondary: "Become a supplier",
  },
  services: {
    title: "What we supply",
    lead: "One-off items and regular orders in these categories.",
    items: [
      { title: "Industrial supplies", desc: "Consumables and materials for production lines, workshops and warehouses." },
      { title: "MRO and spare parts", desc: "Maintenance items, tools, fittings and replacement parts." },
      { title: "Medical supplies", desc: "Medical consumables and equipment. Send us the item list or specification." },
      { title: "Safety and PPE", desc: "Gloves, masks, safety shoes and workwear." },
      { title: "Office supplies", desc: "Stationery, printing supplies, furniture and office equipment." },
      { title: "Canteen and pantry", desc: "Kitchen equipment, utensils and consumables for staff canteens." },
      { title: "General supplies", desc: "Cleaning products, packaging, dormitory and facility items." },
    ],
    note: "Not on this list? Send it anyway. If it is sold in Thailand, we will look for it.",
  },
  why: {
    title: "What we handle",
    items: [
      { title: "Thai suppliers", desc: "We send your request to Thai manufacturers, distributors and wholesalers and get their prices for each item." },
      { title: "One quotation", desc: "Send a list, a photo or a spec sheet. Our quotation shows the price and lead time for each item." },
      { title: "Thai tax documents", desc: "We issue the quotation, tax invoice, delivery note and receipt in Thailand for your accounting team." },
      { title: "Chinese, Thai and English", desc: "Write to us in any of the three. We talk to the Thai suppliers." },
    ],
  },
  how: {
    title: "From RFQ to delivery",
    steps: [
      { title: "RFQ", desc: "You send the item list, specifications and quantities. Photos or an existing file are fine." },
      { title: "Quotation", desc: "We get prices from Thai suppliers and send you a quotation with prices and lead times." },
      { title: "PO", desc: "You confirm the quotation and issue your purchase order." },
      { title: "Delivery", desc: "We coordinate delivery to your factory and send the tax invoice and delivery note." },
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
    lead: "List the items you need. Attach your RFQ file or photos if you have them. We reply by email.",
    points: ["One vendor for your local purchases", "Quotation, tax invoice, delivery note and receipt", "Chinese, Thai or English"],
    items: "Items / description",
    itemsPlaceholder: "Item names, specifications, brands, quantities, delivery location…",
    file: "Attach a file",
    submit: "Send request",
    subject: "Quote request from taihue.com",
  },
  supplier: {
    title: "Sell through Taihue",
    lead: "For Thai manufacturers, distributors and wholesalers. Register your company and we will contact you when a request matches your products.",
    categories: "Product categories",
    categoriesPlaceholder: "e.g. hand tools, PPE, packaging, electrical parts, cleaning products…",
    location: "Province / location",
    file: "Company profile or catalogue",
    submit: "Register as a supplier",
    subject: "Supplier sign-up from taihue.com",
  },
  choose: {
    title: "Request a quote",
    desc: "Send your RFQ, an item list or a photo. We reply with a quotation.",
    button: "Request a quote",
    supplierPrompt: "Thai supplier?",
    supplierLink: "Register as a supplier",
  },
  quotePage: {
    metaTitle: "Request a Quote | Taihue, Local Purchasing for Factories in Thailand",
    metaDescription:
      "Send your RFQ to Taihue. We get prices from Thai suppliers, quote, and coordinate delivery to your factory in Thailand with a Thai tax invoice. Chinese, Thai and English.",
    eyebrow: "For buyers / factories",
    title: "Request a quote for your factory in Thailand",
    lead: "Send us your RFQ in Chinese, Thai or English. We get prices from Thai suppliers, send you a quotation, and coordinate delivery with a Thai tax invoice.",
    toForm: "Go to the form",
    howTitle: "From RFQ to delivery",
  },
  supplierPage: {
    metaTitle: "Become a Supplier | Taihue, Supply Factories in Thailand",
    metaDescription:
      "Thai manufacturers, distributors and wholesalers: register with Taihue to receive RFQs from factories in Thailand, including Chinese-owned factories. We send the RFQ, issue the PO and coordinate delivery.",
    eyebrow: "For suppliers",
    title: "Supply factories in Thailand through Taihue",
    lead: "Taihue buys from Thai manufacturers, distributors and wholesalers for factories in Thailand, including Chinese-owned factories. Register your company and we will send you the requests that match your products.",
    toForm: "Register now",
    whyTitle: "How we work with suppliers",
    why: [
      { title: "RFQs from factories", desc: "When a factory asks for something you sell, we ask you for a quotation." },
      { title: "You deal with Taihue only", desc: "We send the RFQ, issue the purchase order and coordinate the delivery." },
      { title: "Thai or English", desc: "Work with us in Thai or English. We handle communication with Chinese-speaking buyers." },
    ],
    needTitle: "What we need from suppliers",
    needs: [
      { title: "A Thai company", desc: "A company or business registered in Thailand that we can buy from directly." },
      { title: "Tax invoice", desc: "You can issue a full Thai tax invoice with every order." },
      { title: "Stock and lead time", desc: "Tell us what is in stock and how long delivery takes, so our quotation to the factory is accurate." },
    ],
    formTitle: "Supplier sign-up",
  },
  contact: {
    title: "Contact us",
    lead: "RFQs, questions and supplier enquiries. Write to us in Chinese, Thai or English.",
    emailLabel: "Email",
  },
  footer: {
    tagline: "Industrial and medical supplies from Thai suppliers for factories in Thailand.",
    rights: "All rights reserved.",
  },
  thanks: {
    title: "Thank you. We have received your message.",
    body: "We will reply by email. If it is urgent, write to us at",
    back: "Back to home",
  },
};

export type Dictionary = typeof en;

const th: Dictionary = {
  companyName: "บริษัท ไทหือ อินเตอร์เนชั่นแนล เมดิเคิล จำกัด",
  brand: "Taihue",
  ui: { menu: "เมนู", language: "ภาษา", explore: "หน้าเว็บ" },
  photos: {
    hero: "ภายในคลังสินค้าอุตสาหกรรมโครงสร้างเหล็กขนาดใหญ่ในประเทศไทย",
    delivery: "พนักงานกำลังขนถ่ายอุปกรณ์ที่ห่อหุ้มไว้ออกจากตู้คอนเทนเนอร์ที่โรงงานในประเทศไทย",
    install: "คานชั้นวางเหล็กที่จัดเรียงและกำลังติดตั้งภายในคลังสินค้าของโรงงาน",
    materials: "ชิ้นส่วนชั้นวางที่คัดแยกไว้ในรถเข็นตะแกรงเหล็กบนพื้นโรงงาน",
  },
  meta: {
    title: "Taihue ไทหือ | จัดหาสินค้าอุตสาหกรรมและเวชภัณฑ์จากซัพพลายเออร์ไทยให้โรงงานในประเทศไทย",
    description:
      "ไทหือจัดซื้อสินค้าอุตสาหกรรมและเวชภัณฑ์จากซัพพลายเออร์ไทยให้โรงงานในประเทศไทย รวมถึงโรงงานจีน เราส่ง RFQ เสนอราคา รับ PO ประสานการจัดส่ง และออกใบกำกับภาษี",
  },
  nav: {
    home: "หน้าแรก",
    services: "สินค้าที่จัดหา",
    quote: "ขอใบเสนอราคา",
    suppliers: "สำหรับซัพพลายเออร์",
    contact: "ติดต่อ",
  },
  hero: {
    eyebrow: "บริษัทจัดซื้อในประเทศไทย",
    title: "สินค้าอุตสาหกรรมและเวชภัณฑ์จากซัพพลายเออร์ไทย ส่งถึงโรงงาน",
    lead: "ไทหือจัดซื้อให้โรงงานในประเทศไทย รวมถึงโรงงานจีน ส่ง RFQ มาให้เรา เราขอราคาจากซัพพลายเออร์ไทย ส่งใบเสนอราคาให้ฉบับเดียว และประสานการจัดส่งเมื่อได้รับ PO",
    primary: "ขอใบเสนอราคา",
    secondary: "สมัครเป็นซัพพลายเออร์",
  },
  services: {
    title: "สินค้าที่เราจัดหา",
    lead: "รับทั้งรายการสั่งครั้งเดียวและรายการสั่งประจำ ในหมวดต่อไปนี้",
    items: [
      { title: "สินค้าอุตสาหกรรม", desc: "วัสดุสิ้นเปลืองและวัสดุสำหรับสายการผลิต งานช่าง และคลังสินค้า" },
      { title: "MRO และอะไหล่", desc: "ของใช้งานซ่อมบำรุง เครื่องมือ ข้อต่อ และอะไหล่ทดแทน" },
      { title: "เวชภัณฑ์", desc: "วัสดุสิ้นเปลืองและอุปกรณ์ทางการแพทย์ ส่งรายการหรือสเปกมาได้เลย" },
      { title: "อุปกรณ์เซฟตี้และ PPE", desc: "ถุงมือ หน้ากาก รองเท้านิรภัย และชุดปฏิบัติงาน" },
      { title: "อุปกรณ์สำนักงาน", desc: "เครื่องเขียน วัสดุการพิมพ์ เฟอร์นิเจอร์ และอุปกรณ์สำนักงาน" },
      { title: "โรงอาหารและแพนทรี", desc: "อุปกรณ์ครัว ภาชนะ และวัสดุสิ้นเปลืองสำหรับโรงอาหารพนักงาน" },
      { title: "สินค้าทั่วไป", desc: "ผลิตภัณฑ์ทำความสะอาด บรรจุภัณฑ์ ของใช้ในหอพักและอาคาร" },
    ],
    note: "ถ้าไม่มีในรายการนี้ ส่งมาได้เช่นกัน หากมีขายในไทย เราจะหาให้",
  },
  why: {
    title: "สิ่งที่เราดูแล",
    items: [
      { title: "ซัพพลายเออร์ไทย", desc: "เราส่งคำขอไปยังผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย และขอราคาสินค้าทีละรายการ" },
      { title: "ใบเสนอราคาฉบับเดียว", desc: "ส่งรายการ รูปถ่าย หรือสเปกมาได้ ใบเสนอราคาของเราระบุราคาและระยะเวลาส่งมอบของแต่ละรายการ" },
      { title: "เอกสารภาษีไทย", desc: "เราออกใบเสนอราคา ใบกำกับภาษี ใบส่งของ และใบเสร็จรับเงินในประเทศไทย ให้ฝ่ายบัญชีใช้ได้ทันที" },
      { title: "จีน ไทย และอังกฤษ", desc: "ติดต่อเราได้ทั้งสามภาษา ส่วนการประสานงานกับซัพพลายเออร์ไทย เราทำให้" },
    ],
  },
  how: {
    title: "จาก RFQ ถึงการส่งมอบ",
    steps: [
      { title: "RFQ", desc: "ส่งรายการสินค้า สเปก และจำนวน จะเป็นรูปถ่ายหรือไฟล์ที่มีอยู่แล้วก็ได้" },
      { title: "ใบเสนอราคา", desc: "เราขอราคาจากซัพพลายเออร์ไทย แล้วส่งใบเสนอราคาพร้อมราคาและระยะเวลาส่งมอบ" },
      { title: "PO", desc: "ลูกค้ายืนยันใบเสนอราคาและออกใบสั่งซื้อ" },
      { title: "จัดส่ง", desc: "เราประสานการจัดส่งถึงโรงงาน พร้อมใบกำกับภาษีและใบส่งของ" },
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
    lead: "ระบุรายการสินค้าที่ต้องการ แนบไฟล์ RFQ หรือรูปถ่ายได้ถ้ามี เราจะตอบกลับทางอีเมล",
    points: ["ซื้อของในประเทศผ่านผู้ขายรายเดียว", "ใบเสนอราคา ใบกำกับภาษี ใบส่งของ และใบเสร็จรับเงิน", "ติดต่อได้ทั้งภาษาจีน ไทย และอังกฤษ"],
    items: "รายการสินค้า / รายละเอียด",
    itemsPlaceholder: "ชื่อสินค้า สเปก ยี่ห้อ จำนวน สถานที่จัดส่ง…",
    file: "แนบไฟล์",
    submit: "ส่งคำขอ",
    subject: "Quote request from taihue.com (TH)",
  },
  supplier: {
    title: "ขายสินค้าผ่านไทหือ",
    lead: "สำหรับผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย ลงทะเบียนบริษัทไว้ เราจะติดต่อกลับเมื่อมีคำขอที่ตรงกับสินค้าของท่าน",
    categories: "หมวดหมู่สินค้า",
    categoriesPlaceholder: "เช่น เครื่องมือช่าง PPE บรรจุภัณฑ์ อะไหล่ไฟฟ้า ผลิตภัณฑ์ทำความสะอาด…",
    location: "จังหวัด / ที่ตั้ง",
    file: "โปรไฟล์บริษัทหรือแค็ตตาล็อก",
    submit: "ลงทะเบียนเป็นซัพพลายเออร์",
    subject: "Supplier sign-up from taihue.com (TH)",
  },
  choose: {
    title: "ขอใบเสนอราคา",
    desc: "ส่ง RFQ รายการสินค้า หรือรูปถ่ายมา เราจะตอบกลับพร้อมใบเสนอราคา",
    button: "ขอใบเสนอราคา",
    supplierPrompt: "เป็นซัพพลายเออร์ไทย?",
    supplierLink: "ลงทะเบียนเป็นซัพพลายเออร์",
  },
  quotePage: {
    metaTitle: "ขอใบเสนอราคา | Taihue ไทหือ จัดซื้อในไทยสำหรับโรงงาน",
    metaDescription:
      "ส่ง RFQ ให้ไทหือ เราขอราคาจากซัพพลายเออร์ไทย เสนอราคา และประสานการจัดส่งถึงโรงงานในประเทศไทย พร้อมใบกำกับภาษี ติดต่อได้ทั้งภาษาจีน ไทย และอังกฤษ",
    eyebrow: "สำหรับผู้ซื้อ / โรงงาน",
    title: "ขอใบเสนอราคาสำหรับโรงงานในประเทศไทย",
    lead: "ส่ง RFQ มาได้ทั้งภาษาจีน ไทย หรืออังกฤษ เราขอราคาจากซัพพลายเออร์ไทย ส่งใบเสนอราคา และประสานการจัดส่งพร้อมใบกำกับภาษี",
    toForm: "ไปที่แบบฟอร์ม",
    howTitle: "จาก RFQ ถึงการส่งมอบ",
  },
  supplierPage: {
    metaTitle: "สมัครเป็นซัพพลายเออร์ | Taihue ไทหือ ขายสินค้าให้โรงงานในไทย",
    metaDescription:
      "ผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย ลงทะเบียนกับไทหือเพื่อรับ RFQ จากโรงงานในประเทศไทย รวมถึงโรงงานจีน เราส่ง RFQ ออกใบสั่งซื้อ และประสานการจัดส่ง",
    eyebrow: "สำหรับซัพพลายเออร์",
    title: "ขายสินค้าให้โรงงานในประเทศไทยผ่านไทหือ",
    lead: "ไทหือจัดซื้อสินค้าจากผู้ผลิต ตัวแทนจำหน่าย และผู้ค้าส่งในไทย ให้โรงงานในประเทศไทย รวมถึงโรงงานจีน ลงทะเบียนบริษัทไว้ แล้วเราจะส่งคำขอที่ตรงกับสินค้าของท่านให้",
    toForm: "ลงทะเบียน",
    whyTitle: "เราทำงานกับซัพพลายเออร์อย่างไร",
    why: [
      { title: "RFQ จากโรงงาน", desc: "เมื่อโรงงานต้องการสินค้าที่ท่านจำหน่าย เราจะติดต่อขอใบเสนอราคา" },
      { title: "ติดต่อกับไทหือที่เดียว", desc: "เราส่ง RFQ ออกใบสั่งซื้อ และประสานการจัดส่ง" },
      { title: "ภาษาไทยหรืออังกฤษ", desc: "ติดต่อเราเป็นภาษาไทยหรืออังกฤษได้ ส่วนการสื่อสารกับผู้ซื้อที่ใช้ภาษาจีน เราดูแลเอง" },
    ],
    needTitle: "สิ่งที่เราต้องการจากซัพพลายเออร์",
    needs: [
      { title: "บริษัทไทย", desc: "เป็นบริษัทหรือกิจการที่จดทะเบียนในประเทศไทย ซึ่งเราสั่งซื้อได้โดยตรง" },
      { title: "ใบกำกับภาษี", desc: "ออกใบกำกับภาษีเต็มรูปได้ทุกคำสั่งซื้อ" },
      { title: "สต็อกและระยะเวลาส่งมอบ", desc: "แจ้งว่ามีสินค้าในสต็อกหรือไม่ และใช้เวลาส่งมอบกี่วัน เพื่อให้เราเสนอราคาให้โรงงานได้ถูกต้อง" },
    ],
    formTitle: "ลงทะเบียนซัพพลายเออร์",
  },
  contact: {
    title: "ติดต่อเรา",
    lead: "ส่ง RFQ สอบถามข้อมูล หรือติดต่อเรื่องซัพพลายเออร์ ได้ทั้งภาษาจีน ไทย และอังกฤษ",
    emailLabel: "อีเมล",
  },
  footer: {
    tagline: "สินค้าอุตสาหกรรมและเวชภัณฑ์จากซัพพลายเออร์ไทย สำหรับโรงงานในประเทศไทย",
    rights: "สงวนลิขสิทธิ์",
  },
  thanks: {
    title: "ขอบคุณ เราได้รับข้อความแล้ว",
    body: "เราจะตอบกลับทางอีเมล หากเป็นเรื่องเร่งด่วน ติดต่อได้ที่",
    back: "กลับหน้าแรก",
  },
};

const zh: Dictionary = {
  companyName: "Taihue International Medical Co., Ltd.",
  brand: "Taihue",
  ui: { menu: "菜单", language: "语言", explore: "页面" },
  photos: {
    hero: "泰国大型钢结构工业仓库内部",
    delivery: "工人在泰国工厂从集装箱卸下包装好的设备",
    install: "工厂仓库内摆放并正在安装的钢制货架横梁",
    materials: "工厂地面上分类放在铁丝网周转车里的货架配件",
  },
  meta: {
    title: "Taihue | 为在泰工厂向泰国供应商采购工业用品和医疗用品",
    description:
      "Taihue 为在泰国的工厂（包括中资工厂）向泰国供应商采购工业用品和医疗用品。我们负责询价、报价、接收采购订单、协调送货，并开具泰国税务发票。",
  },
  nav: {
    home: "首页",
    services: "供应品类",
    quote: "获取报价",
    suppliers: "供应商",
    contact: "联系我们",
  },
  hero: {
    eyebrow: "泰国本地采购公司",
    title: "向泰国供应商采购工业用品和医疗用品，送货到厂",
    lead: "Taihue 为在泰国的工厂（包括中资工厂）做本地采购。把询价单发给我们，我们向泰国供应商询价，给您一份报价单，收到采购订单后协调送货。",
    primary: "获取报价",
    secondary: "成为供应商",
  },
  services: {
    title: "供应品类",
    lead: "以下品类，单次采购和固定订单都可以。",
    items: [
      { title: "工业用品", desc: "生产线、车间和仓库所需的耗材与物料。" },
      { title: "MRO 与备品备件", desc: "维修保养用品、工具、管件及替换零件。" },
      { title: "医疗用品", desc: "医用耗材和设备，请把清单或规格发给我们。" },
      { title: "劳保与安全用品", desc: "手套、口罩、安全鞋和工作服。" },
      { title: "办公用品", desc: "文具、打印耗材、办公家具及办公设备。" },
      { title: "食堂与茶水间用品", desc: "厨房设备、餐具及员工食堂耗材。" },
      { title: "综合物资", desc: "清洁用品、包装材料、宿舍及厂区用品。" },
    ],
    note: "不在以上品类里也可以发给我们。只要在泰国有售，我们就去找。",
  },
  why: {
    title: "我们负责的事",
    items: [
      { title: "对接泰国供应商", desc: "我们把您的需求发给泰国的生产厂家、经销商和批发商，逐项询价。" },
      { title: "一份报价单", desc: "发来清单、照片或规格书即可。报价单逐项列明价格和交期。" },
      { title: "泰国税务单据", desc: "报价单、税务发票、送货单和收据均由我们在泰国开具，方便财务入账。" },
      { title: "中文、泰语、英语", desc: "三种语言都可以联系我们，与泰国供应商的沟通由我们负责。" },
    ],
  },
  how: {
    title: "从询价到交货",
    steps: [
      { title: "询价 RFQ", desc: "发来物品清单、规格和数量，照片或现有文件也可以。" },
      { title: "报价", desc: "我们向泰国供应商询价，并向您提供包含价格和交期的报价单。" },
      { title: "下单 PO", desc: "您确认报价后，下达采购订单。" },
      { title: "交货", desc: "我们协调送货到厂，并提供税务发票和送货单。" },
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
    lead: "请列出需要的物品。如有询价单或照片，可一并上传。我们通过邮件回复。",
    points: ["本地采购只需对接一家供应方", "报价单、税务发票、送货单和收据", "可用中文、泰语或英语沟通"],
    items: "物品 / 需求说明",
    itemsPlaceholder: "品名、规格、品牌、数量、送货地点……",
    file: "上传附件",
    submit: "提交询价",
    subject: "Quote request from taihue.com (ZH)",
  },
  supplier: {
    title: "通过 Taihue 销售",
    lead: "面向泰国的生产厂家、经销商和批发商。登记贵公司信息，有匹配的需求时我们会与您联系。",
    categories: "产品类别",
    categoriesPlaceholder: "例如：手动工具、劳保用品、包装材料、电气配件、清洁用品……",
    location: "府 / 所在地",
    file: "公司简介或产品目录",
    submit: "登记成为供应商",
    subject: "Supplier sign-up from taihue.com (ZH)",
  },
  choose: {
    title: "获取报价",
    desc: "发来询价单、物品清单或照片，我们回复报价单。",
    button: "获取报价",
    supplierPrompt: "泰国供应商？",
    supplierLink: "登记成为供应商",
  },
  quotePage: {
    metaTitle: "获取报价 | Taihue 在泰工厂本地采购",
    metaDescription:
      "把询价单发给 Taihue：我们向泰国供应商询价、报价，并协调送货到厂，提供泰国税务发票。可用中文、泰语、英语沟通。",
    eyebrow: "采购方 / 工厂",
    title: "为您在泰国的工厂获取报价",
    lead: "您可以用中文、泰语或英语发送询价单。我们向泰国供应商询价，给您报价单，并协调送货、提供泰国税务发票。",
    toForm: "填写询价表",
    howTitle: "从询价到交货",
  },
  supplierPage: {
    metaTitle: "成为供应商 | Taihue 向在泰工厂供货",
    metaDescription:
      "泰国的生产厂家、经销商和批发商可在 Taihue 登记，接收在泰工厂（包括中资工厂）的询价。询价、采购订单和送货由 Taihue 统一对接。",
    eyebrow: "供应商",
    title: "通过 Taihue 向在泰工厂供货",
    lead: "Taihue 为在泰国的工厂（包括中资工厂）向泰国的生产厂家、经销商和批发商采购。登记贵公司信息后，有匹配的需求我们会发给您。",
    toForm: "登记",
    whyTitle: "我们如何与供应商合作",
    why: [
      { title: "来自工厂的询价", desc: "工厂需要您销售的产品时，我们会向您询价。" },
      { title: "只需对接 Taihue", desc: "询价、采购订单和送货安排都由我们负责。" },
      { title: "泰语或英语", desc: "您可以用泰语或英语与我们联系，与中文买家的沟通由我们负责。" },
    ],
    needTitle: "我们对供应商的要求",
    needs: [
      { title: "泰国公司", desc: "在泰国注册的公司或商户，我们可以直接向其采购。" },
      { title: "税务发票", desc: "每笔订单均可开具泰国正式税务发票。" },
      { title: "库存与交期", desc: "请告知是否有现货以及交货所需时间，以便我们向工厂准确报价。" },
    ],
    formTitle: "供应商登记",
  },
  contact: {
    title: "联系我们",
    lead: "询价、咨询或供应商合作，可用中文、泰语或英语来信。",
    emailLabel: "电子邮箱",
  },
  footer: {
    tagline: "为在泰工厂向泰国供应商采购工业用品和医疗用品。",
    rights: "版权所有。",
  },
  thanks: {
    title: "谢谢，我们已收到您的信息。",
    body: "我们会通过邮件回复。如有紧急需求，请直接来信：",
    back: "返回首页",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, th, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
