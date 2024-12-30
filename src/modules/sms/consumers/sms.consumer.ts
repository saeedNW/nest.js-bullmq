import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";

/**
 * @file sms.consumer.ts
 * @description This file contains the SmsConsumer class which processes jobs from the "sms-queue".
 * The class extends WorkerHost and defines methods to handle SMS sending tasks.
 */

/**
 * @class SmsConsumer
 * @extends WorkerHost
 * @description Consumer class for processing SMS related jobs from the "sms-queue".
 */
@Processor("sms-queue")
export class SmsConsumer extends WorkerHost {
	/**
	 * Processes the job from the queue.
	 * @param {Job} job - The job object containing the name and data.
	 * @param {string} [token] - Optional token parameter.
	 * @returns {Promise<any>} - A promise that resolves when the job is processed.
	 */
	async process(job: Job, token?: string): Promise<any> {
		// Extract the name and data from the job.
		const { name, data } = job;

		// Process the job based on the job's name.
		switch (name) {
			case "send-sms":
				this.sendSms(data.usersList);
				break;

			default:
				break;
		}
	}

	/**
	 * Sends SMS to a list of users.
	 * @param {any[]} usersList - The list of users to send SMS to.
	 * @returns {Promise<void>} - A promise that resolves when all SMS have been sent.
	 */
	async sendSms(usersList: any[]): Promise<void> {
		for (const user of usersList) {
			await new Promise((resolve, reject) =>
				setTimeout(() => {
					console.log("Send SMS:", user.fullname);
					resolve(true);
				}, 500)
			);
		}
	}
}
