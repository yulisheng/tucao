import {Entity, model, property} from '@loopback/repository';

@model()
export class Message extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
  })
  uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'date',
    required: false,
  })
  created_at: string;

  @property({
    type: 'string',
    required: false,
  })
  ip: string;

  constructor(data?: Partial<Message>) {
    super(data);
  }
}
