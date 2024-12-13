<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalacja pakietów

```bash
$ npm install
```

## Uruchomienie testów jest

```bash
$ npm run test
```

<p>Testy jednostkowe są skonfigurowane w pliku src/pets/pets.controller.spec.ts</p>
<p>Dotyczą tylko controllera i obejmują: tworzenie, update i delete peta. Są izolowane, nie odkładają danych w db</p>

## Uruchomienie aplikacji

```bash
$ npm run start
```

## Swagger

<p> {{API_URL}}/api </p>
<p> Swagger delikatnie mówiąc "ma braki"</p>

## Uwaga

<p>
Do działania aplikacji niezbędne jest dodanie pliku .env 
Plik powinien zawierać MONGO_URI="{your mongo_uri}", niezbędne do połączenia z bazą danych  
</p>

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
