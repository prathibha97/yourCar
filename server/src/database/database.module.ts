import { DataSource } from 'typeorm';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: '213097',
      host: 'localhost',
      database: 'yourcar',
      entities: ['dist/**/entities/*{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: DataSource) {
    if (connection.initialize) {
      try {
        console.log('DB Connected Successfully!');
      } catch (err) {
        console.error('Error during Data Source initialization!!!', err);
      }
    }
  }
}
