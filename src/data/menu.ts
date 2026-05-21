export type MenuItem = {
  name: string;
  price?: number;
  note?: string;
  image?: string;
};

export type MenuCategory = {
  label: string;
  items: MenuItem[];
};

// ── Morning (open – 11:00) ──────────────────────────────
export const morningDrinks: MenuItem[] = [
  { name: "エスプレッソ",         price: 400 },
  { name: "アイスコーヒー",       price: 500 },
  { name: "深煎りコーヒー",       price: 500 },
  { name: "中煎りコーヒー",       price: 500 },
  { name: "アメリカンコーヒー",   price: 500 },
  { name: "カフェインレスコーヒー", price: 600 },
  { name: "カフェオレ",           price: 600 },
  { name: "カフェラテ",           price: 600 },
  { name: "カフェモカ",           price: 650 },
  { name: "ウインナーコーヒー",   price: 600, image: "/images/アイスウインナーコーヒー.jpg" },
  { name: "ブレンドティー",       price: 550 },
  { name: "ルイボスティー",       price: 550 },
  { name: "コカ・コーラ",         price: 400 },
  { name: "ジンジャエール",       price: 400 },
  { name: "アップルジュース",     price: 400 },
  { name: "オレンジジュース",     price: 400 },
  { name: "ミルク（牛乳）",       price: 400 },
  { name: "レモネードスカッシュ", price: 600 },
];

export const morningToast: MenuCategory[] = [
  {
    label: "トーストモーニングセット",
    items: [
      { name: "ゆで卵",                 price: 50,  note: "+50yen" },
      { name: "サラダ",                 price: 250, note: "+250yen" },
      { name: "ハーフトースト & ゆで卵", price: 100, note: "+100yen" },
      { name: "ハーフトースト & サラダ", price: 300, note: "+300yen" },
    ],
  },
  {
    label: "アレンジトーストセット",
    items: [
      { name: "フレンチトースト",         price: 350, image: "/images/レンチトースト.jpg" },
      { name: "ツナチーズトースト",       price: 350 },
      { name: "ハムチーズトースト",       price: 350 },
      { name: "コンビーフトースト",       price: 350, image: "/images/コンビーフトースト.jpg" },
      { name: "トマトバジルトースト",     price: 350, image: "/images/トマトバジルトースト.jpg" },
      { name: "粒あんバタートースト",     price: 350 },
      { name: "チョコマシュマロトースト", price: 350, image: "/images/チョコマシュマロトースト.jpg" },
      { name: "オリジナルホットサンド",   price: 500 },
    ],
  },
];

// ── Lunch & Dinner (11:00 – close) ─────────────────────
export const pastaItems: MenuItem[] = [
  { name: "自家製バジルのジェノベーゼパスタ",              image: "/images/自家製バジルのジェノベーゼパスタ.jpg" },
  { name: "カルボナーラ",                                  image: "/images/カルボナーラ.jpg" },
  { name: "タラコのカルボナーラ",                          image: "/images/タラコのカルボナーラ.jpg" },
  { name: "たらことしらすのバター風味",                    image: "/images/たらことしらすのバター風味.jpg" },
  { name: "イカとタコのペペロンチーノ",                    image: "/images/イカとタコのペペロンチーノ.jpg" },
  { name: "カラスミのペペロンチーノ",                      image: "/images/カラスミのペペロンチーノ.jpg" },
  { name: "モッツァレラと温泉卵のミートソースパスタ",      image: "/images/モッツァレアと温泉卵のミートソースパスタ.jpg" },
  { name: "タコとベーコンのスパイシートマトクリーム 温泉卵添え", image: "/images/タコとベーコンのスパイシートマトクリーム 温泉卵添え.jpg" },
  { name: "旬野菜とベーコンを味わうバター醤油",            image: "/images/旬野菜とベーコンを味わうバター醤油.jpg" },
  { name: "和素材七種の 和風月見とろろパスタ",             image: "/images/和素材七種の 和風月見とろろパスタ.jpg" },
  { name: "ベーコンステーキ ナポリタン",                  image: "/images/ベーコンステーキ ナポリタン.jpg" },
];

export const setAddons: MenuCategory[] = [
  {
    label: "SET FOOD",
    items: [
      { name: "温泉卵",         price: 50  },
      { name: "ハーフトースト（2枚）", price: 100 },
      { name: "ハッシュドポテト", price: 150 },
      { name: "サラダ",         price: 250 },
      { name: "唐揚げ3個",      price: 300 },
    ],
  },
  {
    label: "SET DESSERT",
    items: [
      { name: "フラップジャック 一枚",           price: 50  },
      { name: "バニラアイス（チョコソース無料）", price: 150 },
      { name: "自家製キャラメルアイス",           price: 200 },
      { name: "とろけるなめらかきなこプリン",     price: 200 },
      { name: "チーズケーキ",                    price: 350 },
      { name: "ティラミス",                      price: 350, image: "/images/ティラミス.jpg" },
      { name: "ガトーちょこら",                  price: 350 },
    ],
  },
];

// ── Alcohol ────────────────────────────────────────────
export const alcoholCategories: MenuCategory[] = [
  {
    label: "BEER",
    items: [
      { name: "HEART LAND",      price: 600 },
      { name: "Budweiser",       price: 600 },
      { name: "Haine-ken",       price: 600 },
      { name: "ノンアルコールビール", price: 500 },
    ],
  },
  {
    label: "WHISKY（ハイボール）",
    items: [
      { name: "SUNTORY 角",      price: 550 },
      { name: "JACK DANIELS",    price: 650 },
      { name: "LAPHROAIG 10年",  price: 700 },
      { name: "BOWMORE 12年",    price: 700 },
    ],
  },
  {
    label: "WINE · SHOCHU · COCKTAIL",
    items: [
      { name: "赤・白ワイン（グラス）", price: 500 },
      { name: "赤・白ワイン（ボトル）", price: 3000 },
      { name: "桜島",             price: 500 },
      { name: "大久保",           price: 600 },
      { name: "梅酒 ロック or ソーダ", price: 600 },
      { name: "カシスオレンジ",   price: 600 },
      { name: "カシスソーダ",     price: 600 },
      { name: "カルーアミルク",   price: 600 },
      { name: "レモンサワー",     price: 600 },
    ],
  },
  {
    label: "OTUMAMI",
    items: [
      { name: "フライドポテト（ノーマル）",  price: 550 },
      { name: "フライドポテト（チーズ・ガーリック）", price: 700 },
      { name: "ソーセージ盛り合わせ",        price: 700 },
      { name: "サラミ & きゅうり",           price: 600 },
      { name: "枝豆（ノーマル）",            price: 350 },
      { name: "枝豆（ペペロンチーノ）",      price: 500 },
    ],
  },
];
