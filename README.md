# Scripts
An assortment of small scripts of various uses.

<strong>AniChart_Filter.js</strong>

A bookmarklet for http://www.anichart.net. Enter the anime IDs listed in anilist.co (e.g. http://anilist.co/anime/20812/Shirobako) in the list. Clicking it will hide all non-listed anime from the page.

Changing <a href="https://github.com/maleficarium/Scripts/blob/master/AniChart_Filter.js#L72">
  "if (deltrig != 0)"</a>
  to
  "if (deltrig == 0)"
  will result in all anime listed being hidden instead.

<strong>archive.moe_image_expand.user.js</strong>

A Greasemonkey script for https://archive.moe. Adds a button that expands all images in the current page. The original source images are loaded but the width is limited to the window size for visibility.

Currenty under development to place the button at a better location.

<strong>merge.py</strong>

A Python 2.7 script that scans the desktop folder for video & audio files produced by https://github.com/rg3/youtube-dl and uses FFMPEG to merge them when the automated merge fails. Handles unicode filenames (such as filenames with Japanese text) that youtube-dl fails to merge.

<strong>screencap.py</strong>

A Python 2.7 script that uses FFMPEG to extract png screencaps from anime episodes. Set the <a href="https://github.com/maleficarium/Scripts/blob/master/screencap.py#L14">path</a> and <a href="https://github.com/maleficarium/Scripts/blob/master/screencap.py#L16">outputpath</a> variables to where the episodes are located and where you want the screencaps to be saved respectively. Search for the episode with a word from the filename + episode number (e.g. Tsukai 5 for Seiken Tsukai no World Break - 05 [1080p].mkv).
