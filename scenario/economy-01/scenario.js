const scenario = [
  {
    title: "はじめから",
    slide: "",
    message: [
      {
        text: "ここをクリックしてね♪",
      },
      {
        text: "皆さん、こんにちは\n学習ナビゲーターの春日部つむぎです",
        voice: "001_皆さん、こんにちは….wav",
      },
      {
        text: "今回は「経済学」について学んでいきましょう",
        voice: "002_今回は経済学につい….wav",
      },
    ],
  },
  {
    title: "簡単な導入",
    slide: "経済学-01-01.png",
    message: [
      {
        text: "経済学と聞くと「何だか難しそうだな」と思う人が多いかもしれません\nでも実は、とても身近なことなんですよ",
        voice: "003_経済学と聞くと「何….wav",
      },
      {
        text: "その代表例は何といっても「お買い物」です",
        voice: "004_その代表例はなんと….wav",
      },
      {
        text: "お菓子を買ったりお洋服を買ったり、\nあるいはレストランに行ったりカラオケに行ったり\nそういった行動も全部、経済に関係しているんです",
        voice: "005_お菓子を買ったりお….wav",
      },
      {
        text: "でも、こういう例を挙げると\n「ああ、経済ってつまりお金の話なんだ」って、\n誤解してしまうかもしれません",
        voice: "006_でもっこういう例を….wav",
      },
      {
        text: "確かにお金は、経済のお話をする中で非常に重要な役割がありますが、経済の主役ではないんですよ",
        voice: "007_確かにお金は、経済….wav",
      },
      {
        text: "では「経済」とはそもそも一体なんなのでしょうか？",
        voice: "008_では「経済とはそも….wav",
      },
    ],
  },
  {
    title: "経済とは？",
    slide: "経済学-01-02.png",
    message: [
      {
        text: "「経済」という言葉の由来は、\n中国の「経世済民」という言葉です",
        voice: "009_「経済という言葉の….wav",
      },
      {
        text: "「世を治めて民を救う」\nつまり、私たちが安心して暮らせるように\n「良い社会にしよう」という意味ですね",
        voice: "010_「世をおさめてたみ….wav",
      },
      {
        text: "ただ、こういうと今度は、\n「あれ、経済って政治の話なの？」と思うかもしれません",
        voice: "011_ただ、こういうと今….wav",
      },
      {
        text: "少し違います",
        voice: "012_少し違います.wav",
      },
    ],
  },
  {
    title: "政治と経済",
    slide: "経済学-01-03.png",
    message: [
      {
        text: "政治とは、私たちの代表者である政治家たちが、\n社会に必要なルールを作って実行していくことです",
        voice: "013_政治とは、私たちの….wav",
      },
      {
        text: "とても難しいことなので、\n専門家である政治家の人たちにお任せになってしまうため、",
        voice: "014_とても難しいことな….wav",
      },
      {
        text: "私たちには、ちょって縁が遠くて、\nどうしても関心を持ちにくい分野ですね",
        voice: "015_私たちにはちょって….wav",
      },
      {
        text: "一方で経済とは、私たちの行動１つ１つの積み重ねが社会を作っているので、",
        voice: "016_一方で経済とは、私….wav",
      },
      {
        text: "「私たちが、より良い行動をすることで、より良い社会を作っていく」ことです",
        voice: "017_私たちがより良い行….wav",
      },
      {
        text: "私たちの行動が、社会にダイレクトに影響しているんですよ",
        voice: "018_私たちの行動が、社….wav",
      },
    ],
  },
  {
    title: "例：貧富の格差",
    slide: "経済学-01-04.png",
    message: [
      {
        text: "例えば「貧富の格差」という問題で考えてみましょう",
        voice: "019_例えば「貧富の格差….wav",
      },
      {
        text: "貧富の格差を政治的に対応しようとすると、\n裕福な人からより多くの税金を納めてもらったり、",
        voice: "020_貧富の格差を政治的….wav",
      },
      {
        text: "その税金で医療や教育の費用を安くして、\n貧しい人でも、より安心して暮らせるように調整したりします",
        voice: "021_その税金で医療や教….wav",
      },
      {
        text: "私たちが勝手に税金を徴収できないように、\n「私たちにできること」の範囲を超えることばかりですね",
        voice: "022_私たちが勝手に税金….wav",
      },
      {
        text: "一方で、貧富の格差を経済的に対応しようとすると、\n貧しい人でも簡単に買えるような「安い商品」が多く流通するようになったり",
        voice: "023_一方で、貧富の格差….wav",
      },
      {
        text: "アルバイトなど「とにかくすぐ働ける仕事が増えたりします",
        voice: "024_アルバイトなど「と….wav",
      },
      {
        text: "決して簡単なことではありませんが、\n「困っている人たちに対して、私たちに何ができるか？」というアプローチになります",
        voice: "025_決して簡単なことで….wav",
      },
    ],
  },
  {
    title: "万引きへの対応",
    slide: "経済学-01-05.png",
    message: [
      {
        text: "もう少し掘り下げてみましょう",
        voice: "026_もう少し掘り下げて….wav",
      },
      {
        text: "とても貧しくて食事もままならず、\nいつもお腹を空かせている人がいるとします",
        voice: "027_とても貧しくて食事….wav",
      },
      {
        text: "そんな人が、空腹に耐えかねて食料を万引きしてしまうようなケースに対して、どうすれば良いでしょうか？",
        voice: "028_そんな人が、空腹に….wav",
      },
      {
        text: "経済の視点から考えた時の\n「社会をより良くするための、より良い行動」とは、\nいったい、どんな行動なのでしょうか？",
        voice: "029_経済の視点から考え….wav",
      },
    ],
  },
  {
    title: "選択問題",
    slide: "",
    message: [
      {
        text: "選択肢の中から選んでください",
        voice: "030_選択肢の中から選ん….wav",
      },
    ],
    question: {
      question:
        "空腹に耐えかねて食料を万引きしてしまうようなケースに対して、\nどうすれば良いでしょうか？",
      choice: [
        {
          text: "万引きは許さない、セキュリティ強化",
          choiced: false,
        },
        {
          text: "食料を恵んであげる",
          choiced: false,
        },
        {
          text: "働いてもらう代わりに食料を提供",
          choiced: false,
        },
      ],
      answer: {
        num: 2,
        text: "働いてもらう代わりに食料を提供",
        explanation: "",
        message: "お見事です\nここをクリックして進みます♪",
        voice: "031_お見事です.wav",
      },
    },
  },
  {
    title: "色々な対応",
    slide: "経済学-01-06.png",
    message: [
      {
        text: "それぞれ確認していきましょう",
        voice: "032_それぞれ確認してい….wav",
      },
      {
        text: "まず最初に「どんな事情があるにせよ、万引きは犯罪なので許さない、防犯カメラを設置するなどしてセキュリティを強化する」という案はどうでしょうか？",
        voice: "033_まず最初に、どんな….wav",
      },
      {
        text: "この案自体は、とても一般的で当然の対応だと思いますが、でも決して良い案とも言えません",
        voice: "034_この案自体は、とて….wav",
      },
      {
        text: "防犯カメラにもコストがかかりますので、\nお店側としては結局、多かれ少なかれ損失が発生しますし",
        voice: "035_防犯カメラにもコス….wav",
      },
      {
        text: "それにも関わらず「お腹を空かせている」という原因は解消されずに、そのままなので、",
        voice: "036_それにも関わらず「….wav",
      },
      {
        text: "万引きする側は、何とかセキュリティを掻い潜って\n万引きしようとするでしょう",
        voice: "037_万引きする側はなん….wav",
      },
      {
        text: "そのため、結局イタチごっこになって\n「お互いに苦労ばかりが増える」ということになりがちです",
        voice: "038_そのため、結局いた….wav",
      },
      {
        text: "では次に「さすがに可哀そうだから、少しくらい食料を恵んであげればいい」という案はどうでしょうか？",
        voice: "039_では次に「さすがに….wav",
      },
      {
        text: "その案もあまり良い方法ではありません\n確かにその場は助かるかもしれませんが、\nお腹は毎日すくからです",
        voice: "040_その案もあまり良い….wav",
      },
      {
        text: "それでは毎日、食料を恵んであげなければならなくなり、\nお店側の負担ばかりが大きくなってしまうので、\nその援助を継続することは難しいでしょう",
        voice: "041_それでは毎日食料を….wav",
      },
      {
        text: "そして、その援助をやめた途端、\nすぐにまた空腹に耐えられない状態に戻ってしまいます",
        voice: "042_そしてその援助をや….wav",
      },
      {
        text: "では「掃除や荷物運びなど、簡単な仕事を手伝ってもらう代わりに、報酬として食料を渡す」という方法なら、どうでしょう？",
        voice: "043_では「掃除や荷物運….wav",
      },
      {
        text: "この方法なら、お店側にとってもメリットがありますし、その関係は長期間でも継続しやすいのではないでしょうか",
        voice: "044_この方法なら、お店….wav",
      },
      {
        text: "下手に万引きするよりも、\n働いて正当な報酬を得る方が合理的だし、\n得られる食料も多くなるでしょう",
        voice: "045_下手に万引きするよ….wav",
      },
      {
        text: "少しずつでも仕事を覚えていけば、\n次第に報酬は増えるかもしれないし、\n転職もしやすくなるかもしれません",
        voice: "046_少しずつでも仕事を….wav",
      },
      {
        text: "「お互いにメリットがある」\nと言えるのではないでしょうか",
        voice: "047_お互いにメリットが….wav",
      },
      {
        text: "もちろん、現実はそんなに簡単ではないですし、\n問題点はたくさんあります",
        voice: "048_もちろん、現実はそ….wav",
      },
      {
        text: "ただ、このように立場も力関係も違う両者の間でも、\n「少しでもお互いにメリットがある方法」は、\nきっとあるんです",
        voice: "049_ただ、このように立….wav",
      },
      {
        text: "それを実現することこそが経済です",
        voice: "050_それを実現すること….wav",
      },
      {
        text: "経済の視点から考えた時の\n「社会をより良くするための、より良い行動」とは、\n「win-winの関係を築く」行動のことなんです",
        voice: "051_経済の視点から考え….wav",
      },
    ],
  },
  {
    title: "win-win",
    slide: "経済学-01-07.png",
    message: [
      {
        text: "もっと単純に「助け合い」と言ってもいいのかもしれませんが、「助け合い」には自己犠牲の精神が含まれがちです",
        voice: "052_もっと単純に、助け….wav",
      },
      {
        text: "「困っている人がいたら、自分の損には目をつぶって助けてあげるべき」という考え方になりがちでしょう",
        voice: "053_「困っている人がい….wav",
      },
      {
        text: "それはもちろん、道徳的にとても素晴らしい精神かもしれません",
        voice: "054_それはもちろん、道….wav",
      },
      {
        text: "しかし、先ほどの例のように、\n「一方が我慢して手助けする」というアンバランスな状態では、すぐに限界が来てしまいます",
        voice: "055_しかし、先ほどの例….wav",
      },
      {
        text: "善意だけに頼っていては、どうしても長続きしないんです",
        voice: "056_善意だけに頼ってい….wav",
      },
      {
        text: "それに対してwin-winの関係とは、\n「お互いに協力した方がメリットがある」\nという状態でバランスが安定しています",
        voice: "057_それに対してうぃん….wav",
      },
      {
        text: "そのため、この関係は長続きしやすいですし、\nできるだけ維持しようと、お互いに積極的に協力するようになります",
        voice: "058_そのため、この関係….wav",
      },
      {
        text: "あえてイヤな言い方をすれば、\n「善意で人を助けるのではなく、自分が得をするために人を助ける」といった打算的な精神ですね",
        voice: "059_あえてイヤな言い方….wav",
      },
      {
        text: "でもそれこそが、社会をより良く発展させていくんです",
        voice: "060_でもそれこそが、社….wav",
      },
      {
        text: "だって「お互いにメリットがある方法を一緒に考えていく」んだから、当然でしょう？",
        voice: "061_だって「お互いにメ….wav",
      },
    ],
  },
  {
    title: "経済はカオス",
    slide: "経済学-01-08.png",
    message: [
      {
        text: "「立場も考え方も違う人たちが、\nそれぞれ自分が得をするために、他人を手助けしていく",
        voice: "062_立場も考え方も違う….wav",
      },
      {
        text: "その連鎖反応で社会全体が良くなっていく」\nそんなカオスこそが経済なんです",
        voice: "063_その連鎖反応で社会….wav",
      },
      {
        text: "他人に優しいのはいいことだけど、\nだからって、自分に厳しくする必要はありません",
        voice: "064_他人に優しいのはい….wav",
      },
      {
        text: "「みんなにとっての良い社会」って、\nきっと「自分にとってだって都合がいい社会」なんです",
        voice: "065_みんなにとってのい….wav",
      },
      {
        text: "だから、自分にも優しくしていいんです\n「自分を大切にすること」が、きっと「他人を大切にすること」にも繋がっているんですよ",
        voice: "066_だから、自分にも優….wav",
      },
    ],
  },
  {
    title: "次回予告",
    slide: "経済学-01-09.png",
    message: [
      {
        text: "いかがだったでしょうか\n今回は「経済の最も根本的な考え方」の部分についてお話ししました",
        voice: "067_いかがだったでしょ….wav",
      },
      {
        text: "経済について考える上で、絶対に外せない最重要キーワードである「分業と分配」「需要と供給」が、まだ登場していませんので",
        voice: "068_経済について考える….wav",
      },
      {
        text: "「おや？」と思った人も少なくないかもしれません\nそのどちらもwin-winと関係している内容なので、\n次回お話ししたいと思います",
        voice: "069_「おや？」と思った….wav",
      },
    ],
  },
  {
    title: "",
    slide: "経済学-01-10.png",
    message: [
      {
        text: "ということで本日はここまで\nお付き合いいただき、ありがとうございました",
        voice: "070_ということで本日は….wav",
      },
    ],
  },
];
