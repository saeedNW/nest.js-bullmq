import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Queue } from "bullmq";
import * as usersList from "./feeds/users.json";

@Injectable()
export class SmsService {
	constructor(
		/**
		 * Injects a queue named "sms-queue".
		 *
		 * @property {Queue} smsConsumer - The queue to inject.
		 */
		@InjectQueue("sms-queue")
		private readonly smsConsumer: Queue
	) {}

	/**
	 * Sends an SMS message using a queue.
	 */
	async sendQueueSms() {
		const startTime = Date.now();

		// Add the job to the queue.
		await this.smsConsumer.add(
			"send-sms", // Job name
			{ usersList }, // Job data
			{ removeOnComplete: true } // Job options
		);

		const endTime = Date.now();
		const timeTaken = endTime - startTime;

		return { message: "Added to queue", timeTaken: `${timeTaken} ms` };
	}

	/**
	 * Sends an SMS message in a blocking manner.
	 */
	async sendBlockingSms() {
		const startTime = Date.now();

		for (const user of usersList) {
			await new Promise((resolve, reject) =>
				setTimeout(() => {
					console.log("Send SMS:", user.fullname);
					resolve(true);
				}, 500)
			);
		}

		const endTime = Date.now();
		const timeTaken = endTime - startTime;

		return { message: "SMS sent", timeTaken: `${timeTaken} ms` };
	}
}
