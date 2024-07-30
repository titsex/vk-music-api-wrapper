import type {
	VKMusicAudioArtist,
	VKMusicAudioGetAlbumsByArtistMethodParams,
	VKMusicAudioGetAlbumsByArtistMethodResponse,
	VKMusicAudioGetArtistByIdMethodParams,
	VKMusicAudioGetAudiosByArtistMethodParams,
	VKMusicAudioGetAudiosByArtistMethodResponse,
	VKMusicAudioGetByIdMethodParams,
	VKMusicAudioGetMethodParams,
	VKMusicAudioGetMethodResponse,
	VKMusicAudioGetPlaylistByIdMethodParams,
	VKMusicAudioGetPopularMethodParams,
	VKMusicAudioGetRecommendationsMethodParams,
	VKMusicAudioGetRecommendationsMethodResponse,
	VKMusicAudioPlaylist,
	VKMusicAudioSong,
	VKMusicAudioSearchAlbumsMethodParams,
	VKMusicAudioSearchAlbumsMethodResponse,
	VKMusicAudioSearchArtistsMethodParams,
	VKMusicAudioSearchArtistsMethodResponse,
	VKMusicAudioSearchMethodParams,
	VKMusicAudioSearchMethodResponse,
	VKMusicAudioSearchPlaylistsMethodParams,
	VKMusicAudioSearchPlaylistsMethodResponse,
} from './types'

import { VKMusicAPIErrorMessage, VKMusicAPIException } from './fetcher'
import type Fetcher from './fetcher'

class VKMusicAudioAPI {
	constructor(private readonly fetcher: Fetcher) {}

	public async get(params: VKMusicAudioGetMethodParams): Promise<VKMusicAudioGetMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioGetMethodResponse>('audio.get', queryParams)
	}

	public async getAlbumsByArtist(
		params: VKMusicAudioGetAlbumsByArtistMethodParams
	): Promise<VKMusicAudioGetAlbumsByArtistMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioGetAlbumsByArtistMethodResponse>('audio.getAlbumsByArtist', queryParams)
	}

	public async getArtistById(params: VKMusicAudioGetArtistByIdMethodParams): Promise<VKMusicAudioArtist> {
		const queryParams = {
			...params,
		}

		const response = await this.fetcher.get<VKMusicAudioArtist>('audio.getArtistById', queryParams)

		if (!response.name) {
			throw new VKMusicAPIException(VKMusicAPIErrorMessage.ARTIST_NOT_FOUND)
		}

		return response
	}

	public async getAudiosByArtist(
		params: VKMusicAudioGetAudiosByArtistMethodParams
	): Promise<VKMusicAudioGetAudiosByArtistMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioGetAudiosByArtistMethodResponse>('audio.getAudiosByArtist', queryParams)
	}

	public async getById(audios: VKMusicAudioGetByIdMethodParams[]): Promise<VKMusicAudioSong[]> {
		const queryParams = {
			audios: audios
				.map((audio) => `${audio.owner_id}_${audio.id}${audio.access_key ? `_${audio.access_key}` : ''}`)
				.join(','),
		}

		return this.fetcher.get<VKMusicAudioSong[]>('audio.getById', queryParams)
	}

	public async getPlaylistById(params: VKMusicAudioGetPlaylistByIdMethodParams): Promise<VKMusicAudioPlaylist> {
		const queryParams = {
			...params,
		}

		const response = await this.fetcher.get<VKMusicAudioPlaylist>('audio.getPlaylistById', queryParams)

		if (!response) {
			throw new VKMusicAPIException(VKMusicAPIErrorMessage.PLAYLIST_NOT_FOUND)
		}

		return response
	}

	public async getPopular(params?: VKMusicAudioGetPopularMethodParams): Promise<VKMusicAudioSong[]> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioSong[]>('audio.getPopular', queryParams)
	}

	public async getRecommendations(
		params?: VKMusicAudioGetRecommendationsMethodParams
	): Promise<VKMusicAudioGetRecommendationsMethodResponse> {
		const queryParams: Record<string, unknown> = {
			...params,
		}

		if (params?.target_audio) {
			queryParams.target_audio = `${params.target_audio.owner_id}_${params.target_audio.id}${params.target_audio.access_key ? `_${params.target_audio.access_key}` : ''}`
		}

		return this.fetcher.get<VKMusicAudioGetRecommendationsMethodResponse>('audio.getRecommendations', queryParams)
	}

	public async search(params: VKMusicAudioSearchMethodParams): Promise<VKMusicAudioSearchMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioSearchMethodResponse>('audio.search', queryParams)
	}

	public async searchAlbums(
		params: VKMusicAudioSearchAlbumsMethodParams
	): Promise<VKMusicAudioSearchAlbumsMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioSearchAlbumsMethodResponse>('audio.searchAlbums', queryParams)
	}

	public async searchArtists(
		params: VKMusicAudioSearchArtistsMethodParams
	): Promise<VKMusicAudioSearchArtistsMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioSearchArtistsMethodResponse>('audio.searchArtists', queryParams)
	}

	public async searchPlaylists(
		params: VKMusicAudioSearchPlaylistsMethodParams
	): Promise<VKMusicAudioSearchPlaylistsMethodResponse> {
		const queryParams = {
			...params,
		}

		return this.fetcher.get<VKMusicAudioSearchPlaylistsMethodResponse>('audio.searchPlaylists', queryParams)
	}
}

export default VKMusicAudioAPI
