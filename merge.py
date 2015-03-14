import os
import glob
import hashlib
import random, string
import time

def randomword(length):
   return ''.join(random.choice(string.lowercase) for i in range(length))

#Generate the path to the Desktop
userhome = os.path.expanduser('~')
path = userhome + '/Desktop/'

#Find all m4a & mp4 files on the desktop
m4aList = glob.glob(os.path.join(path, u'*.m4a'))
mp4List = glob.glob(os.path.join(path, u'*.mp4'))

#Merged video counter
vids = 0

for m4aFile in m4aList:
	for mp4File in mp4List:
		if m4aFile[:-9] == mp4File[:-9]:
			print "-------------------------------------------------------------------\n"
			#Store the final file name (optimized for Youtube) and generate a temporary random file name
			final_name = mp4File[:-9]
			out_name = path+randomword(20)

			#Hash the file names to drop unicode characters for FFMPEG
			m4aHash = hashlib.sha224(m4aFile.encode('utf-8')).hexdigest()
			audio_name = path+m4aHash+'.m4a'
			os.rename(m4aFile, audio_name)
			
			mp4Hash = hashlib.sha224(mp4File.encode('utf-8')).hexdigest()
			vid_name = path+mp4Hash+'.mp4'
			os.rename(mp4File, vid_name)
			
			#Merge the video files and rename the output to the stored filename.
			os.system("ffmpeg -i \"" + audio_name + "\" -i \"" + vid_name + "\" -c copy \"" + out_name + ".mp4\"")
			os.rename(out_name+'.mp4', final_name+'.mp4')
			time.sleep(0.5)
			os.remove(audio_name)
			os.remove(vid_name)
			vids = vids + 1
print "FFmpeg merge end. Converted videos: " + str(vids)
