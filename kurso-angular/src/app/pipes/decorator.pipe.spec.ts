import { TestBed } from '@angular/core/testing';
import { DecoratorPipe } from './decorator.pipe';

describe('DecoratorPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecoratorPipe]
    });
  });
  it('create an instance', () => {
    const pipe = new DecoratorPipe();
    expect(pipe).toBeTruthy();
  });

  it('apply decorator', () => {
    const pipe: DecoratorPipe = TestBed.get(DecoratorPipe);
    expect(pipe.transform('Test', '***')).toBe('******Test******');
  });
});
