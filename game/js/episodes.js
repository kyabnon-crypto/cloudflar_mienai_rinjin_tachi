/*
 * 『見えない隣人たち』隣人データ ＆ ステージ定義（第1夜〜第5夜 プレイ可能）
 */

const LINKS_COMMON = {
  site: 'https://mienai-rinjin-tachi.pages.dev',
  note: 'https://note.com/genial_lemur2906/n/nb523dcacf05e',
  line_stamp: 'https://line.me/S/shop/sticker/author/6654833/new?lang=ja&utm_source=gnsh_staut',
  kindle_all: 'https://mienai-rinjin-tachi.pages.dev/#books',
};

const NEIGHBORS = [
  {
    id: 1,
    name: 'ススノミ',
    title: '換気口の奥の料理人',
    role: '記憶の料理人',
    personality: '職人気質・物静か・丁寧',
    quote: '「なんだか今日は、懐かしい気分だな」',
    map: { x: 38, y: 62 },
    playable: true,
    bgm: 'assets/audio/susunomi_bgm.m4a',
    portrait: 'assets/sprites/susunomi_main.png',
    links: {
      kindle: 'https://amzn.asia/d/09BnD076',
      youtube: 'https://youtube.com/shorts/QGqUInhA0zA?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/3aoNcmkPo3eXXBnmRsc4Ni?si=7e4bb6a58fe048e2',
      line_stamp: 'https://line.me/S/sticker/36644772/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: 'ふるびたアパートのかべのすみにある、\nちいさな換気口。\n\nその奥には、だれもしらない\n小さな台所がありました。\n\n今夜も街の匂いを煮込む、\n小さなお鍋の音がする。',
    stages: [
      {
        title: 'アパートの換気口',
        bg: 'assets/img/susunomi_stage1.jpg?v=3',
        lead: '換気口のまわりを、ランタンで照らしてみよう。\nいい匂いが漂ってくるよ。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/susunomi_a.png', x: 33, y: 63, size: 14, line: '「コトコト、煮込み中だよ」' },
          { type: 'kakera', x: 67, y: 47, line: '匂いのかけら。スパイスのいい香り。' },
          { type: 'kakera', x: 14, y: 55, line: '匂いのかけら。ランプのそばが温かい。' },
        ],
        clear: '換気口から、ふわりと温かい匂いが流れ出していく。',
      },
      {
        title: '奥の小さな台所',
        bg: 'assets/img/susunomi_stage2.jpg',
        lead: 'お鍋のまわりを照らしてみよう。\n今日の隠し味はなにかな？',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/susunomi_b.png', x: 50, y: 55, size: 14, line: '「いい匂い、届いたかな」' },
          { type: 'kakera', x: 80, y: 65, line: '匂いのかけら。おばあちゃんの台所の記憶。' },
          { type: 'kakera', x: 20, y: 70, line: '匂いのかけら。ことこと煮えるお鍋の音。' },
        ],
        clear: '街の人たちの、懐かしい思い出が煮込まれていく。',
      },
      {
        title: '夕暮れの帰り道',
        bg: 'assets/img/susunomi_stage3.jpg',
        lead: '仕事帰りの人が歩く道。\n懐かしい匂いを届けてあげよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/susunomi_c.png', x: 75, y: 60, size: 13, line: '「お腹がすいたら、帰り道」' },
          { type: 'kakera', x: 25, y: 65, line: '匂いのかけら。夕餉のあたたかな香り。' },
          { type: 'kakera', x: 50, y: 40, line: '匂いのかけら。街灯の光に溶けていく。' },
        ],
        clear: '「なんだか今日は、懐かしい気分だな」\n心がふっと軽くなった。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/susunomi_wave.png',
      text: '換気口の奥に住む「ススノミ」。\n\n街の記憶と匂いをコトコト煮込み、\n疲れた人の心へ\n小さな温もりを届ける料理人。',
    },
    book: [
      {
            "img": "assets/book/susunomi_cover.jpg",
            "text": "見えない隣人たち\n\n換気口の奥の\n料理人"
      },
      {
            "img": "assets/book/susunomi_page1.jpg",
            "text": "ふるびたアパートの\nかべのすみにある、\nちいさな換気口。"
      },
      {
            "img": "assets/book/susunomi_page2.jpg",
            "text": "その奥には、\nだれもしらない\n小さな台所がありました。"
      },
      {
            "img": "assets/book/susunomi_page3.jpg",
            "text": "そこに住んでいるのは、\nススノミ。\n\nすすみたいに\nまっくろな体の\n小さな料理人です。"
      },
      {
            "img": "assets/book/susunomi_page4.jpg",
            "text": "夜になると、\nススノミは町へ出かけます。"
      },
      {
            "img": "assets/book/susunomi_page5.jpg",
            "text": "集めるのは、\n食べものではありません。\n\n“匂い”です。"
      },
      {
            "img": "assets/book/susunomi_page6.jpg",
            "text": "焼き魚の香ばしい匂い。\nカレーのスパイス。\nパン屋さんの甘い香り。"
      },
      {
            "img": "assets/book/susunomi_page7.jpg",
            "text": "ススノミは、\nそれらをゆっくり煮込みます。\n\nことこと。\nことこと。"
      },
      {
            "img": "assets/book/susunomi_page8.jpg",
            "text": "すると鍋の中から、\nふしぎな光が浮かびました。"
      },
      {
            "img": "assets/book/susunomi_page9.jpg",
            "text": "それは\n「記憶の味」。"
      },
      {
            "img": "assets/book/susunomi_page10.jpg",
            "text": "でも、その料理は\nだれにも食べられません。"
      },
      {
            "img": "assets/book/susunomi_page11.jpg",
            "text": "朝になると、\n部屋の住人が\nふと思うのです。"
      },
      {
            "img": "assets/book/susunomi_page12.jpg",
            "text": "「なんだか今日は、\n懐かしい気分だな」"
      },
      {
            "img": "assets/book/susunomi_page13.jpg",
            "text": "その言葉を聞くと、\n換気口の奥で\nススノミは笑います。"
      },
      {
            "img": "assets/book/susunomi_page14.jpg",
            "text": "今夜もどこかで、\nススノミは\n思い出の匂いを料理しています。"
      },
      {
            "img": "assets/book/susunomi_endpage.jpg",
            "text": "おしまい"
      }
],
  },
  {
    id: 2,
    name: 'カゲミチ',
    title: '電車の終点に立つ案内人',
    role: '想いの送り届け役',
    personality: '寡黙・慈悲深い・静謐',
    quote: '「それでいい、とカゲミチは思う。」',
    map: { x: 84, y: 47 },
    playable: true,
    bgm: 'assets/audio/kagemichi_bgm.m4a',
    portrait: 'assets/sprites/kagemichi_main.png?v=3',
    links: {
      kindle: 'https://amzn.asia/d/0ibk24mO',
      youtube: 'https://youtube.com/shorts/F4VsWpkLn9w?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/1WRCNHLleGkJvk0gKQKrAV?si=9caa0586ce1044ae',
      line_stamp: 'https://line.me/S/sticker/36757128/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '終電がいってしまったあとの駅は、\nしん、と静かです。\n\nだれもいないはずのホームに、\nぽつん、と立つ黒い影。\n\n行き場のない想いを見守る、\n夜の案内人がいる。',
    stages: [
      {
        title: '終電後の駅ホーム',
        bg: 'assets/img/kagemichi_stage1.jpg?v=3',
        lead: '誰もいない静かなホーム。\nランタンの光を探してみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/kagemichi_a.png?v=3', x: 24, y: 62, size: 12, line: '「終電は、もう出ましたよ」' },
          { type: 'kakera', x: 76, y: 57, line: '想いのかけら。言えなかった言葉の切符。' },
          { type: 'kakera', x: 88, y: 72, line: '想いのかけら。遠い街のネオンの光。' },
        ],
        clear: '夜のしじまの中に、静かな足音が響いている。',
      },
      {
        title: '駅のベンチと柱のかげ',
        bg: 'assets/img/kagemichi_stage2.jpg?v=3',
        lead: 'ホームの柱やベンチのまわり。\n置き忘れた想いを探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/kagemichi_b.png?v=3', x: 28, y: 62, size: 12, line: '「今夜も、お疲れさまでした」' },
          { type: 'kakera', x: 65, y: 63, line: '想いのかけら。誰かを待っていた時間。' },
          { type: 'kakera', x: 51, y: 49, line: '想いのかけら。夜風に揺れるランタン。' },
        ],
        clear: '行き場のない孤独が、静かにほどけていく。',
      },
      {
        title: '夜をゆく影の列車',
        bg: 'assets/img/kagemichi_stage3.jpg?v=3',
        lead: '夜空を走る特別な列車。\n想いを乗せて見送ろう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/kagemichi_c.png?v=3', x: 76, y: 66, size: 12, line: '「夢へ、お送りします」' },
          { type: 'kakera', x: 58, y: 55, line: '想いのかけら。空へ昇る煙と光。' },
          { type: 'kakera', x: 20, y: 44, line: '想いのかけら。線路に残る温もり。' },
        ],
        clear: '「それでいい、とカゲミチは思う。」\n心の重荷がふっと消えていた。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/kagemichi_wave.png?v=3',
      text: '終電後のホームに立つ「カゲミチ」。\n\n人の影から生まれたような、\nふしぎな案内人。\n誰にも言えなかった想いを拾い、\n夢へと送り届けている。',
    },
    book: [
      {
            "img": "assets/book/kagemichi_cover.jpg",
            "text": "第二話\n\n電車の終点に\n立つ案内人"
      },
      {
            "img": "assets/book/kagemichi_page1.jpg",
            "text": "終電がいってしまったあとの駅は、\nしん、と静かです。\n\nだれもいないはずのホームに、\nぽつんと“もう一人”立っていました。"
      },
      {
            "img": "assets/book/kagemichi_page2.jpg",
            "text": "その影の名前は、\n「カゲミチ」。\n\n人の影から生まれたような、\nふしぎな案内人です。\n\n「こんばんは」"
      },
      {
            "img": "assets/book/kagemichi_page3.jpg",
            "text": "カゲミチには、\nだれにも知られていない仕事がありました。\n\nそれは――\n\n“帰れなかった想い”を、\n届けること。"
      },
      {
            "img": "assets/book/kagemichi_page4.jpg",
            "text": "言えなかった「ありがとう」。\n\n渡せなかった手紙。\n\n途中でしまいこんだ気持ち。\n\nカゲミチは、\nそんな“行き場のない感情”を、\nそっと拾い集めます。"
      },
      {
            "img": "assets/book/kagemichi_page5.jpg",
            "text": "集めた想いは、\nランタンの灯りに包まれて、\n夜の街をゆっくり流れていきます。\n\n月をこえて、\n眠っている誰かの夢の中へ。"
      },
      {
            "img": "assets/book/kagemichi_page6.jpg",
            "text": "その夜、\nある人は夢を見ました。\n\n懐かしい声。\nもう会えない誰かの笑顔。\n\nそして――\n\n言えなかった言葉。"
      },
      {
            "img": "assets/book/kagemichi_page7.jpg",
            "text": "朝になると、\nその人は理由もなく涙を流しました。\n\nでも、\n胸の奥が少しだけ軽くなっていました。\n\n「……なんでだろう」"
      },
      {
            "img": "assets/book/kagemichi_page8.jpg",
            "text": "そのころ、\n終点のホームには、\nまた小さな灯りが揺れていました。\n\nカゲミチは、\n静かにうなずきます。\n\n「それでいい」"
      },
      {
            "img": "assets/book/kagemichi_page9.jpg",
            "text": "終電のあと。\n\nだれもいない駅には、\n今日も“案内人”が立っています。\n\n帰れなかった想いを、\nだれかの夢へ届けるために。"
      },
      {
            "img": "assets/book/kagemichi_endpage.jpg",
            "text": "おしまい"
      }
],
  },
  {
    id: 3,
    name: 'トキツギ',
    title: '押し入れの奥の時間職人',
    role: '時間の修復職人',
    personality: '几帳面・手先が器用・仕事熱心',
    quote: '「それは偶然ではない。トキツギが、静かに仕事をした証だ。」',
    map: { x: 65, y: 60 },
    playable: true,
    bgm: 'assets/audio/tokitsugi_bgm.m4a',
    portrait: 'assets/sprites/tokitsugi_main.png',
    links: {
      kindle: 'https://amzn.asia/d/0j2YuzQV',
      youtube: 'https://youtube.com/shorts/qAjC1PyVdks?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/0WlKKApZxU5RkSlTEuoJe1?si=af5c6d0e342e45fb',
      line_stamp: 'https://line.me/S/sticker/37100585/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: 'どの家の押し入れの奥にも、\nほんのわずかな「隙間」がある。\n\nそこに住んでいるのが、\n時間職人の「トキツギ」。\n\nカチ、コチ、と\n壊れた時間を繋ぎ直す音がする。',
    stages: [
      {
        title: '押し入れの隙間',
        bg: 'assets/img/tokitsugi_stage1.jpg',
        lead: '古い押し入れの奥を照らしてみよう。\n小さな歯車が落ちているかも。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tokitsugi_a.png', x: 45, y: 60, size: 13, line: '「カチ、コチ……繋ぎ直し中」' },
          { type: 'kakera', x: 18, y: 72, line: '時間のかけら。すれ違ったあの日の一分。' },
          { type: 'kakera', x: 78, y: 50, line: '時間のかけら。古時計の小さな歯車。' },
        ],
        clear: '押し入れの奥から、チクタクと確かな鼓動が戻ってきた。',
      },
      {
        title: '時計の並ぶ作業机',
        bg: 'assets/img/tokitsugi_stage2.jpg',
        lead: 'トキツギの作業部屋。\n止まりかけた時計を探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tokitsugi_b.png', x: 52, y: 52, size: 14, line: '「時間は、ちゃんと繋がっているよ」' },
          { type: 'kakera', x: 25, y: 65, line: '時間のかけら。言えなかった「ごめんね」。' },
          { type: 'kakera', x: 82, y: 40, line: '時間のかけら。金色のぜんまいの光。' },
        ],
        clear: 'ちぎれそうだった二人の時間が、そっと結ばれる。',
      },
      {
        title: '温かな団らんの部屋',
        bg: 'assets/img/tokitsugi_stage3.jpg',
        lead: '時計の動く居間。\nふたたび巡り合えた時間を見届けよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tokitsugi_c.png', x: 78, y: 65, size: 12, line: '「もう大丈夫。時間は進むよ」' },
          { type: 'kakera', x: 20, y: 60, line: '時間のかけら。大切な家族の笑い声。' },
          { type: 'kakera', x: 50, y: 35, line: '時間のかけら。針が指し示す明日。' },
        ],
        clear: '「それは偶然ではない。トキツギが、静かに仕事をした証だ。」',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/tokitsugi_wave.png',
      text: '押し入れの奥に住む「トキツギ」。\n\nすれ違ってしまった時間や、\n壊れかけた記憶を\n小さな指先で丁寧につなぎ直す職人。',
    },
    book: [
      {
            "img": "assets/book/tokitsugi_cover.jpg",
            "text": "見えない隣人たち\n\n押し入れの奥の\n時間職人"
      },
      {
            "img": "assets/book/tokitsugi_page1.jpg",
            "text": "どの家の押し入れの奥にも、\nほんのわずかな「隙間」がある。"
      },
      {
            "img": "assets/book/tokitsugi_page2.jpg",
            "text": "そこに住んでいるのが、\n時間職人の「トキツギ」。"
      },
      {
            "img": "assets/book/tokitsugi_page3.jpg",
            "text": "トキツギは、\n壊れてしまった“時間”を直している。"
      },
      {
            "img": "assets/book/tokitsugi_page4.jpg",
            "text": "落として割れた思い出。"
      },
      {
            "img": "assets/book/tokitsugi_page5.jpg",
            "text": "すれ違ってしまったタイミング。"
      },
      {
            "img": "assets/book/tokitsugi_page6.jpg",
            "text": "あと一歩で届かなかった言葉。"
      },
      {
            "img": "assets/book/tokitsugi_page7.jpg",
            "text": "トキツギは、\nそんな時間の欠片を集める。"
      },
      {
            "img": "assets/book/tokitsugi_page8.jpg",
            "text": "そして、\n少しだけ“繋ぎ直す”。"
      },
      {
            "img": "assets/book/tokitsugi_page9.jpg",
            "text": "だから時々、\n不思議なことが起きる。"
      },
      {
            "img": "assets/book/tokitsugi_page10.jpg",
            "text": "なくしたはずの写真が、\nなぜか見つかる。"
      },
      {
            "img": "assets/book/tokitsugi_page11.jpg",
            "text": "言えなかったはずの\n「ありがとう」が、届く。"
      },
      {
            "img": "assets/book/tokitsugi_page12.jpg",
            "text": "もう会えない人の夢を\n見る夜もある。"
      },
      {
            "img": "assets/book/tokitsugi_page13.jpg",
            "text": "それは偶然ではない。"
      },
      {
            "img": "assets/book/tokitsugi_page14.jpg",
            "text": "トキツギが、\n誰にも気づかれない場所で、\n静かに仕事をした証。"
      },
      {
            "img": "assets/book/tokitsugi_page15.jpg",
            "text": "今夜もどこかで、\n誰かの壊れた時間が、\nそっと繋ぎ直されている。"
      }
],
  },
  {
    id: 4,
    name: 'ワスレダマ',
    title: '街灯の下の忘れ物係',
    role: '形のない忘れ物係',
    personality: 'おっとり・健気・見守り役',
    quote: '「そこには、昔の自分の夢が書いてあった。」',
    map: { x: 84, y: 82 },
    playable: true,
    bgm: 'assets/audio/wasuredama_bgm.m4a',
    portrait: 'assets/sprites/wasuredama_main.png',
    links: {
      kindle: 'https://amzn.asia/d/03YoUM1B',
      youtube: 'https://youtube.com/shorts/Vc2Vwxy8lHE?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/5HHSSVcJIF3FAWLEVB2to2?si=a1e3aae5e7c04ae0',
      line_stamp: 'https://line.me/S/sticker/37135329/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '夜の街灯の下には、\n小さな影が立っています。\n\n人が急ぎ足で落としていった、\n目に見えない「忘れ物」。\n\n諦めかけた夢をそっと拾い上げる、\n忘れ物係がいる。',
    stages: [
      {
        title: '夜の街灯の下',
        bg: 'assets/img/wasuredama_stage1.jpg',
        lead: '街灯のまるい光の下を照らしてみよう。\n大切な落とし物があるよ。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/wasuredama_a.png', x: 48, y: 65, size: 13, line: '「これ、落とし物だよ」' },
          { type: 'kakera', x: 20, y: 75, line: '記憶のかけら。昔好きだったノートの切れ端。' },
          { type: 'kakera', x: 75, y: 55, line: '記憶のかけら。街灯の光に輝くほこり。' },
        ],
        clear: '落としたはずの夢が、街灯の下で待っていた。',
      },
      {
        title: '忘れられたベンチ',
        bg: 'assets/img/wasuredama_stage2.jpg',
        lead: '公園のベンチのまわり。\n置き忘れた想いを探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/wasuredama_b.png', x: 25, y: 68, size: 14, line: '「忘れてないよ、ちゃんと持ってる」' },
          { type: 'kakera', x: 70, y: 62, line: '記憶のかけら。あきらめかけた約束。' },
          { type: 'kakera', x: 45, y: 40, line: '記憶のかけら。星のように光る初心。' },
        ],
        clear: '急ぎ足の毎日で見失っていた気持ちが、そっと戻ってくる。',
      },
      {
        title: '星降る街の交差点',
        bg: 'assets/img/wasuredama_stage3.jpg',
        lead: '夜の街を歩く人の足もと。\n忘れ物をそっと手渡そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/wasuredama_c.png', x: 72, y: 60, size: 13, line: '「おかえり、あなたの夢」' },
          { type: 'kakera', x: 28, y: 70, line: '記憶のかけら。歩き出す勇気の火。' },
          { type: 'kakera', x: 52, y: 30, line: '記憶のかけら。夜空の星と響き合う。' },
        ],
        clear: '「そこには、昔の自分の夢が書いてあった。」\nもう一度、歩き出せる。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/wasuredama_wave.png',
      text: '街灯の下に立つ「ワスレダマ」。\n\n忙しい日々のなかで\n落としてしまった初心や約束を拾い、\nそっと手元へ戻してくれる見守り役。',
    },
    book: [
      {
            "img": "assets/book/wasuredama_cover.jpg",
            "text": "見えない隣人たち\n\n街灯の下の\n忘れ物係\n\n― ワスレダマ ―"
      },
      {
            "img": "assets/book/wasuredama_page1.jpg",
            "text": "夜の街灯の下には、\n小さな影が立っています。\n\nその名前は――\nワスレダマ。"
      },
      {
            "img": "assets/book/wasuredama_page2.jpg",
            "text": "ワスレダマは、\n人が落としていった\n“忘れ物”を拾っています。\n\nでも、それは\n物ではありません。"
      },
      {
            "img": "assets/book/wasuredama_page3.jpg",
            "text": "「いつかやりたい」と\n言いかけて、やめた夢。\n\nそれが、ぽろりと\n落ちることがあります。"
      },
      {
            "img": "assets/book/wasuredama_page4.jpg",
            "text": "守れなかった約束。\n\n途中で諦めてしまった気持ち。\n\nそんなものも、\n静かに落ちていきます。"
      },
      {
            "img": "assets/book/wasuredama_page5.jpg",
            "text": "心の奥にしまいこんだ\n小さな希望。\n\n見えなくなっても、\n消えたわけではありません。"
      },
      {
            "img": "assets/book/wasuredama_page6.jpg",
            "text": "ワスレダマは、\nそれらをそっと拾い、\n\n大切そうに\n袋へしまいます。"
      },
      {
            "img": "assets/book/wasuredama_page7.jpg",
            "text": "そして――\n\n「まだ必要な人」の近くへ、\nそっと落としていくのです。\n\n気づかれないように。\n静かに。"
      },
      {
            "img": "assets/book/wasuredama_page8.jpg",
            "text": "すると、ときどき。\n\n誰かの心に、\n小さな灯りが戻ります。\n\n「あれ……？」\n\n忘れていた何かを\n思い出すみたいに。"
      },
      {
            "img": "assets/book/wasuredama_page9.jpg",
            "text": "ある日のこと。\n\n引き出しの奥から、\n古いノートが見つかりました。"
      },
      {
            "img": "assets/book/wasuredama_page10.jpg",
            "text": "そこには、\n\n昔の自分が書いた\n夢が残っていました。"
      },
      {
            "img": "assets/book/wasuredama_page11.jpg",
            "text": "忘れていたはずなのに。\n\nその夢は、\nまだ心の中で\n小さく光っていました。"
      },
      {
            "img": "assets/book/wasuredama_page12.jpg",
            "text": "今夜もワスレダマは、\n街のどこかを歩いています。\n\n誰かが落としてしまった\n大切なものを拾うために。\n\nそして――\n\n必要な人へ、\nそっと返すために。"
      },
      {
            "img": "assets/book/wasuredama_endpage.jpg",
            "text": "おしまい"
      }
],
  },
  {
    id: 5,
    name: 'ヌクモリ',
    title: '自動販売機の裏の温度番',
    role: '街の温度調整番',
    personality: '心優しく控えめ・恥ずかしがり屋',
    quote: '「今日は、なんだか凍えないな」',
    map: { x: 35, y: 76 },
    playable: true,
    bgm: 'assets/audio/nukumori_bgm.m4a',
    portrait: 'assets/sprites/nukumori_main.png',
    links: {
      kindle: 'https://amzn.asia/d/0hFuzXbr',
      youtube: 'https://youtube.com/shorts/efvIdDxQd7U?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/60WP7qpvSTE7i8ZguJwuJb?si=81d99f0f1a1a47f4',
      line_stamp: 'https://line.me/S/sticker/37086186/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '真冬の夜。\n自動販売機の裏から、\nふわり、と小さな湯気が立っている。\n\nだれかが、この町を\nそっとあたためているらしい。',
    stages: [
      {
        title: '雪の路地の自販機',
        bg: 'assets/img/stage_page2.jpg',
        lead: '自販機のまわりを、ランタンで照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/nukumori_a.png', x: 50.5, y: 60, size: 11, line: '「……みつかっちゃった」' },
          { type: 'kakera', x: 81, y: 61, line: 'ぬくもりのかけら。街灯の下が、少しあたたかい。' },
          { type: 'kakera', x: 9,  y: 83, line: 'ぬくもりのかけら。雪の中なのに、ほんのり温かい。' },
        ],
        clear: '夜になると、街はしずかに冷えていく。\nそれでも、どこかに小さなぬくもりが残っている。',
      },
      {
        title: '公園のベンチ',
        bg: 'assets/img/stage_page6.jpg',
        lead: '仕事帰りの人が、ベンチで休んでいる。\nだれかが近くにいるみたい。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/nukumori_b.png', x: 11, y: 73, size: 12, line: '「ここは、あったかいよ」' },
          { type: 'kakera', x: 73, y: 66, line: 'ぬくもりのかけら。ベンチが、じんわり温かい。' },
          { type: 'kakera', x: 27, y: 45, line: 'ぬくもりのかけら。街灯の足もとに、やさしい熱。' },
        ],
        clear: '「……あれ？」\n冷たいはずなのに、なぜか凍えるほど寒くない。',
      },
      {
        title: '雪の家並み',
        bg: 'assets/img/stage_page9.jpg',
        lead: '最後の見回り。\n屋根の上まで、よく照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/nukumori_c.png', x: 82, y: 19, size: 10, line: '「風邪ひかないでね」' },
          { type: 'kakera', x: 13, y: 70, line: 'ぬくもりのかけら。窓辺の猫も、ぽかぽか。' },
          { type: 'kakera', x: 84, y: 71, line: 'ぬくもりのかけら。赤い扉の前に、ちいさな温度。' },
        ],
        clear: '冷たい夜の中には、見えない優しさがある。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/nukumori_wave.png',
      text: 'そこに住んでいるのが「ヌクモリ」。\n\n白くてもこもこの体に、\n赤いマフラーを巻いた\n小さな温度番。',
    },
    book: [
      { img: 'assets/book/nukumori_cover.jpg',  text: '真冬の街には、\n誰にも知られていない\n“温度番”がいる。' },
      { img: 'assets/book/nukumori_page1.jpg',  text: '夜になると、\n街はしずかに冷えていく。\n\n白い息。\n凍った道路。\n急ぎ足の人たち。' },
      { img: 'assets/book/nukumori_page2.jpg',  text: 'そんな冬の夜。\n\n古い自動販売機の裏から、\nふわり、と\n小さな湯気が立っていた。' },
      { img: 'assets/book/nukumori_page3.jpg',  text: 'そこに住んでいるのが\n「ヌクモリ」。\n\n白くてもこもこの体に、\n赤いマフラーを巻いた\n小さな温度番。' },
      { img: 'assets/book/nukumori_page4.jpg',  text: 'ヌクモリは毎晩、\n街の“寒さ”を見回っている。\n\n「今日は少し冷えすぎかなあ」\n\nそう言いながら、\n古い温度調整機を\nことこと動かす。' },
      { img: 'assets/book/nukumori_page5.jpg',  text: '寒すぎる夜には、\n公園のベンチへ向かう。\n\nヌクモリは、\nベンチにそっと手を置いた。\n\nすると――じんわり。\nほんの少しだけ、\nあたたかくなる。' },
      { img: 'assets/book/nukumori_page6.jpg',  text: '仕事帰りの女の人が、\nそのベンチに腰かけた。\n\n「……あれ？」\n\n冷たいはずなのに、\nなぜか凍えるほど寒くない。' },
      { img: 'assets/book/nukumori_page7.jpg',  text: '女の人は、\n白い息を吐きながら笑った。\n\n「今日は、なんだか凍えないな」\n\nその言葉を聞いて、\nヌクモリは自動販売機の裏で\n小さくほっとした。' },
      { img: 'assets/book/nukumori_page8.jpg',  text: '誰にも気づかれない場所で。\n\n誰にも名前を呼ばれないまま。\n\nそれでもヌクモリは、\n今日も街をあたためる。' },
      { img: 'assets/book/nukumori_page9.jpg',  text: '冷たい夜の中には、\n見えない優しさがある。\n\nそれはきっと、\n誰かがそっと残してくれた\n小さな“ぬくもり”。' },
      { img: 'assets/book/nukumori_page10.jpg', text: '真冬の夜。\n\n自動販売機の裏では今日も、\n小さな湯気が\n静かに揺れている。' },
      { img: 'assets/book/nukumori_endpage.jpg', text: 'おしまい' },
    ],
  },
  {
    id: 6,
    name: 'ヘンジロウ',
    title: 'ポストの中の返事書き',
    role: '言霊の調律師・返事書き',
    personality: '誠実・思慮深い・言葉を大切にする',
    quote: '「相手は何も聞いていないのに、なぜか理解してくれる。」',
    map: { x: 49, y: 38 },
    playable: true,
    bgm: 'assets/audio/henjirou_bgm.m4a',
    portrait: 'assets/sprites/henjirou_main.png',
    links: {
      kindle: 'https://amzn.asia/d/0eqTzdec',
      youtube: 'https://youtu.be/6mIWOXECe68',
      spotify: 'https://open.spotify.com/intl-ja/track/6dfOE6Kbp1CXs52Si5G67v?si=bc0cf75a540f4f3d',
      line_stamp: 'https://line.me/S/sticker/37090308/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '月がのぼるころ。\n赤い郵便ポストの中で、\nカサ…カサ…と紙の音がする。\n\n届かなかった手紙や、\n言葉になれなかった気持ちを拾い、\n返事を書く小さな郵便屋さんがいる。',
    stages: [
      {
        title: '月夜の赤いポスト',
        bg: 'assets/img/henjirou_stage1.jpg',
        lead: '夜の街角に立つ赤いポスト。\nランタンで照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/henjirou_a.png', x: 32, y: 66, size: 13, line: '「今夜も、たくさんの想いが届いています」' },
          { type: 'kakera', x: 52, y: 45, line: '言葉のかけら。投函口からこぼれる温かい光。' },
          { type: 'kakera', x: 76, y: 60, line: '言葉のかけら。言えなかった「ありがとう」。' },
        ],
        clear: '赤いポストの奥から、羽ペンが走る静かな音が聞こえてくる。',
      },
      {
        title: 'ポストの底の小さな机',
        bg: 'assets/img/henjirou_stage2.jpg',
        lead: 'くしゃくしゃになった想いを伸ばす場所。\n消えかけた気持ちを探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/henjirou_b.png', x: 72, y: 62, size: 13, line: '「ちゃんと届きますように」' },
          { type: 'kakera', x: 26, y: 64, line: '言葉のかけら。書きかけのまま閉じた便箋。' },
          { type: 'kakera', x: 48, y: 38, line: '言葉のかけら。小さなランプがともす言霊。' },
        ],
        clear: 'カリカリ、カリカリ。羽ペンが誰かの心へ宛てた返事を紡いでいく。',
      },
      {
        title: '手紙の眠る書斎',
        bg: 'assets/img/henjirou_stage3.jpg',
        lead: '窓の外には静かな町。\n想いを夜風に乗せて届けよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/henjirou_c.png', x: 25, y: 65, size: 13, line: '「うまく言えなくても、大丈夫」' },
          { type: 'kakera', x: 68, y: 46, line: '言葉のかけら。窓辺から夜空へ舞い上がる手紙。' },
          { type: 'kakera', x: 80, y: 72, line: '言葉のかけら。封蝋に込められた優しさ。' },
        ],
        clear: '「相手は何も聞いていないのに、なぜか理解してくれる。」\n心だけがそっと伝わった。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/henjirou_wave.png',
      text: '赤いポストの底に住む「ヘンジロウ」。\n\n丸いメガネに小さな帽子をかぶり、\n言葉にできなかった想いを調律して\n相手の心へそっと届ける返事書き。',
    },
    book: [
      { img: 'assets/book/henjirou_cover.jpg', text: '見えない隣人たち\n\nポストの中の\n返事書き\n\n― ヘンジロウ ―' },
      { img: 'assets/book/henjirou_page1.jpg', text: '夜の町には、\nだれも知らない小さな仕事があります。\n\n月がのぼるころ――\n赤いポストの中で、\nカサ…カサ…と、\n紙の音がするのです。' },
      { img: 'assets/book/henjirou_page2.jpg', text: 'それは、\n届かなかった手紙。\n書けなかった返事。\n\n「ごめんね」\n「ありがとう」\n「本当は、好きでした」\n\n言葉になれなかった気持ちたち。' },
      { img: 'assets/book/henjirou_page3.jpg', text: 'そんな夜、\nポストの奥で目を覚ますのが、\n「ヘンジロウ」。\n\n丸いメガネに、\n小さな帽子。\n\n夜だけ働く、\n返事書きです。' },
      { img: 'assets/book/henjirou_page4.jpg', text: 'ヘンジロウは、\n届かなかった言葉を拾いあつめます。\n\nくしゃくしゃになった想いを、\nそっと伸ばして。\n\n消えかけた気持ちに、\n小さな灯りをともします。' },
      { img: 'assets/book/henjirou_page5.jpg', text: 'カリカリ。\nカリカリ。\n\n羽ペンを動かしながら、\nヘンジロウは手紙を書きます。\n\n「ちゃんと届きますように」\n\nその言葉を、\nひとつずつ込めながら。' },
      { img: 'assets/book/henjirou_page6.jpg', text: 'すると不思議なことが起こります。\n\nある人は突然、\n「大丈夫だよ」と言いたくなったり。\n\nある人は急に、\n誰かを許したくなったり。' },
      { img: 'assets/book/henjirou_page7.jpg', text: '何も聞いていないのに。\n手紙なんて届いていないのに。\n\nそれでもなぜか、\n心だけが伝わる夜があります。' },
      { img: 'assets/book/henjirou_page8.jpg', text: '窓の外には、\n静かな町。\n\nポストの中には、\nまだたくさんの言葉たち。\n\nヘンジロウは今夜も、\n小さな机に向かっています。' },
      { img: 'assets/book/henjirou_page9.jpg', text: '「うまく言えなくても、大丈夫。」\n\n「想っていた気持ちは、\nちゃんと残っているよ。」' },
      { img: 'assets/book/henjirou_page10.jpg', text: '月あかりの下。\n\n赤いポストの奥で、\nカリカリ、と音がします。\n\n今夜もヘンジロウは、\n誰かの“届かなかった言葉”を、\n\nそっと心へ届けています。' },
      { img: 'assets/book/henjirou_endpage.jpg', text: 'おしまい' },
    ],
  },
  {
    id: 7,
    name: 'ツマヅキ',
    title: '階段の踊り場の見張り番',
    role: '階段の安全番・微小時間の遅延役',
    personality: '俊敏・頼もしい・影の守護者',
    quote: '「つまずきそうになって踏みとどまる。それは偶然ではない。」',
    map: { x: 63, y: 33 },
    playable: true,
    bgm: 'assets/audio/tsumazuki_bgm.m4a',
    portrait: 'assets/sprites/tsumazuki_main.png',
    links: {
      kindle: 'https://amzn.asia/d/0aDjSGa3',
      youtube: 'https://youtube.com/shorts/NrK4dyMBNDM?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/0pHXzPKUnUxJA8ldJUMsZV?si=f1f2646aeb444cd9',
      line_stamp: 'https://line.me/S/sticker/37091468/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: 'マンションや駅の階段にある、\nふしぎな場所「踊り場」。\n\n人がなぜか、ふっと立ち止まる場所。\n\n誰かが転びそうになった瞬間、\n時間をほんの少しだけ遅らせる\n見張り番がいる。',
    stages: [
      {
        title: '階段の踊り場',
        bg: 'assets/img/tsumazuki_stage1.jpg',
        lead: '静かな階段の踊り場を照らしてみよう。\nすみっこに誰かいるみたい。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tsumazuki_a.png', x: 26, y: 66, size: 13, line: '「よし、足もと異常なし！」' },
          { type: 'kakera', x: 68, y: 52, line: '守られたかけら。手すりに残る安心のぬくもり。' },
          { type: 'kakera', x: 45, y: 36, line: '守られたかけら。踊り場の窓から差す月光。' },
        ],
        clear: '階段のすみで、小さなフードの影が静かに見張っている。',
      },
      {
        title: 'つまずきそうな瞬間',
        bg: 'assets/img/tsumazuki_stage2.jpg',
        lead: 'あっ、と足がもつれた瞬間。\n時間をゆっくりにして助けよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tsumazuki_b.png', x: 74, y: 62, size: 13, line: '「おっと、あぶない！」' },
          { type: 'kakera', x: 30, y: 58, line: '守られたかけら。ほんのコンマ一秒の猶予。' },
          { type: 'kakera', x: 55, y: 40, line: '守られたかけら。空中で止まった水滴の光。' },
        ],
        clear: '時間がふわりと揺れ、足がしっかり段差を踏みしめた。',
      },
      {
        title: '夜の階段の見回り',
        bg: 'assets/img/tsumazuki_stage3.jpg',
        lead: '誰も気づかない踊り場のすみ。\n今夜の見回り完了を見届けよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tsumazuki_c.png', x: 32, y: 64, size: 13, line: '「だいじょうぶ、ほんの少しだけだからね」' },
          { type: 'kakera', x: 75, y: 68, line: '守られたかけら。「運がよかった」の裏側。' },
          { type: 'kakera', x: 52, y: 34, line: '守られたかけら。明日へ無事に続く階段。' },
        ],
        clear: '「つまずきそうになって踏みとどまる。それは偶然ではない。」',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/tsumazuki_wave.png',
      text: '階段の踊り場にいる「ツマヅキ」。\n\n人が転びそうになった瞬間、\n時間をほんの少しだけゆっくりにして\n日常の事故から守ってくれる見張り番。',
    },
    book: [
      { img: 'assets/book/tsumazuki_cover.jpg', text: '見えない隣人たち\n\n階段の踊り場の\n見張り番\n\n― ツマヅキ ―' },
      { img: 'assets/book/tsumazuki_page1.jpg', text: 'マンションの階段には、\nふしぎな場所があります。\n\nそれは、\n「踊り場」。\n\n人がなぜか、\nふっと立ち止まる場所です。' },
      { img: 'assets/book/tsumazuki_page2.jpg', text: '朝の急いでいる時間。\n\n学校へ向かう人。\n仕事へ向かう人。\n\nみんな、\n足早に階段をのぼっていきます。' },
      { img: 'assets/book/tsumazuki_page3.jpg', text: 'でも、ときどき――\n\n「あっ。」\n\n足がもつれて、\n転びそうになることがあります。' },
      { img: 'assets/book/tsumazuki_page4.jpg', text: 'その瞬間。\n\n階段のすみで、\n小さなフードの影が\nそっと手を伸ばします。\n\nその子の名前は、\n「ツマヅキ」。' },
      { img: 'assets/book/tsumazuki_page5.jpg', text: 'ツマヅキは、\n人が転ばないように、\n\nほんの少しだけ――\n\n時間をゆっくりにします。' },
      { img: 'assets/book/tsumazuki_page6.jpg', text: 'だから、\n\nつまずきそうになっても、\n踏みとどまれる。\n\n落としたコップも、\nなぜか手の中に戻ってくる。' },
      { img: 'assets/book/tsumazuki_page7.jpg', text: '人はそれを、\n\n「運がよかった」\n「たまたまだった」\n\nそう思っています。' },
      { img: 'assets/book/tsumazuki_page8.jpg', text: 'でも、本当は。\n\n踊り場のすみで、\nツマヅキが\nがんばっているのです。\n\n誰にも気づかれないまま。' },
      { img: 'assets/book/tsumazuki_page9.jpg', text: '今日もまた――\n\n階段の途中で、\n誰かが転びそうになる。\n\nすると、\n時間がふわりと揺れました。' },
      { img: 'assets/book/tsumazuki_page10.jpg', text: '「だいじょうぶ。\nほんの少しだけだからね。」\n\n小さな声は、\n誰にも聞こえません。\n\nけれど今日も、\n誰かが守られているのです。' },
      { img: 'assets/book/tsumazuki_endpage.jpg', text: 'おしまい' },
    ],
  },
  {
    id: 8,
    name: 'カゾエル',
    title: '公園のブランコの数え役',
    role: '日々の営みの記録係',
    personality: '公平・ひたむき・温かな眼差し',
    quote: '「誰にも褒められなかった日でも、その頑張りは消えていない。」',
    map: { x: 75, y: 37 },
    playable: true,
    bgm: 'assets/audio/kazoeru_bgm.m4a',
    portrait: 'assets/sprites/kazoeru_main.png',
    links: {
      kindle: 'https://amzn.asia/d/03xEsRIu',
      youtube: 'https://youtube.com/shorts/NrBXsSRQdTg?feature=share',
      spotify: 'https://open.spotify.com/intl-ja/track/3nrOJVsnetrkGxX6QxrPda?si=76d3de19fc1946b4',
      line_stamp: 'https://line.me/S/sticker/37146749/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '夜の公園で、\nだれも乗っていないブランコが\nきい……こ、と揺れている。\n\n風もないのに揺れるブランコのそばで、\n今日誰かが頑張った回数を\nひとつ残らず数えている隣人がいる。',
    stages: [
      {
        title: '揺れる夜のブランコ',
        bg: 'assets/img/kazoeru_stage1.jpg',
        lead: '誰もいない夜の公園。\nブランコのまわりを照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/kazoeru_a.png', x: 28, y: 66, size: 13, line: '「いーち、にーい……今日もよく頑張ったね」' },
          { type: 'kakera', x: 64, y: 58, line: '努力のかけら。きい、こ、と揺れる鎖の音。' },
          { type: 'kakera', x: 48, y: 36, line: '努力のかけら。街灯が見守っていた帰り道。' },
        ],
        clear: '風もないのに揺れるブランコが、誰かの1日を静かに讃えている。',
      },
      {
        title: 'ベンチの記録ノート',
        bg: 'assets/img/kazoeru_stage2.jpg',
        lead: 'カゾエルが開いているノート。\n今日数えたものを見てみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/kazoeru_b.png', x: 72, y: 64, size: 13, line: '「笑った回数も、我慢した回数も、全部ここにあるよ」' },
          { type: 'kakera', x: 26, y: 62, line: '努力のかけら。誰にも見せなかった涙のあと。' },
          { type: 'kakera', x: 52, y: 42, line: '努力のかけら。ふっと笑えた小さな瞬間。' },
        ],
        clear: '誰にも見えなかった努力が、ノートの上に温かい光となって記されていく。',
      },
      {
        title: 'ベンチに残った「正」の字',
        bg: 'assets/img/kazoeru_stage3.jpg',
        lead: '静かに止まったブランコ。\nベンチの上を照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/kazoeru_c.png', x: 34, y: 62, size: 13, line: '「えらかったね。ちゃんと見ていたよ」' },
          { type: 'kakera', x: 68, y: 66, line: '努力のかけら。ひとつ増えた小さな「正」の字。' },
          { type: 'kakera', x: 56, y: 35, line: '努力のかけら。明日へ踏み出すための肯定。' },
        ],
        clear: '「誰にも褒められなかった日でも、その頑張りは消えていない。」',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/kazoeru_wave.png',
      text: '夜の公園で数える「カゾエル」。\n\n誰にも見られていない孤独な努力や\n我慢した回数をひとつ残らず記録し、\nそっと肯定してくれる数え役。',
    },
    book: [
      { img: 'assets/book/kazoeru_cover.jpg', text: '見えない隣人たち\n\nカゾエル\n\n〜公園のブランコの数え役〜' },
      { img: 'assets/book/kazoeru_page1.jpg', text: '夜の公園で、\nだれも乗っていないブランコが、\n\nきい……こ、と\n揺れていました。' },
      { img: 'assets/book/kazoeru_page2.jpg', text: '風もないのに、\nどうして揺れているんだろう。\n\nそう思って近づくと――' },
      { img: 'assets/book/kazoeru_page3.jpg', text: 'ベンチに、\n小さなだれかが座っていました。\n\nそれが、\n「カゾエル」です。' },
      { img: 'assets/book/kazoeru_page4.jpg', text: 'カゾエルは、\n毎晩ノートを開いて、\nなにかを数えています。' },
      { img: 'assets/book/kazoeru_page5.jpg', text: '今日、笑った回数。\n\nふっと笑えたことも、\nちゃんと数えます。' },
      { img: 'assets/book/kazoeru_page6.jpg', text: '今日、悲しかった回数。\n\nひとりで泣いた夜も、\nカゾエルは知っています。' },
      { img: 'assets/book/kazoeru_page7.jpg', text: 'そして――\n\n頑張った回数も。\n\nだれにも見えなかった努力を、\nひとつ残らず数えています。' },
      { img: 'assets/book/kazoeru_page8.jpg', text: '「えらかったね」\n\nカゾエルは、\n声には出さずに、\nそっとうなずきました。' },
      { img: 'assets/book/kazoeru_page9.jpg', text: 'だから――\n\nだれにも褒められなかった日でも、\nその頑張りは消えていません。' },
      { img: 'assets/book/kazoeru_page10.jpg', text: '帰り道。\n\nもう一度ふり返ると、\nブランコは静かに止まっていました。\n\nでも、ベンチの上には――\n\n小さな正の字が、\nひとつ増えていたのです。' },
      { img: 'assets/book/kazoeru_page11.jpg', text: '「きみの頑張りを、\nちゃんと数えている誰かがいる。」' },
      { img: 'assets/book/kazoeru_endpage.jpg', text: 'おしまい' },
    ],
  },
  {
    id: 9,
    name: 'トメルン',
    title: '冷蔵庫の奥の時間保存士',
    role: '情景の時間保存士',
    personality: '情に厚い・慎み深い・優しい',
    quote: '「“腐りそうな時間”を、ほんの少しだけ延ばしている。」',
    map: { x: 81, y: 28 },
    playable: true,
    bgm: 'assets/audio/tomerun_bgm.m4a',
    portrait: 'assets/sprites/tomerun_main.png',
    links: {
      kindle: 'https://amzn.asia/d/01rxv3i4',
      youtube: 'https://youtu.be/Hh0RThQdJGM',
      spotify: 'https://open.spotify.com/intl-ja/track/5rNZFD629UY0aLreiBg8Cg?si=fc72bcb830934b4f',
      line_stamp: 'https://line.me/S/sticker/37146783/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '夜の冷蔵庫には、\nだれも知らない“もうひとつの棚”がある。\n\nふわふわの青い服を着て、\n小さな砂時計を持つ「トメルン」。\n\n終わってほしくない愛おしい時間を、\nほんの少しだけ延ばしている。',
    stages: [
      {
        title: '冷蔵庫の奥の小さな棚',
        bg: 'assets/img/tomerun_stage1.jpg',
        lead: '夜の冷蔵庫の奥を照らしてみよう。\nひんやり優しい光が見えるよ。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tomerun_a.png', x: 30, y: 64, size: 13, line: '「こんばんは。今日はどんな時間かな」' },
          { type: 'kakera', x: 68, y: 55, line: '保存された時間。冷気の奥にきらめく氷の結晶。' },
          { type: 'kakera', x: 48, y: 36, line: '保存された時間。小さな砂時計の金色の粒。' },
        ],
        clear: '冷蔵庫の奥の小さな棚で、大切な時間が静かに守られている。',
      },
      {
        title: '終わってほしくない食卓',
        bg: 'assets/img/tomerun_stage2.jpg',
        lead: '湯気の向こうにある笑顔。\n楽しい団らんの時間を守ろう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tomerun_b.png', x: 74, y: 64, size: 13, line: '「あと少しだけ、この時間が続きますように」' },
          { type: 'kakera', x: 28, y: 58, line: '保存された時間。食卓を囲む温かい笑い声。' },
          { type: 'kakera', x: 54, y: 38, line: '保存された時間。消えない湯気のぬくもり。' },
        ],
        clear: '楽しかった時間ほど終わるのが早いから、ほんの少しだけ時計をゆるめる。',
      },
      {
        title: '時間ランタンの輝き',
        bg: 'assets/img/tomerun_stage3.jpg',
        lead: 'カチ、コチ、と回る時間ランタン。\n宝物になる余韻を見届けよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/tomerun_c.png', x: 34, y: 62, size: 13, line: '「大丈夫。大切な時間はちゃんと守られてるよ」' },
          { type: 'kakera', x: 70, y: 62, line: '保存された時間。もう少しだけ一緒にいたい夜。' },
          { type: 'kakera', x: 50, y: 34, line: '保存された時間。心をあたため続ける記憶。' },
        ],
        clear: '「“腐りそうな時間”を、ほんの少しだけ延ばしている。」',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/tomerun_wave.png',
      text: '冷蔵庫の奥に住む「トメルン」。\n\n終わってほしくない家族の団らんや\n愛おしい夜の時間を、\n小さな砂時計でそっと延ばしてくれる時間保存士。',
    },
    book: [
      { img: 'assets/book/tomerun_cover.jpg', text: '見えない隣人たち\n\n冷蔵庫の奥の\n時間保存士\n\n― トメルン ―' },
      { img: 'assets/book/tomerun_page1.jpg', text: '夜の冷蔵庫には、\nだれも知らない\n“もうひとつの棚”があります。\n\nそこには、\n小さな時間保存士が\n住んでいました。' },
      { img: 'assets/book/tomerun_page2.jpg', text: '名前は、\n「トメルン」。\n\nふわふわの青い服を着て、\n小さな砂時計を持っています。\n\n「こんばんは。\n今日は、どんな時間かな。」' },
      { img: 'assets/book/tomerun_page3.jpg', text: 'トメルンのお仕事は、\n“腐りそうな時間”を\n少しだけ止めること。\n\n食べものだけじゃありません。\n\n人の気持ちにも、\n“賞味期限”があるのです。' },
      { img: 'assets/book/tomerun_page4.jpg', text: 'たとえば――\n\n「もう少しだけ\n一緒にいたい夜」。\n\n楽しかった時間ほど、\n終わるのが早いから。' },
      { img: 'assets/book/tomerun_page5.jpg', text: 'たとえば――\n\n「終わってほしくない食卓」。\n\n湯気の向こうにある笑顔を、\nだれかが忘れないように。' },
      { img: 'assets/book/tomerun_page6.jpg', text: 'たとえば――\n\n「最後の家族の時間」。\n\n言葉にできない気持ちが、\n部屋いっぱいに広がる夜。' },
      { img: 'assets/book/tomerun_page7.jpg', text: 'そんな夜、\nトメルンは\nそっと時間ランタンを回します。\n\nすると――\nカチ、コチ、カチ…\n\n時間が、\n少しだけ\nゆっくり流れはじめるのです。' },
      { img: 'assets/book/tomerun_page8.jpg', text: '「あと少しだけ。\nこの時間が、\n続きますように。」\n\nトメルンは、\n誰にも気づかれないまま、\n大切な時間を守っています。' },
      { img: 'assets/book/tomerun_page9.jpg', text: 'でも、\n止められる時間は、\nほんの少しだけ。\n\n朝はやってきます。\n\n夜も、\nいつか終わります。' },
      { img: 'assets/book/tomerun_page10.jpg', text: 'だからこそ――\n\n少しだけ伸びた時間は、\n宝物になるのです。\n\n「ちゃんと一緒に笑えた」\n\nその記憶が、\n心をあたため続けるから。' },
      { img: 'assets/book/tomerun_page11.jpg', text: '今日も、\n冷蔵庫の奥では、\n小さな時間保存士が、\n静かに働いています。\n\n「大丈夫。\n大切な時間は、\nちゃんと守られてるよ。」' },
      { img: 'assets/book/tomerun_page12.jpg', text: 'もし夜に、\n冷蔵庫の灯りが\n少しだけやさしく見えたなら――\n\nそれはきっと、\nトメルンが\n時間を守っているからです。' },
      { img: 'assets/book/tomerun_endpage.jpg', text: 'おしまい' },
    ],
  },
  {
    id: 10,
    name: 'ホシハコビ',
    title: '屋根の上の星運び',
    role: '願いの配達・星の誘導役',
    personality: '軽やか・ロマンチスト・星好き',
    quote: '「それは、空の偶然ではない。」',
    map: { x: 44, y: 21 },
    playable: true,
    bgm: 'assets/audio/hoshihakobi_bgm.m4a',
    portrait: 'assets/sprites/hoshihakobi_main.png',
    links: {
      kindle: 'https://amzn.asia/d/0eszJSGL',
      youtube: 'https://youtu.be/NZWEeUwiKzQ',
      spotify: 'https://open.spotify.com/intl-ja/track/2MSqPsapo4VaqcygbwyNzJ?si=7d4f2069be1b43fe',
      line_stamp: 'https://line.me/S/sticker/37224484/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '夜になると、町の屋根の上を\nとことこ、とことこ、\n小さな光が歩いている。\n\n星の入った箱を背負い、\n誰かの願いが空へ届くように\nそっと星を並べ替える隣人がいる。',
    stages: [
      {
        title: '月夜の屋根の上',
        bg: 'assets/img/hoshihakobi_stage1.jpg',
        lead: 'みんなが眠る町の屋根の上。\n小さな光の足あとを探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/hoshihakobi_a.png', x: 30, y: 62, size: 13, line: '「とことこ……今夜もいい星空だね」' },
          { type: 'kakera', x: 68, y: 48, line: '星のかけら。煙突のそばで瞬く小さな光。' },
          { type: 'kakera', x: 46, y: 30, line: '星のかけら。屋根瓦に落ちた銀色のきらめき。' },
        ],
        clear: '静かな屋根の上を、星を背負った小さな影が軽やかに歩いていく。',
      },
      {
        title: '星を並べ替える夜空',
        bg: 'assets/img/hoshihakobi_stage2.jpg',
        lead: '悲しい夜に流れ星が見えるように。\n星の輝きを集めよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/hoshihakobi_b.png', x: 72, y: 60, size: 13, line: '「あの子の願いが、ちゃんと届きますように」' },
          { type: 'kakera', x: 26, y: 52, line: '星のかけら。寂しい夜を照らす一等星。' },
          { type: 'kakera', x: 52, y: 34, line: '星のかけら。奇跡を結ぶ星座の糸。' },
        ],
        clear: '「わあ！ 流れ星！」\n夜空を見上げた誰かの瞳に、小さな希望が灯った。',
      },
      {
        title: '明日へ続く星の道',
        bg: 'assets/img/hoshihakobi_stage3.jpg',
        lead: 'きらり、と手の中で光る星。\n願いを夜空へ送り出そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/hoshihakobi_c.png', x: 35, y: 64, size: 13, line: '「だいじょうぶ。願いはちゃんと空へ届くよ」' },
          { type: 'kakera', x: 70, y: 45, line: '星のかけら。明日へと続く流れ星の尾。' },
          { type: 'kakera', x: 55, y: 28, line: '星のかけら。空で重なり合った二つの祈り。' },
        ],
        clear: '「それは、空の偶然ではない。」\n止まっていた時間が、また静かに動き出した。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/hoshihakobi_wave.png',
      text: '屋根の上を歩く「ホシハコビ」。\n\n星の入った箱を背負って夜空を旅し、\n人の願いや祈りが届くように\nそっと星を並べ替える星運び。',
    },
    book: [
      { img: 'assets/book/hoshihakobi_cover.jpg', text: '見えない隣人たち\n\n屋根の上の\n星運び\n\n― ホシハコビ ―' },
      { img: 'assets/book/hoshihakobi_page1.jpg', text: '夜になると、\n町の屋根の上を――\n\nとことこ、とことこ。\n\n小さな光が歩いています。' },
      { img: 'assets/book/hoshihakobi_page2.jpg', text: 'その子の名前は、\n「ホシハコビ」。\n\n星の入った箱を背負って、\n毎晩、空を旅しています。' },
      { img: 'assets/book/hoshihakobi_page3.jpg', text: 'ホシハコビのお仕事は、\n星を運ぶこと。\n\nでも、ただ運ぶだけではありません。\n\nほんの少しだけ――\n星の場所を動かしているのです。' },
      { img: 'assets/book/hoshihakobi_page4.jpg', text: '「あの子の願いが、\nちゃんと届きますように。」\n\nホシハコビは、\n空を見上げながらつぶやきました。' },
      { img: 'assets/book/hoshihakobi_page5.jpg', text: '悲しい夜には、\n流れ星が見えるように。\n\n寂しい夜には、\n誰かと会えるように。\n\nホシハコビは、\nそっと星を並べ替えます。' },
      { img: 'assets/book/hoshihakobi_page6.jpg', text: 'だから、ときどき――\n\n「わあ！ 流れ星！」\n\nそんな奇跡が起こるのです。' },
      { img: 'assets/book/hoshihakobi_page7.jpg', text: 'だから、ときどき――\n\n「願いが叶った！」\n\nそんな日がやってくるのです。' },
      { img: 'assets/book/hoshihakobi_page8.jpg', text: 'だから、ときどき――\n\n「こんな偶然、あるんだ。」\n\n止まっていた時間が、\nまた動き出すこともあります。' },
      { img: 'assets/book/hoshihakobi_page9.jpg', text: 'けれど、\nホシハコビを見た人は、\nほとんどいません。\n\nみんなが眠っているころ、\n静かな屋根の上を歩いているからです。' },
      { img: 'assets/book/hoshihakobi_page10.jpg', text: '今夜もホシハコビは、\n小さな星を手に取ります。\n\nきらり。\n\nその光は、\n誰かの明日へ続いていました。' },
      { img: 'assets/book/hoshihakobi_page11.jpg', text: '「だいじょうぶ。」\n\n「願いは、ちゃんと空へ届くよ。」\n\nホシハコビは、\n優しく笑いました。' },
      { img: 'assets/book/hoshihakobi_page12.jpg', text: '夜空を見上げたとき、\nもし流れ星を見つけたら――\n\nそれはきっと、\nホシハコビが近くにいるしるし。' },
      { img: 'assets/book/hoshihakobi_page13.jpg', text: '屋根の上を、\n今日も小さな光が歩いています。\n\n人の願いを、\n空へ届けるために。\n\nそれは、\n空の偶然ではないのです。' },
      { img: 'assets/book/hoshihakobi_endpage.jpg', text: 'おしまい' },
    ],
  },
  {
    id: 11,
    name: 'ユメアツメ',
    title: '夢の保管庫の管理人',
    role: '夢の保管係',
    personality: '穏やか・前向き・包容力がある',
    quote: '「夢には賞味期限がないから。」',
    map: { x: 16, y: 24 },
    playable: true,
    bgm: 'assets/audio/yumeatsume_bgm.m4a',
    portrait: 'assets/sprites/yumeatsume_main.png',
    links: {
      kindle: 'https://amzn.asia/d/0i3JGqBu',
      youtube: 'https://youtu.be/VCdgXB4sBl0',
      spotify: 'https://open.spotify.com/intl-ja/track/1n4Fi7hlTLxEUm4Bqv9qJf?si=fe8d320f450b42a9',
      line_stamp: 'https://line.me/S/sticker/37385532/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '人が諦めてしまった夢は、\nどこへ行くのだろう。\n\n常世町の西の丘にある大きな温室\n「夢の保管庫」。\n\nこぼれ落ちた夢の光をガラス瓶に集め、\n持ち主が迎えに来る日まで守る管理人がいる。',
    stages: [
      {
        title: '西の丘の夢の保管庫',
        bg: 'assets/img/yumeatsume_stage1.jpg',
        lead: '常世町の西の丘にある大きな温室。\nランタンで夢の光を照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/yumeatsume_a.png', x: 30, y: 65, size: 13, line: '「ようこそ、ここは夢の保管庫だよ」' },
          { type: 'kakera', x: 68, y: 48, line: '夢のかけら。「もう無理だよ」とこぼれた小さな光。' },
          { type: 'kakera', x: 46, y: 32, line: '夢のかけら。温室のガラスに映る星のきらめき。' },
        ],
        clear: '西の丘の大きな温室で、諦められた夢たちが消えずに息づいている。',
      },
      {
        title: 'ガラス瓶の並ぶ棚',
        bg: 'assets/img/yumeatsume_stage2.jpg',
        lead: '棚に並ぶたくさんのガラス瓶。\nきらきらと眠る夢を探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/yumeatsume_b.png', x: 72, y: 63, size: 13, line: '「パティシエも、宇宙飛行士も、絵描きも、みんなここにあるよ」' },
          { type: 'kakera', x: 26, y: 58, line: '夢のかけら。二十年前にしまった古いギターの記憶。' },
          { type: 'kakera', x: 52, y: 38, line: '夢のかけら。ガラス瓶の中で温かく脈打つ希望。' },
        ],
        clear: 'たくさんのガラス瓶の中で、それぞれの夢が静かに出番を待っている。',
      },
      {
        title: 'よみがえる夢の光',
        bg: 'assets/img/yumeatsume_stage3.jpg',
        lead: 'ぱっと明るく光りだしたガラス瓶。\nふたを開けて持ち主のもとへ送り出そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/yumeatsume_c.png', x: 34, y: 64, size: 13, line: '「おかえり。夢には、賞味期限なんてないからね」' },
          { type: 'kakera', x: 70, y: 52, line: '夢のかけら。もう一度歩き始めた音楽の夢。' },
          { type: 'kakera', x: 48, y: 30, line: '夢のかけら。朝の町へと飛んでいく黄金色の光。' },
        ],
        clear: '「夢には賞味期限がないから。」\n忘れていた夢が、もう一度歩き始めた。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/yumeatsume_wave.png',
      text: '夢の保管庫の管理人「ユメアツメ」。\n\n人が諦めてしまった夢の光をガラス瓶に集め、\n持ち主がもう一度思い出すその日まで\n温かく守り続けている保管係。',
    },
    book: [
      { img: 'assets/book/yumeatsume_cover.jpg', text: '見えない隣人たち\n\n夢の保管庫の\n管理人\n\n― ユメアツメ ―' },
      { img: 'assets/book/yumeatsume_page1.jpg', text: '人が諦めてしまった夢は、\nどこへ行くのでしょう。\n\n実はその夢は、\n消えてしまうわけではありません。' },
      { img: 'assets/book/yumeatsume_page2.jpg', text: '常世町の西の丘には、\n大きな温室のような建物があります。\n\nその名前は――\n「夢の保管庫」' },
      { img: 'assets/book/yumeatsume_page3.jpg', text: '棚には、\nたくさんのガラス瓶が並んでいます。\n\n瓶の中では、\n小さな夢の光が、\nきらきらと眠っています。' },
      { img: 'assets/book/yumeatsume_page4.jpg', text: 'その保管庫で働いているのが、\n夢の保管係、\nユメアツメです。\n\n夢には賞味期限がないと、\n誰よりも信じています。' },
      { img: 'assets/book/yumeatsume_page5.jpg', text: '夜になると、\nユメアツメは町へ出かけます。\n\n誰にも気づかれないように、\n静かな道を歩いていきます。' },
      { img: 'assets/book/yumeatsume_page6.jpg', text: '人が、\n「もう無理だよ」\nそう言って夢を諦めたとき。\n\n胸の奥から、\n小さな光が、\nふわりとこぼれます。' },
      { img: 'assets/book/yumeatsume_page7.jpg', text: 'ユメアツメは、\nその光をやさしく拾い上げ、\nガラス瓶へ入れます。\n\nそして、\n夢の保管庫へ大切に持ち帰ります。' },
      { img: 'assets/book/yumeatsume_page8.jpg', text: '瓶の中には、\nパティシエになりたかった夢。\n宇宙飛行士になりたかった夢。\n絵描きになりたかった夢。\n\nたくさんの夢が、\n静かに眠っています。' },
      { img: 'assets/book/yumeatsume_page9.jpg', text: 'ある夜。\n四十代の男性が、\n長いあいだしまっていた\n古いギターを手に取りました。\n\nそれは、\n二十年前に諦めた音楽の夢でした。' },
      { img: 'assets/book/yumeatsume_page10.jpg', text: 'その瞬間。\n夢の保管庫の瓶が、\nぱっと明るく光ります。\n\nユメアツメは微笑み、\n「おかえり」\nと言って、\n瓶のふたを開けました。' },
      { img: 'assets/book/yumeatsume_page11.jpg', text: '翌朝。\n男性は、\n理由もわからないまま、\n楽器店へ向かっていました。\n\n忘れていた夢が、\nもう一度歩き始めたのです。' },
      { img: 'assets/book/yumeatsume_page12.jpg', text: '今日もどこかで、\n誰かが夢を諦め、\n誰かが夢を思い出します。\n\nユメアツメは、\n小さな光を抱きしめながら、\n静かに微笑みます。\n\n「夢には、賞味期限なんてない。」' },
      { img: 'assets/book/yumeatsume_endpage.jpg', text: '夢は、なくなるのではありません。\n持ち主が迎えに来る日まで、\n静かに待っているだけなのです。\n\nおしまい' },
    ],
  },
  {
    id: 12,
    name: 'ナミダビン',
    title: '涙瓶職人',
    role: '涙管理官・感情結晶職人',
    personality: '物静か・職人気質・深い洞察力',
    quote: '「悲しみは、いつか輝きになる。」',
    map: { x: 77, y: 72 },
    playable: true,
    bgm: 'assets/audio/namidabin_bgm.m4a',
    portrait: 'assets/sprites/namidabin_main.png',
    links: {
      kindle: 'https://amzn.asia/d/07sZknYo',
      youtube: 'https://youtu.be/HyvFzlkcE-0',
      spotify: 'https://open.spotify.com/intl-ja/track/5VGtUWCAVDCvtETmRCAtMo?si=db4e8ecf5bfa4365',
      line_stamp: 'https://line.me/S/sticker/37385541/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '夜になると、常世町の地下で\n小さな灯りがぽうっとともる。\n\nそこは何万本もの瓶が並ぶ「涙蔵」。\n\n青いローブをまとい、\n誰かが流した涙の結晶を集めて\n未来の宝石へと磨く職人がいる。',
    stages: [
      {
        title: '常世町の地下「涙蔵」',
        bg: 'assets/img/namidabin_stage1.jpg',
        lead: '何万本もの瓶が並ぶ地下の涙蔵。\nきらきら光る瓶の棚を照らしてみよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/namidabin_a.png', x: 28, y: 65, size: 13, line: '「涙は、心ががんばったしるしなんだ」' },
          { type: 'kakera', x: 68, y: 50, line: '涙の結晶。くやしさをこらえて流した一滴。' },
          { type: 'kakera', x: 48, y: 34, line: '涙の結晶。また会えた日のあたたかい涙。' },
        ],
        clear: '何万本もの瓶の中で、悲しい涙もうれしい涙も大切に守られている。',
      },
      {
        title: '夜の町の涙採集',
        bg: 'assets/img/namidabin_stage2.jpg',
        lead: 'ふわりと舞う小さな青い結晶。\nこぼれた涙をそっと受け止めよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/namidabin_b.png', x: 72, y: 62, size: 13, line: '「どんな涙も、ひとつも捨てないよ」' },
          { type: 'kakera', x: 26, y: 56, line: '涙の結晶。「もうやめたいな」と泣いた夜の粒。' },
          { type: 'kakera', x: 54, y: 38, line: '涙の結晶。泣いては前を向いた季節の記録。' },
        ],
        clear: '誰かが流した涙の一滴が、青い結晶となって採集瓶にしまわれた。',
      },
      {
        title: '青く輝く涙の宝石',
        bg: 'assets/img/namidabin_stage3.jpg',
        lead: 'きらん、と宝石に変わった涙の瓶。\n棚のいちばん光る場所を探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/namidabin_c.png', x: 35, y: 64, size: 13, line: '「悲しみは、いつか輝きになる」' },
          { type: 'kakera', x: 70, y: 58, line: '涙の結晶。乗り越えた日に生まれた青い宝石。' },
          { type: 'kakera', x: 50, y: 32, line: '涙の結晶。未来へ続く小さな宝物。' },
        ],
        clear: '「悲しみは、いつか輝きになる。」\n流した涙が、世界でひとつだけの宝石になった。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/namidabin_wave.png',
      text: '地下の涙蔵で働く「ナミダビン」。\n\n青いローブをまとって夜の町を歩き、\nこぼれた涙の結晶を集めて\nいつの日か美しい宝石へと変える涙瓶職人。',
    },
    book: [
      { img: 'assets/book/namidabin_cover.jpg', text: '見えない隣人たち\n\n涙瓶職人\nナミダビン\n\n― 第十二話 ―' },
      { img: 'assets/book/namidabin_page1.jpg', text: '夜になると、\n常世町の地下で\n小さな灯りが\nぽうっとともります。\n\nそこには――\n「涙蔵（なみだぐら）」\nという、不思議な場所があります。' },
      { img: 'assets/book/namidabin_page2.jpg', text: '棚には、何万本もの瓶。\n\nどの瓶にも、\nきらきら光る涙が\n大切にしまわれています。\n\n悲しい涙。うれしい涙。くやしい涙。\nさよならの涙。また会えた涙。' },
      { img: 'assets/book/namidabin_page3.jpg', text: 'その涙を集めているのが、\n小さな涙管理官、\nナミダビンです。\n\n青いローブをまとい、\n涙採集瓶を持って、\n毎晩、町を歩いています。' },
      { img: 'assets/book/namidabin_page4.jpg', text: '誰かが涙を流すと、\nその涙の一滴だけが、\n\nふわり……\n\n小さな青い結晶になります。\n\nナミダビンは、\nそっと受け止めて、\n瓶へしまいます。' },
      { img: 'assets/book/namidabin_page5.jpg', text: '「涙は、\n心ががんばったしるし。」\n\nナミダビンは、\nそう信じています。\n\nだから、どんな涙も、\nひとつも捨てません。' },
      { img: 'assets/book/namidabin_page6.jpg', text: 'ある町に、\n部活動がうまくいかず、\n毎晩泣いている\n女の子がいました。\n\n「もう、やめたいな……。」\n\nその涙も、\nナミダビンは静かに集めました。' },
      { img: 'assets/book/namidabin_page7.jpg', text: '春が過ぎ、夏が来て、\n秋になり、冬になっても、\n\n女の子は\n何度も立ち上がりました。\n\n泣いては前を向き、\nまた挑戦しました。' },
      { img: 'assets/book/namidabin_page8.jpg', text: 'そして一年後――\n大会の日。\n\n女の子は、\nとうとう優勝しました。\n\nその瞬間。涙蔵の棚にあった瓶が、\nきらん。\n青く、美しい宝石へと変わったのです。' },
      { img: 'assets/book/namidabin_page9.jpg', text: 'ナミダビンは宝石をそっと磨いて、\n棚のいちばん光る場所へ飾りました。\n\n「悲しみは、いつか輝きになる。」\n\nそう、小さくつぶやきながら。' },
      { img: 'assets/book/namidabin_page10.jpg', text: 'だから今日も、\n誰かが泣いていても、\nナミダビンは心配しません。\n\n涙は、弱い人だけが流すものではないから。\n涙は、前へ進もうとする心の証だから。' },
      { img: 'assets/book/namidabin_page11.jpg', text: '町のどこかで、\n今日も誰かが笑い、誰かが泣き、\nまた少しだけ強くなっています。\n\nそのたびに、\n涙蔵には新しい光が\nひとつ増えていきます。' },
      { img: 'assets/book/namidabin_page12.jpg', text: 'もし今日、\n涙がこぼれてしまっても、だいじょうぶ。\n\nその涙は、どこかでナミダビンが\n大切に受け取っています。\n\nそしていつの日か――きっと、\nあなたの涙も、世界でひとつだけの宝石になるのです。' },
      { img: 'assets/book/namidabin_endpage.jpg', text: '「涙は、弱さじゃない。\n未来へ続く、小さな宝物。」\n\nおしまい' },
    ],
  },
  {
    id: 13,
    name: 'アシタヨビ',
    title: '朝焼け配達人',
    role: '朝焼け配達人',
    personality: '明るく行動派・前向き・元気',
    quote: '「明日は希望そのものじゃない。でも、希望を運ぶことはできる。」',
    map: { x: 72, y: 20 },
    playable: true,
    bgm: 'assets/audio/ashitayobi_bgm.m4a',
    portrait: 'assets/sprites/ashitayobi_main.png',
    links: {
      kindle: 'https://amzn.asia/d/06RZ5K78',
      youtube: 'https://youtu.be/ikeSp81cCj8',
      spotify: 'https://open.spotify.com/intl-ja/track/2uri015hpRKcSTcqzDMwt6?si=dfc8b001ac4c47f5',
      line_stamp: 'https://line.me/S/sticker/37385558/?lang=ja&utm_source=gnsh_stickerDetail',
    },
    intro: '夜と朝のあいだ。\n空がまだ青くなる前、\n静かに常世町の東門が開く。\n\n大きな朝焼け鞄を背負い、\nひとりひとり違う色の「明日」を\n窓辺へ届ける配達人がいる。',
    stages: [
      {
        title: '夜明け前の常世町・東門',
        bg: 'assets/img/ashitayobi_stage1.jpg',
        lead: '夜と朝のあいだに開く常世町の東門。\n出発する配達人を探そう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/ashitayobi_a.png', x: 30, y: 64, size: 13, line: '「よし、今日も世界中へ朝を届けにいこう！」' },
          { type: 'kakera', x: 68, y: 48, line: '朝焼けのかけら。頑張った人へ届ける勇気のオレンジ。' },
          { type: 'kakera', x: 46, y: 32, line: '朝焼けのかけら。泣いた人へ届けるやさしい桃色。' },
        ],
        clear: '静かに開いた東門から、大きな朝焼け鞄を背負ったアシタヨビが飛び出していく。',
      },
      {
        title: '眠る町の窓辺へ',
        bg: 'assets/img/ashitayobi_stage2.jpg',
        lead: 'まだ眠っている静かな町。\n窓辺に朝焼けをそっと置いていこう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/ashitayobi_b.png', x: 72, y: 62, size: 13, line: '「さみしい夜を過ごした窓辺にも、やさしい朝を」' },
          { type: 'kakera', x: 28, y: 56, line: '朝焼けのかけら。「今日はなんだか頑張れそう」の種。' },
          { type: 'kakera', x: 52, y: 36, line: '朝焼けのかけら。病院の窓辺へ届ける特別な金色。' },
        ],
        clear: 'ふわりと広がったオレンジ色の光が、眠る人の夢の中へやさしく届いていった。',
      },
      {
        title: '希望を運ぶ朝焼けの空',
        bg: 'assets/img/ashitayobi_stage3.jpg',
        lead: '夜が明けはじめる常世町の空。\n新しい朝の光を見つけよう。',
        targets: [
          { type: 'neighbor', sprite: 'assets/sprites/ashitayobi_c.png', x: 36, y: 62, size: 13, line: '「新しい朝は、あなたのところへもちゃんと届くよ！」' },
          { type: 'kakera', x: 70, y: 46, line: '朝焼けのかけら。「今日はいい日になりそう！」の笑顔。' },
          { type: 'kakera', x: 50, y: 28, line: '朝焼けのかけら。また頑張ろうという気持ちの光。' },
        ],
        clear: '「明日は希望そのものじゃない。でも、希望を運ぶことはできる。」\n常世町の13すべての灯りが、あたたかくともった。',
      },
    ],
    reveal: {
      sprite: 'assets/sprites/ashitayobi_wave.png',
      text: '東門から飛び出す「アシタヨビ」。\n\n大きな朝焼け鞄に色とりどりの光をつめて、\n夜と朝のあいだを飛びながら\n明日への小さな希望を届ける朝焼け配達人。',
    },
    book: [
      { img: 'assets/book/ashitayobi_cover.jpg', text: '見えない隣人たち\n\n朝焼け配達人\nアシタヨビ\n\n― 第十三話 ―' },
      { img: 'assets/book/ashitayobi_page1.jpg', text: '朝は、どうして来るのでしょう。\n\n地球が回るから。\nそれも、本当です。\n\nでも――\n常世町には、もうひとつ理由があります。' },
      { img: 'assets/book/ashitayobi_page2.jpg', text: '夜と朝のあいだ。\n空がまだ、青くなる前。\n\n静かに、常世町の東門が開きます。' },
      { img: 'assets/book/ashitayobi_page3.jpg', text: 'そこから飛び出してくる小さな配達人。\n\n名前は――\nアシタヨビ。\n\n今日も元気いっぱいです。' },
      { img: 'assets/book/ashitayobi_page4.jpg', text: 'アシタヨビの背中には、大きな朝焼け鞄。\n\n中には、\nオレンジ色。桃色。金色。\n\nいろいろな朝焼けが、大切に入っています。' },
      { img: 'assets/book/ashitayobi_page5.jpg', text: '朝焼けは、みんな同じではありません。\n\n頑張った人には、勇気の色。\n泣いた人には、やさしい色。\n笑った人には、もっと明るい色。\n\nひとりひとり違う、世界にひとつだけの朝焼けです。' },
      { img: 'assets/book/ashitayobi_page6.jpg', text: 'アシタヨビのお仕事は、「明日」を届けること。\n\nまだ眠っている町へ。\n静かに。やさしく。\n希望を運びます。' },
      { img: 'assets/book/ashitayobi_page7.jpg', text: '失敗してしまった人。\n泣きながら眠った人。\nさみしい夜を過ごした人。\n\nそんな人の窓辺へ、朝焼けを、そっと置いていきます。' },
      { img: 'assets/book/ashitayobi_page8.jpg', text: 'だから朝になると、\n\n「今日は、なんだか頑張れそう。」\n\nそんな気持ちになる人がいるのです。' },
      { img: 'assets/book/ashitayobi_page9.jpg', text: 'ある夜。アシタヨビは、足を止めました。\n\n病院の窓の向こうで、小さな男の子が、眠っています。' },
      { img: 'assets/book/ashitayobi_page10.jpg', text: '「どんな朝を届けたらいいんだろう。」\n\nアシタヨビは、朝焼け鞄を見つめました。\n\nそして、ずっと大切にしまっていた特別な朝焼けを取り出しました。' },
      { img: 'assets/book/ashitayobi_page11.jpg', text: 'ふわり。\n\nオレンジ色の光が、窓いっぱいに広がります。\n\n朝焼けは、男の子の夢の中へ。\nやさしく、ゆっくり届いていきました。' },
      { img: 'assets/book/ashitayobi_page12.jpg', text: '次の日の朝。男の子は、窓の外を見て言いました。\n\n「今日は、なんだかいい日になりそう！」\n\nその笑顔を見て、空の上でアシタヨビもにっこり笑いました。' },
      { img: 'assets/book/ashitayobi_page13.jpg', text: '明日は、希望そのものではありません。\n\nでも――\n希望を届けることはできる。\n\nそれが、アシタヨビのお仕事です。' },
      { img: 'assets/book/ashitayobi_page14.jpg', text: '今日も、夜と朝のあいだを飛びながら、\nアシタヨビは世界中へ朝を届けています。\n\nだから明日も、きっと大丈夫。\n新しい朝は、あなたのところへもやってきます。' },
      { img: 'assets/book/ashitayobi_endpage.jpg', text: '「朝は、空が運んでくるだけじゃない。\n誰かの“また頑張ろう”という気持ちも、一緒に届いている。」\n\nおしまい' },
    ],
  },
];
