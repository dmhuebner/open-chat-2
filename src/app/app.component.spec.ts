import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        BootstrapModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain oc-navigation component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('oc-navigation')).not.toBe(null);
  }));

  it('should contain router-outlet in template', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  }));
});
