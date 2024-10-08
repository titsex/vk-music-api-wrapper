import VKMusicAudioAPI from './api'
import Fetcher from './fetcher'

import type { VKMusicResolveScreenNameMethodResponse } from './types'

export interface VKMusicAPIOptions {
	/**
	 * @name token
	 * @description To get it, follow the https://oauth.vk.com/authorize?client_id=2685278&scope=65536&response_type=token&revoke=1, click "allow" and copy everything between access_token= and &expires_in
	 */
	token: string
}

export class VKMusicAPI {
	private readonly url = 'https://api.vk.com/method'
	private readonly version = '5.199'
	private readonly userAgent =
		'KateMobileAndroid/50.1 lite-438 (Android 7.0; SDK 24; arm64-v8a; HUAWEI HUAWEI CAN-L11; ru)'

	private readonly fetcher!: Fetcher

	public audio!: VKMusicAudioAPI

	constructor(options: VKMusicAPIOptions) {
		this.fetcher = new Fetcher({
			token: options.token,
			url: this.url,
			version: this.version,
			userAgent: this.userAgent,
		})

		this.audio = new VKMusicAudioAPI(this.fetcher)
	}

	async resolveScreenName(screen_name: string): Promise<VKMusicResolveScreenNameMethodResponse> {
		const queryParams = {
			screen_name,
		}

		return this.fetcher.get<VKMusicResolveScreenNameMethodResponse>('utils.resolveScreenName', queryParams)
	}
}

export * from './types'

export {
	VKMusicAPIException,
	VKMusicAPIErrorMessage,
	VKMusicAPIErrorCode,
	VKMusicAPIResponse,
	VKMusicAPIError,
} from './fetcher'
