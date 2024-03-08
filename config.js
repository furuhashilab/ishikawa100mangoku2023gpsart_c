var config = {
    style: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
    accessToken: 'pk.eyJ1Ijoid2F0YXJ1eW9zaGlkYSIsImEiOiJjbG45NmtkMXIwNG1zMmlxZDc5djVpa3ZiIn0.ZB20UsOlT-hFvHFDCNHjGg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'いしかわ100万石　~19市町で描くGPSアート~',
    subtitle: 'GPSアートを見ながら石川県内を巡っていきいましょう！',
    byline: 'By Wataru Yoshida, Minaho Ishii, supported by Taichi Furuhashi a.k.a @mapconcierge',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',    
	chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'GPSアート in石川県',
            image: '',
            description: '本事業は石川県各市町で、各地域がもつ文化や地域の象徴をテーマに、観光スポットや文化資源をコースに取り入れたご当地GPSアートを制作します。 <br> アートを描く際には、その地域の人との交流を行いながら地域文化の魅力を再発見。出来上がったアートを地域文化の魅力とともにメッセージ化することで国民文化祭を盛り上げていきます。 <br> 各地域で創作したご当地GPSアートは「諸国漫遊 地上絵巻」として仕上げ、県民一体の国民文化祭、そして石川県の多様で多彩な地域文化をGPSアートとして表現します。',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.93595, 37.03622],
		zoom: 7.4,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '朝顔　白山市',
            image: 'https://user-images.githubusercontent.com/93134160/269891930-33231cd2-6e94-4e50-b5ac-3f3494f2b416.jpg',
            description: '江戸時代の俳人・千代女は白山市出身。千代女は朝顔の句を多く詠んでいることから、朝顔は白山市の花になっています。若宮八幡宮・明達寺・千代女の里俳句館・本誓寺・聖興寺など白山市の観光スポットを巡ります。',
	　　mapStyle: 'mapbox://styles/wataruyoshida/cln9x7i24009001puepzsflgr',
            location: {
                center: [136.57608, 36.52642],
		zoom: 13.5,
		pitch: 0.00,
		bearing: 0.00,
               },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
	title: '次は石川県の特産品を見ていきましょう！',
            image: '',
            description: '',
	　　mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.94993, 36.79451],
		zoom: 7.7,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
	onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'イカキング　能登町',
            image: 'https://user-images.githubusercontent.com/93134160/269909275-47ce8af0-72e5-47e3-8941-175d6aa4ea90.jpg',
            description: '日本有数のイカ釣り漁港がある能登町。漁港のそばの巨大モニュメント、イカキングは一躍話題となりました。日本百景に選ばれた九十九湾など風光明媚な里山里海を駆け巡り、能登町に巨大イカキングを描きます。',
	　　mapStyle: 'mapbox://styles/wataruyoshida/cln9x7i24009001puepzsflgr',
            location: {
              	center: [137.24124, 37.33479],
		zoom: 11.3,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ころ柿　志賀町',
            image: 'https://user-images.githubusercontent.com/93134160/269905430-8dd50e02-0121-4708-ba24-eef087d469ad.jpg',
            description: '能登を代表する特産品、志賀町のころ柿は品種「最勝」を原料柿として、古くから伝わる伝統技法を用いて製造された糖度の高い干柿です。 志賀町の農家の軒先では干し柿がオレンジのカーテンのように吊るされています。',
	　　mapStyle: 'mapbox://styles/wataruyoshida/cln9x7i24009001puepzsflgr',
            location: {
               center: [136.75984, 37.01188],
		zoom: 13.0,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: '福梅　金沢市',
            image: 'https://user-images.githubusercontent.com/93134160/269911787-49a59cae-7458-4d3b-aa89-3771865ba2af.jpg',
            description: '金沢では、お正月に梅の形をした紅白の最中、福梅を食べる風習があります。この福梅のルーツは加賀百万石の殿様、前田家の家紋「梅鉢紋」に由来しています。和菓子の町、金沢で和菓子屋さん巡りはいかがでしょう。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9x7i24009001puepzsflgr',
            location: {
             center: [136.66912, 36.56311],
		zoom: 14.0,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'フグ　白山市',
            image: 'https://user-images.githubusercontent.com/93134160/269903710-1f0165e3-4626-4ff1-9b26-9c8e596b159e.jpg',
            description: '霊峰白山の恵み大地のミネラルを大量に含んだ伏流水は、醗酵食文化を生み出しました。江戸時代より伝わる美川ふぐの子糠漬は、猛毒のふぐの卵巣を使った奇跡の発酵食品として文化庁「100年フード」に認定されています。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9x7i24009001puepzsflgr',
            location: {
                center: [136.49743, 36.49133],
		zoom: 14.1,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: '日本酒　白山市',
            image: 'https://user-images.githubusercontent.com/93134160/269913779-3eb426b8-4dcf-4842-938e-77b744404f8d.jpg',
            description: '白山市は霊峰白山から流れる手取川の伏流水と加賀平野の良質な酒米を用いた日本酒の一大生産地として古より知られております。見渡すかぎり田んぼののどかな扇状地。「手取川」吉田酒造、「天狗舞」車多酒造を巡ります。',
 	    mapStyle: 'mapbox://styles/wataruyoshida/cln9x7i24009001puepzsflgr',
            location: {
                center: [136.55383, 36.48918],
		zoom: 13.5,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: '石川県の海岸線はどうなっているでしょうか。見てみましょう！',
            image: '',
            description: '',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.94993, 36.79451],
		zoom: 7.7,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '猿　珠洲市',
            image: 'https://user-images.githubusercontent.com/93134160/269915961-0a831ea8-0db2-48c7-b1e1-5fbf20b96f1f.jpg',
            description: '奥能登には猿にまつわる伝説・伝承が多数残っています。そして珠洲の海岸線は猿の顔そのもの。激坂の山越え、趣の異なる外浦と内浦の海岸線、風情ある珠洲の街並みとバリエーションに富んだコースになっています。',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
               center: [137.31259, 37.43824],
		zoom: 9.8,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'うさぎ　七尾市',
            image: 'https://user-images.githubusercontent.com/93134160/269916947-25ec5eb2-bda0-431a-8d1c-a171f2088daa.jpg',
            description: '七尾湾の中に浮かんでいる能登島の海岸線は、美しい海とおだやかな入江、荒波に削られた岩々など変化にとんだ景色が広がっています。海岸線の道路をつないでいくと大きなうさぎが浮かびあがること、ご存じでしたか？',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9xmjmj008y01rc83bv0eom',
            location: {
               center: [137.03906, 37.13466],
		zoom: 11.0,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twelfth-identifier',
            alignment: 'left',
            hidden: false,
            title: '水の旅　白山市',
            image: 'https://user-images.githubusercontent.com/93134160/269920414-10b2521c-cd04-4c7d-8054-5eec091e3fdf.jpg',
            description: '白山手取川ジオパークは2023年、ユネスコ世界ジオパークに認定されました。白山に降った雪が水となり、手取川から日本海に流れる水の旅がテーマです。山頂から加賀禅定道～手取川～日本海までの水の旅を描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln4kq2yd005401pw9wia3np4',
            location: {
                center: [136.40202, 36.26203],
		zoom: 8.8,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'わんじま　輪島市',
            image: 'https://user-images.githubusercontent.com/93134160/270154426-a748817a-7e02-4aab-9a4b-cb3058107933.jpg',
            description: '輪島漆芸美術館のゆるキャラ、わんじま。輪島塗のお椀がモチーフです。輪島漆芸美術館をスタートし、輪島塗スポットや輪島の朝市など観光名所を巡りながら出来上がったアートは、手に輪島塗のお箸を持ったわんじまです。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9xmjmj008y01rc83bv0eom',
            location: {
                center: [136.89563, 37.39382],
		zoom: 14.4,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fourteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ボラ待ちやぐら　穴水町',
            image: 'https://user-images.githubusercontent.com/93134160/270154647-9325e492-58cc-4090-b54e-3469d03d89db.jpg',
            description: '終日、やぐらの上から海を見張り、魚群がくると網をたぐるという江戸時代からの伝統的漁法のボラ待ちやぐら。最盛期には40基のボラ待ちやぐらがあったそうです。ボラ待ちやぐら3基を巡ってやぐらのアートを描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9xmjmj008y01rc83bv0eom',
            location: {
                center: [136.89077, 37.21223],
		zoom: 12.0,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'fifteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'かも丸　加賀市',
            image: 'https://user-images.githubusercontent.com/93134160/270154928-04f20766-38f6-447a-8014-a11db0c60678.jpg',
            description: '加賀市にはラムサール条約に登録されている日本有数の鴨の越冬池や、江戸時代より伝わる伝統的鴨漁「坂網漁」など鴨にちなんだものが有名です。加賀市大聖寺で加賀市の公式キャラクターかも丸くんを描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9xmjmj008y01rc83bv0eom',
            location: {
                center: [136.30828, 36.30754],
		zoom: 14.4,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'sixteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ゆ　加賀市',
            image: 'https://user-images.githubusercontent.com/93134160/270155257-a49d20da-d430-4d40-972f-682f8851316c.jpg',
            description: '山代温泉はあいうえお五十音図発祥の地。平安時代、明覚上人はお経を読むためサンスクリット語を学んでいるうちに、日本語に5つの母音があり、文字列がきれいに並ぶことを発見しました。ひらがなで温泉のゆを描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9xmjmj008y01rc83bv0eom',
            location: {
                center: [136.34857, 36.28945],
		zoom: 12.7,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'seventeenth-identifier',
            alignment: 'left',
            hidden: false,
            title: '続いては石川県にまつわる「言い伝え」をみていきましょう',
            image: '',
            description: '',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.94993, 36.79451],
		zoom: 7.7,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'eightteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: '白鷺　七尾市',
            image: 'https://user-images.githubusercontent.com/93134160/270162751-e8306876-4b6e-495d-99db-b9eb270b9cab.jpg',
            description: '日本では珍しい海から温泉が湧き出ている和倉温泉。七尾湾で一羽の白鷺が傷を癒していたのを漁師夫婦が見つけ、不思議に思い近づいてみると海中から温泉が湧き出ていた。これが和倉温泉の発祥とされています。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9y5xps008901pw7xlped4i',
            location: {
                center: [136.92608, 37.08792],
		zoom: 14.3,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'nineteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'UＦＯキャッチャー 羽咋市',
            image: 'https://user-images.githubusercontent.com/93134160/270162993-7cd2941d-b752-41a5-a157-bb1f0ced9895.jpg',
            description: 'UFOの町羽咋。気多大社の横にある正覚院の「気多古縁起」という古い巻物の中には、神力自在に飛ぶ物体が登場したということが由来だそうです。コスモアイル羽咋にはロケットや宇宙船の実物が展示されています。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9y5xps008901pw7xlped4i',
            location: {
                center: [136.76706, 36.90393],
		zoom: 12.5,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twentieth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'モーゼ　宝達志水町',
            image: 'https://user-images.githubusercontent.com/93134160/270163320-ded9d085-4673-46b2-926d-e64a58a4e104.jpg',
            description: '宝達志水町モーゼパークには、旧約聖書「十戒」で海を割ったモーゼの墓があります。ユダヤの民衆をイスラエルの地へ導いた後、不思議な天浮船で宝達山にどり着き、余生をこの地で過ごしたという言い伝えがあります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9y5xps008901pw7xlped4i',
            location: {
                center: [136.74757, 36.81809],
		zoom: 12.4,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-first-identifier',
            alignment: 'left',
            hidden: false,
            title: '牛王印　白山市',
            image: 'https://user-images.githubusercontent.com/93134160/270163791-b0892231-5752-4853-8624-53ac7f2a90ba.jpg',
            description: '平安時代に開かれた加賀禅定道は巨大な扇状地の頂点にある白山比咩神社を起点に、白山へと至る歴史ある信仰の道。白山に登る修験者の安全を祈願するお守りとして使われていた牛王印を手取川扇状地全体に描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9y5xps008901pw7xlped4i',
            location: {
                center: [136.51535, 36.48797],
		zoom: 10.8,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-second-identifier',
            alignment: 'left',
            hidden: false,
            title: '祭礼・行事についてみていきましょう！',
            image: '',
            description: '',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.88809, 36.84067],
		zoom: 8.5,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'でか山　七尾市',
            image: 'https://user-images.githubusercontent.com/93134160/270164290-f2b6c866-568d-4e29-b160-25d3ef9f22dd.jpg',
            description: '日本一のでか山を誇る青柏祭の起源は平安時代。疫病退散を祈願する天王信仰を背景に伝承されています。青柏祭の大地主神社や小丸山城址公園、一本杉通り、山の寺寺院群、国分寺跡を巡り七尾城にでか山を引き上げます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.95108, 37.02812],
		zoom: 12.3,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: '駅伝　津幡町',
            image: 'https://user-images.githubusercontent.com/93134160/270164589-3c62e72a-b9f2-4845-a00e-0a9a09f21abc.jpg',
            description: '河北潟一周駅伝は箱根駅伝と同じ大正9年（1920年）から始まった日本最古の駅伝であり、開催回数は100回を超える伝統的な大会。襷をつないでゴールテープを切るランナーをゴール地点の津幡町で描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.72507, 36.66650],
		zoom: 13.6,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '凧　内灘町',
            image: 'https://user-images.githubusercontent.com/93134160/270165141-842e5ad6-3414-426d-b20e-65960028e113.jpg',
            description: '毎年5月に内灘海水浴場で行われる内灘 世界の凧の祭典は、県内外そして海外からたくさんの人が集まる凧の祭典です。アート上にある凧会館では凧づくり体験を行うことができ、内灘海岸では凧あげも楽しめます',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.61282, 36.61607],
		zoom: 12.6,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: '石川県の歴史・文化、偉人についてみていきましょう。',
            image: '',
            description: '',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.94993, 36.79451],
		zoom: 7.7,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: '禅　輪島市',
            image: 'https://user-images.githubusercontent.com/93134160/270166775-72a784f7-e083-4de7-b916-718fbdbcb25f.jpg',
            description: 'かつて北前船の寄港地として栄えた輪島市門前にある総持寺祖院。海を通じて禅の文化を全国に広めました。また總持寺峨山禅師は、羽咋市永光寺の住職を兼ねており、両寺を結ぶ13里（52km）を往来していたそうです。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.76088, 37.27944],
		zoom: 13.4,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'おにぎり　中能登町',
            image: 'https://user-images.githubusercontent.com/93134160/270167165-b124a342-1986-475c-a6cd-cb2cce3fb133.jpg',
            description: 'おにぎりの里　中能登町。その由来は日本最古のおにぎりが出土したことから。1987年に弥生時代の竪穴住居跡からチマキ状炭化米の塊（おにぎりの化石）が発見されました。以降、おにぎりで町おこしがおこなわれています、',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.89405, 36.98522],
		zoom: 13.3,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'twenty-ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: '侍　金沢市',
            image: 'https://user-images.githubusercontent.com/93134160/270169772-9172c919-6388-4d35-80ab-d5d2caa4db14.jpg',
            description: '戦火を免れた金沢は、江戸時代から道筋がほとんど変わっていない城下町。昔ながらの町屋が多数残り、町並みそのものが観光名所。金沢城を中心に武家屋敷跡や金沢五社、金沢三茶屋街、金沢三寺院群などを巡ります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.64369, 36.56713],
		zoom: 12.3,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirtieth-identifier',
            alignment: 'left',
            hidden: false,
            title: '富樫氏　野々市市',
            image: 'https://user-images.githubusercontent.com/93134160/270173563-5cfc37e1-4cbd-45ec-8985-55b6fe818be1.jpg',
            description: '富樫氏は、室町時代に加賀国を支配した守護大名。それ以前も木曽義仲との対戦や、源義経の勧進帳など歴史の舞台に度々登場しています。守護所を置いた富樫館跡や、富樫氏が建てた布市神社、喜多家住宅などを巡ります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
               center: [136.60968, 36.52600],
		zoom: 13.8,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-first-identifier',
            alignment: 'left',
            hidden: false,
            title: '埴輪　能美市',
            image: 'https://user-images.githubusercontent.com/93134160/270174024-c9f7b5ae-fef2-41c4-985c-3f233ca72efb.jpg',
            description: '能美古墳群、寺井山→末寺山→和田山（２座）→秋常山→西山を繋ぎ埴輪を描きます。能美ふるさとミュージアムでは遺跡で発掘された壺や宝剣・埴輪などを見学。今年は加賀立国能美誕生1200年。能美市のルーツを探ります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9yn65b008z01reha13ad8j',
            location: {
                center: [136.49972, 36.44231],
		zoom: 13.4,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-second-identifier',
            alignment: 'left',
            hidden: false,
            title: '考える人　かほく市',
            image: 'https://user-images.githubusercontent.com/93134160/270174576-2d8e81ca-a3be-484b-96dc-6c0142886377.jpg',
            description: 'かほく市が生んだ日本近代哲学の偉人、西田幾多郎。幾多郎の生誕地から生い立ちの地、西田幾多郎哲学館、哲学の道、幾多郎のお墓など幾多郎のルーツを巡っていくと、「考える人」が町に浮かびあがります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9z5mil008k01ps1pqd2wgo',
            location: {
                center: [136.69138, 36.71836],
		zoom: 13.2,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-third-identifier',
            alignment: 'left',
            hidden: false,
            title: '野球　能美市',
            image: 'https://user-images.githubusercontent.com/93134160/270175053-380a0e13-4d19-43e9-8a60-87d215489bb9.jpg',
            description: '巨人・NYヤンキースで活躍した松井秀喜さんは石川県能美市出身。松井秀喜ベースボールミュージアムを起点に松井さんの母校（浜小学校、根上中学）をはじめ、根上りの松、弁慶謝罪の地などを巡ります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9z5mil008k01ps1pqd2wgo',
            location: {
                center: [136.43401, 36.43830],
		zoom: 13.0,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-forth-identifier',
            alignment: 'left',
            hidden: false,
            title: '松尾芭蕉　加賀市',
            image: 'https://user-images.githubusercontent.com/93134160/270504183-7d81f91d-0dbc-4b85-9f1b-1881ce97f1b4.jpg',
            description: '開湯1300年の歴史を持つ山中温泉は、芭蕉が称賛した日本三大名湯の1つ。1689年夏、奥の細道の道中、松尾芭蕉は山中温泉に長期にわたって滞在しました。山中温泉の数々の名所旧跡には芭蕉の句が残されています。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9z5mil008k01ps1pqd2wgo',
            location: {
                center: [136.37045, 36.24500],
		zoom: 15.0,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '深田久弥　加賀市',
            image: 'https://user-images.githubusercontent.com/93134160/270506131-491624c9-da6a-45e1-8546-0dd56c9d6031.jpg',
            description: '日本人はたいていふるさとの山を持っている。「日本百名山」著者、深田久弥は加賀市大聖寺出身。深田久弥山の文化館でルーツを探り、久弥が愛した白山を眺めながら生まれ育った大聖寺の城下町をめぐります。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9z5mil008k01ps1pqd2wgo',
            location: {
                center: [136.30592, 36.31648],
		zoom: 12.5,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'がんばろうスズ　珠洲市',
            image: 'https://user-images.githubusercontent.com/93134160/270507015-f6c5b409-3fcb-4a4d-9500-e7addbe40d84.jpg',
            description: '2023年5月、大きな震災にあった珠洲。夏にはトライアスロン珠洲、秋には奥能登国際芸術祭が数年ぶりに開催されます。スポーツとアートの力、そしてみんなの強い気持ちと団結で乗り越えていきましょう。がんばろうスズ',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9zimax008z01rc5emzdvlh',
            location: {
                center: [137.20738, 37.42857],
		zoom: 10.8,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
	{
            id: 'thirty-seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ONE TEAM　石川１９市町',
            image: '',
            description: '長く続いたコロナ禍や地震、豪雨災害を乗り越え、皆が活力を取り戻すために。いしかわ百万石文化祭・新幹線開業・世界ジオパークなど皆で盛り上げるために。オール石川のチジョウエール、ONE TEAMを描きます。',
	    mapStyle: 'mapbox://styles/wataruyoshida/cln9zsw2l002401psdwm7g0ki',
            location: {
                center: [136.33635, 36.80514],
		zoom: 7.5,
		pitch: 0.00,
		bearing: -8.43,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty-eighth-chapter',
            alignment: 'fully',
            hidden: false,
            title: '最後に',
            image: '',
            description: 'ここまで30のGPSアートを石川県内でみてきました。いかがでしたでしょうか？ <br> 特産品や伝統芸能など石川県ならではの魅力を感じでいただけたら嬉しいです。今回GPSアートで紹介したもので気になった・興味があるスポットにぜひ足を運んでみてください！ <br> <br> Thank you for watching!!',
	    mapStyle: 'mapbox://styles/wataruyoshida/clmu8pv4y008f01rd6gbzf3ox',
            location: {
                center: [136.94993, 36.79451],
		zoom: 7.7,
		pitch: 0.00,
		bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
