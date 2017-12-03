import os
import glob
import hashlib
import sys
import random, string
import time

def randomword(length):
   return ''.join(random.choice(string.lowercase) for i in range(length))

os.system('cls') #CLEARS SCREEN, REMOVE WHEN TESTING

#Set the path where the episodes are stored
path = 'M:\\__Torrents'

#Set the output path
outputpath = 'm:\\autoscreenshots\\'

animeid = None
animelink = ''

while animeid == None:
	animecode = ''
	animecode = raw_input('Enter Episode: ')
	animecode = animecode.split()
	regID = ''

	#Transform the input into a regular expression
	for x in animecode:
		regID = regID+'*'+x
	regID = regID+'*[*'

	#Find all matching episodes
	animelink = glob.glob(os.path.join(path, regID))
	for xy in animelink:
		print xy

	if len(animelink) == 1:
		check = raw_input('Enter to confirm, R to retry: ')
		if check == '':
			animeid = regID
	else:
		print "\nPlease be more specific."

#Target clip from the episode to be converted
position = raw_input('Input time MM:SS: ')
duration = raw_input('Input duration S: ')

#Structure the FFMPEG command
ffmpegcommand = "ffmpeg -ss " + position + " -i \"" + animelink[0] + "\" -t "  + duration + " -r 24 " + outputpath + animecode[0] + "_" + randomword(5) + "_%04d.png"
#ffmpegcommand = "ffmpeg -ss " + position + " -i \"" + animelink[0] + "\" -t "  + duration + " -r 24 -vf scale=854:480 " + outputpath + animecode[0] + "_" + randomword(5) + "_%04d.png"
print ffmpegcommand

os.system(ffmpegcommand)
