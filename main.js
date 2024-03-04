/**
 Angular: 2.03.2024 - Курс по Angular 14

 Angular - это фреймворк который позволяет создавать SPA - приложения
    Это именно фреймворк, т.е полноценное коробочное решение. В рамках angular уже
        есть все что нужно для разработки приложения.

        Например:
            - Работа с сервером
            - Формы
            - Роутинг и т.д

 Компания Google разрабатывает Angular с точки зрения обратной совместимости
    Т.е по сути они гарантируют, что код который ты написал например в 5 версии
        он также будет работать и в 14 версии.
    При обновлении версии нужно будет немного адаптировать свой код


 План разработки Angular:
    1. Установка AngularCLI: npm install -g @angular/cli
        -ng version: Версия Angular/NodeJS
        --ng help: Документация CLI
    2. Создания проекта Angular: ng new my-app
        
    Разбор шаблона:
        В корне мы видим большое кол-во вспомогательных файлов, тут их больше чем в
            остальных интументах, т.к это все-таки фреймворк и он хочет быть
            максимально настраеваемым, адаптируемым и т.д

        .browserslistrc - список браузеров
        .editorconfig - для контроля стилистики проекта
        angular.json - настройка самого angular
        tsconfig - настройка TypeScript т.к angular изначально был написан на TS

        main.ts
            enableProdMode - вызываем только в случае production сборки

                 if (environment.production) {
                  enableProdMode();
                }

                environments - это такой-же глобальный config
                    - Есть для dev сборки, и для prod сборки

                    Angular сам решает какой подключить, в зависимости от
                        режима сборки

            platformBrowserDynamic - берет и запускает модуль приложения который мы импортируем

                 platformBrowserDynamic().bootstrapModule(AppModule)
                 .catch(err => console.error(err));

 Папка app:
    NgModule - декоратор из '@angular/core'

        И далее по сути берем и настраиваем наше приложение

         import { NgModule } from '@angular/core';
         import { BrowserModule } from '@angular/platform-browser';

         import { AppRoutingModule } from './app-routing.module';
         import { AppComponent } from './app.component';

         @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            AppRoutingModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
         export class AppModule { }


 !!! Каждая сущность в Angular являеться классом
    export class AppModule { }: Мы экспортируем данный класс, но функционал мы
        навешиваем с помощью декоратора

     import { NgModule } from '@angular/core';
     import { BrowserModule } from '@angular/platform-browser';

     import { AppRoutingModule } from './app-routing.module';
     import { AppComponent } from './app.component';

     @NgModule({
              declarations: [ - говорим какие у нас есть различные компоненты
                AppComponent
              ],
              imports: [ - какие есть дополнительные модули
                BrowserModule,
                AppRoutingModule
              ],
              providers: [], - провайдеры
              bootstrap: [AppComponent] - массив который говорит, с чего начинаеться все приложение
            })                              оно начинаеться с AppComponent
     export class AppModule { }

    Компонент Angular:

     import { Component } from '@angular/core'; - импортируем декоратор Component

     @Component({ - настройки компонента
      selector: 'app-root', - название компонента для шаблона
        И как раз в index.html мы его и рендерим <app-root></app-root>
      templateUrl: './app.component.html', - ссылка на шаблон
      styleUrls: ['./app.component.scss'] - ссылка на стили
    })
     export class AppComponent { - класс который описывает данный компонент
      title = 'angular-project';
    }

    В export class AppComponent у нас уже присутствует готовая строчка title
        и например у нас есть задача вывести эту строчку в наш шаблон.

        Мы объявляем константу или поле в классе


    Создание компонентов:

        app.component.html
        <h1 class="font-bold mb-2 text-center">Hello Angular</h1>

        Итерполяция работает через двойные скобки
        <h1 class="font-bold mb-2 text-center">{{ title }}</h1>
        {{}} - мы выводи те данные которые присутствуют в классе которые могут быть
            приведены к строке

    Концепт pipe:
        <h1 class="font-bold mb-2 text-center">{{ title | uppercase }}</h1>
            | - ставим вертикалькую черту, как бы говоря что мы хотим трансформировать title
                только для отображения

    Создание компонентов:
        Чтобы создавать компоненты по правельному мы создаем отдельную папку для компонента
            и внутри создаем файлы которые нужны для данного компонента

        Папка product
            Файл product.component.ts
            Шаблон для компонента product.component.html

                Если требуються scss стили
                    product.component.scss
                Если требуються тесты
                    product.component.spec.ts


 !!! ВАЖНО
    1. В product.component.ts мы сначало import декоратор Component
        import { Component } from '@angular/core'

     @Component({
        selector: 'app-product' - обязательный параметр
            Добавляем префикт app чтобы не путать наши собственные компоненты
                с html тегами
        templateUrl: './product.component.html' - обязательный параметр
            Указать путь до шаблона
    })

     export class ProductComponent {

    }

    ProductComponent is not declared in any Angular module
        ProductComponent не объявлен в каком-либо Angular module

        Module - такая над сущность над компонентами, которая берет и
            объединяет в себе определенный функционал

    Нам необходимо запомнить название класса и зарегистрировать компонет, чтобы
        angular знал что у нас такая штука присутствует

    Папка App -> Файл app.module.ts -> Добавить компонент в массив declaration

         @NgModule({
          declarations: [ - массив для добавления новых компонентов
            AppComponent,
            ProductComponent - вот наш новый компонент
          ],
          imports: [ - Доболнительные модули для функционала (встроекнные библиотеки)
            BrowserModule,
            AppRoutingModule
          ],
          providers: [],
          bootstrap: [AppComponent] - компонент с которого начинаеться все приложение
        })
         export class AppModule { }

 app.module.ts

@NgModule - декоратор
    Используеться для навешивания функционала на компонент

@Component - декоратор

     @Component({
      selector: 'app-product', - название компонента для шаблона
        Мы берем это название и превращаем в тег. И можем использовать как тег
      templateUrl: './product.component.html',
      styleUrls: ['./product.component.scss']
    })

    Мы можем работать с данным в шаблоне, только с теми данными которые есть в
        классе, поэтому их нужно поместить в class

Для того чтобы получить параметр мы используем декоратор
 @Input из @angular/core

 @Input() product: IProduct[] - мы говорим в какое свойство мы хотим положить данные
    которые мне прилетят

    По умолчанию если мы ничего не передаем в декоратор @Input, то название
        для параметра будет использоваться по названию поля в нашем случае product

 @Input() product: IProduct[] - чаще всего мы стретим вот такую запись

 [product] - нужно взять свойство в квадратные скобки для того чтобы angular понимал,
    что сдесь будет какой-то JavaScript, а не просто строчка

!!!! Если нужно передавать динамиу нужно обернуть свойство в квадратные скобки
    <img class="w-1/4 h-1/4" [src]="product.image" [alt]="product.title">

pipe currency - служит для вывода информации о валюте, и деньгах
 <p>Price: <span class="font-bold">{{ product.price | currency }}</span></p>

    Если мы хотим изменить валюту, то можем просто передать параметры в pipe
    <p>Price: <span class="font-bold">{{ product.price | currency: 'RUB'}}</span></p>


Конструкции if / else в angular:
    - Реализуються через @директивы
        Для начала реализуем состояние

@Директивы - это атрибуты которые мы сами создаем в рамках фреймворка
    Есть 2 вида директив:
        - Обычная (никак не влияют на шаблон)

        - Структурая (позволяют изменять шаблон компонента)
            Обозначаеться с *
            Например: *ngIf

     <div *ngIf="details">
         <p>{{ product.description }}</p>
         <p>{{ product.rating.rate }}</p>
     </div>

    Для того чтобы добовлять прослушку событий в angular
        Если мы какое-то значение передаем в внутрь шаблона, то используем []
        Если мы хотим что получить из шаблона в компонет (получить динамику),
            то используем ()

        (click)=""
            Мы можем передавать функцию которая находиться в классе

        export class ProductComponent {
          @Input() product: IProduct

          details = false
          toggleDetail = () => {
            this.details = !this.details
          }
        }

         <button
             class="border py-2 px-4 rounded bg-yellow-400"
             (click)="toggleDetail()" - обработка события. Берет из класса
         >
             Show Details
         </button>

         <div *ngIf="details"> - структураня директива влияющая на UI
             <p>{{ product.description }}</p>
             <p>{{ product.rating.rate }}</p>
         </div>

    Смена класса по условию, по типу classNames

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 !!! Очень важно, НИКОГДА не ставить запятую в конце последнего условия, т.к будет ошибка
        А синтаксисом подствечена не будет она

    [ngClass]="{
      'bg-yellow-400': !details,
      'bg-blue-400': details
    }"

    [ngClass] - принимает в себя объект где в качестве ключа мы используем название класса
        а в качестве значения используем условие при котором этот класс должен показаться
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    Смена стилей по условию

    [ngStyle] = "{

    }"

    Примает в себя объект где в качестве ключа, я указываю css свойство
        В качестве значения, значение этого свойства

     <span [ngStyle]="{fontWidth: 'bold'}">
        {{ product.rating.rate }}
     </span>

    Параметры pipe number

     <span [ngStyle]="{fontWeight: 'bold'}">
        {{ product.rating.rate | number: '2.2-4'}}
     </span>

    В начале мы описываем минимальное кол-во символов до точки
    После точки указываем минимлаьное кол-во символов float
    Максимальное значение символов через дифис


    Циклы

    Мы создаем компонент. Учитывая что цикл работает через директиву которая меняет по сути
        шаблон потому-что она работает с компонентами поэтому она идет через * и называеться
        *ngFor

    С помощью ключевого слова let мы создаем иттерируемый элемент и указываем откуда
        <app-product *ngFor="let product of products"></app-product>

    Учитывая что этот элемент будет иттерироваться он ожидает параметр []
        <app-product *ngFor="let product of products" [product]="product"></app-product>

        Т.е на каждой иттерации мы получаем новый [product] и как параметр добавляем

    Если нам понадобиться index - это зарезирвированноое слово

     <app-product
         *ngFor="let product of products; let i = index"
         [product]="product"
     ></app-product>

 Запросы на сервер:
    1. Для запросов создадим папку services
    2. Все файлы будем имменновать .service.ts
            product.service.ts

     @Injectable({
        providedIn: "root" - делаеться это для того чтобы данный service был автоматически заригестрирован
            в нашем корневом модуле. Если мы передадим параметр, то сразу сможем им пользоваться
     })
     export class ProductService {

    }

     @NgModule({
      declarations: [
        AppComponent,
        ProductComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule
      ],
      providers: [], - для регистрации services
      bootstrap: [AppComponent]
    })
     export class AppModule { }

    Концепуия Services:
        - это обстрактный слой данныйх который работает с конкретной сущностью в нащем случае с
            продуктами. Внутри мы хотим делать запросы на сервер чтобы получать эти данные

        Для этого в angular есть пакет который называет httpclient

        В первую очередь чтобы его использовать, в angular есть такая вещь dependencyInjection
         @Injectable({
          providedIn: "root"
        })
         export class ProductService {
          constructor(private http: HttpClient) {
          }
        }

        Также нам нужно зарегистрировать этот модуль для того чтобы angular понимал что
            мы имеем сейчас дело с данным функционалом

         imports: [
             BrowserModule,
             AppRoutingModule,
             HttpClientModule - добавление нужного модуля
         ],

        Далее мы реализовываем методы для запросов которые будут делать запрос на
            сервер и получать данные

         getAll() {
            this.http.get() - мы обращаемся к this.http у которого есть методы get, post, put, delete и т.д
          }

         export class ProductService {
          constructor(private http: HttpClient) {
          }

          getAll() {
            this.http.get('https://fakestoreapi.com/products')
          }
        }

        Сейчас мы сталкиваемся с такой концепцией как стримы
            Если мы посмотрим на метод get , то увидим что он по умолчанию возвращает конструкцию
                Observable<Object>

        Observable<Object>
            В ядре своем angular использует использует такую библиотеку как RxJS
                По сути это loadash, просто набор утилит позволяющих работат как с синхронным
                    кодом, так и с ассинхронным и добавляет реактивности

    Мы должны вернуть запрос из метода getAll(): return this.http.get('https://fakestoreapi.com/products')


    Как сделать запрос?
        Когда правильно делать запрос? В момент когда компонент инициализируеться
        Для этого в angular присутсвуют хуки жизненного цикла. Подробно расписаны для каждого
            этапа жизни компоннета

    Ининициализация компонента
        Для инициализации мы можем implements от интерфейса OnInit

     export class ProductComponent implements OnInit{
      @Input() product: IProduct

      details = false
      toggleDetail = () => {
        this.details = !this.details
      }
    }

    Т.к мы implements класс должен риализовывать определенные методы

    Далее нужно навести на название компонента и выбрать Implement all members
        и добавиться метод

    ngOnInit(): void { }

    Можно же было его реализовывать без implements OnInit, но это считаеться хорошей
        практикой

    В ngOnInit(): void { } нам нужно обратиться к нашему сервису
    В первую очередь нам нужно сервис подключить

         export class AppComponent implements OnInit{
          title = 'angular-project';
          products: IProduct[] = [];

          constructor(private productsService: ProductService) {
          }

          ngOnInit(): void {
            this.productsService.getAll() - учитывая что данная конструкция возвращает нам string,
                то мы можем на него подпосаться getAll.subscribe(() => {

                })
          }
        }

        В subscribe мы передаем callback

         ngOnInit(): void {
            this.productsService.getAll().subscribe(products => {
              this.products = products
            })
          }

        На текущем этапе мы получаем ошибку
            TS2696: The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?   Type 'Object' is missing the following properties from type 'IProduct[]': length, pop, push, concat, and 29 more

!!!        В данном случае нам нужно прописать конкретные типы в services
             getAll(): Observable<IProduct[]> {
                return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
              }


 Ограничение кол-во товаров в запрос
    1. Нужно добавить query параметр в запрос через options: {}
        Параметры определяються у нак как новый класс new Params

    Фишка angular в том что он супер универсальный умеет работась почти со всем из коробки
        .append('limit', 5)

     getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
          params: new HttpParams().append('limit', 5)
        })
      }

 params: new HttpParams().append('limit', 5) - установка лимита на получаемые продукты

 либо можем читать данные параметры из строки

     params: new HttpParams({
        fromString: 'limit=5'
     })

либо указывать параметры как объект


Прикол RxJS в том что мы можем прям точно взаимодействовать с этими данным в процессе
    и как-то эти данные модифицировать. Делаеться это с помощью метода .pipe

 getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 2}
      })
    }).pipe(
      delay(2000) - ипользуем утилиту delay чтобы задержать выполнение кода
    )
  }

 import {delay, Observable} from "rxjs"; - импортируеться из библиотеки rxjs

Альтернатива метода подписки .subscribe
 ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }

Мы можем воспользоваться другим подходом и вместо того чтобы создавать массив продуктов мы также
    можем поработать с стримами

    products$
    $ - знак доллара который по сути означает что это у нас string и говорим что это будет тип
            Observable<IProduct[]>

     export class AppComponent implements OnInit{
      title = 'angular-project';
      loading = false;
      // products: IProduct[] = [];
      products$: Observable<IProduct[]>

      constructor(private productsService: ProductService) {
      }

      ngOnInit(): void {
        this.loading = true
        this.products$ = this.productsService.getAll()
        // this.productsService.getAll().subscribe(products => {
        //   this.products = products
        //   this.loading = false
        // })
      }
    }

    Но проблема теперь в шаблоне т.к мы убрали массив products

     <app-product
         *ngFor="let product of products$ | async; let i = index"
        [product]="product"
     ></app-product>

    В данном случае мы должны обраться к стриму products$ и пропустить его через pipe async

    Идея в том что async pipi он автоматически подпишеться на стрим и как только
        придут какие-то данные, то он нам их выведет

    При этом у нас есть loading которая всегда true

     this.products$ = this.productsService.getAll().pipe(
        tap(() => this.loading = false) - никак не изменяет данные, не трансформирует, просто добавляет функционал
     )
        Как только завершился запрос меняеться состояние loading



Обработка ошибок angular:
    В первую очередь у нас есть стрим в котором потенциально может быть ошибка

     getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
          params: new HttpParams({
            fromObject: {limit: 2}
          })
        }).pipe(
          delay(2000),
          catchError(this.errorHandler)
        )
      }

    В .pipe мы передадим оператор который называеться .catchError
        Нам нужно передать callback c this.errorHandler(это метод который должен
            присутствовать в данном сервисе)

        private errorHandler(error: HttpErrorResponse) {
           return throwError(() => error.message)
        }
 }

Генерация файлов с помощью Angular CLI:
    ng g s services/error --skip-test

    ng - обращение к CLI
    g - generate
    s - service
    --skip-test -
    Буквы это сокращенные алиасы

 error$ = new Subject()  - с помощью subject мы сможем как-бы тригерить создание ошибки

 handle(message: string) {
    this.error$.next(message) - мы как бы уведомляем всех подписчиков что произошла ошибка
  }








































 **/