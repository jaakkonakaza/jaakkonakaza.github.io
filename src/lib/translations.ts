import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	translations: {
		en: {
			name: 'Jaakko Nakaza',
			role: 'software developer',
			about:
				'I am a software developer from Finland, currently studying Computer Science at Aalto University and working there as a software developer and head teaching assistant. I have experience in developing educational tools, applications, and user interfaces. My strongest programming languages are TypeScript, Java, and Scala, and I have a strong understanding of React.js for developing web applications and React Native for developing mobile applications. I am also skilled in graphic design, with experience in designing logos and branding for several projects. With my expertise in software development and design, I am able to create efficient and user-friendly solutions that meet the needs of my clients.',
			workHistory: 'Work History',
			projects: 'Projects',
			graphicDesign: 'Graphic Design',
			darkMode: 'Dark Mode',
			lightMode: 'Light Mode'
		},
		fi: {
			name: 'Jaakko Nakaza',
			role: 'ohjelmistokehittäjä',
			about:
				'Olen ohjelmistokehittäjä Suomesta, opiskelen tällä hetkellä tietotekniikkaa Aalto-yliopistossa, jossa työskentelen myös ohjelmistokehittäjänä ja pääkurssiassistenttina. Minulla on kokemusta opetustyökalujen, sovellusten ja käyttöliittymien kehittämisestä. Vahvimmat ohjelmointikieleni ovat TypeScript, Java ja Scala, ja minulla on vahva osaamus React.js:llä web-sovellusten kehittämisestä ja React Nativelle mobiilisovellusten kehittämisestä. Olen myös taitava graafisessa suunnittelussa, ja minulla on kokemusta logojen ja brändin suunnittelusta useissa projekteissa. Ohjelmistokehityksen ja -suunnittelun asiantuntemukseni ansiosta pystyn luomaan tehokkaita ja käyttäjäystävällisiä ratkaisuja, jotka vastaavat asiakkaideni tarpeita.',
			workHistory: 'Työhistoria',
			projects: 'Projektit',
			graphicDesign: 'Graafinen Suunnittelu',
			darkMode: 'Tumma Teema',
			lightMode: 'Vaalea Teema'
		},
		ja: {
			name: '仲座ヤーッコ',
			role: 'ソフト開発者',
			about:
				'私はフィンランド出身のソフトウェア開発者です。現在アールト大学でコンピュータサイエンスを学び、ソフトウェア開発者兼ヘッドティーチングアシスタントとして働いています。教育ツール、アプリケーション、ユーザーインターフェイスの開発経験があります。得意なプログラミング言語はTypeScript、Java、Scalaで、Webアプリケーション開発のためのReact.jsとモバイルアプリケーション開発のためのReact Nativeに強い理解があります。また、グラフィックデザインにも長けており、いくつかのプロジェクトでロゴやブランディングのデザインを担当した経験もあります。ソフトウェア開発とデザインの専門知識を生かし、クライアントのニーズを満たす効率的でユーザーフレンドリーなソリューションを作成することができます。',
			workHistory: '職歴',
			projects: 'プロジェクト',
			graphicDesign: 'グラフィックデザイン',
			darkMode: 'ダークテーマ',
			lightMode: 'ライトテーマ'
		}
	}
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);
