const menuList = [{
    title: '卷1',
    lastIndex:0,
    submenu: [
      {
        title: '辨脉法',
       
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
        title: '辨太阳病脉证并治上',
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
          {
            tiaobian:`四六：「伤寒」,心下有水气,咳而微喘,发热不渴,「小青龙汤」主之。服汤已,渴者,此寒去欲解也。
            `,
            jingfang:'xiaoqinglongtang',
          },
        ]
      },
    ]
  },
  {
    title: '卷3',
    lastIndex:5,
    submenu: [
      {
        title: '辨太阳病脉证并治中',
        yuanwen:[
          {
            tiaobian:'四七：「太阳病」,外证未解,脉浮弱者,当以汗解,宜「桂枝汤」。',
            jingfang:'',
          },
          {
            tiaobian:'四八：「太阳病」,下之微喘者,表未解故也,「桂枝加厚朴杏仁汤」主之。',
            jingfang:'guizhijiahoupoxingrentang',
          },
          {
            tiaobian:'四九：「太阳病」外证未解，不可下也，下之为逆。欲解外者，宜「桂枝汤」',
            jingfang:'',
          },
          {
            tiaobian:`五十：「太阳病」先发汗不解 而复下之 脉浮者不愈。浮为在外，而反下之，故令不愈。
            今脉浮，故知在外,须当解外则愈,宜「桂枝汤」主之。`,
            jingfang:'',
          },
          {
            tiaobian:`五一：「太阳病」,脉浮紧,无汗发热,身疼痛,八九日不解,表证仍在,此当发其汗。「麻黄汤」主之。
            服药已,微除,其人发烦,目瞑，剧者必衄,衄乃解。所以然者,阳气重故也。`,
            jingfang:'',
          },
          {
            tiaobian:`五二：太阳病,脉浮紧,发热,身无汗,自衄者愈`,
            jingfang:'',
          },
          {
            tiaobian:`五三：二阳并病,「太阳」初得病时,发其汗。汗先出不澈,因转属「阳明」。续自
            微汗出,不恶寒,若「太阳」病证不罢者,不可下,下之为逆。如此可小发汗。设面色缘缘正赤者,阳气怫鬰在表,当解之熏之。
            若发汗不澈,不足言阳气怫鬰不得越,当汗不汗,其人烦躁,不知痛处,乍在腹中,乍在四肢，按之不可得，其人短气，但坐，以汗出不澈
            故也，更发汗则愈。何以知汗出不澈，脉濇，故知也`,
            jingfang:'',
          },
          {
            tiaobian:`五四：脉浮数者,法当汗出而愈。若下之，身重心悸者，不可发汗，当自汗出乃解。
            所以然者，尺中脉微，此里虚，须表里实，津液自和，便自汗出而愈。`,
            jingfang:'',
          },
          {
            tiaobian:`五五：脉浮紧者 法当身疼痛,宜以汗解之。假令尺中迟者,不可发汗。何以知其然？以营气不足,血少故也。`,
            jingfang:'',
          },
          {
            tiaobian:`五六：脉浮者,病在表,可发汗,宜「麻黄汤」`,
            jingfang:'',
          },
          {
            tiaobian:`五七：脉浮数者,可发汗,宜「麻黄汤」。`,
            jingfang:'',
          },
          {
            tiaobian:`五八：病常自汗出者,此为营气和。营气和者,外不谐,以卫气不共营气和谐故尔。
            以营行脉中,卫行脉外,复发其汗,营卫和则愈，宜「桂枝汤」。
            `,
            jingfang:'',
          },
          {
            tiaobian:`五九：病人脏无他病,时发热自汗出而不愈者，此卫气不和也。先其时发汗则愈，宜「桂枝汤」主之。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六十：「伤寒」,脉浮紧,不发汗,因致衄者,「麻黄汤」主之。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六一：「伤寒」,不大便六、七日,头痛有热者,与「承气汤」。
            其小便清者,知不在里,仍在表也,当须发汗。若头痛者,必衄,宜「桂枝汤」。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六二：「伤寒」,发汗,解半日许,复烦,脉浮数者,可更发汗,宜「桂
            枝汤」主之。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六三：凡病若发汗,若吐,若下,若亡津液,阴阳自和者，必自愈。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六四：大下之后 复发汗 小便不利者 亡津液故也。勿治之，得小便利,必自愈。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六五：下之后，复发汗，必振寒，脉微细。所以然者，以内外俱虚故也。
            `,
            jingfang:'',
          },
          {
            tiaobian:`六六：下之后，复发汗，画日烦躁不得眠,夜而安静,不呕,不渴，无表证,脉沉微,身无大热者,「干姜附子汤」主之。
            `,
            jingfang:'ganjiangfuzitang',
          },
          {
            tiaobian:`六七：发汗后,身疼痛,脉沉迟者,「桂枝」加「芍药」、「生姜」各一两,「人参」三两,「新加汤」主之。
            `,
            jingfang:'xinjiatang',
          },
          {
            tiaobian:`六八：发汗后 不可更行「桂枝汤」。汗出而喘 无大热者，可与「麻黄杏仁甘草石膏汤」主之。
            `,
            jingfang:'mahuangxingrengancaoshigaotang',
          },
          {
            tiaobian:`六九：发汗过多,其人叉手自冒心,心下悸欲得按者,「桂枝甘草汤」主之。
            `,
            jingfang:'guizhigancaotang',
          },
          {
            tiaobian:`七十：发汗后，其人脐下下悸者,欲作「奔豚」,「茯苓桂枝甘草大枣汤」主之。
            `,
            jingfang:'fulingguizhigancaodazaotang',
          },
          {
            tiaobian:`七一：发汗后,腹胀满者,「厚朴生姜半夏甘草人参汤」主之。
            `,
            jingfang:'houposhengjiangbanxiagancaorenshengtang',
          },
          {
            tiaobian:`七二：「伤寒」,若吐若下后,心下逆满,气上冲胸,起则头眩,脉沉紧,发汗则动经,身为振振摇者,「茯苓桂枝白朮甘草汤」主之。
            `,
            jingfang:'fulingguizhibaizhugancaotang',
          },
          {
            tiaobian:`七三：发汗,病不解,反恶寒者,虚故也。「芍药甘草附子汤」主之。
            `,
            jingfang:'shaoyaogancaofuzitang',
          },
          {
            tiaobian:`七四：发汗 若下之 病仍不解,烦躁 四逆者 茯苓四逆汤主之。
            `,
            jingfang:'fulingsinitang',
          },
          {
            tiaobian:`七五：发汗后,恶寒者,虚故也。不恶寒,但热者,实也。当和胃
            气,与「调胃承气汤」
            `,
            jingfang:'tiaoweichengqitang',
          },
          {
            tiaobian:`七六：太阳病,发汗后,大汗出,胃中干,烦躁不得眠,欲得水饮水者,少少与饮
            之,令胃气和则愈。若脉浮,小便不利,微热,消渴者,「五苓散」主之。
            `,
            jingfang:'wulingsan',
          },
        ]
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
  'fulingsinitang':{
    title:'茯苓四逆汤',
    zucheng:'茯苓 人参 附子 炙甘草 干姜',
    yongfa:'分温三服',
    jinji:`静脉瘤芍药炙甘草加重；脚冷炮附子加重；阳虚-干姜附子汤；阴阳两虚-人参四逆汤；发汗后，手脚冰凉脉微-四逆汤；`,
    jiexi:` `,
    shiyingzheng:'太阳证 烦躁，四逆；上交虚热，水往上冒，身体不受'
  },
  'shaoyaogancaofuzitang':{
    title:'芍药甘草附子汤',
    zucheng:'芍药3 炙甘草2  炮附子4',
    yongfa:'分温三服',
    jinji:`静脉瘤芍药炙甘草加重；脚冷炮附子加重`,
    jiexi:` `,
    shiyingzheng:'发汗，病不解，反恶寒；去杖汤'
  },
  'fulingguizhibaizhugancaotang':{
    title:'茯苓桂枝白术甘草汤',
    zucheng:'茯苓 桂枝 白术 甘草',
    yongfa:'顿服',
    jinji:``,
    jiexi:`厚朴宽肠降逆除气，润肠；生姜入胃，人参甘草补液；半夏降逆；白术去湿，茯苓利水；晕眩得很厉害的时
    候会吐的,就可用苓桂朮甘汤里面再加半夏。 `,
    shiyingzheng:'水饮停在胃旁边，躺在床上不动不晕，起则头眩'
  },
  'houposhengjiangbanxiagancaorenshengtang':{
    title:'厚朴生姜半夏甘草人参汤方',
    zucheng:'炙厚朴3  生姜2  半夏2  人参1  炙甘草2',
    yongfa:'顿服',
    jinji:``,
    jiexi:'厚朴宽肠降逆除气，润肠；生姜入胃，人参甘草补液；半夏降逆；',
    shiyingzheng:'发汗后，腹胀满；虚胀'
  },
  'guizhigancaofulingdazaotang':{
    title:'桂枝甘草茯苓大枣汤方',
    zucheng:'茯苓 炙甘草2 大枣15  桂枝3',
    yongfa:'顿服',
    jinji:``,
    jiexi:'肚脐中脾，上肾，下心，左肝右肺；肠胃津液发出去了，下焦水往上冲，茯苓排水，大枣补液',
    shiyingzheng:'脐下悸，欲做奔豚；'
  },
  'guizhigancaotang':{
    title:'桂枝甘草汤方',
    zucheng:'桂枝4 炙甘草2',
    yongfa:'顿服',
    jinji:`桂枝下去让心脏喷射的力量很强,把停在心
    很快的就气化了,心下悸是因为应该是水汽上来，结果冷水上来了；桂枝可以降冲逆；甘草补胃液`,
    jiexi:'2：1',
    shiyingzheng:'心下悸欲按；阳虚心悸'
  },
  'mahuangxingrengancaoshigaotang':{
    title:'麻黄杏仁甘草石膏汤',
    zucheng:'麻黄 杏仁 甘草 石膏',
    yongfa:'顿服',
    jinji:'胃口好，此方；不好，大青龙',
    jiexi:'麻黄和石膏一起，就不会发汗，从小便解；麻黄把石膏带到肺；杏仁祛痰；甘草取缓停在胃利，解毒',
    shiyingzheng:'出汗而喘，无大热'
  },
  'xinjiatang':{
    title:'桂枝加芍药生姜人参新加汤方',
    zucheng:'桂枝3 芍药4 炙甘草2 人参3 生姜4 大枣12',
    yongfa:'顿服',
    jinji:'',
    jiexi:'',
    shiyingzheng:'身疼痛，脉沉迟（发汗太过，津液伤到）如果汗流不止时桂枝加附子汤'
  },
  'ganjiangfuzitang':{
    title:'干姜附子汤',
    zucheng:'干姜1 附子3',
    yongfa:'顿服',
    jinji:'',
    jiexi:'',
    shiyingzheng:'阳虚，白天不好睡，烦躁，晚上正常安静好睡'
  },
  'guizhijiahoupoxingrentang':{
    title:'桂枝加厚朴杏仁汤',
    zucheng:'桂枝3 芍药3 甘草3 生姜3 大枣12 炙厚朴2 杏仁50枚',
    yongfa:'覆取微似汗',
    jinji:'',
    jiexi:'',
    shiyingzheng:'下之微喘，表未解'
  },
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