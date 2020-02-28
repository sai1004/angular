// @Attribute —


      @Directive({
        selector: '[test]'
      })
      export class TestDirective {
        constructor(@Attribute('type') type ) {
          console.log(type); // text
        }
      }

      @Component({
        selector: 'my-app',
        template: `
          <input type="text" test>
        `,
      })
      export class App {}


/* ''''''''''''''''''''' @ViewChildren '''''''''''''''''''' */

 
Returns the specified elements or directives from the view DOM as QueryList

 
      @Component({
        selector: 'alert',
        template: `
          {{type}}
        `,
      })
      export class AlertComponent {
        @Input() type: string = "success";
      }

      @Component({
        selector: 'my-app',
        template: `
          <alert></alert>
          <alert type="danger"></alert>
          <alert type="info"></alert>
        `,
      })
      export class App {
        @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>

        ngAfterViewInit() {
          this.alerts.forEach(alertInstance => console.log(alertInstance));
        }
      }



/*  '''''''''''''''''''''' @ViewChild— ''''''''''''''''''''''''' */

/*
Like ViewChildren but returns only the first element or the directive matching the selector from the view DOM
*/

      @Component({
        selector: 'alert',
        template: `
          {{type}}
        `,
      })
      export class AlertComponent {
        @Input() type: string = "success";
      }

      @Component({
        selector: 'my-app',
        template: `
          <alert></alert>
          <div #divElement>Tada!</div>
        `,
      })
      export class App {
        // This will return the native element
        @ViewChild("divElement") div: any;
        // This will return the component instance
        @ViewChild(AlertComponent) alert: AlertComponent;

        ngAfterViewInit() {
          console.log(this.div);
          console.log(this.alert);
        }
      }


/*  '''''''''''''''''''''' @ContentChildren ''''''''''''''''''''''''' */

 
Returns the specified elements or directives from the content DOM as QueryList
 

      @Component({
        selector: 'tab',
        template: `
          <p>{{title}}</p>
        `,
      })
      export class TabComponent {
        @Input() title;
      }

      @Component({
        selector: 'tabs',
        template: `
          <ng-content></ng-content>
        `,
      })
      export class TabsComponent {
       @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

       ngAfterContentInit() {
         this.tabs.forEach(tabInstance => console.log(tabInstance))
       }
      }

      @Component({
        selector: 'my-app',
        template: `
          <tabs>
           <tab title="One"></tab>
           <tab title="Two"></tab>
          </tabs>
        `,
      })
      export class App {}



/*  ''''''''''''''''''''''@ContentChild ''''''''''''''''''''''''' */

Like ContentChildren but returns only the first element or the directive matching the selector from the content DOM

      @Component({
        selector: 'tabs',
        template: `
          <ng-content></ng-content>
        `,
      })
      export class TabsComponent {
       @ContentChild("divElement") div: any;

       ngAfterContentInit() {
         console.log(this.div);
       }
      }

      @Component({
        selector: 'my-app',
        template: `
          <tabs>
           <div #divElement>Tada!</div>
          </tabs>
        `,
      })
      export class App {}


/*  ''''''''''''''''''''''@HostBinding ''''''''''''''''''''''''' */
 
 Declares a host property binding


      @Directive({
        selector: '[host-binding]'
      })
      export class HostBindingDirective {
        @HostBinding("class.tooltip") tooltip = true;

        @HostBinding("class.tooltip") 
        get tooltipAsGetter() {
          // your logic
          return true;
        };

        @HostBinding() type = "text";
      }

      @Component({
        selector: 'my-app',
        template: `
          <input type="text" host-binding> // this will add the "tooltip" class to the host
        `,
      })
      export class App {}


/*  '''''''''''''''''''''' @HostListener ''''''''''''''''''''''''' */

 
Declares a host listener. Angular will invoke the decorated method when the host element emits the specified event

 
      @Directive({
        selector: '[count]'
      })
      export class HostListenerDirective {
        numClicks = 0;
        numClicksWindow = 0;
        @HostListener("click", ["$event"])
        onClick(event) {
          console.log(this.numClicks++);
        }

        @HostListener("window:click", ["$event"])
        onClick(event) {
          console.log("Num clicks on the window:", this.numClicksWindow++);
        }
      }

      @Component({
        selector: 'my-app',
        template: `
          <input type="button" count value="+">
        `,
      })
      export class App {}



/*  ''''''''''''''''''''''@Self''''''''''''''''''''''''' */

/*
The @Self decorator tells DI to look for a dependency only from itself, so it will not walk up the tree
*/

            class Dependency {}

            class ChildDependency {
             constructor() {
               console.log("ChildDependency");
             }
            }

            class ParentDependency {
             constructor() {
               console.log("ParentDependency");
             }
            }

            @Component({
              selector: 'cmp',
              template: `
                cmp
              `,
              providers: [{ provide: Dependency, useClass: ChildDependency }]
            })
            export class DIComponent {
              constructor(@Self() public dependency: Dependency) {}
            }

            @Component({
              selector: 'my-app',
              template: `
                <cmp></cmp>
              `,
            })
            export class App {}

            @NgModule({
              imports: [ BrowserModule ],
              declarations: [ App,  DIComponent],
              providers: [{ provide: Dependency, useClass: ParentDependency }],
              bootstrap: [ App ]
            })
            export class AppModule {}


/*  ''''''''''''''''''''''@SkipSelf''''''''''''''''''''''''' */

/*
The @SkipSelf decorator tells DI to look for a dependency in the whole tree starting from the parent injector
*/

      class Dependency {}

      class ChildDependency {
       constructor() {
         console.log("ChildDependency");
       }
      }

      class ParentDependency {
       constructor() {
         console.log("ParentDependency");
       }
      }

      @Component({
        selector: 'cmp',
        template: `
          cmp
        `,
        providers: [{ provide: Dependency, useClass: ChildDependency }]
      })
      export class DIComponent {
        constructor(@SkipSelf() public dependency: Dependency) {}
      }

      @Component({
        selector: 'my-app',
        template: `
          <cmp></cmp>
        `,
      })
      export class App {}

      @NgModule({
        imports: [ BrowserModule ],
        declarations: [ App,  DIComponent],
        providers: [{ provide: Dependency, useClass: ParentDependency }],
        bootstrap: [ App ]
      })
      export class AppModule {}


/*  ''''''''''''''''''''' @Host ''''''''''''''''''''''''' */

/*
The @Host decorator tells DI to look for a dependency in any injector until it reaches the host
*/

            @Component({
              selector: 'cmp',
              template: `
                cmp
              `,
            })
            export class DIComponent {}

            @Directive({
              selector: "[host-di]"
            })
            export class HostDI {
             constructor(@Host() cmp: DIComponent) {
               console.log(cmp);
             }
            }

            @Component({
              selector: 'my-app',
              template: `
                <cmp host-di></cmp>
              `,
            })
            export class App {}

/*  '''''''''''''''''''''' @Optional ''''''''''''''''''''''''' */

/*
A parameter metadata that marks a dependency as optional. The injector provides null if the dependency is not found.
*/


            class OptionalDependency {}

            @Component({
              selector: 'cmp',
              template: `
                cmp
              `,
            })
            export class DIComponent {
              constructor(@Optional() public dependency: OptionalDependency) {}
            }


/*  ''''''''''''''''''''''@Inject — ''''''''''''''''''''''''' */

// A parameter decorator that specifies a dependency


            @Component({
              selector: 'cmp',
              template: `
                cmp
              `
            })
            export class DIComponent {
              constructor(@Inject(Dependency) public dependency) {}
            }


/*  '''''''''''''''''''''' @Injectable — ''''''''''''''''''''''''' */

// Let’s Angular know that a class can be used with the DI

            @Injectable()
            export class WidgetService {
              constructor(
                public authService: AuthService) { }
            }

/*  https://netbasal.com/exploring-the-various-decorators-in-angular-b208875b207c */


 
