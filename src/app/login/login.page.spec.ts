import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deveria ir da pagina login para a de cadastrar de veiculo', () => {
    spyOn(router,'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['cadastrar-veiculo']);
  });

  it('deveria ir da pagina login para a de cadastrar de usuario', () => {
    spyOn(router,'navigate');

    component.cadastrarUsuario();

    expect(router.navigate).toHaveBeenCalledWith(['cadastrar-usuario']);
  });
});
