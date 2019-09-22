import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { ProviderAst } from '@angular/compiler';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TodoService]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
