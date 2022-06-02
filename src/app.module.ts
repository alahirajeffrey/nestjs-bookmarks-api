import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.PG_HOST,
      username: 'postgres' || process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      port: parseInt(<string>process.env.PG_PORT),
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule, 
    UserModule, 
    BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
