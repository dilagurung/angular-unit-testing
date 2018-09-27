
import {TestBed,async,ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { AppComponent } from './app.component';



describe('AppComponent',()=>
  { let fixture:ComponentFixture<AppComponent>;
    let debugElement:DebugElement;
    beforeEach(async(()=>
    {

      TestBed.configureTestingModule
      ({
        declarations:[AppComponent],
      }).compileComponents();
      fixture=TestBed.createComponent(AppComponent);
      debugElement=fixture.debugElement;
    }));

    it('should increment/decrement value',()=>{
      fixture.componentInstance.increment();
      expect(fixture.componentInstance.val).toEqual(1);
      fixture.componentInstance.decrement();
      expect(fixture.componentInstance.val).toEqual(0);
    });

    it('should increment in template',()=>{
      debugElement.query(By.css('button.increment')).triggerEventHandler('click',null);
      debugElement.query(By.css('button.increment')).triggerEventHandler('click',null);

      fixture.detectChanges();
      const  value=debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(value).toEqual('2');
    });


    it('should stop at 0 and show `Reorder Level reached`',()=>
    {
      debugElement.query(By.css('button.decrement')).triggerEventHandler('click',null);
      fixture.detectChanges();
      const message=debugElement.query(By.css('p.message')).nativeElement.innerText;
      expect(fixture.componentInstance.val).toEqual(0);
      expect(message).toContain('Reorder Level');
    });

    it('should stop at 15 and show `stack overflow`',()=>{
      fixture.componentInstance.val=15;
      debugElement.query(By.css('button.increment')).triggerEventHandler('click',null);

      fixture.detectChanges();

      const message=debugElement.query(By.css('p.message')).nativeElement.innerText;
      expect(fixture.componentInstance.val).toEqual(15);
      expect(message).toContain('stack overflow');




    })




 }
);














/*



describe('AppComponent',()=>
{
  let appComponent=new AppComponent();
  it('should create the app',()=>
  {
   const app=appComponent;
    expect(app).toBeTruthy();
  });
  it('should have title called "syntey"',()=>{

    const title=appComponent.title;
    expect(title).toEqual('syntey');

  });


}













);
*/
