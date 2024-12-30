import { Module } from "@nestjs/common";
import { SmsService } from "./sms.service";
import { SmsController } from "./sms.controller";
import { BullModule } from "@nestjs/bullmq";
import { SmsConsumer } from "./consumers/sms.consumer";

@Module({
	imports: [
		/**
		 * Registers a queue named "sms-queue".
		 *
		 * @property {string} name - The name of the queue.
		 */
		BullModule.registerQueue({ name: "sms-queue" }),
	],
	controllers: [SmsController],
	providers: [SmsService, SmsConsumer],
})
export class SmsModule {}
