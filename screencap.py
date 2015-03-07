import os
import glob
import hashlib
import sys
import random, string
import time

def randomword(length):
   return ''.join(random.choice(string.lowercase) for i in range(length))

os.system('cls') #CLEARS SCREEN, REMOVE WHEN TESTING

path = 'M:\!!!Torrents'
animeid = None
animelink = ''
while animeid == None:
	animecode = ''
	animecode = raw_input('Enter Episode: ')
	animecode = animecode.split()
	regID = ''
	for x in animecode:
		regID = regID+'*'+x
	regID = regID+'*[*'
	animelink = glob.glob(os.path.join(path, regID))
	print animelink
	check = raw_input('Return: Confirm, r: Retry: ')
	if check == '' and len(animelink) == 1:
		animeid = regID
	elif check != 'r':
		print "Please be more specific."

position = raw_input('Time MM:SS: ')
duration = raw_input('Duration S: ')

ffmpegcommand = "ffmpeg -ss " + position + " -i \"" + animelink[0] + "\" -t "  + duration + " -r 24 e:\\autoscreenshots\\" + animecode[0] + "_" + randomword(5) + "_%04d.png"
print ffmpegcommand

os.system(ffmpegcommand)