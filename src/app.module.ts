import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { PrismaService } from './prisma/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env.js'
import { AuthModule } from './auth/auth.module.js'

@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env),
    isGlobal: true,
  }), AuthModule,
  ],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
