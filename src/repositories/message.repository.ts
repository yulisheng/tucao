import {
  DefaultCrudRepository,
  juggler,
  DataObject,
  Options,
  AnyObject,
} from '@loopback/repository';
import {Message} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {v1} from 'uuid';
import * as fecha from 'fecha';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.uuid
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(Message, dataSource);
  }
  create(message: Message, options?: Options): Promise<Message> {
    if (!message.uuid) {
      message.uuid = v1();
    }
    return super.create(message, options);
  }
}
