import { NestFactory } from "@nestjs/core";
import { swaggerConfiguration } from "./configs/swagger.config";
import { AppModule } from "./modules/app/app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	/** initialize swagger */
	swaggerConfiguration(app);

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
