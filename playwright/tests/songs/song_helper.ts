import { Page } from '@playwright/test';
import { SongPage } from '../page_objects/song_page';
import { HomePage } from '../page_objects/home_page';

export async function addSong(
  page: Page,
  title: string,
  artist: string,
  genre: string,
  album: string,
  albumImgUrl: string,
  youtubeUrl: string,
  tab: string,
  lyrics: string
) {
  var homePage: HomePage = new HomePage(page);
  await homePage.addButton.click();
  var addSongPage: SongPage = new SongPage(page);
  await addSongPage.fillSong(
    title,
    artist,
    genre,
    album,
    albumImgUrl,
    youtubeUrl,
    tab,
    lyrics
  );
  await addSongPage.button.click();
}
