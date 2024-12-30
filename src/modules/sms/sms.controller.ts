import { Controller, Get } from "@nestjs/common";
import { SmsService } from "./sms.service";

@Controller("sms")
export class SmsController {
	constructor(private readonly smsService: SmsService) {}

	/**
	 * Sends an SMS message using a queue.
	 */
	@Get("queue")
	async sendQueueSms() {
		return this.smsService.sendQueueSms();
	}

	/**
	 * Sends an SMS message in a blocking manner.
	 */
	@Get("blocking")
	async sendBlockingSms() {
		return this.smsService.sendBlockingSms();
	}
}
