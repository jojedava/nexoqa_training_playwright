import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { SongPage } from '../page_objects/song_page';
import { addSong } from './song_helper';

test('Add new song', async ({ page }) => {
  await page.goto('http://192.168.1.45:8080/');
  await addSong(
    page,
    'Song 1',
    'Artist 1',
    'Genre 1',
    'Album 1',
    'https://asfo.dev/wp-content/uploads/2022/09/6ph50kzxkz28u8jw482l-1024x1024.webp',
    'https://www.youtube.com/watch?v=j440-D5JhjI',
    'TAB',
    'lyrics'
  );
  var homePage: HomePage = new HomePage(page);
  await expect(homePage.songs.last().locator('song-title')).toContainText(
    'Song 1'
  );
});
