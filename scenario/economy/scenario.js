const scenario = [
  {
    title: "はじめから",
    slide: "",
    message: [
      {
        text: "ここをクリックしてね♪",
      },
      {
        text: "皆さんっこんにちは、学習ナビゲーターの春日部つむぎです",
        voice: "001_皆さんっこんにちは….wav",
      },
      {
        text: "今回は経済学について学んでいきましょう",
        voice: "002_今回は経済学につい….wav",
      },
    ],
  },
  {
    title: "簡単な導入",
    slide: "経済学-1.png",
    message: [
      {
        text: "経済学と聞くと「何だか難しそうだな」と思う人が多いかもしれません",
        voice: "003_経済学と聞くと「何….wav",
      },
      {
        text: "でも実は、とても身近なことなんですよ",
        voice: "004_でも実は、とても身….wav",
      },
      {
        text: "その代表例はなんといっても「お買い物」です",
        voice: "005_その代表例はなんと….wav",
      },
      {
        text: "お菓子を買ったりお洋服を買ったり、\nあるいは、レストランに行ったりカラオケに行ったり",
        voice: "006_お菓子を買ったりお….wav",
      },
      {
        text: "そういった行動も全部、経済に関係しているんです",
        voice: "007_そういった行動も全….wav",
      },
      {
        text: "でも、こういう例を挙げると\n「ああ、経済ってつまりお金の話なんだ」って誤解してしまうかもしれません",
        voice: "008_でもっこういう例を….wav",
      },
      {
        text: "確かにお金は、経済のお話をする中で、非常に重要な役割がありますが、経済の主役ではないんですよ",
        voice: "009_確かにお金は、経済….wav",
      },
      {
        text: "では「経済」とはそもそも一体なんなのでしょうか？",
        voice: "010_では「経済とはそも….wav",
      },
    ],
  },
  {
    title: "経済とは？",
    slide: "経済学-2.png",
    message: [
      {
        text: "「経済」という言葉の由来は、中国の「経世済民」という言葉です",
        voice: "011_「経済という言葉の….wav",
      },
      {
        text: "「世を治めて民を救う」\nつまり私たちが安心して暮らせるように「良い社会にしよう」という意味ですね",
        voice: "012_「世をおさめてたみ….wav",
      },
      {
        text: "ただ、こう言うと今度は、\n「あれ、経済って政治の話なの？」と思うかもしれません",
        voice: "013_ただ、こういうと今….wav",
      },
      { text: "少し違います", voice: "014_少し違います.wav" },
    ],
  },
  {
    title: "政治と経済",
    slide: "経済学-3.png",
    message: [
      {
        text: "「政治」とは、私たちの代表者である政治家たちが、\n社会に必要なルールを作って実行していくことです",
        voice: "015_政治とは、私たちの….wav",
      },
      {
        text: "とても難しいことなので、専門家である政治家の人たちにお任せになってしまうため、私たちにはちょっと縁が遠くて、どうしても関心を持ちにくい分野ですね",
        voice: "016_とても難しいことな….wav",
      },
      {
        text: "一方で「経済」とは、私たちの行動１つ１つの積み重ねが社会を作っているので、私たちがより良い行動をすることで、より良い社会を作っていくことです",
        voice: "017_一方で経済とは、私….wav",
      },
      {
        text: "私たちの行動が、社会にダイレクトに影響しているんですよ",
        voice: "018_私たちの行動が、社….wav",
      },
    ],
  },
  {
    title: "例：貧富の格差",
    slide: "経済学-4.png",
    message: [
      {
        text: "例えば「貧富の格差」という問題で考えてみましょう",
        voice: "019_例えば「貧富の格差….wav",
      },
      {
        text: "貧富の格差を政治的に対応しようとすると、裕福な人からより多くの税金を納めてもらったり、",
        voice: "020_貧富の格差を政治的….wav",
      },
      {
        text: "その税金で医療や教育の費用を安くして、貧しい人でもより安心して暮らせるように調整したりします",
        voice: "021_その税金で医療や教….wav",
      },
      {
        text: "私たちが勝手に税金を徴収できないように、「私たちにできること」の範囲を超えることばかりですね",
        voice: "022_私たちが勝手に税金….wav",
      },
      {
        text: "一方で、貧富の格差を経済的に対応しようとすると、貧しい人でも簡単に買えるような「安い商品」が多く流通するようになったり",
        voice: "023_一方で、貧富の格差….wav",
      },
      {
        text: "アルバイトなど「とにかくすぐ働ける仕事」が増えたりします",
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
    slide: "経済学-5.png",
    message: [
      {
        text: "もう少し掘り下げてみましょう",
        voice: "026_もう少し掘り下げて….wav",
      },
      {
        text: "とても貧しくて食事もままならず、いつもお腹を空かせている人がいるとします",
        voice: "027_とても貧しくて食事….wav",
      },
      {
        text: "そんな人が、空腹に耐えかねて食料を万引きしてしまうようなケースに対して、どうすれば良いでしょうか？",
        voice: "028_そんな人が、空腹に….wav",
      },
      {
        text: "どんな事情があるにせよ、万引きは犯罪なので、防犯カメラを設置するなどしてセキュリティを強化すれば良いのでしょうか？",
        voice: "029_どんな事情があるに….wav",
      },
      {
        text: "しかし、どんなにセキュリティを強化しても、「お腹を空かせている」という根本的な原因はそのままです",
        voice: "030_しかし、どんなにセ….wav",
      },
      {
        text: "そのため、セキュリティを掻い潜ってでも万引きしようとして、イタチごっこになってしまうことがあります",
        voice: "031_そのため、セキュリ….wav",
      },
      {
        text: "「さすがに可哀そうだから、少しくらい食料を恵んであげればいい」と考える人がいるかもしれませんが、その案はどうでしょうか？",
        voice: "032_「さすがに可哀そう….wav",
      },
      {
        text: "その案もあまり良い方法ではありません\n確かにその場は助かるかもしれませんが、お腹は毎日空くからです",
        voice: "033_その案もあまり良い….wav",
      },
      {
        text: "それでは毎日食料を恵んであげなければならなくなり、お店側の負担ばかりが大きくなりますし、それを止めた途端、すぐにまた空腹に耐えられない状態に戻ってしまいます",
        voice: "034_それでは毎日食料を….wav",
      },
      {
        text: "では「掃除や荷物運びなど、簡単な仕事を手伝ってもらう代わりに、報酬として食料を渡す」という方法ならどうでしょう？",
        voice: "035_では「掃除や荷物運….wav",
      },
      {
        text: "この方法なら、お店側にとってもメリットがありますし、仕事を覚えていけば就職しやすくなるかもしれません",
        voice: "036_この方法なら、お店….wav",
      },
      {
        text: "「お互いにメリットがある」と言えるのではないでしょうか",
        voice: "037_お互いにメリットが….wav",
      },
      {
        text: "このように、経済の最も基本的なポイントとは「win-winの関係を築く」ことです",
        voice: "038_このように、経済の….wav",
      },
      {
        text: "ただの「助け合い」ではないというところが重要です",
        voice: "039_ただの助け合いでは….wav",
      },
    ],
  },
  {
    title: "win-win",
    slide: "経済学-6.png",
    message: [
      {
        text: "助け合いと言うと、「困っている人がいたら、自分の損には目をつぶって助けてあげるべき」という奉仕の考え方になりがちです",
        voice: "040_助け合いと言うと、….wav",
      },
      {
        text: "それはもちろん、道徳的にとても素晴らしい精神かもしれません",
        voice: "041_それはもちろん、道….wav",
      },
      {
        text: "しかし、先ほどの例のように、一方が我慢して手助けするというアンバランスな状態では、すぐに限界が来てしまいます",
        voice: "042_しかし、先ほどの例….wav",
      },
      {
        text: "善意だけでは、どうしても長続きしないんです",
        voice: "043_善意だけでは、どう….wav",
      },
      {
        text: "それに対してwin-winの関係とは、「お互いに協力した方がメリットがある」という状態でバランスが安定しています",
        voice: "044_それに対してうぃん….wav",
      },
      {
        text: "そのため、この関係は長続きしやすいですし、できるだけ維持しようと積極的に協力するようになります",
        voice: "045_そのため、この関係….wav",
      },
      {
        text: "あえて嫌な言い方をすれば、「善意で人を助ける」のではなく、「自分が得をするために人を助ける」といった打算的な精神ですね",
        voice: "046_あえていやな言い方….wav",
      },
      {
        text: "でもそれこそが、社会をよりよく発展させていくのです",
        voice: "047_でもそれこそが、社….wav",
      },
      {
        text: "だって、「お互いにメリットがある」方法をみんなで考えていくんだから、当然でしょう？",
        voice: "048_だって、「お互いに….wav",
      },
    ],
  },
  {
    title: "スライド7",
    slide: "経済学-7.png",
    message: [
      {
        text: "立場も考え方も違う人たちが、それぞれ自分が得をするために、他人を手助けしていく",
        voice: "049_立場も考え方も違う….wav",
      },
      {
        text: "その連鎖反応で社会全体が良くなっていく\nそんなカオスこそが経済なんです",
        voice: "050_その連鎖反応で社会….wav",
      },
    ],
  },
];
