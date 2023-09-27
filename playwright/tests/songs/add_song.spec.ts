import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { AddSongPage } from '../page_objects/add_song_page';

test('Add new song', async ({ page }) => {
  await page.goto('http://192.168.1.101:8080/');
  var homePage: HomePage = new HomePage(page);
  await homePage.addButton.click();
  var addSongPage: AddSongPage = new AddSongPage(page);
  await addSongPage.fillSong(
    'Song 1',
    'Artist 1',
    'Genre 1',
    'Album 1',
    'https://asfo.dev/wp-content/uploads/2022/09/6ph50kzxkz28u8jw482l-1024x1024.webp',
    'https://www.youtube.com/watch?v=j440-D5JhjI',
    'TAB',
    'lyrics'
  );
  await addSongPage.button.click();
  await expect(homePage.songs.last()).toContainText('Song 1');
});
