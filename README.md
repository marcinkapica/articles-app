# README #

Aplikacja pobierająca dane postów z bloga Future Processing poprzez REST API i wyświetlająca je w formie ostylowanej listy. Aplikacja utworzona w ramach zadania rekrutacyjnego firmy Future Processing.

## Dane realizującego zadanie ###

Marcin Kapica

marcinkapica@outlook.com

## Instalacja i uruchamianie ###

### 1. Instalacja paczek npm

W celu uruchomienia aplikacji należy w pierwszym kroku zainstalować wymagane paczki npm. Aby to zrobić należy w konsoli wpisać komendę:
####`npm install`

### 2. Uruchomienia wersji developerskiej
Po instalacji paczek w celu uruchomienia aplikacji w wersji developerskiej należy użyć komendy:
####`gulp`
Zostanie wtedy uruchomiony lokalny serwer i otworzy się okno przeglądarki z wyświetloną aplikacją. Pliki aplikacji w wersji developerskiej znajdują się w folderze `app`

### 3. Utworzenie plików wersji produkcyjnej
Aby wygenerować pliki w wersji produkcyjnej należy użyć komendy
####`gulp build`
Spowoduje to usunięcie zawartości folderu `dist` i utworzenie w tym miejscu plików aplikacji w wersji produkcyjnej (zminifikowane i skonkatenowane style oraz skrypty)

## Użyte narzędzia, biblioteki i frameworki ###
- [gulp](https://gulpjs.com/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
- [Font Awesome](http://fontawesome.io/)
- [Font Lato z Google Fonts](https://fonts.google.com/specimen/Lato)
- [SCSS](http://sass-lang.com/)
- [jQuery](https://jquery.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Moment.js](http://momentjs.com/)
