import i18n, { type Config } from 'sveltekit-i18n';
import { loadDefaultJapaneseParser } from 'budoux';
const parser = loadDefaultJapaneseParser();

const japanese = {
	name: '仲座ヤーッコ',
	role: 'ソフト開発者',
	about:
		'私はフィンランド出身のソフトウェア開発者です。現在アールト大学でコンピューターサイエンスを学び、ソフトウェア開発者兼<wbr>ヘッド<wbr>ティーチング<wbr>アシスタント<wbr>として働いています。教育ツール、アプリケーション、ユーザーインターフェイスの開発経験があります。得意なプログラミング言語はTypeScript、Java、Scalaで、Webアプリケーション開発のためのReact.jsとモバイルアプリケーション開発のためのReact Nativeに強い理解があります。また、グラフィックデザインにも長けており、いくつかのプロジェクトでロゴやブランディングのデザインを担当した経験もあります。ソフトウェア開発とデザインの専門知識を生かし、クライアントのニーズを満たす効率的でユーザーフレンドリーなソリューションを作成することができます。',
	home: 'ホーム',
	workHistory: '職歴',
	projects: 'プロジェクト',
	graphicDesign: 'グラフィックデザイン',
	darkMode: 'ダークテーマ',
	lightMode: 'ライトテーマ',
	workInfo: {
		beamex: {
			company: 'Beamex',
			role: 'ソフトウェアエンジニア',
			description: `Androidを実行するスマートグラス向けアプリの開発において、私はReact Nativeの専門知識を活用し、機械学習を使用した工場の設備のキャリブレーションのためのソリューションを設計・構築するのに重要な貢献をしました。ユーザーフレンドリーなインターフェースを作成し、アプリの機能がクライアントのニーズを満たすように確認することにも大きな役割を果たしました。技術的な障害を克服するためにチームを支援するために私の問題解決スキルを活用し、Kotlinを使用してBLEペリフェラル通信のためのカスタムExpoモジュールと、オフラインでマシンビジョンモデルを実行するためのカスタムExpoモジュールの2つを開発することで私の柔軟性を示しました。元々、マシンビジョンモデルはクラウドで実行されており、非常に遅かったため、約4秒かかりましたが、私が最適化したオフライン版では約300msでした。また、コードの品質を維持するために、ユニットテストとコードスタイルチェックを自動的に実行するAzure DevOpsのCIパイプラインを設定しました。`,
			period: '2022年10月 - 現在'
		},
		assistant: {
			company: 'アールト<wbr>大学',
			role: 'ヘッド<wbr>ティーチング<wbr>アシスタント',
			description: `Scalaによる入門プログラミングコースのヘッドティーチングアシスタントとして、私は年間約1000人の学生向けのコースを開発するチームの一員です。私の責任は、学生に対するガイダンスとサポートを提供すること、および採点目的の効果的な単体テストの作成と実装を含みます。2022年には、テストをScala 3に移行することで重要な役割を果たし、Docker技術の利用により採点プロセスの効率性を向上させるために取り組みました。さらに、グラフィックデザインのスキルを活用して、コースの視覚的魅力を高めました（<a href="/ja/graphicDesign#o1">グラフィックデザイン</a>を参照）。\n\n<a href="https://plus.cs.aalto.fi/o1/">プログラミング１</a>`,
			period: '2021年6月 - 現在'
		},
		courses: {
			company: 'アールト<wbr>大学',
			role: 'ソフトウェア<wbr>エンジニア',
			description: `IntelliJ IDEAのプラグイン開発チームのメンバーとして、Javaを始めとするプログラミング言語のスキルを磨きました。また、Python、Kotlin、Scala、Bashスクリプトなども扱ってきました。GitHub Actionsを使用して継続的インテグレーションを目的とした開発を行い、ロゴや<a href="https://github.com/Aalto-LeTech/aplus-courses">README</a>のビジュアル表現を含めたプロジェクト全体のデザインに貢献しました（<a href="/ja/graphicDesign#courses">グラフィックデザイン</a>を参照）。\n\n2022年には、プラグイン向けのチュートリアルを作成するためのWebアプリケーションを設計・開発し、IntelliJでのチュートリアルのライブプレビューを提供するアプリケーションをReact.jsを使用して構築しました。このアプリケーションはGitHub Pagesを通じて公開されました。\n\n<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a> / <a href="https://github.com/Aalto-LeTech/aplus-courses-tutorial-builder">A+ Courses チュートリアルビルダー</a>`,
			period: '2021年1月 - 2022年12月'
		}
	},
	designInfo: {
		courses: `<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a>は、IntelliJ用のプラグインです。これは、プログラミングコースで使用され、IDEの使用体験をスムーズにします。私はブランドデザインを担当し、プラグインのユーザーエクスペリエンスや外観のデザインに参加しています。ロゴはAと+の文字の組み合わせで、IntelliJブランディングのグラデーション豊富なスタイルからインスピレーションを受けています。`,
		o1: `<a href="https://plus.cs.aalto.fi/o1/">Ohjelmointi 1</a>（プログラミング1）は、Scalaの入門プログラミングコースです。ロゴは、Scala 3ロゴに囲まれたフレンドリーでモダンなデザインになっており、Oは<a href="https://christinalassheikki.com/">Christina Lassheikki</a>のアートで埋められ、コースのイメージを表現しています。`,
		studios: `私が将来的に始めるかもしれないウェブ開発スタジオのために、このロゴを作成しました。`,
		five: `Fiveは、計画中のコースコミュニケーションプラットフォームです。学生は他の学生やコーススタッフから質問をして回答を得ることができます。それはフィンランドのグレーディングシステムで最高の成績（5）にちなんで名付けられています。ロゴは、5とスピーチバブルを組み合わせたもので、コミュニケーションを表しています。`
	},
	projectInfo: {
		tech: '使用技術：',
		repository: 'リポジトリ',
		website: 'ウェブサイト',
		status: {
			completed: '完了',
			inProgress: '進行中',
			planned: '計画中'
		},
		smile: {
			title: 'SMILe',
			description: '画像の作成や操作に使用するライブラリ',
			longDescription:
				'SMILe [Scala Media Interactive Learning]は、現在Aalto大学のProgramming 1コースで取り組んでいるScala 3ライブラリです。 SMCLよりもシンプルで保守しやすいように設計されています。'
		},
		prefecturePursuit: {
			title: 'Prefecture Pursuit',
			description: '日本の都道府県を学ぶためのブラウザーゲーム',
			longDescription:
				'2022年には、日本の都道府県を学ぶための簡単なブラウザーゲームを作成しました。このプロジェクトを2023年に拡張して、より魅力的で完成度の高いものにする予定です。元のプロジェクトは、ライブラリを使用せずにHTMLとTypeScriptで作成されました。'
		},
		happaChat: {
			title: 'happaChat',
			description: 'ウェブ、Android、iOS向けのチャットアプリ',
			longDescription:
				'2022年には、Reactを使用してウェブ用のシンプルなチャットアプリケーションと、React Nativeを使用してモバイル用のアプリをDenoバックエンドで作成しました。2023年には、KotlinとSwiftを使用してAndroidとiOS用のネイティブアプリを作成する予定です。'
		},
		aiCapitalist: {
			title: 'AI資本主義者',
			description: 'AI駆動型の株式取引ボット',
			longDescription:
				'機械学習を使用する株式取引ボットを作成する予定です。複数の異なるアルゴリズムをテストして、最も優れたパフォーマンスを発揮するものを選択します。目標は、株式を自動で取引し、利益を上げるボットを作成することです。'
		},
		modulatedMonstrosities: {
			title: 'モジュラーシンセサイザー',
			description: 'ブラウザベースのモジュラーシンセサイザー',
			longDescription:
				'モジュラーシンセサイザーは、ブラウザベースのモジュラーシンセサイザーです。様々なモジュールを接続することで、異なる音を作成することができます。'
		},
		aPlusCourses: {
			title: 'A+ Courses チュートリアルビルダー',
			description: 'IDEチュートリアルの構成用Webアプリ',
			longDescription:
				'A+ Courses チュートリアルビルダーは、私が2022年夏に作成したIDEチュートリアルの構成用Webアプリです。このアプリは、A+ Courses IntelliJプラグインのプログラミングコースのチュートリアル作成に使用されます。このアプリは、TypeScriptとReactで書かれています。'
		},
		vanishedVisions: {
			title: '失われたビジョン',
			description: 'テキストアドベンチャーゲーム',
			longDescription:
				'失われたビジョンは、私が友人と一緒にプログラミングコースの課題として作成したテキストアドベンチャーゲームです。最初はサーバーで実行され、WebSocketsを介してクライアントと通信していました。その後、Scala.jsを使用してゲームをブラウザで実行できるように移植しました。'
		}
	}
};

const parseEntry: any = (key: string, value: string | object) => {
	if (typeof value === 'object') {
		return [
			key,
			Object.fromEntries(Object.entries(value).map(([key, value]) => parseEntry(key, value)))
		];
	} else {
		return [key, value.length > 20 ? parser.translateHTMLString(value) : value];
	}
};

const parsedJapanese = Object.fromEntries(
	Object.entries(japanese).map(([key, value]) => parseEntry(key, value))
);

const config: Config = {
	translations: {
		en: {
			name: 'Jaakko Nakaza',
			role: 'software developer',
			about: `I am a software developer from Finland, currently studying Computer Science at Aalto University and working there as a software developer and head teaching assistant. I have experience in developing educational tools, applications, and user interfaces. My strongest programming languages are TypeScript, Java, and Scala, and I have a strong understanding of React.js for developing web applications and React Native for developing mobile applications. I am also skilled in graphic design, with experience in designing logos and branding for several projects. With my expertise in software development and design, I am able to create efficient and user-friendly solutions that meet the needs of my clients.`,
			home: 'HOME',
			workHistory: 'Work History',
			projects: 'Projects',
			graphicDesign: 'Graphic Design',
			darkMode: 'Dark Mode',
			lightMode: 'Light Mode',
			workInfo: {
				beamex: {
					company: 'Beamex',
					role: 'Software Engineer',
					description: `As a key contributor to the development of an app for smart glasses running Android, I utilized my expertise in React Native to design and build a solution for calibrating factory equipment using machine vision. I played a significant role in creating a user-friendly interface and ensuring the functionality of the app met the needs of the client. My problem-solving skills were utilized to assist my team in overcoming technical obstacles, and I demonstrated my versatility by developing two custom Expo modules using Kotlin, one for BLE Peripheral communication and one for running the machine vision model offline. The original machine vision model was run in the cloud and it was very slow, taking about 4 seconds to run. My optimized offline version took about 300ms. I also set up a CI pipeline in Azure DevOps, running unit tests and code style checks automatically to maintain code quality.`,
					period: 'Oct 2022 - Present'
				},
				assistant: {
					company: 'Aalto University',
					role: 'Head Teaching Assistant',
					description: `As the Head Teaching Assistant for an introductory programming course in Scala, I am part of a team developing a course for approximately 1000 students each year. My responsibilities include providing guidance and support to students, as well as creating and implementing effective unit tests for grading purposes. In 2022, I was instrumental in transitioning the tests to Scala 3, and worked on improving the efficiency of the grading process through the utilization of Docker technology. Additionally, I used my skills in graphic design to enhance the visual appeal of the course (see <a href="/en/graphicDesign#o1">Graphic Design</a>).\n\n<a href="https://plus.cs.aalto.fi/o1/">Programming 1</a>`,
					period: 'Jun 2021 - Present'
				},
				courses: {
					company: 'Aalto University',
					role: 'Software Engineer',
					description: `As a team member for the development of a plugin for IntelliJ IDEA, I have honed my skills in Java as well as other programming languages such as Python, Kotlin, Scala, and Bash scripts. I have utilized GitHub Actions for Continuous Integration purposes and have contributed to the overall design and aesthetic of the project, including the creation of the logo and the visual representation of the <a href="https://github.com/Aalto-LeTech/aplus-courses">README</a> (see <a href="/en/graphicDesign#courses">Graphic Design</a>).\n\nIn 2022, I further demonstrated my abilities by designing and developing a web application for creating tutorials for the plugin. This application features a live preview of what the tutorial will look like in IntelliJ and was built using React.js. The app was published through GitHub Pages.\n\n<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a> / <a href="https://github.com/Aalto-LeTech/aplus-courses-tutorial-builder">A+ Courses Tutorial Builder</a>`,
					period: 'Jan 2021 - Dec 2022'
				}
			},
			designInfo: {
				courses: `<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a> is a plugin for IntelliJ. It is used on programming courses to make the experience of using the IDE more smooth. I have designed the branding and have been a part of designing the user experience and look of the plugin. The logo is a combination of the characters A and + and it's look is inspired by gradient-rich style of the IntelliJ branding.`,
				o1: `<a href="https://plus.cs.aalto.fi/o1/">Ohjelmointi 1</a> (Programming 1) is an introductory Scala programming course. The logo was designed to be friendly and modern, with the the number 1 wrapped by the Scala 3 logo. The O filled with art by <a href="https://christinalassheikki.com/">Christina Lassheikki</a>, which is also used to illustrate the course.`,
				studios: `I created this logo for my web development studio that I might start in the future.`,
				five: `Five was a planned course communication platform. Students could ask questions and get answers from other students and course staff. It is named after the highest grade in the Finnish grading system (5). The logo combines the number 5 with a speech bubble, representing communication.`
			},
			projectInfo: {
				tech: 'Tech used: ',
				repository: 'Repository',
				website: 'Website',
				status: {
					completed: 'Completed',
					inProgress: 'In Progress',
					planned: 'Planned'
				},
				smile: {
					title: 'SMILe',
					description: 'Library for creating and manipulating images',
					longDescription:
						"SMILe [Scala Media Interactive Learning] is a Scala 3 library I am currently working on for the Programming 1 course at Aalto University. It is designed to be more simple and maintainable than it's predecessor SMCL."
				},
				prefecturePursuit: {
					title: 'Prefecture Pursuit',
					description: 'Browser game for learning the prefectures of Japan',
					longDescription:
						'In 2022 I created a simple browser game for learning the prefectures of Japan. I am planning to expand on this project in 2023 to make it more engaging and complete. The original project was made with HTML and TypeScript without any libraries.'
				},
				happaChat: {
					title: 'happaChat',
					description: 'Chat application for web, Android and iOS',
					longDescription:
						'In 2022 I created a simple chat application for web with React and mobile with React Native with a Deno backend. I am planning to remake the project in 2023, this time creating native apps for Android and iOS with Kotlin and Swift.'
				},
				aiCapitalist: {
					title: 'AI Capitalist',
					description: 'AI powered stock trading bot',
					longDescription:
						'We are planning to make a stock trading bot that uses machine learning. We will test multiple different algorithms and see which one performs the best. The goal is to make a bot that can trade stocks automatically and make a profit.'
				},
				modulatedMonstrosities: {
					title: 'Modulated Monstrosities',
					description: 'Browser-based modular synth',
					longDescription:
						'Modulated Monstrosities will be a browser-based modular synth. It will have various different modules that can be connected together to create different sounds.'
				},
				aPlusCourses: {
					title: 'A+ Courses Tutorial Builder',
					description: 'Web app for configuring IDE tutorials',
					longDescription:
						'The A+ Courses Tutorial Builder is a web app for configuring IDE tutorials I made in the summer of 2022. It is used for creating tutorials for programming courses for the A+ Courses IntelliJ plugin. The app is written in TypeScript with React.'
				},
				vanishedVisions: {
					title: 'Vanished Visions',
					description: 'Text adventure game',
					longDescription:
						'Vanished Visions is a text adventure game I made with a friend as an assignment for a programming course in 2020. Originally the game was run in a server which communicated with the client via WebSockets. I later ported the game to run in the browser using Scala.js.'
				}
			}
		},
		fi: {
			name: 'Jaakko Nakaza',
			role: 'ohjelmistokehittäjä',
			about: `Olen ohjelmistokehittäjä Suomesta, opiskelen tällä hetkellä tietotekniikkaa Aalto-yliopistossa, jossa työskentelen myös ohjelmistokehittäjänä ja pääkurssiassistenttina. Minulla on kokemusta opetustyökalujen, sovellusten ja käyttöliittymien kehittämisestä. Vahvimmat ohjelmointikieleni ovat TypeScript, Java ja Scala, ja minulla on vahva osaamus React.js:llä web-sovellusten kehittämisestä ja React Nativelle mobiilisovellusten kehittämisestä. Olen myös taitava graafisessa suunnittelussa, ja minulla on kokemusta logojen ja brändin suunnittelusta useissa projekteissa. Ohjelmistokehityksen ja -suunnittelun asiantuntemukseni ansiosta pystyn luomaan tehokkaita ja käyttäjäystävällisiä ratkaisuja, jotka vastaavat asiakkaideni tarpeita.`,
			home: 'ETUSIVU',
			workHistory: 'Työhistoria',
			projects: 'Projektit',
			graphicDesign: 'Graafinen Suunnittelu',
			darkMode: 'Tumma Teema',
			lightMode: 'Vaalea Teema',
			workInfo: {
				beamex: {
					company: 'Beamex',
					role: 'Ohjelmistokehittäjä',
					description: `Olin keskeisessä osassa Android-käyttöjärjestelmää käyttävän älylasien sovelluksen kehityksessä. Sovellus on tarkoitettu tehdaslaitteiden kalibrointiin käyttäen konevisiota. Osallistuin käyttöliittymän käyttäjäystävällisyyden ja sovelluksen toiminnallisuuden kehittämiseen. TypeScriptin kirjoittamisen lisäksi kehitin kaksi natiivia Expo-moduulia Kotlinilla, toinen BLE-viestintään ja toinen AI-mallin ajamiseen laseilla. AI-malli oli alunperin pilvessä ajettu ja hyvin hidas, joten minun tehtäväni oli tehdä siitä offline-versio, johon ei tarvitse nettiyhteyttä. Pilvi-mallissa kesti 4s ja minun offline-mallissa noin 300ms. Loin myös CI-pipeline-prosessin Azure DevOpsissa, joka ajaa yksikkötestejä ja koodityylin tarkastuksia automaattisesti ylläpitääkseen koodin laatua.`,
					period: 'lokakuu 2022 - nykyhetki'
				},
				assistant: {
					company: 'Aalto-yliopisto',
					role: 'Pääkurssiassistentti',
					description: `Toimin pääkurssiassistenttina Scala-alkeisohjelmointikurssilla, jota käy noin 1000 opiskelijalle vuosittain. Vastuullani on opiskelijoiden ohjaaminen ja tukeminen sekä tehokkaiden yksikkötestien luominen tehtävien automaattiseen arviointiin. Vuonna 2022 olin keskeisessä roolissa muuttamassa testit Scala 2:sta Scala 3:een ja työskentelin tehostaakseni arviointiprosessin tehokkuutta Dockerin avulla. Lisäksi suunnittelin kurssin uuden ulkoasun (ks. <a href="/fi/graphicDesign#o1">Graafinen suunnittelu</a>).\n\n<a href="https://plus.cs.aalto.fi/o1/">Ohjelmointi 1</a>`,
					period: 'kesäkuu 2021 - nykyhetki'
				},
				courses: {
					company: 'Aalto-yliopisto',
					role: 'Ohjelmistokehittäjä',
					description: `Aloitin Aalto-yliopistossa työskentelyn A+ Courses -IntelliJ IDEA-lisäosan kehityksen parissa. Tämä lisäosa on pääosin kirjoitettu Javalla, mutta projektin parissa olen käyttänyt myös Scalaa, Kotlinia, Pythonia, sekä TypeSciptiä. Olen kehittänyt GitHub Actions pipelinestä nopeamman ja lisännyt siihen toiminnallisuutta. Olen osallistunut projektin kokonaisvaltaiseen suunnitteluun ja ulkoasun suunnitteluun, mukaan lukien uusi logo ja <a href="https://github.com/Aalto-LeTech/aplus-courses">README</a>:n visuaalinen ulkoasu (ks. <a href="/fi/graphicDesign#courses">Graafinen suunnittelu</a>).\n\nKehitimme lisäosaan tutoriaaliominaisuuden, jolla opetetaan opiskelijoita käyttämään IntelliJ IDEA:aa. Vuonna 2022 kehitin Reactilla työkalun tutoriaalikonfiguraatiotiedostojen luomiseen visuaalisesti.\n\n<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a> / <a href="https://github.com/Aalto-LeTech/aplus-courses-tutorial-builder">A+ Courses Tutorial Builder</a>`,
					period: 'tammikuu 2021 - joulukuu 2022'
				}
			},
			designInfo: {
				courses: `<a href="https://github.com/Aalto-LeTech/aplus-courses">A+ Courses</a> on IntelliJ IDEA -lisäosa, jota käytetään ohjelmointikursseilla parantamaan käyttäjäkokemusta. Olen suunnitellut brändäyksen ja ollut mukana suunnittelemassa lisäosan käyttöliittymää ja ulkoasua. Logo on yhdistelmä A ja + -merkeistä ja sen ulkoasu on inspiroitunut IntelliJ:n brändäyksestä, jossa käytetään paljon liukuvärejä.`,
				o1: `<a href="https://plus.cs.aalto.fi/o1/">Ohjelmointi 1</a> on Scala-alkeisohjelmointikurssi. Logo on suunniteltu ystävälliseksi ja moderniksi, ja se koostuu numerosta 1, jonka ympäröi Scala 3 -logo, sekä O-kirjaimesta, jonka sisällä on <a href="https://christinalassheikki.com/">Christina Lassheikin</a> tekemä kuva, joita käytetään myös kurssin kuvituksessa.`,
				studios: 'Tein tämän logon tulevaa verkkokehitysstudiota varten.',
				five: `Five on suunniteltu kurssiviestintäalusta, jossa opiskelijat voivat kysyä kysymyksiä ja saada vastauksia muilta opiskelijoilta ja kurssihenkilökunnalta. Se on nimetty korkeimman yliopistoarvosanan mukaan (5). Logo yhdistää numeron 5 ja puhekuplan, joka edustaa kommunikaatiota.`
			},
			projectInfo: {
				tech: 'Käytetyt teknologiat: ',
				repository: 'Repo',
				website: 'Verkkosivusto',
				status: {
					completed: 'Valmis',
					inProgress: 'Työn alla',
					planned: 'Suunniteltu'
				},
				smile: {
					title: 'SMILe',
					description: 'Kirjasto 2D-grafiikan luomiseen ja manipulointiin',
					longDescription:
						'SMILe [Scala Media Interactive Learning] on Scala 3 -kirjasto, jota kehitän tällä hetkellä Aalto-yliopiston Ohjelmointi 1 -kurssille. Se on suunniteltu olemaan yksinkertaisempi ja ylläpidettävämpi kuin edeltäjänsä SMCL.'
				},
				prefecturePursuit: {
					title: 'Prefecture Pursuit',
					description: 'Selainpeli Japanin prefektuurien oppimiseen',
					longDescription:
						'Kehitin yksinkertaisen selainpelin Japanin prefektuurien oppimiseen vuonna 2022. Tarkoitukseni on laajentaa tätä projektia vuonna 2023 tekemällä siitä monipuolisemman. Alkuperäinen projekti tehtiin HTML:llä ja TypeScriptillä ilman kirjastoja.'
				},
				happaChat: {
					title: 'happaChat',
					description: 'Chat-sovellus selaimelle, Androidille ja iOS:lle',
					longDescription:
						'Kehitin yksinkertainen chat-sovelluksen selaimelle Reactilla ja puhelimille React Nativella Deno-backendillä vuonna 2022. Aion tehdä projektin uudelleen vuonna 2023 ja luoda natiivit sovellukset Androidille ja iOS:lle käyttäen Kotlinia ja Swiftiä.'
				},
				aiCapitalist: {
					title: 'AI Capitalist',
					description: 'Koneoppimista käyttävä pörssirobotti',
					longDescription:
						'Aiomme kehittää pörssirobotin koneoppimisella. Testaamme useita erilaisia algoritmeja ja näemme, mikä suoriutuu parhaiten. Tavoitteena on tehdä robotti, joka voi käydä kauppaa osakkeilla automaattisesti ja tehdä voittoa.'
				},
				modulatedMonstrosities: {
					title: 'Modulated Monstrosities',
					description: 'Modulaarinen syntetisaattori selaimelle',
					longDescription:
						'Modulated Monstrosities on modulaarinen syntetisaattori selaimelle. Siinä tulee olemaan erilaisia moduuleita, joita yhdistämällä voidaan luoda musiikkia.'
				},
				aPlusCourses: {
					title: 'A+ Courses Tutorial Builder',
					description: 'Verkkosovellus IDE-tutoriaalien määrittelyyn',
					longDescription:
						'A+ Courses Tutorial Builder on verkkosovellus, jonka tein kesällä 2022. Sitä käytetään ohjelmointikurssien tutoriaalien luomiseen A+ Courses IntelliJ IDEA -lisäosalle. Sovellus on kirjoitettu TypeScriptillä ja Reactilla.'
				},
				vanishedVisions: {
					title: 'Vanished Visions',
					description: 'Tekstiseikkailupeli',
					longDescription:
						'Vanished Visions on tekstiseikkailupeli, jonka tein kaverini kanssa ohjelmointikurssille vuonna 2020. Alun perin peli pyöri palvelimella, joka kommunikoi selaimen kanssa WebSockettien avulla. Myöhemmin siirsin pelin pyörimään selaimessa Scala.js:n avulla.'
				}
			}
		},
		ja: parsedJapanese
	}
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);
