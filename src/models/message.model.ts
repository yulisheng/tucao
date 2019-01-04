import {Model, model, property} from '@loopback/repository';

@model()
export class Message extends Model {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  uuid: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  @property({
    type: 'string',
    required: true,
  })
  ip: string;

  constructor(data?: Partial<Message>) {
    super(data);
  }
}
