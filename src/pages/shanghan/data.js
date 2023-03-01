const menuList = [{
    title: '卷1',
    lastIndex:0,
    submenu: [
      {
        title: '辨脉法',
        yuanwen:[
          {
            tiaobian:'“太阳之为病,脉浮,头项强痛而恶寒。',
            jingfang:'',
          },
          {
            tiaobian:'“「太阳病」发热 汗出,恶风 脉缓者 名为「中风」',
            jingfang:'',
          },
          {
            tiaobian:'「太阳病」,或已发热,或未发热,必恶寒,体痛,呕逆,脉阴阳俱紧者,名曰「伤寒」。',
            jingfang:'',
          },
          {
            tiaobian:'「伤寒」一日,「太阳」受之，脉静者，为不传也；若脉数急者，为传也。',
            jingfang:'',
          },
          {
            tiaobian:'「伤寒」二三日,「阳明」、「少阳」证不见者，为不传也；颇欲吐,若烦躁者,为传也。',
            jingfang:'',
          },
          {
            tiaobian:'「太阳病」,发热而渴,不恶寒者,为「温病」',
            jingfang:'',
          },
          {
            tiaobian:'若自汗出,身灼热者,名曰「风温」',
            jingfang:'',
          },
          {
            tiaobian:`「风温」为病,脉阴阳俱浮,自汗出,身重,多眠睡,息必鼾,言语难出。若发汗者，小便不利；若被下者，直视，失溲；若被火者，微发黄色
            剧则如惊痫，时瘈疭；若火蒸之，一逆尚引日，再逆促命期`,
            jingfang:'',
          },
          {
            tiaobian:`病有发热恶寒者,发于「阳」也；无热恶寒者,发于「阴」也。发于「阳」者七日愈,发于「阴」者六日愈,以阳数七、阴数六故也。`,
            jingfang:'',
          },
          {
            tiaobian:`「太阳病」,头痛,至七日以上自愈者,以行其经尽故也；若欲作再经者,针「足阳明」,使经
            不传则愈。`,
            jingfang:'',
          },
          {
            tiaobian:`「太阳病」欲解时,从「巳」至「未」上。`,
            jingfang:'',
          },
          {
            tiaobian:`「中风」表解而不了了者,十二日愈。`,
            jingfang:'',
          },
          {
            tiaobian:`病人身大热,反欲近衣者,热在皮肤,寒在骨髓也。身大寒,反不欲近衣者,寒在皮肤,热在骨髓也。`,
            jingfang:'',
          },
          {
            tiaobian:`「太阳中风」,阳浮而阴弱,阳浮者热自发,阴弱者汗自出，啬啬恶寒，淅淅恶风,翕翕发热,鼻鸣,干呕者,「桂枝汤」主之`,
            jingfang:'guizhitang',
          },
          {
            tiaobian:`「太阳病」,头痛,发热,汗出,恶风者,「桂枝汤」主之`,
            jingfang:'guizhitang',
          },
          {
            tiaobian:`「太阳病」,项背强几几,及汗出,恶风者,「桂枝加葛根汤」主之`,
            jingfang:'guizhijiagegentang',
          },
          {
            tiaobian:`「太阳病」,下之后,其气上冲者,可与「桂枝汤」,用前法；若不上冲者,下可与之。
            `,
            jingfang:'',
          },
          {
            tiaobian:`「太阳病」,三日,已发汗,若吐、若下、 ,仍不解者,此为坏病,「桂枝」不中与也。视其脉证,知犯何逆,随证治之。
            `,
            jingfang:'',
          },
          {
            tiaobian:`：「桂枝汤」本为解肌，若其人脉浮紧，发热。汗不出者，不可与也；常需识此，勿令误也。
            `,
            jingfang:'',
          },
          {
            tiaobian:`二一：若酒客病,不可与「桂枝汤」；得汤则呕,以酒客不喜甘故也。
            `,
            jingfang:'',
          },
          {
            tiaobian:`二二、若喘家作,「桂枝汤」加「厚朴」、「杏子仁」。
            `,
            jingfang:'',
          },
          {
            tiaobian:`二二、若喘家作,「桂枝汤」加「厚朴」、「杏子仁」。
            `,
            jingfang:'',
          },
          {
            tiaobian:`二三：凡吐家,服「桂枝汤」,其后必吐脓血也。
            `,
            jingfang:'',
          },
          {
            tiaobian:`二四：「太阳病」,发汗、逐漏不止,其人恶风,小便难,四肢微急。难以屈伸者,「桂枝加附子汤」主之。
            `,
            jingfang:'guizhijiafuzitang',
          },
          {
            tiaobian:`二五：「太阳病」,下之后,脉促,胸满者,「桂枝去芍药汤」主之。
            若微恶寒者，「桂枝去芍药方中加附子汤」主之。 脉法：胃气，神，根
            `,
            jingfang:'guizhiqvshaoyaotang',
          },
          {
            tiaobian:`二六：「太阳病」,得之八九日,如疟状：发热、恶寒、热多、寒少，其人不呕，清便,清便欲自可,一日二三度发。脉微缓者
            ,为欲愈也；脉微而恶寒者,此阴阳俱虚,不可更发汗,更下,更吐也。面色反有热色者,未欲解也，以其不能得小汗出,身必痒,宜「桂枝麻黄各半汤」。`,
            jingfang:'guizhimanghuanggebantang',
          },
          {
            tiaobian:`二七：「太阳病」,初服「桂枝汤」,反烦不解者,先刺「风池」、「风府」,却与「桂枝汤」则愈。
            `,
            jingfang:'',
          },
          {
            tiaobian:`二八：服桂枝汤,不汗出,脉洪大者,与桂枝汤如前法,若形如疟,日再发者,汗出必解,宜「桂枝二麻黄一汤」。
            `,
            jingfang:'guizhiermanghuangyitang',
          },
          {
            tiaobian:`二九：服「桂枝汤」 大汗出后 大烦渴不解，脉洪大者,「白虎
            加人参汤」主之。
            `,
            jingfang:'baihujiarenshentang',
          },
          {
            tiaobian:`三十：「太阳病」,发热恶寒,热多寒少,烦躁,脉微弱者。此无阳也,不可发汗,宜「桂枝二越婢一汤」主之。
            `,
            jingfang:'guizhieryuebeiyitang',
          },
          {
            tiaobian:`三一：服「桂枝汤」,或下之,仍头项强痛。翕翕发热、无汗，心下满，微痛，小便不利者,「桂枝去桂加茯苓白术汤」主之。
            `,
            jingfang:'guizhiqvguijiafulingbaizhutang',
          },
          {
            tiaobian:`三二：「伤寒」,脉浮,自汗出,小便数,心烦,微恶寒,
            反与「桂枝汤」以攻其表,此误也,得之便厥,咽中干,烦躁,吐逆,谵语,脚挛急,作「甘草干姜汤」与之,以复其阳。
            若厥愈,足温者,更作「芍药甘草汤」与之,其脚得伸。若胃气不和,谵语者,少与「调胃承气汤」。

            `,
            jingfang:'tiaoweichengqitang',
          },
          {
            tiaobian:`三三：若重发汗,复加烧针者,「四逆汤」主之。
            `,
            jingfang:'sinitang',
          },
          {
            tiaobian:`三四：问曰：证象「阳旦」,按法治之而增剧,厥逆,咽中干,项胫拘急而谵语。师言夜半手足当温。两脚当伸。后如师言,何以知此?
            答曰：寸口脉浮而大,浮则为风 大则为虚 风则生温热 虚则两胫挛 病证象「桂枝」；
            因未加「附子」参其间,增「桂」令汗出亡阳故也,厥逆,咽中干,烦躁,「阳明」内结,谵语烦乱,更饮「甘草干姜汤」,夜半阳气还,两足当温，胫尚微拘急,
            重与「芍药甘草汤」,尔乃胫伸,以「承气汤」微溏,则止其谵语,故病可愈。

            `,
            jingfang:'',
          },
          {
            tiaobian:`三五：「太阳病」,项背强几几,无汗,恶风者,「葛根汤」主之。
            `,
            jingfang:'gegentang',
          },
          {
            tiaobian:`三六：「太阳」舆「阳明」合病,必自下利,「葛根汤」主之。
            `,
            jingfang:'gegentang',
          },
          {
            tiaobian:`三七：「太阳」与「阳明」合病,不但下利,而呕者,「葛根加半夏汤」主之。
            `,
            jingfang:'gegenjiabanxiatang',
          },
          {
            tiaobian:`三八：「太阳病」「桂枝证」,医反下之。利遂不止,脉促,喘而汗出者,表未解也,「葛根黄芩黄连汤」主之。
            `,
            jingfang:'gegenhuangqinhuangliantang',
          },
          {
            tiaobian:`三九：「太阳病」,头痛,发热,身疼,腰痛,骨节疼痛,恶风,无汗而喘者,「麻黄汤」主之。
            `,
            jingfang:'mahuangtang',
          },
          {
            tiaobian:`四十：「太阳」与「阳明」合病，喘而胸满者，不可下，宜「麻黄汤」
            `,
            jingfang:'mahuangtang',
          },
          {
            tiaobian:`四一：「太阳病」十日已去 脉浮细而嗜卧者 外已解也。设胸满，胁痛者,与「小柴胡汤」,脉但浮者与「麻黄汤」。
            `,
            jingfang:'mahuangtang',
          },
          {
            tiaobian:`四二、三：「太阳伤寒」,脉浮紧,发热,恶寒,身疼痛，不汗出而烦躁者，「大青龙汤」主之。
            若脉微弱，汗出，恶风者，不可服之；服之则厥逆，筋惕肉润，此为逆也。
            `,
            jingfang:'daqinglongtang',
          },
          {
            tiaobian:`四四：「伤寒」,脉浮缓,身不疼,但重,乍有轻时,无「少阴证」者，「大青龙汤」主之。
            `,
            jingfang:'daqinglongtang',
          },
          {
            tiaobian:`四五：「伤寒」,表不解,心下有水气,干呕,发热而咳，或渴,或利，或噎,或小便不利,少腹满,或喘者,「小青龙汤」主之。
            `,
            jingfang:'xiaoqinglongtang',
          },
        ]
      },
      {
        title: '平脉法'
      },
    ]
  },
  {
    title: '卷2',
    lastIndex:2,
    submenu: [{
        title: '伤寒例'
      },
      {
        title: '辨痓湿暍脉证'
      },
      {
        title: '辨太阳病脉证并治上'
      },
    ]
  },
  {
    title: '卷3',
    lastIndex:5,
    submenu: [
      {
        title: '辨太阳病脉证并治中',
      },
    ]
  },
  {
    title: '卷4',
    lastIndex:6,
    submenu: [
      {
        title: '辨太阳病脉证并治',
      },
    ]
  },
  {
    title: '卷5',
    lastIndex:7,
    submenu: [
      {
        title: '辨阳明病脉证并治',
      },
      {
        title: '辨少阳病脉证并治',
      },
    ]
  },
  {
    title: '卷6',
    lastIndex:9,
    submenu: [
      {
        title: '辨太阴病脉证并治',
      },
      {
        title: '辨少阴病脉证并治',
      },
      {
        title: '辨厥阴病脉证并治',
      },
    ]
  },
  {
    title: '卷7',
    lastIndex:12,
    submenu: [
      {
        title: '辨霍乱病脉证并治',
      },
      {
        title: '辨阴阳易差后劳复病脉证并治',
      },
      {
        title: '辨不可发汗病脉证并治',
      },
      {
        title: '辨可发汗病脉证并治',
      },
    ]
  },
  {
    title: '卷8',
    lastIndex:16,
    submenu: [
      {
        title: '辨发汗后病脉证并治',
      },
      {
        title: '辨不可吐',
      },
      {
        title: '辨可吐',
      },
      
    ]
  },
  {
    title: '卷9',
    lastIndex:19,
    submenu: [
      {
        title: '辨不可下病脉证并治',
      },
      {
        title: '辨可下病脉证并治',
      },
    ]
  },
  {
    title: '卷10',
    lastIndex:21,
    submenu: [
      {
        title: '辨发汗吐下后病脉证并治',
      },
    ]
  },
]
const jingfang = {
  'mahuangtang':{
    title:'小青龙汤',
    zucheng:'麻黄3 桂枝3 芍药3 细辛3 干姜3 炙甘草3 五味子 半夏3',
    yongfa:'若渴，去半夏，加瓜蒌根三两。微利，去麻黄，加芫花，若噫，去麻黄，加炮附子，若小便不利，少腹满，去麻黄，加茯苓4',
    jinji:'',
    jiexi:'',
    shiyingzheng:'表寒里寒，嗓子痒，喘'
  },
  'mahuangtang':{
    title:'大青龙汤',
    zucheng:'麻黄6 桂枝2 炙甘草2 杏仁2 生姜2 大枣12 石膏4',
    yongfa:'一服汗者，停后服；汗出多者，温粉扑之；温粉：牡蛎，龙骨（马骨） 糯米等量磨粉',
    jinji:'脉微弱,汗出,恶风者,里虚不可服之；应该用桂枝汤加附子；「麻杏甘石汤」和「大青龙汤」的分辨,如果咳嗽,胃口好不好？如果胃口很好,开「麻杏甘石汤」,咳嗽咳得都没胃口了,开「大青龙汤」',
    jiexi:'一半麻黄与杏仁走里；一半麻黄与石膏走里；',
    shiyingzheng:'疫病方子；表寒里热；太阳伤寒，发热恶寒，身痛不出汗而烦躁，嗓子痒'
  },
  'mahuangtang':{
    title:'麻黄汤',
    zucheng:'麻黄3 桂枝2 炙甘草1 杏仁3',
    yongfa:'',
    jiexi:'麻黄杏仁是表里关系，等量；麻黄发汗，杏仁补肺液；桂枝带麻黄透表发汗；生姜红枣生肠液',
    shiyingzheng:'太阳证，恶风，骨节疼痛，无汗而喘'
  },
  'gegenhuangqinhuangliantang':{
    title:'葛根黄芩黄连汤',
    zucheng:'葛根5 炙甘草2 黄芩3 黄连3',
    yongfa:'覆取微似汗',
    jiexi:'',
    shiyingzheng:'太阳证，误下，利不止，脉促，喘而汗出，表未解'
  },
  'guizhitang':{
    title:'桂枝汤',
    zucheng:'桂枝3 芍药3 炙甘草2 生姜2 大枣12',
    yongfa:'啜热稀粥',
    jiexi:'',
    shiyingzheng:'太阳表证'
  },
  'guizhijiagegentang':{
    title:'桂枝加葛根汤',
    zucheng:'桂枝3 芍药3 炙甘草2 生姜3 大枣12 葛根4',
    yongfa:'不须啜粥',
    jiexi:'',
    shiyingzheng:'太阳表证'
  },
  'guizhijiafuzitang':{
    title:'桂枝加附子汤',
    zucheng:'桂枝3 芍药3 炙甘草2 生姜3 大枣12 炮附子3',
    yongfa:'一服汗止，停后服',
    jiexi:'',
    shiyingzheng:'太阳表证，汗出不止'
  },
  'guizhiqvshaoyaotang':{
    title:'桂枝去芍药汤',
    zucheng:'桂枝3 炙甘草2 生姜3 大枣12',
    yongfa:'',
    jiexi:'',
    shiyingzheng:'太阳表证，脉促，胸满'
  },
  'guizhiqvshaoyaofangzhongjiafuzitang':{
    title:'桂枝去芍药方中加附子汤',
    zucheng:'桂枝3 炙甘草2 生姜3 大枣12 炮附子3',
    yongfa:'若一服恶塞止。停后服',
    jiexi:'',
    shiyingzheng:'太阳表证，脉促，胸满，微恶寒'
  },
  'guizhimanghuanggebantang':{
    title:'桂枝麻黄各半汤',
    zucheng:'桂枝1 芍药1 甘草1 生姜1 大枣4 麻黄去节1 杏仁24个',
    yongfa:'先煮麻黄一二沸，去沫。取微汗',
    jiexi:'麻黄 杏仁',
    shiyingzheng:'太阳表证，面色反有热色，身痒，忽冷忽热，时间相等'
  },
  'guizhiermanghuangyitang':{
    title:'桂枝二麻黄一汤',
    zucheng:'桂枝3 芍药2 甘草1 生姜1 大枣4 麻黄去节1 杏仁24个',
    yongfa:'先煮麻黄一二沸，去沫。取微汗',
    jiexi:'',
    shiyingzheng:'太阳表证，忽冷忽热，热多寒少'
  },
  'baihujiarenshentang':{
    title:'白虎加人参汤',
    zucheng:'知母3 石膏5 炙甘草3 梗米1汤勺 人参2',
    yongfa:'先煮麻黄一二沸，去沫。取微汗',
    jiexi:'',
    shiyingzheng:'太阳表证，大汗后，烦渴不解，脉洪大，热在血中，血中缺水'
  },
  'guizhieryuebeiyitang':{
    title:'桂枝二越婢一汤方',
    zucheng:'桂枝 芍药 甘草 生姜 大枣 麻黄 石膏',
    yongfa:'先煮麻黄一二沸，去沫。取微汗',
    jiexi:'',
    shiyingzheng:'太阳表证，热多寒少，烦躁，脉弱，无阳，不可发汗'
  },
  'guizhiqvguijiafulingbaizhutang':{
    title:'桂枝去桂加茯苓白术汤',
    zucheng:'芍药3 炙甘草2 生姜3 茯苓3 白术3 大枣12',
    yongfa:'先煮麻黄一二沸，去沫。取微汗',
    jiexi:'',
    shiyingzheng:'心下满，微痛，小便不利'
  },
  'gancaoganjiangtang':{
    title:'甘草干姜汤',
    zucheng:'炙甘草4 炮姜2',
    yongfa:'',
    jiexi:'',
    shiyingzheng:'发表太过，胃津液没了，里阳不够，烦躁，吐逆，谵语，脚痉挛'
  },
  'shaoyaogancaotang':{
    title:'芍药甘草汤',
    zucheng:'白芍4 炙甘草4',
    yongfa:'',
    jiexi:'',
    shiyingzheng:'脚痉挛，无力，止腹痛'
  },
  'tiaoweichengqitang':{
    title:'调胃承气汤',
    zucheng:'大黄4 炙甘草2 芒硝',
    yongfa:'',
    jiexi:'',
    shiyingzheng:'汗发掉后，胃堵住了，胃气不和，谵语'
  },
  'sinitang':{
    title:'四逆汤',
    zucheng:' 炙甘草2 干姜1 生附子3',
    yongfa:'',
    jiexi:'',
    shiyingzheng:''
  },
  'gegentang':{
    title:'葛根汤方',
    zucheng:'葛根4 麻黄3 桂枝2 芍药2 炙甘草2 生姜3 大枣12',
    yongfa:'',
    jiexi:'',
    shiyingzheng:'太阳病，项背强几几，无汗，恶风'
  },
  'gegenjiabanxiatang':{
    title:'葛根加半夏汤',
    zucheng:'葛根4 麻黄3 桂枝2 芍药2 炙甘草2 生姜2 大枣12 生半夏3',
    yongfa:'覆取微似汗',
    jiexi:'',
    shiyingzheng:'太阳阳明合病，下利而呕'
  },

}


const zongyi = {
  wuxing: [{
    weiyi: '酸属木入肝',
    seyi: '青属木入肝',
    weiyong: '能涩能收',
    rujing: '气燥，足厥阴肝经，足少阳胆经',
    wuzangbuxie: '肝苦急，急食甘而缓之；肝欲散，急食辛以散之，以辛补之，以酸泻之',
    xiangsheng: '',
    xiangke: '',
    bingjin: '',
    suoshang: '',
    yinyang: '',
    xiangcong: '',
    liuyin: '',
  },
 ]
}

export {
  menuList,
  zongyi,
  jingfang
}