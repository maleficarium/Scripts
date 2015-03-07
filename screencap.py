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
	uid = ''
	uid = raw_input('Enter Episode: ')
	uid = uid.split()
	sid = ''
	for x in uid:
		sid = sid+'*'+x
	sid = sid+'*[*'
	animelink = glob.glob(os.path.join(path, sid))
	print animelink
	check = raw_input('Return: Confirm, r: Retry: ')
	if check == '' and len(animelink) == 1:
		animeid = sid
	else:
		print "Please be more specific."

position = raw_input('Time MM:SS: ')
duration = raw_input('Duration S: ')

animeid = uid[0] + '_'

ffmpegcommand = "ffmpeg -ss " + position + " -i \"" + animelink[0] + "\" -t "  + duration + " -r 24 e:\\autoscreenshots\\" + animeid + randomword(5) + "_%04d.png"
print ffmpegcommand

os.system(ffmpegcommand)