import { Module } from "@nestjs/common";
import { SmsModule } from "../sms/sms.module";
import { BullModule } from "@nestjs/bullmq";

/**
 * BullMQ configuration for NestJS application.
 *
 * BullMQ is a Node.js library that implements a fast and robust queue system based on Redis.
 * It is used for background job processing, allowing you to perform tasks asynchronously.
 *
 * This configuration sets up BullMQ with a Redis connection and registers a queue named "sms-queue".
 *
 * @module AppModule
 *
 * @see https://docs.bullmq.io/
 */

@Module({
	imports: [
		/**
		 * Configures the BullMQ module with a Redis connection.
		 *
		 * @property {Object} connection - Redis connection options.
		 * @property {string} connection.host - The hostname of the Redis server.
		 * @property {number} connection.port - The port number of the Redis server.
		 *
		 * Note: You can implement BullMQ queues in whichever module you want by following this structure.
		 */
		BullModule.forRoot({
			connection: {
				host: "localhost",
				port: 6379,
			},
		}),

		SmsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
