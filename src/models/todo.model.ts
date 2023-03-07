import {Entity, model, property} from '@loopback/repository';

@model({
  // name: 'todo',
  settings: {
    mysql: {
      table: 'todo',
    },
    string: true,
  },
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    mysql: {
      columnName: 'id'
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'title'
    },
  })
  title: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'description'
    },
  })
  description?: string;

  @property({
    type: 'boolean',
    mysql: {
      columnName: 'isComplete'
    },
  })
  isComplete?: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
