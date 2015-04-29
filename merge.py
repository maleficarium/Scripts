import os
import glob
import hashlib
import random, string
import time

videoInfo = {'path': "", 'audio_name': "", 'video_name': "", 'final_name': ""}
##Sample videoInfo
#videoInfo = {'final_name': u'C:\\Users\\maleficarium/Desktop\\- -bMftWj-e2T4.mp4', 'path': 'C:\\Users\\maleficarium/Desktop/', 'video_name': 'C:\\Users\\maleficarium/Desktop/937bcebcc1c100815b2c75536ee6724afd07ec61f07c76d6c670ae23.mp4', 'audio_name': 'C:\\Users\\maleficarium/Desktop/4cf3614c8e8619703ed6c6ddfaddd19d31ba4ad4cd600d301123ce28.m4a'}


def randomword(length):
   return ''.join(random.choice(string.lowercase) for i in range(length))


#Hash the file names to drop unicode characters for FFMPEG
def hashRename(filePath, fileN, ext):
	fileHash = hashlib.sha224(fileN.encode('utf-8')).hexdigest()
	hash_name = filePath+fileHash+ext
	os.rename(fileN, hash_name)
	return hash_name


#Merge the video files and rename the output to the stored filename.
def mergeVid(info):
	out_name = info['path']+randomword(20)+".mp4"
	os.system("ffmpeg -i \"" + info['audio_name'] + "\" -i \"" + info['video_name'] + "\" -c copy \"" + out_name + "\"")
	os.rename(out_name, info['final_name'])
	time.sleep(0.5)
	os.remove(info['audio_name'])
	os.remove(info['video_name'])

def videoMerge(path, audio, video, final):
	videoInfo = {'path': path, 'audio_name': audio, 'video_name': video, 'final_name': final}
	videoInfo['audio_name'] = hashRename(videoInfo['path'], audio, ".m4a")
	videoInfo['video_name'] = hashRename(videoInfo['path'], video, ".mp4")
	mergeVid(videoInfo)

def coreMerge():
	#Generate the path to the Desktop
	userhome = os.path.expanduser('~')
	videoInfo['path'] = userhome + '/Desktop/'
	
	#Find all m4a & mp4 files on the desktop
	m4aList = glob.glob(os.path.join(videoInfo['path'], u'*.m4a'))
	mp4List = glob.glob(os.path.join(videoInfo['path'], u'*.mp4'))
	
	#Merged video counter
	vids = 0
	
	for m4aFile in m4aList:
		for mp4File in mp4List:
			if m4aFile[:-9] == mp4File[:-9]:
				print "-------------------------------------------------------------------\n"
				videoInfo['final_name'] = mp4File[:-9]+".mp4"
				videoMerge(videoInfo['path'], m4aFile, mp4File, videoInfo['final_name'])

				vids = vids + 1
	print "FFmpeg merge end. Converted videos: " + str(vids)


if __name__ == '__main__':
	coreMerge()