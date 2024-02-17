import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'assesement'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('assesement');
  });

  it('should call the addStringNumbers method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'addStringNumbers');
    app.addStringNumbers([]);
    expect(app.addStringNumbers).toHaveBeenCalled();
  });

  it('should call the addStringNumbers method argument array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'addStringNumbers');
    app.addStringNumbers([]);
    expect(app.addStringNumbers).toHaveBeenCalledWith([]);
  });

  it('should sum numbers from a array of string input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.addStringNumbers(['1,2,3']);
    expect(result).toBe([6]);
  });

  it('should sum numbers from a array of string input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.addStringNumbers([]);
    expect(result).toBe(undefined);
  });
});
