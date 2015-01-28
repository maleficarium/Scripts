import os
import glob
import hashlib
import sys
import random, string
import time

def randomword(length):
   return ''.join(random.choice(string.lowercase) for i in range(length))

#os.system('cls') #CLEARS SCREEN, REMOVE WHEN TESTING

path = u'C:\\Users\\maleficarium\\Desktop\\'
m4aList = glob.glob(os.path.join(path, u'*.m4a'))
mp4List = glob.glob(os.path.join(path, u'*.mp4'))

#print "-------------------------------------------------------------------\n"
#print m4aList
#print(u"Unicode List", m4aList[0])
#print m4aList[0].encode('utf-8')[:-9]
#print "-------------------------------------------------------------------\n"
#sys.exit("Process loop starts here.")

for l in range (0, len(m4aList)):
	for n in range (0, len(mp4List)):
		if m4aList[l][:-10] == mp4List[n][:-10]:
			print "-------------------------------------------------------------------\n"
			final_name = mp4List[n][:-9]
			out_name = path+randomword(20)

			m4aHash = hashlib.sha224(m4aList[l].encode('utf-8')).hexdigest()
			audio_name = path+m4aHash+'.m4a'
			os.rename(m4aList[l], audio_name)
			
			mp4Hash = hashlib.sha224(mp4List[n].encode('utf-8')).hexdigest()
			vid_name = path+mp4Hash+'.mp4'
			os.rename(mp4List[n], vid_name)
			
			os.system("ffmpeg -i \"" + audio_name + "\" -i \"" + vid_name + "\" -c copy \"" + out_name + ".mp4\"")
			os.rename(out_name+'.mp4', final_name+'.mp4')
			time.sleep(0.5)
			os.remove(audio_name)
			os.remove(vid_name)
print "FFmpeg merge end."