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
			lightMode: 'Light Mode',
			beamex: 'Beamex',
			beamexRole: 'Software Engineer',
			beamexDescription:
				'As a key contributor to the development of an app for smart glasses running Android, I utilized my expertise in React Native to design and build a solution for calibrating factory equipment using machine vision. I played a significant role in creating a user-friendly interface and ensuring the functionality of the app met the needs of the client. My problem-solving skills were utilized to assist my team in overcoming technical obstacles, and I demonstrated my versatility by developing a custom Expo module for BLE Peripheral communication using Kotlin. I also set up a CI pipeline in Azure DevOps, running unit tests and code style checks automatically to maintain code quality.',
			beamexPeriod: 'Aug 2022 - Present',
			aalto: 'Aalto University',
			assistantRole: 'Head Teaching Assistant',
			assistantDescription:
				'As the Head Teaching Assistant for an introductory programming course in Scala, I am part of a team developing a course for approximately 1000 students each year. My responsibilities include providing guidance and support to students, as well as creating and implementing effective unit tests for grading purposes. In 2022, I was instrumental in transitioning the tests to Scala 3, and worked on improving the efficiency of the grading process through the utilization of Docker technology. Additionally, I used my skills in graphic design to enhance the visual appeal of the course (see Graphic Design).',
			assistantPeriod: 'Jun 2021 - Present',
			aaltoRole: 'Software Engineer',
			aaltoDescription:
				'As a team member for the development of a plugin for IntelliJ IDEA, I have honed my skills in Java as well as other programming languages such as Python, Kotlin, Scala, and Bash scripts. I have utilized GitHub Actions for Continuous Integration purposes and have contributed to the overall design and aesthetic of the project, including the creation of the logo and the visual representation of the README.\n\nIn 2022, I further demonstrated my abilities by designing and developing a web application for creating tutorials for the plugin. This application features a live preview of what the tutorial will look like in IntelliJ and was built using React.js. The app was published through GitHub Pages.',
			aaltoPeriod: 'Jan 2021 - Present'
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
