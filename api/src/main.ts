import 'colors'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  const configService = app.get(ConfigService)
  const nodeEnv = configService.get('NODE_ENV')
  const port = configService.get('PORT')
  const apiPrefix = configService.get('API_PREFIX')
  app.setGlobalPrefix(apiPrefix)
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Discount APP')
    .setDescription('Discount API documentation')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(`${apiPrefix}/docs`, app, document)
  await app.listen(port)
  console.log(
    `Server is running in ${nodeEnv} mode on port ${port}...`.yellow.bold
  )
}
;(async () => await bootstrap())()
