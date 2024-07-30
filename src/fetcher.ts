import type { VKMusicAudioAPIMethod } from './types'
import type { VKMusicAPIOptions } from './index'

export interface FetcherOptions {
	token: VKMusicAPIOptions['token']

	/**
	 * @name url
	 * @description VK API Url
	 */
	url: string

	/**
	 * @name version
	 * @description Version of VK API
	 */
	version: string

	/**
	 * @name userAgent
	 * @description Special user agent for requests to VK API
	 */
	userAgent: string
}

export interface VKMusicAPIError {
	error_code: number
	error_msg: string
}

export interface VKMusicAPIResponse<T> {
	response: T
	error?: VKMusicAPIError
}

export enum VKMusicAPIErrorCode {
	ACCESS_DENIED = 201,
	INVALID_PARAMS = 100,
}

export enum VKMusicAPIErrorMessage {
	PLAYLIST_NOT_FOUND = 'The playlist on the specified link was not found',
	ARTIST_NOT_FOUND = 'The artist for the specified query was not found',
	URL_NOT_SUPPORT = 'Invalid link format. You can specify links to playlists, albums, artists, users, communities and songs',
	ACCESS_DENIED = 'The user or the community has no access to audio',
}

export class VKMusicAPIException extends Error {
	constructor(
		readonly message: string,
		readonly cause?: unknown
	) {
		super(message, { cause })
	}
}

class Fetcher {
	constructor(private readonly options: FetcherOptions) {}

	public async get<T>(method: VKMusicAudioAPIMethod, params?: Record<string, unknown>): Promise<T> {
		let url = `${this.options.url}/${method}?v=${this.options.version}&access_token=${this.options.token}`

		for (const param in params) {
			if (!param || !params[param]) continue
			url += `&${param}=${params[param]}`
		}

		const request = await fetch(url, {
			headers: {
				'User-Agent': this.options.userAgent,
			},
		})

		const data = (await request.json()) as VKMusicAPIResponse<T>

		if (data.error?.error_code === VKMusicAPIErrorCode.ACCESS_DENIED) {
			throw new VKMusicAPIException(VKMusicAPIErrorMessage.ACCESS_DENIED, data)
		}

		if (data.error?.error_code === VKMusicAPIErrorCode.INVALID_PARAMS) {
			throw new VKMusicAPIException(VKMusicAPIErrorMessage.URL_NOT_SUPPORT, data)
		}

		return data.response
	}
}

export default Fetcher
