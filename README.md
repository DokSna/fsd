# fsd-step-2
Обучающее задание на фронтенд разработчика. Задание 2. Практика верстки. 2-4 месяца
<h3>Цель:</h3>
Подключить Webpack с Pug и SCSS, и согласно БЭМ сверстать UI Kit и сам сайт "по поиску номеров в отеле".
<h3>Настраиваем Webpack</h3>
	<ol>
		<li>
			Скачиваем и устанавливаем <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a>.
			<details>
				<summary>
					подробнее
				</summary>
				<p>После установки Node.js - нам доступна команда "npm" в консоли (Node Package Manager). Позволяет
					устанавливать
					Javascript-библиотеки из сети Интернет.</p>
			</details>
		</li>
		<li>
			В папке нашего проекта, в консоли инициализируем наш проект: "npm init" - создаётся файл "package.json".
			<details>
				<summary>
					подробнее
				</summary>
				<p>
					Переходим в папку проекта - я в VS Code нажимаю "Файл -> Открыть папку (тут же создаю её с нужным мне
					названием)". <br>
					Сохраняю папку как проект - Расширение "Project Manager" в VS Code.<br>
					Открываю консоль "Ctrl+`" (контр плюс Ё).<br>
					Убеждаюсь что в консоли я тоже нахожусь в папке моего проекта. (к этому моменту у меня уже настроен git).<br>
					Можем убедиться что у нас работет npm проверив его версию. Вводим в консоль: "npm -v".<br>
					Нам нужна "Инициализация нового пакета" который будет описывать наш проект и модули, которые будут
					использоваться в нашем проекте. Команда в консоль: "npm init".
				</p>
			</details>
		</li>
		<li>
			Установим пакеты (библиотеки) webpack, webpack-cli, webpack-dev-server, path. <br>
			Вводим в консоль: npm install webpack webpack-cli webpack-dev-server path --save-dev <br>
			Папка "node_modules" содержит очень много файлов, и смысла её коммитить нет. <br>
			Открываем файл Наш_проект\.git\info\exclude и в конце добавляем строку "node_modules/"
			<details>
				<summary>
					подробнее
				</summary>
				<p>
					--save-dev - что бы в файле package.json, webpack был помещён в "devDependencies" - то что относится к
					разработке.
					<br>
					По умолчанию установилось бы в "Dependencies" - то что относится в продакшену. <br>
					После установки пакетов появилась папка node_modules (в ней Javascript-библиотеки), а в файл package.json
					внесена запись:
				</p>
					<code><pre>
"devDependencies": {
	"path": "^0.12.7",
	"webpack": "^4.41.5",
	"webpack-cli": "^3.3.10",
	"webpack-dev-server": "^3.10.1"
}
					</pre></code>				
			</details>
		</li>
		<li>
			В package.json добавим два ярлыка - для запуска webpack в режиме Devrlopment и Production
			<details>
				<summary>
					подробнее
				</summary>
				<code><pre>
"scripts": {
	"dev": "webpack-dev-server --mode development --open",
	"build": "webpack --mode production"
}					
				</pre></code>
				<p>
					Для запуска webpack в режиме Devrlopment набрать в консоли: npm run dev <br>
					Для запуска в режиме Production набрать в консоли: npm run build
				</p>
			</details>
		</li>
		<li>
			Переходим к настройкам Webpack - создадим файл webpack.config.js <br>
			В webpack.config.js описываем точку входа entry, и описываем путь к файлу ./src/index.js <br>
			Создаём папку src и файл index.js (в index.js мы будем подключать все наши библиотеки) <br>
			Так же в файле webpack.config.js описываем точку выхода output <br>
			Для devServer укажем overlay: true что бы отображались ошибки в окне браузера
			<details>
				<summary>
					подробнее
				</summary>
				<p>
					В файле webpack.config.js мы будем описывать конфигурации нашего Webpack
				</p>
			</details>

		</li>

</ol>
