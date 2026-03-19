export type Plan = {
  name: string;
  price: number | null;
  lunch: boolean | null;
  dinner: boolean | null;
  min_people: number | null;
  max_people: number | null;
  duration_hours: number | null;
};

export type Restaurant = {
  id: number;
  name: string;
  name_jp: string;
  address: string;
  genre: string[];
  smoking: string;
  private_rental: boolean;
  private_rental_note: string;
  private_room: boolean;
  private_room_note: string;
  plans: Plan[];
  lat: number | null;
  lng: number | null;
  distance_km: number | null;
  walk_minutes: number | null;
};

export const restaurants: Restaurant[] = [
  {
    "id": 1,
    "name": "All-Day Dining OASIS GARDEN",
    "name_jp": "All-Day Dining OASIS GARDEN",
    "address": "〒102-8585 東京都千代田区紀尾井町１−２ 東京ガーデンテラス 36F",
    "genre": [
      "洋食"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "6人可、8人可、10～20人可",
    "plans": [
      {
        "name": "オフィステナントさま向け 優待ランチ (2025年3月31日まで)",
        "price": 5000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 2,
    "name": "Bane BAGUS 赤坂見附店",
    "name_jp": "バネバグース 赤坂見附店",
    "address": "〒107-0052 東京都港区赤坂３丁目１０−４ 赤坂 月世界ビル 4F",
    "genre": [
      "ダーツ",
      "ビアガーデン",
      "バーベキュー"
    ],
    "smoking": "分煙（加熱式たばこ限定）",
    "private_rental": true,
    "private_rental_note": "50人以上可",
    "private_room": true,
    "private_room_note": "6人可、8人可、10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "当日予約可！ダーツ＆カラオケ個室二次会プラン",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 6,
        "max_people": 15,
        "duration_hours": 2
      },
      {
        "name": "貸切３時間プラン",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": 30,
        "max_people": 99,
        "duration_hours": 3
      },
      {
        "name": "【Winter Plan】少人数向きカジュアル【ダーツ】",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 8,
        "duration_hours": 2
      },
      {
        "name": "【期間限定】こたつテラス国産塩モツ鍋【食事5品+飲み放題2時間付】",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 42,
        "duration_hours": 2
      },
      {
        "name": "【こたつテラス】おでん日本酒飲み比べコース【飲み放題2時間付】",
        "price": 4000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 42,
        "duration_hours": 2
      }
    ],
    "lat": 35.6764,
    "lng": 139.7372,
    "distance_km": 0.72,
    "walk_minutes": 9
  },
  {
    "id": 3,
    "name": "BASE11",
    "name_jp": "BASE11",
    "address": "11F",
    "genre": [
      "パーティ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "パーティー利用・エリア利用 宴会お料理￥3,500＋飲み放題2時間制￥1,500",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 12,
        "max_people": 100,
        "duration_hours": null
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 4,
    "name": "Chill Labo Akasaka",
    "name_jp": "チルラボアカサカ",
    "address": "〒107-0052 東京都港区赤坂４丁目３−２７ 2階",
    "genre": [
      "日本酒バー",
      "バー",
      "ダイニングバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "飲み比べ放題 3時間",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      }
    ],
    "lat": 35.6756,
    "lng": 139.735,
    "distance_km": 0.81,
    "walk_minutes": 10
  },
  {
    "id": 5,
    "name": "GARB CENTRAL",
    "name_jp": "ガーブ セントラル",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 東京ガーデンテラス 1F",
    "genre": [
      "イタリアン",
      "ダイニングバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【貸切】新年会/歓送迎会/懇親会/結婚式二次会/同窓会など",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      },
      {
        "name": "【新年会にイチオシコース】旬の食材を使用したお料理＋飲み放題120分付き",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 30,
        "duration_hours": 2
      },
      {
        "name": "【樽生ワイン6種&生ビール3種付スタンダードコース】飲み放題120分付き",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 30,
        "duration_hours": 2
      },
      {
        "name": "【スタンダードコース】旬の食材を使用したお料理＋飲み放題付き",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 30,
        "duration_hours": 2
      },
      {
        "name": "【平日限定☆GARBおすすめランチコース】ドルチェ付き(13:00～13:45開始)",
        "price": 1980,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 30,
        "duration_hours": 1.5
      },
      {
        "name": "【平日限定☆GARBおすすめランチコース】ドルチェ付き(11:30～12:00開始)",
        "price": 1980,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 30,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 6,
    "name": "MEAT & GRILL MARCO AKASAKA",
    "name_jp": "ミートアンドグリル マルコ",
    "address": "〒107-0052 東京都港区赤坂３丁目２１−８ 高和赤坂ビル 2F",
    "genre": [
      "ステーキ",
      "イタリアン",
      "バル"
    ],
    "smoking": "分煙（加熱式たばこ限定）",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【お気軽に】ちびMARCOコース",
        "price": 5500,
        "lunch": null,
        "dinner": null,
        "min_people": 2,
        "max_people": 30,
        "duration_hours": 2
      }
    ],
    "lat": 35.674,
    "lng": 139.7365,
    "distance_km": 1.05,
    "walk_minutes": 13
  },
  {
    "id": 7,
    "name": "THE BURGER SHOP",
    "name_jp": "ザ・バーガー・ショップ",
    "address": "〒102-0094 東京都千代田区紀尾井町３−２８ ADMIRAL 紀尾井町 1F",
    "genre": [
      "ハンバーガー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人以下可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "コース無し（DOUBLE STEAKHOUSE BURGER 2800円 / THE TRUMP TOWER 3400円）",
        "price": 3400,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6805,
    "lng": 139.734,
    "distance_km": 0.21,
    "walk_minutes": 3
  },
  {
    "id": 8,
    "name": "Trattoria e Pizzeria De salita 赤坂",
    "name_jp": "Trattoria e Pizzeria De salita 赤坂",
    "address": "〒107-0052 東京都港区赤坂３丁目１０−１７ マーカスビル 1F",
    "genre": [
      "カジュアル",
      "イタリアン"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "コース無し（ディナーコースは6000円～）",
        "price": 6000,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6764,
    "lng": 139.7372,
    "distance_km": 0.72,
    "walk_minutes": 9
  },
  {
    "id": 9,
    "name": "アジアンビストロ Dai 東京ガーデンテラス店",
    "name_jp": "アジアンビストロダイ",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 紀尾井テラス 2F",
    "genre": [
      "タイ料理",
      "ビストロ",
      "居酒屋"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【忘新年会スタンダードコース】《お食事のみ》全10品",
        "price": 4000,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 10,
        "duration_hours": 2
      },
      {
        "name": "【忘新年会スタンダードコース】2h飲み放題付き！全10品",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 10,
        "duration_hours": 2
      },
      {
        "name": "【平日限定ランチコース】全7品 2500円",
        "price": 2500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 30,
        "duration_hours": 1
      },
      {
        "name": "【平日限定ランチコース】全6品 2200円",
        "price": 2200,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 10,
        "duration_hours": 1
      },
      {
        "name": "【忘新年会プレミアムコース】《お食事のみ》全10品",
        "price": 5500,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 20,
        "duration_hours": 2
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 10,
    "name": "アンティキ・サポーリ",
    "name_jp": "Antichi Sapori",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 東京ガーデンテラス 3F",
    "genre": [
      "イタリアン",
      "パスタ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "4人可（4部屋：4名部屋3室、最大18名部屋1室）",
    "plans": [
      {
        "name": "CORSO SPECIALE ランチコース『プーリア』",
        "price": 4900,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 11,
    "name": "イマカツ 赤坂店",
    "name_jp": "イマカツ 赤坂店",
    "address": "〒107-0052 東京都港区赤坂３丁目７−１６ 越川ビル 1F",
    "genre": [
      "肉",
      "とんかつ"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "コース無し（特選ヒレかつ膳 2,300円）",
        "price": 2300,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.677,
    "lng": 139.7378,
    "distance_km": 0.66,
    "walk_minutes": 8
  },
  {
    "id": 12,
    "name": "オストレア oysterbar&restaurant 赤坂見附店",
    "name_jp": "Ostrea",
    "address": "〒107-0052 東京都港区赤坂３丁目１０−４ 赤坂 月世界ビル 1F",
    "genre": [
      "オイスターバー",
      "イタリアン",
      "バル"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【席だけ予約】",
        "price": null,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 6,
        "duration_hours": null
      }
    ],
    "lat": 35.6764,
    "lng": 139.7372,
    "distance_km": 0.72,
    "walk_minutes": 9
  },
  {
    "id": 13,
    "name": "カボチャ",
    "name_jp": "カボチャ",
    "address": "〒107-0052 東京都港区赤坂３丁目１６−４ DMK 赤坂ビル",
    "genre": [
      "韓国料理",
      "冷麺"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "サムギョプサルコース◆全8品",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 24,
        "duration_hours": 2
      },
      {
        "name": "鍋コース◆ブデチゲ、タットリン、生タラ鍋の中から選べる全6品",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 24,
        "duration_hours": 2
      },
      {
        "name": "チュクミ＋サムギョプサルコース◆全9品",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 24,
        "duration_hours": 2
      }
    ],
    "lat": 35.6748,
    "lng": 139.7358,
    "distance_km": 0.93,
    "walk_minutes": 12
  },
  {
    "id": 14,
    "name": "青松",
    "name_jp": "チョンソル",
    "address": "〒107-0052 東京都港区赤坂２丁目１３−８ 102",
    "genre": [
      "韓国料理"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "",
    "plans": [
      {
        "name": "コース無し",
        "price": null,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.6785,
    "lng": 139.7348,
    "distance_km": 0.4,
    "walk_minutes": 5
  },
  {
    "id": 15,
    "name": "韓国料理 ハモニ食堂",
    "name_jp": "韓国料理 ハモニ食堂",
    "address": "〒107-0052 東京都港区赤坂３丁目１１−１４ 2階",
    "genre": [
      "韓国料理",
      "焼肉",
      "居酒屋"
    ],
    "smoking": "分煙（加熱式たばこ限定）",
    "private_rental": true,
    "private_rental_note": "50人以上可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "『サムギョプサル』コース+2200円で2時間飲み放題付き",
        "price": 4950,
        "lunch": null,
        "dinner": null,
        "min_people": 4,
        "max_people": 62,
        "duration_hours": 2
      },
      {
        "name": "『豚カルビ』コース+2200円で2時間飲み放題付き",
        "price": 4950,
        "lunch": null,
        "dinner": null,
        "min_people": 4,
        "max_people": 62,
        "duration_hours": 2
      },
      {
        "name": "『ボッサム』コース+2200円で2時間飲み放題付き",
        "price": 4950,
        "lunch": null,
        "dinner": null,
        "min_people": 4,
        "max_people": 62,
        "duration_hours": 2
      }
    ],
    "lat": 35.6762,
    "lng": 139.737,
    "distance_km": 0.74,
    "walk_minutes": 9
  },
  {
    "id": 16,
    "name": "韓国料理居酒屋 土房 赤坂店",
    "name_jp": "トバン",
    "address": "〒107-0052 東京都港区赤坂３丁目１５−４ レアルタ赤坂ビル 2F",
    "genre": [
      "韓国料理",
      "居酒屋"
    ],
    "smoking": "全席喫煙可",
    "private_rental": true,
    "private_rental_note": "20人以下可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "サムギョプサル食べ放題コース",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": 20,
        "duration_hours": 2
      },
      {
        "name": "土房お任せコース",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": 20,
        "duration_hours": 2
      }
    ],
    "lat": 35.675,
    "lng": 139.7355,
    "distance_km": 0.9,
    "walk_minutes": 11
  },
  {
    "id": 17,
    "name": "赤坂ごだいご",
    "name_jp": "赤坂ごだいご",
    "address": "〒107-0052 東京都港区赤坂３丁目１０−４ 赤坂 月世界ビル ６Ｆ",
    "genre": [
      "居酒屋",
      "おでん",
      "焼き鳥"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可",
    "private_room": true,
    "private_room_note": "8人可、10～20人可、20～30人可",
    "plans": [
      {
        "name": "祇園コース（全７品）京風おでん、旬鮮お造り、特選豚の陶板焼き 飲み放題120分付き",
        "price": 5200,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 30,
        "duration_hours": 2
      }
    ],
    "lat": 35.6764,
    "lng": 139.7372,
    "distance_km": 0.72,
    "walk_minutes": 9
  },
  {
    "id": 18,
    "name": "ごだいご はなれ",
    "name_jp": "ごだいご はなれ",
    "address": "〒107-0052 東京都港区赤坂３丁目８−１",
    "genre": [
      "おでん"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "10～20人可、20～30人可（4～6人半個室あり、最大36人コーナー貸切可）",
    "plans": [
      {
        "name": "祇園コース（全７品）京風おでん、旬鮮お造り、湯葉のしゃぶしゃぶ 飲み放題120分付き",
        "price": 5200,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6768,
    "lng": 139.738,
    "distance_km": 0.7,
    "walk_minutes": 9
  },
  {
    "id": 19,
    "name": "スーペルバッコ",
    "name_jp": "Superbacco",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 東京ガーデンテラス紀尾井町 3F",
    "genre": [
      "イタリアン",
      "パスタ",
      "バル"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "ランチコース無し（ディナー7000円～）",
        "price": 7000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 20,
    "name": "デリリウムカフェ レゼルブ 赤坂サカス",
    "name_jp": "デリリウムカフェ レゼルブ 赤坂サカス",
    "address": "〒107-6301 東京都港区赤坂５丁目 Ｂｉｚタワー１Ｆ ３番１号",
    "genre": [
      "ビストロ",
      "イタリアン",
      "居酒屋"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可",
    "private_room": true,
    "private_room_note": "10～20人可（半個室、最大12～16名貸切可）",
    "plans": [
      {
        "name": "【忘新年会2H飲み放題】ベルギービールと楽しむ定番コース 5,500yen",
        "price": 5500,
        "lunch": true,
        "dinner": true,
        "min_people": 3,
        "max_people": 99,
        "duration_hours": 2
      }
    ],
    "lat": 35.673,
    "lng": 139.7385,
    "distance_km": 1.23,
    "walk_minutes": 15
  },
  {
    "id": 21,
    "name": "どまん中 赤坂店",
    "name_jp": "どまんなか",
    "address": "〒107-0052 東京都港区赤坂３丁目１３−２ ＭＪ赤坂ビル 1F",
    "genre": [
      "居酒屋",
      "海鮮",
      "日本酒バー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "どまん中旨いもんコース 飲み放題付き",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.6758,
    "lng": 139.7368,
    "distance_km": 0.79,
    "walk_minutes": 10
  },
  {
    "id": 22,
    "name": "DO-ZO 赤坂Bizタワー店",
    "name_jp": "ドーゾ",
    "address": "〒107-6901 東京都港区赤坂５丁目３−１ Bizタワ B1F",
    "genre": [
      "居酒屋",
      "うどん",
      "天ぷら"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "【グレードUPコース】彩々刺身盛合せとローストビーフ 飲み放題4980円",
        "price": 4980,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "【新年会立食パーティーコース】ふぐの刺身付き！3時間飲み放題5500円",
        "price": 5500,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "【プレミアム立食パーティーコース】ローストビーフや蒸篭蒸し等 3時間飲み放題5000円",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "【立食パーティープラン】最大100名様 3時間飲放題4000円",
        "price": 4000,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "個別盛会食【華コース】季節の天麩羅と琉香豚 飲み放題付5000円",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      },
      {
        "name": "【選べる鍋コース】沖縄琉香豚しゃぶしゃぶ又は牛もつ鍋 3時間飲み放題付4500円",
        "price": 4500,
        "lunch": null,
        "dinner": null,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "【ダブルメインコース】沖縄琉香豚焼きと丸鶏油淋鶏 3H飲み放題3980円",
        "price": 3980,
        "lunch": null,
        "dinner": null,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "【ランチNo1 彩り大名御膳】ソフトドリンク1杯サービス付",
        "price": 2500,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 50,
        "duration_hours": 1
      },
      {
        "name": "【彩り大名うどん御膳】ソフトドリンク1杯サービス付",
        "price": 2500,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 50,
        "duration_hours": 1
      },
      {
        "name": "【彩り大名御膳 沖縄琉香豚のしゃぶしゃぶ鍋付】ソフトドリンク1杯サービス付",
        "price": 3000,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 50,
        "duration_hours": 1
      },
      {
        "name": "【彩り大名御膳 和牛のすき焼き鍋付】ソフトドリンク1杯サービス付",
        "price": 3500,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 50,
        "duration_hours": 1
      }
    ],
    "lat": 35.673,
    "lng": 139.7385,
    "distance_km": 1.23,
    "walk_minutes": 15
  },
  {
    "id": 23,
    "name": "ナポリス ピッツァ＆カフェ 赤坂 一ツ木通り",
    "name_jp": "Napolis",
    "address": "〒107-0052 東京都港区赤坂３丁目１８−１０ 赤坂第2大坂屋ビル 1F",
    "genre": [
      "イタリアン",
      "ピザ",
      "カフェ"
    ],
    "smoking": "全席喫煙可",
    "private_rental": true,
    "private_rental_note": "20人以下可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "2時間宴会コース☆ピッツァ5種食べ放題＆飲み放題4000円",
        "price": 4000,
        "lunch": null,
        "dinner": null,
        "min_people": 2,
        "max_people": 40,
        "duration_hours": 2
      },
      {
        "name": "2.5時間宴会コース☆ピッツァ12種食べ放題＆飲み放題4500円",
        "price": 4500,
        "lunch": null,
        "dinner": null,
        "min_people": 2,
        "max_people": 40,
        "duration_hours": 2.5
      },
      {
        "name": "3時間プラン☆ポテト＆本格窯焼きピッツァ12種食放＆飲放付き5000円",
        "price": 5000,
        "lunch": null,
        "dinner": null,
        "min_people": 2,
        "max_people": 40,
        "duration_hours": 3
      }
    ],
    "lat": 35.6742,
    "lng": 139.7362,
    "distance_km": 1.01,
    "walk_minutes": 13
  },
  {
    "id": 24,
    "name": "ノムノ 赤坂本店",
    "name_jp": "nomuno",
    "address": "〒107-0052 東京都港区赤坂３丁目１９−１ 東京農村ビル ３F",
    "genre": [
      "ワインバー",
      "イタリアン",
      "パスタ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "時間無制限ワイン飲み比べ3900円",
        "price": 3900,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      },
      {
        "name": "90分ワイン飲み比べ2700円",
        "price": 2700,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 1.5
      },
      {
        "name": "ワイン飲み比べプラン付店舗貸切プラン",
        "price": 128700,
        "lunch": true,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.674,
    "lng": 139.736,
    "distance_km": 1.04,
    "walk_minutes": 13
  },
  {
    "id": 25,
    "name": "LAYOUT",
    "name_jp": "レイアウト",
    "address": "〒107-0052 東京都港区赤坂２丁目１４−８ 赤坂Skビル 3FA",
    "genre": [
      "バル",
      "ビアホール",
      "イタリアン"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、20人以下可、50人以上可",
    "private_room": true,
    "private_room_note": "10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "完全貸切3時間◆【プラチナプラン】厳選おつまみ5品＆飲み放題 22名様～",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": 22,
        "max_people": 60,
        "duration_hours": 3
      },
      {
        "name": "完全貸切３時間◆【カジュアルプラン】全5品＆2.5時間飲み放題 22名様～",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": 22,
        "max_people": 60,
        "duration_hours": 3
      },
      {
        "name": "完全貸切3時間◆【ベーシックプラン】お料理全8品＆2.5時間飲み放題 20名様～",
        "price": 5500,
        "lunch": true,
        "dinner": true,
        "min_people": 20,
        "max_people": 60,
        "duration_hours": 3
      }
    ],
    "lat": 35.6782,
    "lng": 139.7345,
    "distance_km": 0.45,
    "walk_minutes": 6
  },
  {
    "id": 26,
    "name": "にくはじ",
    "name_jp": "にくはじ",
    "address": "〒107-0052 東京都港区赤坂３丁目２１−１０ 赤坂靑明会館 4F",
    "genre": [
      "焼肉",
      "居酒屋",
      "ホルモン"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可",
    "plans": [
      {
        "name": "極みコース あぶり寿司、シャトーブリアン等全10品＋1ドリンク",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【ディナーコース】お肉4点盛り合わせ・大判薄切り肉等全10品＋2時間飲み放題",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.674,
    "lng": 139.7365,
    "distance_km": 1.05,
    "walk_minutes": 13
  },
  {
    "id": 27,
    "name": "丸壱富士 赤坂",
    "name_jp": "丸壱富士 赤坂",
    "address": "〒107-0052 東京都港区赤坂３丁目１６−８ 東海赤坂アネックスビル 1F",
    "genre": [
      "うなぎ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": true,
    "private_room_note": "4人可",
    "plans": [
      {
        "name": "ディナー【鰻重】地焼き鰻の鰻重≪並≫ 1ドリンク、肝吸いサービス",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 1,
        "max_people": 20,
        "duration_hours": 2
      },
      {
        "name": "ランチ【昼の会食に】メインは「特選＜太鰻＞の鰻重」鰻3品の先付と鰻肝吸いまで",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 20,
        "duration_hours": 1.5
      },
      {
        "name": "ランチ【鰻重】地焼き鰻の鰻重≪並≫",
        "price": 4500,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 20,
        "duration_hours": 1.5
      },
      {
        "name": "ランチ【鰻重】特選＜太鰻＞地焼き鰻の鰻重≪並≫",
        "price": 4900,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 20,
        "duration_hours": null
      }
    ],
    "lat": 35.6748,
    "lng": 139.7358,
    "distance_km": 0.93,
    "walk_minutes": 12
  },
  {
    "id": 28,
    "name": "パークサイド タブレス",
    "name_jp": "PARK SIDE TABLES",
    "address": "〒102-0094 東京都千代田区紀尾井町３−１２ 紀尾井町ビル 2F",
    "genre": [
      "イタリアン",
      "パスタ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "6人可、8人可（半個室1室＋完全個室1室）",
    "plans": [
      {
        "name": "【TABLES PLAN A】全7品＋フリードリンク",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 40,
        "max_people": 99,
        "duration_hours": 2
      }
    ],
    "lat": 35.6803,
    "lng": 139.7342,
    "distance_km": 0.21,
    "walk_minutes": 3
  },
  {
    "id": 29,
    "name": "バルマル 赤坂見附店",
    "name_jp": "バルマル 赤坂見附店",
    "address": "〒107-0052 東京都港区赤坂３丁目２０−６ 赤坂川木ビル",
    "genre": [
      "スペイン料理",
      "バル",
      "ワインバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "忘年会・新年会コース◆2時間飲み放題付4980円+デザート",
        "price": 4980,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 99,
        "duration_hours": 2
      }
    ],
    "lat": 35.6738,
    "lng": 139.7362,
    "distance_km": 1.07,
    "walk_minutes": 13
  },
  {
    "id": 30,
    "name": "紀尾井町 とんかつ・洋食ひとみ",
    "name_jp": "紀尾井町 とんかつ・洋食ひとみ",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 東京ガーデンテラス 3F",
    "genre": [
      "とんかつ",
      "洋食",
      "肉料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "6人可（個室使用料3000円）",
    "plans": [
      {
        "name": "ランチコース無し（平日限定ランチメニュー 2,580円～2,980円）",
        "price": 2980,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 31,
    "name": "ベンジャミンステーキハウス 東京ガーデンテラス紀尾井町",
    "name_jp": "BENJAMIN STEAK HOUSE",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 東京ガーデンテラス 4F",
    "genre": [
      "ステーキ",
      "シーフード",
      "ダイニングバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可（最大18名、別途個室料）",
    "plans": [
      {
        "name": "紀尾井町 優待メニュー（数量限定）",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 1,
        "max_people": 8,
        "duration_hours": null
      },
      {
        "name": "ランチセット",
        "price": 3190,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 32,
    "name": "とんかつ & 焼鳥 An",
    "name_jp": "（旧店名 Soba GIRO）",
    "address": "〒100-0014 東京都千代田区永田町２丁目１３−１０ プルデンシャルタワー 1F",
    "genre": [
      "そば",
      "居酒屋",
      "焼き鳥"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人以下可、20人～50人可",
    "private_room": false,
    "private_room_note": "半個室2席",
    "plans": [
      {
        "name": "【1ドリンク＋プリフィックス庵ランチ】全5品",
        "price": 3000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【庵プリフィックスランチ6750円→3500円】全5品＋120分飲み放題",
        "price": 3500,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【名物包み豚しゃぶランチ7500円→4000円】全5品＋120分飲み放題付き",
        "price": 4000,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 2
      },
      {
        "name": "【名物包み豚しゃぶランチ9100円→5000円】全5品＋180分飲み放題付き",
        "price": 5000,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 3
      },
      {
        "name": "【謹賀新年Anランチプラン】12/28～1/5 全5皿＋選べる1ドリンク付き",
        "price": 4500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 20,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.679,
    "lng": 139.732,
    "distance_km": 0.53,
    "walk_minutes": 7
  },
  {
    "id": 33,
    "name": "PIZZERIA MANCINI TOKYO",
    "name_jp": "PIZZERIA MANCINI TOKYO",
    "address": "〒100-0014 東京都千代田区永田町２丁目１３−１０ プルデンシャルタワー 1F",
    "genre": [
      "イタリアン",
      "ピザ",
      "ワインバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "☆忘新年会プラン☆【イスキアコース】世界一のPIZZA2種など全6皿",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 30,
        "duration_hours": 2
      },
      {
        "name": "【平日限定◆プリフィックスペアセット】ランチペアセット全4品",
        "price": 2400,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 10,
        "duration_hours": 2
      },
      {
        "name": "120分飲み放題付き【平日限定◆プリフィックスペアセット】全4品",
        "price": 4900,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 10,
        "duration_hours": 2
      },
      {
        "name": "【平日限定◆Antichi Sapori Set】前菜＋世界大会受賞PIZZA＋ドルチェ",
        "price": 2500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 20,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.679,
    "lng": 139.732,
    "distance_km": 0.53,
    "walk_minutes": 7
  },
  {
    "id": 34,
    "name": "ぼん",
    "name_jp": "ぼん",
    "address": "〒107-0052 東京都港区赤坂４丁目３−５",
    "genre": [
      "居酒屋"
    ],
    "smoking": "全席喫煙可",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "食べ飲み放題",
        "price": 3980,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": null,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6756,
    "lng": 139.735,
    "distance_km": 0.81,
    "walk_minutes": 10
  },
  {
    "id": 35,
    "name": "みやび",
    "name_jp": "みやび",
    "address": "〒107-0052 東京都港区赤坂２丁目１７−５８ 福住 B1F",
    "genre": [
      "居酒屋",
      "寿司",
      "もつ鍋"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可（半個室あり）",
    "plans": [
      {
        "name": "極上■おすすめコース5500円■2H飲み放題付き",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": null,
        "duration_hours": null
      },
      {
        "name": "■おすすめコース4400円■2H飲み放題付き",
        "price": 4400,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 70,
        "duration_hours": null
      },
      {
        "name": "◆選べる鍋コース5500円◆2H飲み放題付",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6788,
    "lng": 139.734,
    "distance_km": 0.39,
    "walk_minutes": 5
  },
  {
    "id": 36,
    "name": "大地の恵み 北海道 永田町店",
    "name_jp": "大地の恵み 北海道 永田町店",
    "address": "〒100-0014 東京都千代田区永田町２丁目１７−１７",
    "genre": [
      "ダイニングバー",
      "居酒屋",
      "海鮮"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "4人可、6人可、8人可、10～20人可",
    "plans": [
      {
        "name": "＜渡島・おしま＞7品 飲み放題付き5000円",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 16,
        "duration_hours": 2.5
      },
      {
        "name": "【テラス席限定】＜石狩・いしかり＞スタンダード飲み放題付き6000円→5000円",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 16,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6795,
    "lng": 139.7315,
    "distance_km": 0.54,
    "walk_minutes": 7
  },
  {
    "id": 37,
    "name": "やさい村大地",
    "name_jp": "やさい村大地",
    "address": "〒107-0052 東京都港区赤坂３丁目１６−４ DMK 赤坂ビル 2f",
    "genre": [
      "韓国料理",
      "焼肉",
      "居酒屋"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "サンパセット（野菜食べ放題・おかず食べ放題・お肉１人前・チゲ付き）",
        "price": 4000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 63,
        "duration_hours": 2
      },
      {
        "name": "サンパセット＋２時間飲み放題",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 63,
        "duration_hours": 2
      }
    ],
    "lat": 35.6748,
    "lng": 139.7358,
    "distance_km": 0.93,
    "walk_minutes": 12
  },
  {
    "id": 38,
    "name": "わらやき屋 赤坂",
    "name_jp": "わらやき屋 赤坂",
    "address": "〒107-0052 東京都港区赤坂３丁目１２−３ V1F コンチネンタル赤坂",
    "genre": [
      "居酒屋",
      "海鮮",
      "郷土料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【2時間飲み放題付】桂浜コース 名物かつをの藁焼き等 全11品",
        "price": 6000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 28,
        "duration_hours": 2
      }
    ],
    "lat": 35.676,
    "lng": 139.7368,
    "distance_km": 0.76,
    "walk_minutes": 10
  },
  {
    "id": 39,
    "name": "梓川",
    "name_jp": "あずさがわ",
    "address": "〒107-0052 東京都港区赤坂４丁目３−４ 管野ビル B1",
    "genre": [
      "居酒屋",
      "焼酎バー",
      "日本酒バー"
    ],
    "smoking": "分煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "梓川 食べログ限定コース",
        "price": 2980,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6756,
    "lng": 139.735,
    "distance_km": 0.81,
    "walk_minutes": 10
  },
  {
    "id": 40,
    "name": "下関 春帆楼 東京店",
    "name_jp": "下関 春帆楼 東京店",
    "address": "〒102-0093 東京都千代田区平河町２丁目７ 平河町共済ビル ９JA",
    "genre": [
      "日本料理",
      "ふぐ"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可",
    "plans": [
      {
        "name": "ふくご膳（ご昼食限定）",
        "price": 3850,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      },
      {
        "name": "籠盛り膳（ご昼食限定）",
        "price": 4180,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6808,
    "lng": 139.7322,
    "distance_km": 0.4,
    "walk_minutes": 5
  },
  {
    "id": 41,
    "name": "紀尾井町・くろげ",
    "name_jp": "紀尾井町・くろげ",
    "address": "〒102-0094 東京都千代田区紀尾井町 東京ガーデンテラス 3F",
    "genre": [
      "焼肉",
      "ホルモン"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可",
    "plans": [
      {
        "name": "人気NO.1！米沢牛4種盛り＋ごはんスープお替り自由・サラダやデザート付き",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 20,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 42,
    "name": "肉系居酒屋 肉十八番屋 赤坂店",
    "name_jp": "たなか畜産 赤坂店",
    "address": "〒107-0052 東京都港区赤坂３丁目７−１１ レジーア赤坂 B1",
    "genre": [
      "居酒屋",
      "肉料理",
      "鍋"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可（VIP個室有り）",
    "plans": [
      {
        "name": "【4,500円コース】8品+2時間飲み放題付",
        "price": 4500,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 68,
        "duration_hours": 2
      },
      {
        "name": "【5,000円コース】9品+2時間飲み放題付",
        "price": 5000,
        "lunch": null,
        "dinner": null,
        "min_people": 2,
        "max_people": 68,
        "duration_hours": 2
      },
      {
        "name": "【5,500円コース】黒毛和牛入り炭火焼き4種盛合せ/10品+2.5時間飲み放題付",
        "price": 5500,
        "lunch": null,
        "dinner": null,
        "min_people": 2,
        "max_people": 68,
        "duration_hours": 2.5
      },
      {
        "name": "鍋付！【4,500円コース】8品+2時間飲み放題付",
        "price": 4500,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 68,
        "duration_hours": 2
      },
      {
        "name": "選べる鍋付！【5,000円コース】9品+2時間飲み放題付",
        "price": 5000,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 68,
        "duration_hours": 2
      },
      {
        "name": "選べる鍋付！【5,500円コース】10品+2.5時間飲み放題付",
        "price": 5500,
        "lunch": true,
        "dinner": true,
        "min_people": 2,
        "max_people": 68,
        "duration_hours": 2
      }
    ],
    "lat": 35.677,
    "lng": 139.7378,
    "distance_km": 0.66,
    "walk_minutes": 8
  },
  {
    "id": 43,
    "name": "銀邸とり馬 赤坂見附店",
    "name_jp": "銀邸とり馬 赤坂見附店",
    "address": "〒107-0052 東京都港区赤坂３丁目９−５ B1F",
    "genre": [
      "居酒屋",
      "焼き鳥"
    ],
    "smoking": "全席喫煙可",
    "private_rental": true,
    "private_rental_note": "50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "『鳥づくしコース』3時間飲み放題付き【8品4500円→4000円】",
        "price": 4000,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "期間限定『スペシャルコース』3時間飲み放題付き【9品4500円→4000円】",
        "price": 4000,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "『お手軽コース』2時間飲み放題付き【10品3500円】",
        "price": 3500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "『銀邸コース』3時間飲み放題付き【9品5000円→4500円】",
        "price": 4500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "期間限定『黒豚しゃぶしゃぶコース』3時間飲み放題付き【9品5000円→4500円】",
        "price": 4500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      },
      {
        "name": "『とり馬コース』3時間飲み放題付き【10品6000円→5000円】",
        "price": 5000,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 3
      }
    ],
    "lat": 35.6766,
    "lng": 139.7376,
    "distance_km": 0.71,
    "walk_minutes": 9
  },
  {
    "id": 44,
    "name": "中華料理 慶華楼 赤坂",
    "name_jp": "チュウカリョウリ ケイカロウ",
    "address": "〒107-0052 東京都港区赤坂３丁目１９−９ ORANGE BOX ４Ｆ",
    "genre": [
      "中華料理",
      "居酒屋",
      "ラーメン"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人～50人可",
    "private_room": true,
    "private_room_note": "4人可、6人可、8人可、10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "(期間限定)食べ飲み放題2時間コース【料理150種以上＆ドリンク50種類以上】",
        "price": 5000,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "お得コース【2時間飲み放題付】＋料理10品",
        "price": 4500,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 80,
        "duration_hours": 2
      },
      {
        "name": "2.5時間飲み放題付き【料理10品】黒酢酢豚と小籠包！5200円",
        "price": 5200,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 80,
        "duration_hours": 2.5
      },
      {
        "name": "【ホタテのXOソース炒めと小籠包！2.5時間飲み放題付＋料理10品】5500円",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 80,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.674,
    "lng": 139.736,
    "distance_km": 1.04,
    "walk_minutes": 13
  },
  {
    "id": 45,
    "name": "健康美容 火鍋専門店 朝天門",
    "name_jp": "健康美容 火鍋専門店 朝天門",
    "address": "〒107-0052 東京都港区赤坂５丁目４−１０ 赤坂ゆうビル 1階",
    "genre": [
      "火鍋",
      "焼肉",
      "居酒屋"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": true,
    "private_room_note": "4人可、6人可、30人以上可（個室料3,000円）",
    "plans": [
      {
        "name": "【今話題！火鍋スイーツ付】お手軽バーベキュープラン",
        "price": 2728,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "【赤坂初上陸！】火鍋＆焼肉お試しコース",
        "price": 4378,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "飲み放題付！『クマさん火鍋コース』",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "3種類のお肉と海鮮をリーズナブルに！4,620円コース",
        "price": 4620,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "【平日限定！月～木】美容健康 レディースコース",
        "price": 3300,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "【平日限定！月～木】今月のお手軽コース",
        "price": 2728,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "【ご宴会コース】絶品中華 全7品・2時間飲み放題付！3,828円",
        "price": 3828,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "美容健康 中華コース",
        "price": 3828,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 50,
        "duration_hours": 2
      },
      {
        "name": "【ランチ限定】おひとりさま火鍋セット／特選ラム肉＆牛バラ肉",
        "price": 2080,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【ランチ限定】おひとりさま火鍋セット／牛バラ肉＆豚肉",
        "price": 1780,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【ランチ限定】おひとりさま火鍋セット／豚肉",
        "price": 1480,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.6728,
    "lng": 139.738,
    "distance_km": 1.25,
    "walk_minutes": 16
  },
  {
    "id": 46,
    "name": "個室居酒屋 馬に魚に",
    "name_jp": "個室居酒屋 馬に魚に",
    "address": "〒107-0052 東京都港区赤坂３丁目８−１ 赤坂アルトビル 3-A",
    "genre": [
      "居酒屋",
      "日本料理",
      "馬肉料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "【水～金限定】選べるメインに馬刺しがついた７品「睦月」【2h飲み放題付4900円】",
        "price": 4900,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【月.火.土限定】馬も魚も楽しめる！選べるメイン付き6品「壱」(2.5hプレミアム飲み放題付5500円)",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      },
      {
        "name": "【水～金限定】馬も魚も楽しめる！選べるメイン付き6品「壱」(2hプレミアム飲み放題付5500円)",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6768,
    "lng": 139.738,
    "distance_km": 0.7,
    "walk_minutes": 9
  },
  {
    "id": 47,
    "name": "個室居酒屋 番屋 赤坂店",
    "name_jp": "ばんや",
    "address": "〒107-0052 東京都港区赤坂２丁目１４−３４ 赤坂パロスビル 1F",
    "genre": [
      "居酒屋",
      "海鮮",
      "焼き鳥"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可、30人以上可（最大120名）",
    "plans": [
      {
        "name": "大山鶏とつくねのハリハリ鍋コース 全6品 二時間飲み放題付き 5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 99,
        "duration_hours": 2
      },
      {
        "name": "イベリコ豚のしゃぶしゃぶコース 全6品 2時間飲み放題付 5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 99,
        "duration_hours": 2
      },
      {
        "name": "番屋特製もつ鍋コース 全6品 2時間飲み放題付 5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 99,
        "duration_hours": 2
      },
      {
        "name": "ベジタリアンコース全8品 2時間飲み放題付 5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6782,
    "lng": 139.7345,
    "distance_km": 0.45,
    "walk_minutes": 6
  },
  {
    "id": 48,
    "name": "高知名物屋台餃子 一屋",
    "name_jp": "高知名物屋台餃子 一屋",
    "address": "〒107-0052 東京都港区赤坂４丁目２−３ ディアシティ赤坂一ツ木館 208",
    "genre": [
      "居酒屋",
      "餃子",
      "ダイニングバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "コース無し",
        "price": null,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6755,
    "lng": 139.7352,
    "distance_km": 0.83,
    "walk_minutes": 10
  },
  {
    "id": 49,
    "name": "黒座暁樓 赤坂",
    "name_jp": "くろざあかつきろう",
    "address": "〒107-0052 東京都港区赤坂３丁目１１−３",
    "genre": [
      "居酒屋",
      "海鮮",
      "あんこう"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可",
    "plans": [
      {
        "name": "【昼】【鰻重コース】前菜、造り、まるごと一本鰻の鰻重、甘味まで 5,000円",
        "price": 5000,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 10,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.6762,
    "lng": 139.737,
    "distance_km": 0.74,
    "walk_minutes": 9
  },
  {
    "id": 50,
    "name": "今半 東京ガーデンテラス紀尾井町店",
    "name_jp": "今半 東京ガーデンテラス紀尾井町店",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 東京ガーデンテラス 紀尾井テラス ３F",
    "genre": [
      "すき焼き",
      "しゃぶしゃぶ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "",
    "plans": [
      {
        "name": "お定食 すき焼 / しゃぶしゃぶ 120g",
        "price": 5390,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 51,
    "name": "手打ちそば そばしき",
    "name_jp": "手打ちそば そばしき",
    "address": "〒102-0094 東京都千代田区紀尾井町１−２ 東京ガーデンテラス 小左衛門テラス 2F",
    "genre": [
      "そば",
      "天ぷら",
      "居酒屋"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": true,
    "private_room_note": "6人可、8人可",
    "plans": [
      {
        "name": "旬の厳選素材と挽きたて蕎麦の【季節のコース 4000円】(+1500円で飲み放題)",
        "price": 4000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 18,
        "duration_hours": 2
      },
      {
        "name": "旬の厳選素材と挽きたて蕎麦の【そばしきコース 5000円】(+1500円で飲み放題)",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 18,
        "duration_hours": 2
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 52,
    "name": "松尾ジンギスカン 赤坂店",
    "name_jp": "松尾ジンギスカン 赤坂店",
    "address": "〒107-0052 東京都港区赤坂４丁目３−６ 一ツ木通りビル Ｂ１Ｆ",
    "genre": [
      "ジンギスカン",
      "焼肉",
      "居酒屋"
    ],
    "smoking": "分煙（加熱式たばこ限定）",
    "private_rental": true,
    "private_rental_note": "20人～50人可、20人以下可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "3種食べ比べセット(90分飲み放題付き) 全7品",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 2
      },
      {
        "name": "4種食べ比べセット(90分飲み放題付き) 全8品",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 2
      },
      {
        "name": "ソフトドリンク飲み放題付きランチセット",
        "price": 2050,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6756,
    "lng": 139.735,
    "distance_km": 0.81,
    "walk_minutes": 10
  },
  {
    "id": 53,
    "name": "赤坂 金舌",
    "name_jp": "きんたん",
    "address": "〒107-0052 東京都港区赤坂３丁目１７−１ いちご赤坂317ビル village B1",
    "genre": [
      "牛料理",
      "肉料理",
      "寿司"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可（完全個室は3,000円）",
    "plans": [
      {
        "name": "【ランチ極上金舌コース】5,000円",
        "price": 5000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 1.5
      },
      {
        "name": "【ランチ金舌コース】3,980円",
        "price": 3980,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 1.5
      },
      {
        "name": "【フォアグラとトリュフの土鍋ご飯】2,900円",
        "price": 2900,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 2
      }
    ],
    "lat": 35.6746,
    "lng": 139.736,
    "distance_km": 0.96,
    "walk_minutes": 12
  },
  {
    "id": 54,
    "name": "赤坂 鳥幸",
    "name_jp": "赤坂 鳥幸",
    "address": "〒102-0094 東京都千代田区紀尾井町１−２ 東京ガーデンテラス ３Ｆ",
    "genre": [
      "焼き鳥",
      "鳥料理",
      "ワインバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "4人可、6人可、8人可、10～20人可（半個室3部屋）",
    "plans": [
      {
        "name": "【竹コース】全14品 旬彩盛り合せ3種、鳥幸本格串７本、親子丼",
        "price": 5800,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": 24,
        "duration_hours": null
      },
      {
        "name": "【梅コース】全９品 伊達鶏、国産銘柄鶏使用の本格串７本",
        "price": 4400,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【ランチ限定 匠コース】鳥幸本格串5本、奥久慈卵の親子丼",
        "price": 3500,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 1
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 55,
    "name": "赤坂 桃の木",
    "name_jp": "赤坂 桃の木",
    "address": "〒102-0094 東京都千代田区紀尾井町１−３ 紀尾井テラス 3F 東京ガーデンテラス",
    "genre": [
      "中華料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可",
    "plans": [
      {
        "name": "【ランチ】桃の木(満足)コース",
        "price": 5000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.681,
    "lng": 139.7358,
    "distance_km": 0.04,
    "walk_minutes": 0
  },
  {
    "id": 56,
    "name": "赤坂 Dining Bar Smile",
    "name_jp": "赤坂 Dining Bar Smile",
    "address": "〒107-0052 東京都港区赤坂３丁目２１−１１ 赤坂 西脇ビル B1",
    "genre": [
      "ダイニングバー",
      "バー",
      "イタリアン"
    ],
    "smoking": "全席喫煙可",
    "private_rental": true,
    "private_rental_note": "20人～50人可、20人以下可",
    "private_room": true,
    "private_room_note": "20～30人可、30人以上可（20名様～貸切パーティー可）",
    "plans": [
      {
        "name": "2.5時間飲み放題+コース料理7品パーティーコース 4500円",
        "price": 4500,
        "lunch": false,
        "dinner": true,
        "min_people": 6,
        "max_people": 36,
        "duration_hours": 2.5
      },
      {
        "name": "2.5時間飲み放題+コース料理8品パーティーコース 5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 6,
        "max_people": 36,
        "duration_hours": 2.5
      },
      {
        "name": "3時間飲み放題+コース料理7品パーティーコース 5000円",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 6,
        "max_people": 36,
        "duration_hours": 3
      }
    ],
    "lat": 35.674,
    "lng": 139.7365,
    "distance_km": 1.05,
    "walk_minutes": 13
  },
  {
    "id": 57,
    "name": "赤坂プリンス クラシックハウス",
    "name_jp": "赤坂プリンス クラシックハウス",
    "address": "〒102-0094 東京都千代田区紀尾井町１−２ 東京ガーデンテラス紀尾井町内",
    "genre": [
      "フレンチ"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "",
    "plans": [
      {
        "name": "ラ・メゾン コース＜デザート：シーズナルセレクション＞",
        "price": 4500,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      },
      {
        "name": "ラ・メゾン コース＜デザート：自家製アップルパイ＞",
        "price": 5000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      },
      {
        "name": "ラ・メゾン コース＜デザート：シーズナルパフェ＞",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 58,
    "name": "地鶏と海鮮 ふじ田 赤坂本店",
    "name_jp": "地鶏と海鮮 ふじ田 赤坂本店",
    "address": "〒107-0052 東京都港区赤坂４丁目１−２ シントミ赤坂一ツ木ビル 3F",
    "genre": [
      "居酒屋",
      "鍋",
      "焼肉"
    ],
    "smoking": "全席喫煙可",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可、30人以上可",
    "plans": [
      {
        "name": "【名物】旨辛！肉タワー鍋コース《2.5時間飲み放題付き》",
        "price": 4400,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      },
      {
        "name": "【肉を堪能】国産黒毛和牛サーロインステーキ付き 肉タワー鍋コース《2.5時間飲み放題付き》",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6755,
    "lng": 139.7352,
    "distance_km": 0.83,
    "walk_minutes": 10
  },
  {
    "id": 59,
    "name": "蜀膳坊",
    "name_jp": "ショクゼンボウ",
    "address": "〒107-0052 東京都港区赤坂３丁目２０−８ 2F",
    "genre": [
      "四川料理",
      "焼き鳥",
      "中華料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "気軽に食べるスタンダードコース 4,680円",
        "price": 4680,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 42,
        "duration_hours": 2
      },
      {
        "name": "飲み放題付き！スタンダードコース 5,000円",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 42,
        "duration_hours": 2
      },
      {
        "name": "四川よだれ鶏や人気麻婆豆腐を楽しめるコース 5,500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 42,
        "duration_hours": 2
      },
      {
        "name": "【一番人気！】２H飲み放題付★火鍋コース 5,500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 42,
        "duration_hours": 2
      }
    ],
    "lat": 35.6738,
    "lng": 139.7362,
    "distance_km": 1.07,
    "walk_minutes": 13
  },
  {
    "id": 60,
    "name": "陳家私菜 赤坂一号店 湧の台所",
    "name_jp": "ちんかしさい ユウノダイドコロ",
    "address": "〒107-0052 東京都港区赤坂３丁目１９−８ ウェストビル B1",
    "genre": [
      "中華料理",
      "四川料理",
      "居酒屋"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "中華王道コース＜頂天石焼麻婆豆腐など全9品＞【2時間半飲み放題付き4980円】",
        "price": 4980,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 99,
        "duration_hours": 2.5
      },
      {
        "name": "スペシャル・中華四大高級食材コース「フカヒレ・鮑・上海蟹味噌・北京ダック」飲み放題付き5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 99,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.674,
    "lng": 139.736,
    "distance_km": 1.04,
    "walk_minutes": 13
  },
  {
    "id": 61,
    "name": "天壇 赤坂店",
    "name_jp": "天壇 赤坂店",
    "address": "〒107-0052 東京都港区赤坂４丁目３−６ 一ツ木通りビル 2F",
    "genre": [
      "焼肉"
    ],
    "smoking": "オープンスペース",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【平日限定ランチコース】鞠コース",
        "price": 4000,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6756,
    "lng": 139.735,
    "distance_km": 0.81,
    "walk_minutes": 10
  },
  {
    "id": 62,
    "name": "東北 cafe&dining トレジオンポート",
    "name_jp": "東北 cafe&dining トレジオンポート",
    "address": "〒107-0052 東京都港区赤坂３丁目１２−１８ 赤坂館 2F",
    "genre": [
      "ダイニングバー",
      "ビアバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "LINEヤフーコース",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      },
      {
        "name": "【2時間飲み放題付き】東北6県寄せ鍋プラン",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 60,
        "duration_hours": 2
      },
      {
        "name": "【2時間飲み放題付き】麹につけたローストポークがメインのSTANDARD PLAN",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 60,
        "duration_hours": 2
      },
      {
        "name": "【17時から19時まで限定！】早割スタンダードプラン",
        "price": 4000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 60,
        "duration_hours": 2
      },
      {
        "name": "【17時から19時まで限定！】早割東北6県寄せ鍋プラン",
        "price": 4000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 60,
        "duration_hours": 2
      }
    ],
    "lat": 35.676,
    "lng": 139.7368,
    "distance_km": 0.76,
    "walk_minutes": 10
  },
  {
    "id": 63,
    "name": "東洋軒",
    "name_jp": "東洋軒",
    "address": "〒107-0051 東京都港区元赤坂１丁目２−７ 赤坂Kタワ 1F",
    "genre": [
      "洋食"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "4人可、8人可",
    "plans": [
      {
        "name": "ブリフィックスランチメニュー",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.68,
    "lng": 139.736,
    "distance_km": 0.18,
    "walk_minutes": 2
  },
  {
    "id": 64,
    "name": "肉塊UNO 溜池山王店",
    "name_jp": "肉塊UNO 溜池山王店",
    "address": "〒107-0052 東京都港区赤坂２丁目８−１４ 丸玉第３ビル 1F",
    "genre": [
      "ステーキ",
      "ハンバーグ",
      "焼肉"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "７種類のお肉のコース",
        "price": 4580,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.679,
    "lng": 139.7355,
    "distance_km": 0.32,
    "walk_minutes": 4
  },
  {
    "id": 65,
    "name": "博多もつ鍋 やまや 赤坂インターシティAIR店",
    "name_jp": "博多もつ鍋 やまや",
    "address": "〒107-0052 東京都港区赤坂１丁目８−１ 地下１階 赤坂インターシティAir",
    "genre": [
      "もつ鍋",
      "居酒屋",
      "食堂"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "博多もつ鍋コース【美味～びみ～】",
        "price": 4000,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 36,
        "duration_hours": 2
      },
      {
        "name": "お土産明太子付き！博多もつ鍋コース【吟味～ぎんみ～】",
        "price": 5000,
        "lunch": null,
        "dinner": true,
        "min_people": 2,
        "max_people": 36,
        "duration_hours": 2
      }
    ],
    "lat": 35.6792,
    "lng": 139.7375,
    "distance_km": 0.37,
    "walk_minutes": 5
  },
  {
    "id": 66,
    "name": "米幸",
    "name_jp": "米幸",
    "address": "〒102-0094 東京都千代田区紀尾井町１−２ ２階 小左衛門テラス 東京ガーデンテラス",
    "genre": [
      "居酒屋",
      "海鮮",
      "日本料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "10～20人可（最大16名）",
    "plans": [
      {
        "name": "忘年会ライトプラン【2時間飲み放題付き】全6品5000円",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 20,
        "duration_hours": 2
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 67,
    "name": "銘柄焼鳥 もつ鍋 個室居酒屋 千鳥 赤坂店",
    "name_jp": "千鳥 赤坂店",
    "address": "〒107-0052 東京都港区赤坂３丁目１９−８ 赤坂ウエストビル 1F",
    "genre": [
      "居酒屋",
      "焼き鳥",
      "もつ鍋"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可、10～20人可、20～30人可、30人以上可（半個室）",
    "plans": [
      {
        "name": "『スタンダードコース』2H飲み放題付2980円◎ 全6品",
        "price": 3278,
        "lunch": null,
        "dinner": true,
        "min_people": 3,
        "max_people": 99,
        "duration_hours": 2
      },
      {
        "name": "【選べる鍋◎】もつ鍋or地鶏鍋&焼き鳥盛り合わせ 2H飲み放題付き3980円 全9品",
        "price": 3980,
        "lunch": null,
        "dinner": true,
        "min_people": 3,
        "max_people": 99,
        "duration_hours": 2
      },
      {
        "name": "極上フルコース!厚切り牛タン&選べる鍋&旬の刺身3点盛り『豪華宴会コース』2H飲み放題付4980円◎",
        "price": 4980,
        "lunch": null,
        "dinner": true,
        "min_people": 3,
        "max_people": 99,
        "duration_hours": 2
      }
    ],
    "lat": 35.674,
    "lng": 139.736,
    "distance_km": 1.04,
    "walk_minutes": 13
  },
  {
    "id": 68,
    "name": "野田焼売店 紀尾井本店",
    "name_jp": "野田焼売店 紀尾井本店",
    "address": "〒102-0094 東京都千代田区紀尾井町１−２ 東京ガーデンテラス 紀尾井 2F",
    "genre": [
      "飲茶・点心",
      "居酒屋",
      "中華料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "5000円コース",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 2
      },
      {
        "name": "4000円コース",
        "price": 4000,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 12,
        "duration_hours": 2
      },
      {
        "name": "紀尾井町 優待コース",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6812,
    "lng": 139.7356,
    "distance_km": 0.0,
    "walk_minutes": 0
  },
  {
    "id": 69,
    "name": "游玄亭 赤坂",
    "name_jp": "叙々苑 じょじょえん",
    "address": "〒107-0052 東京都港区赤坂３丁目１１−３ 赤坂中川ビルディング B1・1F",
    "genre": [
      "焼肉",
      "日本料理",
      "韓国料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "4人可、6人可、8人可、10～20人可（座敷個室8室64席、個室使用料5%）",
    "plans": [
      {
        "name": "ランチコース無し（肩ロース焼ランチ 3800円 / ミックスランチ 4200円 / 吟味ランチ 6800円）",
        "price": 3800,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6762,
    "lng": 139.737,
    "distance_km": 0.74,
    "walk_minutes": 9
  },
  {
    "id": 70,
    "name": "厳選和牛 焼肉食べ放題 眞牛館 赤坂本店",
    "name_jp": "しんぎゅうかん",
    "address": "〒107-0052 東京都港区赤坂３丁目６−１７ ダイムラービル 4F",
    "genre": [
      "焼肉",
      "居酒屋",
      "韓国料理"
    ],
    "smoking": "全席喫煙可",
    "private_rental": true,
    "private_rental_note": "20人～50人可、50人以上可",
    "private_room": true,
    "private_room_note": "2人可、4人可、6人可、8人可（半個室、ソファー席あり）",
    "plans": [
      {
        "name": "【120分眞牛館食べ飲み放題】和牛ミスジ＆厚切り上タン等「4,980円コース」全78品",
        "price": 5478,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【120分一押し食べ放題】特選ハラミなど「4,980円コース」全90品",
        "price": 5478,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【120分大満足食べ飲み放題】ツボハラミなど「3,980円コース」全55品",
        "price": 4378,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【120分眞牛館食べ放題】和牛ミスジ＆厚切り上タン等「3,980円コース」全78品",
        "price": 4378,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "【120分大満足食べ放題】ツボハラミなど「2,980円コース」全55品",
        "price": 3278,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.6772,
    "lng": 139.7378,
    "distance_km": 0.63,
    "walk_minutes": 8
  },
  {
    "id": 71,
    "name": "創作和食と美酒 霞",
    "name_jp": "創作和食と美酒 霞",
    "address": "〒107-0052 東京都港区赤坂３丁目９−４ 扇やビル 3階",
    "genre": [
      "居酒屋",
      "日本料理",
      "海鮮"
    ],
    "smoking": "分煙",
    "private_rental": true,
    "private_rental_note": "50人以上可、20人～50人可",
    "private_room": true,
    "private_room_note": "30人以上可（完全個室4部屋、半個室9部屋）",
    "plans": [
      {
        "name": "<霞の「華」コース>2時間飲み放題付 全８品 5,500円",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      },
      {
        "name": "<霞の「彩」コース>2時間飲み放題付 全6品 4,500円",
        "price": 4500,
        "lunch": null,
        "dinner": true,
        "min_people": null,
        "max_people": null,
        "duration_hours": 2
      }
    ],
    "lat": 35.6766,
    "lng": 139.7376,
    "distance_km": 0.71,
    "walk_minutes": 9
  },
  {
    "id": 72,
    "name": "ビストロ アリアンス",
    "name_jp": "ビストロ アリアンス",
    "address": "〒102-0093 東京都千代田区平河町１丁目５−６ 平河町SDビル 1F",
    "genre": [
      "ビストロ",
      "洋食",
      "ワインバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人以下可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【２H飲み放題付き】スタンダードコース全８品5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 4,
        "max_people": 20,
        "duration_hours": 2
      },
      {
        "name": "スペシャルコース全7品4500円（料理のみ）",
        "price": 4500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 8,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6815,
    "lng": 139.7325,
    "distance_km": 0.37,
    "walk_minutes": 5
  },
  {
    "id": 73,
    "name": "パスターズ",
    "name_jp": "PASTARS",
    "address": "〒107-0052 東京都港区赤坂３丁目１９−９ ORANGE BOX Ｂ１",
    "genre": [
      "イタリアン",
      "パスタ",
      "ワインバー"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "20人以下可、20人～50人可",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "【2時間飲み放題付】5,500円コース◆選べる肉料理やサラダ、パスタなど",
        "price": 5500,
        "lunch": null,
        "dinner": true,
        "min_people": 4,
        "max_people": 16,
        "duration_hours": 2
      }
    ],
    "lat": 35.674,
    "lng": 139.736,
    "distance_km": 1.04,
    "walk_minutes": 13
  },
  {
    "id": 74,
    "name": "白碗竹快樓 赤坂店",
    "name_jp": "バイワンジュウクワイロウ",
    "address": "〒107-0052 東京都港区赤坂４丁目２−８",
    "genre": [
      "中華料理",
      "飲茶・点心"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "個室（5～8名／6～8名／9～14名）",
    "plans": [
      {
        "name": "ランチ_土日祝限定【窯焼き北京ダックコース】全コース4,500円",
        "price": 4500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 20,
        "duration_hours": 1.5
      }
    ],
    "lat": 35.6755,
    "lng": 139.7352,
    "distance_km": 0.83,
    "walk_minutes": 10
  },
  {
    "id": 75,
    "name": "紀尾井町 吉座",
    "name_jp": "紀尾井町 吉座",
    "address": "〒102-0094 東京都千代田区紀尾井町３−３ 日本海事協会管理センター別館 B1F",
    "genre": [
      "すき焼き",
      "しゃぶしゃぶ"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "お昼の黒毛和牛しゃぶしゃぶ 5,290円",
        "price": 5290,
        "lunch": true,
        "dinner": false,
        "min_people": null,
        "max_people": null,
        "duration_hours": null
      }
    ],
    "lat": 35.6803,
    "lng": 139.7342,
    "distance_km": 0.21,
    "walk_minutes": 3
  },
  {
    "id": 76,
    "name": "個室・美味い酒 炭火料理 五島列島直送の魚 麹町 うおみっつ",
    "name_jp": "うおみっつ",
    "address": "〒102-0083 東京都千代田区麹町４丁目３−３１ 麹町MKビル Ｂ１",
    "genre": [
      "居酒屋",
      "海鮮",
      "焼き鳥"
    ],
    "smoking": "分煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": true,
    "private_room_note": "4人可、6人可、8人可、10～20人可、20～30人可",
    "plans": [
      {
        "name": "『うおみっつ』コース 飲み放題150分付 5500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 2,
        "max_people": 24,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6825,
    "lng": 139.733,
    "distance_km": 0.36,
    "walk_minutes": 4
  },
  {
    "id": 77,
    "name": "もつ千 赤坂本店",
    "name_jp": "もつ千 赤坂本店",
    "address": "〒107-0052 東京都港区赤坂２丁目１４−１２ 高橋ビル ２F",
    "genre": [
      "居酒屋",
      "もつ焼き",
      "焼き鳥"
    ],
    "smoking": "全席禁煙",
    "private_rental": true,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "肉刺し5種ユッケ入り◆牛レバトロ刺し・牛ホルモン焼き 全9品【2.5H飲み放題付】5,500円",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 30,
        "duration_hours": 2.5
      },
      {
        "name": "上タン刺し・新鮮！豚レバテキ 全9品【2.5H飲み放題付】5,000円",
        "price": 5000,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 30,
        "duration_hours": 2.5
      },
      {
        "name": "4,400円コース+1,000円でプレミアム飲み放題2.5時間に！",
        "price": 5500,
        "lunch": false,
        "dinner": true,
        "min_people": 3,
        "max_people": 30,
        "duration_hours": 2.5
      }
    ],
    "lat": 35.6782,
    "lng": 139.7345,
    "distance_km": 0.45,
    "walk_minutes": 6
  },
  {
    "id": 78,
    "name": "ホテルニューオータニ スーパースイーツビュッフェ",
    "name_jp": "ホテルニューオータニ スーパースイーツビュッフェ",
    "address": "ホテルニューオータニ",
    "genre": [
      "ビュッフェ",
      "スイーツ"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "スーパースイーツビュッフェ特別優待（2025/3/31まで）",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 8,
        "duration_hours": null
      }
    ],
    "lat": 35.6818,
    "lng": 139.737,
    "distance_km": 0.19,
    "walk_minutes": 2
  },
  {
    "id": 79,
    "name": "ホテルニューオータニ 大観苑",
    "name_jp": "ホテルニューオータニ 大観苑",
    "address": "ホテルニューオータニ",
    "genre": [
      "中華料理"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "1ドリンク+小前菜・週替わりお料理3種のプレート・五目スープそば・杏仁プリン（通常¥7,500→¥5,500）",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 8,
        "duration_hours": null
      }
    ],
    "lat": 35.6818,
    "lng": 139.737,
    "distance_km": 0.19,
    "walk_minutes": 2
  },
  {
    "id": 80,
    "name": "ホテルニューオータニ BELLA.VISTA.",
    "name_jp": "ホテルニューオータニ BELLA.VISTA.",
    "address": "ホテルニューオータニ",
    "genre": [
      "イタリアン"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "パスタランチ+1ドリンク付（サラダバー・選べるパスタ・デザート）",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 8,
        "duration_hours": null
      }
    ],
    "lat": 35.6818,
    "lng": 139.737,
    "distance_km": 0.19,
    "walk_minutes": 2
  },
  {
    "id": 81,
    "name": "ホテルニューオータニ RIB ROOM",
    "name_jp": "ホテルニューオータニ RIB ROOM",
    "address": "ホテルニューオータニ",
    "genre": [
      "ステーキ",
      "洋食"
    ],
    "smoking": "全席禁煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "特別ランチ+1ドリンク付（サラダバー・国産牛Sirloin・ライスまたはパン）",
        "price": 5500,
        "lunch": true,
        "dinner": false,
        "min_people": 2,
        "max_people": 8,
        "duration_hours": null
      }
    ],
    "lat": 35.6818,
    "lng": 139.737,
    "distance_km": 0.19,
    "walk_minutes": 2
  },
  {
    "id": 82,
    "name": "GINZA ONO Gratia",
    "name_jp": "GINZA ONO Gratia",
    "address": "",
    "genre": [
      "ダイニング"
    ],
    "smoking": "分煙",
    "private_rental": false,
    "private_rental_note": "",
    "private_room": false,
    "private_room_note": "",
    "plans": [
      {
        "name": "Smoke Dining",
        "price": 5500,
        "lunch": null,
        "dinner": null,
        "min_people": null,
        "max_people": 50,
        "duration_hours": null
      }
    ],
    "lat": 35.677,
    "lng": 139.7395,
    "distance_km": 0.76,
    "walk_minutes": 10
  }
];
