import { Page, Locator } from '@playwright/test';
export class EditSongPage {
  readonly page: Page;
  readonly title: Locator;
  readonly artist: Locator;
  readonly genre: Locator;
  readonly album: Locator;
  readonly albumImgUrl: Locator;
  readonly youtubeUrl: Locator;
  readonly tab: Locator;
  readonly lyrics: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByLabel('Title');
    this.artist = this.page.getByLabel('Artist');
    this.genre = this.page.getByLabel('Genre');
    this.album = this.page.getByLabel('Album', { exact: true });
    this.albumImgUrl = this.page.getByLabel('Album Image Url', { exact: true });
    this.youtubeUrl = this.page.getByLabel('YouTube ID');
    this.tab = this.page.getByLabel('Tab');
    this.lyrics = this.page.getByLabel('Lyrics');
    this.saveButton = this.page.locator('button.btn');
  }

  async editSong(
    title: string,
    artist: string,
    genre: string,
    album: string,
    albumImgUrl: string,
    youtubeUrl: string,
    tab: string,
    lyrics: string
  ) {
    await this.title.fill(title);
    await this.artist.fill(artist);
    await this.genre.fill(genre);
    await this.album.fill(album);
    await this.albumImgUrl.fill(albumImgUrl);
    await this.youtubeUrl.fill(youtubeUrl);
    await this.tab.fill(tab);
    await this.lyrics.fill(lyrics);
  }
}
