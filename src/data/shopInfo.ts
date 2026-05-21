export const shopInfo = {
  name: "COURAGE CAFÉ",
  nameJa: "クラージュカフェ",
  since: "2025",
  address: "福岡市東区青葉7丁目59-33",
  tel: "092-405-1246",
  hours: {
    morning: { label: "MORNING", time: "9:00 – 11:00" },
    lunch:   { label: "LUNCH & DINNER", time: "11:00 – 22:00" },
    sunday:  "日曜日は16:00まで",
    note:    "連休で日曜が中日の場合は終日営業、最終日16:00まで",
  },
  closed: "水曜日",
  access: [
    "JR土井駅から徒歩7分",
    "コストコから車で10分",
  ],
  parking: "駐車場あり（狭いためご注意ください）",
  instagram: "https://www.instagram.com/courage_cafe_fukuoka/",
  instagramHandle: "@courage_cafe_fukuoka",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=福岡市東区青葉7丁目59-33&output=embed&hl=ja&z=16",
} as const;
