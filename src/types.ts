export enum VKMusicAPIBool {
	FALSE = 0,
	TRUE = 1,
}

export type VKMusicAudioAPIMethod =
	| 'audio.get'
	| 'audio.getAlbumsByArtist'
	| 'audio.getArtistById'
	| 'audio.getAudiosByArtist'
	| 'audio.getById'
	| 'audio.getPlaylistById'
	| 'audio.getPopular'
	| 'audio.getRecommendations'
	| 'audio.search'
	| 'audio.searchAlbums'
	| 'audio.searchArtists'
	| 'audio.searchPlaylists'

export interface VKMusicAudioGetMethodParams {
	owner_id: string
	/**
	 * The ID of the playlist or album.
	 * @warning We strongly recommend duplicating the value in the playlist_id parameter, because sometimes VK processes it.
	 */
	album_id?: string
	/**
	 * The ID of the playlist or album.
	 * @warning We strongly recommend duplicating the value in the album_id parameter, because sometimes VK processes it.
	 */
	playlist_id?: string
	id?: string
	access_key?: string
	count?: number
	offset?: number
}

export interface VKMusicAudioGetMethodResponse {
	items: VKMusicAudioSong[]
	count: number
}

export interface VKMusicAudioGetByIdMethodParams {
	owner_id: string
	id: string
	access_key?: string
}

export interface VKMusicAudioGetAlbumsByArtistMethodResponse {
	items: VKMusicAudioAlbum[]
	count: number
}

export interface VKMusicAudioGetAlbumsByArtistMethodParams {
	artist_id: string
	count?: number
	offset?: number
}

export interface VKMusicAudioGetArtistByIdMethodParams {
	artist_id: string
	extended?: VKMusicAPIBool
}

export interface VKMusicAudioGetAudiosByArtistMethodResponse {
	items: VKMusicAudioSong[]
	count: number
}

export interface VKMusicAudioGetAudiosByArtistMethodParams {
	artist_id: string
	count?: number
	offset?: number
}

export interface VKMusicAudioGetPlaylistByIdMethodParams {
	owner_id: string
	playlist_id: string
	access_key?: string
}

export interface VKMusicAudioGetPopularMethodParams {
	count?: number
	offset?: number
}

export interface VKMusicAudioGetRecommendationsMethodResponse {
	items: VKMusicAudioSong[]
	count: number
}

export interface VKMusicAudioGetRecommendationsMethodParams {
	user_id?: number
	target_audio?: VKMusicAudioGetByIdMethodParams
	/**
	 * @warning If the parameter value is less than 10, the VK Music API will not return anything.
	 */
	count?: number
	offset?: number
}

export interface VKMusicAudioGetMethodResponse {
	items: VKMusicAudioSong[]
	count: number
}

export interface VKMusicAudioGetByIdMethodParams {
	owner_id: string
	id: string
	access_key?: string
}

export interface VKMusicAudioGetAlbumsByArtistMethodResponse {
	items: VKMusicAudioAlbum[]
	count: number
}

export interface VKMusicAudioGetAlbumsByArtistMethodParams {
	artist_id: string
	count?: number
	offset?: number
}

export interface VKMusicAudioGetArtistByIdMethodParams {
	artist_id: string
	extended?: VKMusicAPIBool
}

export interface VKMusicAudioGetAudiosByArtistMethodResponse {
	items: VKMusicAudioSong[]
	count: number
}

export interface VKMusicAudioGetAudiosByArtistMethodParams {
	artist_id: string
	count?: number
	offset?: number
}

export interface VKMusicAudioGetPlaylistByIdMethodParams {
	owner_id: string
	playlist_id: string
	access_key?: string
}

export interface VKMusicAudioGetPopularMethodParams {
	count?: number
	offset?: number
}

export interface VKMusicAudioSearchMethodResponse {
	items: VKMusicAudioSong[]
	count: number
}

export interface VKMusicAudioSearchMethodParams {
	q: string
	offset?: number
	count?: number
	auto_complete?: VKMusicAPIBool
	performer_only?: VKMusicAPIBool
}

export interface VKMusicAudioSearchAlbumsMethodResponse {
	items: VKMusicAudioAlbum[]
	count: number
}

export interface VKMusicAudioSearchAlbumsMethodParams
	extends Omit<VKMusicAudioSearchMethodParams, 'auto_complete' | 'performer_only'> {}

export interface VKMusicAudioSearchArtistsMethodResponse {
	items: VKMusicAudioArtist[]
	count: number
}

export interface VKMusicAudioSearchArtistsMethodParams extends VKMusicAudioSearchAlbumsMethodParams {}

export interface VKMusicAudioSearchPlaylistsMethodResponse {
	items: VKMusicAudioAlbum[]
	count: number
}

export interface VKMusicAudioSearchPlaylistsMethodParams extends VKMusicAudioSearchArtistsMethodParams {
	filters?: 'all' | 'owned' | 'followed' | 'albums'
}

export interface VKMusicAudioSong {
	artist: string
	id: number
	owner_id: number
	title: string
	duration: number
	access_key: string
	ads: VKMusicAudioSongAds
	is_explicit: boolean
	is_focus_track: boolean
	is_licensed: boolean
	track_code: string
	url: string
	date: number
	has_lyrics: boolean
	main_artists: VKMusicAudioArtist[]
	short_videos_allowed: boolean
	stories_allowed: boolean
	stories_cover_allowed: boolean
	release_audio_id: string
}

export interface VKMusicAudioSongAds {
	content_id: string
	duration: string
	account_age_type: string
	puid1: string
	puid22: string
}

export interface VKMusicAudioPlaylist {
	id: number
	owner_id: number
	type: number
	title: string
	description: string
	count: number
	followers: number
	plays: number
	create_time: number
	update_time: number
	genres: VKMusicAudioGenre[]
	is_following: boolean
	photo: VKMusicAudioPlaylistPhoto
	permissions: VKMusicAudioPlaylistPermissions
	subtitle_badge: boolean
	play_button: boolean
	access_key: string
	album_type: string
	exclusive: boolean
	main_color: string
}

export interface VKMusicAudioPlaylistPermissions {
	play: boolean
	share: boolean
	edit: boolean
	follow: boolean
	delete: boolean
	boom_download: boolean
	save_as_copy: boolean
}

export interface VKMusicAudioPlaylistPhoto {
	width: number
	height: number
	photo_34: string
	photo_68: string
	photo_135: string
	photo_270: string
	photo_300: string
	photo_600: string
	photo_1200: string
}

export interface VKMusicAudioAlbum extends VKMusicAudioPlaylist {
	year: number
	subtitle: string
	is_explicit: boolean
	main_artists: VKMusicAudioArtist[]
}

export interface VKMusicAudioArtist {
	name: string
	domain: string
	id: string
	is_followed?: boolean
	is_album_cover?: boolean
	can_follow?: boolean
	photo: VKMusicAudioArtistPhoto[]
}

export interface VKMusicAudioArtistPhoto {
	url: string
	width: number
	height: number
}

export interface VKMusicAudioGenre {
	id: number
	name: string
}
