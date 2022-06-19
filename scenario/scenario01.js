const scenario = [
  {
    title: "はじめから",
    slide: "",
    message: [
      { text: "ここをクリックしてね♪" },
      { text: "みなさん、こんにちわ", voice: "001_皆さんっこんにちは.wav" },
      {
        text: "学習ナビゲーターの春日部つむぎです",
        voice: "002_学習ナビゲーターの….wav",
      },
    ],
  },
  {
    title: "スライド１",
    slide: "Slide1.jpg",
    message: [
      {
        text: "今回は経済学について学んでいきましょう",
        voice: "003_今回は経済学につい….wav",
      },
      {
        text: "経済学と聞くと\n「なんだか難しそうだなぁ」\nって思う人が多いかもしれません",
        voice: "004_経済学と聞くと、な….wav",
      },
      {
        text: "でもあまり意識していないだけで、実はとても身近なことなんですよ",
        voice: "005__でもあまり意識して….wav",
      },
    ],
  },
  {
    title: "スライド２",
    slide: "Slide2.jpg",
    message: [
      {
        text: "その代表例はなんといっても、お買い物です",
        voice: "006_その代表例はなんと….wav",
      },
      {
        text: "お菓子を買ったり、お洋服を買ったり、\nあるいは電車に乗ったり、カラオケに行ったり",
        voice: "007_お菓子を買ったりお….wav",
      },
      {
        text: "そういった行動も全部、経済に関係しているんです",
        voice: "008_そういった行動も全….wav",
      },
    ],
  },
  {
    title: "選択問題",
    slide: "",
    message: [
      {
        text: "選択問題です",
        voice: "013_春日部つむぎ（ノーマル）_選択問題です.wav",
      },
    ],
    question: {
      question: "選択問題です",
      choice: [
        {
          text: "Aである",
          voice: "009_春日部つむぎ（ノーマル）_Aである.wav",
          choiced: false,
        },
        {
          text: "Bかもしれない",
          voice: "010_春日部つむぎ（ノーマル）_Bかもしれない.wav",
          choiced: false,
        },
        {
          text: "Cなのかも！？",
          voice: "011_春日部つむぎ（ノーマル）_Cなのかも！？.wav",
          choiced: false,
        },
        {
          text: "Dじゃないよね",
          voice: "012_春日部つむぎ（ノーマル）_Dじゃないよね.wav",
          choiced: false,
        },
      ],
      answer: 2,
    },
    message: [
      {
        text: "選択問題です",
        voice: "013_春日部つむぎ（ノーマル）_選択問題です.wav",
      },
    ],
  },
  {
    slide: "",
    message: [
      {
        text: "お見事です",
        voice: "017_春日部つむぎ（ノーマル）_お見事です.wav",
      },
    ],
  },
];
