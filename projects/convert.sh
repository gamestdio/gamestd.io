ffmpeg -i $1.mov -c:v libtheora -q:v 4 $1.ogg
ffmpeg -i $1.mov -c:v libx264 -crf 19 -strict experimental $1.mp4
