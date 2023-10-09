import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { addSong } from './song_helper';
import { SongViewPage } from '../page_objects/song_view_page';
import { EditSongPage } from '../page_objects/edit_song_page';

test('Edit new song', async ({ page, request }) => {
  await page.goto('http://192.168.1.102:8080/');
  //Precondition
  await addSong(
    page,
    'Song 2',
    'Artist 2',
    'Genre 2',
    'Album 2',
    'https://asfo.dev/wp-content/uploads/2022/09/6ph50kzxkz28u8jw482l-1024x1024.webp',
    'https://www.youtube.com/watch?v=j440-D5JhjI',
    'TAB',
    'lyrics'
  );
  var homePage: HomePage = new HomePage(page);
  await homePage.songs.last().locator('a.btn').click();

  var songViewPage: SongViewPage = new SongViewPage(page);
  await songViewPage.editButton.click();

  var editSongPage: EditSongPage = new EditSongPage(page);
  await editSongPage.editSong(
    'Song A',
    'Artist A',
    'Genre A',
    'Album A',
    'https://asfo.dev/wp-content/uploads/2022/09/6ph50kzxkz28u8jw482l-1024x1024.webp',
    'https://www.youtube.com/watch?v=j440-D5JhjI',
    'TAB',
    'lyrics'
  );
  await editSongPage.saveButton.click();
  await expect(songViewPage.title).toContainText('Song A');
  await request.get('http://192.168.1.102:8081/reset');
});
