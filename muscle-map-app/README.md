# Muscle Map

Log your sets, watch a front/back muscle diagram fill in, and get a progressive-overload plan for your next upper or lower body day. Runs fully offline; your log is stored on your phone.

## Put it on your Android phone (recommended, about 10 minutes, free)

You host the files on GitHub Pages and install the app from Chrome. Chrome turns it into a real installed app with its own icon that opens full screen and works offline.

1. **Make a GitHub account** at github.com if you don't have one.
2. **Create a repository.** Tap **+** > **New repository**. Name it `muscle-map`, choose **Public**, and tap **Create repository**.
3. **Upload the files.** On the new repository page, tap **uploading an existing file**. Select every file in this folder (you can multi-select on a phone or drag them in on a computer), then tap **Commit changes**.
4. **Turn on GitHub Pages.** Go to **Settings** > **Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then branch **main**, folder **/ (root)**, and tap **Save**. After a minute or two the page shows your address, e.g. `https://YOUR-NAME.github.io/muscle-map/`.
5. **Install on your phone.** Open that address in **Chrome** on the phone. Tap the **⋮** menu > **Add to Home screen** > **Install** (some phones say **Install app**). Muscle Map now sits in your app drawer.

### Updating later
Upload the changed files to the same repository (replace the old ones). The installed app picks up the new version the next time it's opened with a connection; close and reopen it once more to see it.

## Optional: build an APK file instead

GitHub can build a real `.apk` for you for free.

1. In your repository tap **Add file** > **Create new file**. Name it exactly `.github/workflows/android.yml` and paste in everything from `android-workflow.yml` (in this folder). Tap **Commit changes**.
2. (Recommended) Add your signing key so future updates install over the old app instead of needing an uninstall: **Settings** > **Secrets and variables** > **Actions** > **New repository secret**. Name: `KEYSTORE_BASE64`. Value: the long line from `signing-key.txt`, which you got separately. Never upload that file itself.
3. Open the **Actions** tab, pick **Build Android app**, and tap **Run workflow**. It takes about 5 minutes.
4. On your phone open `https://github.com/YOUR-NAME/muscle-map/releases`, tap **MuscleMap.apk**, then open the download. Android will ask you to allow installs from Chrome (**Settings** > **Allow from this source**). Tap **Install**. If Play Protect warns about an unknown app, choose **Install anyway**. That warning appears for any app that isn't from the Play Store.

The APK and the Chrome-installed app keep separate logs. Pick one, or move your data with **Export backup** / **Import backup**.

## Your data

- Everything stays on the phone (no account, no server).
- **Your data** at the bottom of the app has **Export backup** (copy a backup code) and **Import backup** (paste one). Use it to move entries from the Claude version of Muscle Map, to keep a copy somewhere safe, or before uninstalling or clearing Chrome's site data.

## Building with Android Studio (for developers)

```
npm install
npm run android:prepare      # copies the web files into www/, creates android/, icons and splash
npx cap open android         # opens Android Studio; press Run with your phone plugged in
```

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (layout, styles, exercise catalog, progression logic) |
| `manifest.webmanifest`, `sw.js` | Make it installable and offline-capable |
| `icon-*.png`, `maskable-512.png` | App icons |
| `*.woff2` | Fonts, bundled so nothing loads from the internet |
| `android-*.png` | Icon and splash images for the APK build |
| `package.json`, `package-lock.json`, `capacitor.config.json`, `prepare.mjs` | APK build setup (Capacitor) |
| `android-workflow.yml` | GitHub Actions recipe that builds the APK (copy it to `.github/workflows/android.yml` to turn it on) |

The exercise catalog is modelled on MuscleWiki's directory. The progression rules and their sources are listed in the app under **How recommendations work**. They are general guidance, not medical advice.
