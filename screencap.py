import os
import glob
import hashlib
import sys
import random, string
import time

def randomword(length):
   return ''.join(random.choice(string.lowercase) for i in range(length))

os.system('cls') #CLEARS SCREEN, REMOVE WHEN TESTING
#animeid = '*amagi*9*[*'

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
	check = raw_input('Return: Confirm, r:Retry: ')
	if check == '' and len(animelink) == 1:
		animeid = sid
	else:
		print "Please be more specific."

position = raw_input('Time MM:SS: ')
duration = raw_input('Duration S: ')

#position = '00:12:05'
#duration = '5'
print uid[0]
test = uid[0] + '%'
print test
a = "ffmpeg -ss "
b = " -i \""
c = "\" -t " 
d = " -r 24 e:\\autoscreenshots\\" 
e = "04d"
f = randomword(5)
g = ".png"
ffmpegcommand = a + position + b + animelink[0] + c + duration + d + test + e + f + g
print ffmpegcommand
print ''
ffmpegcommand2 = "ffmpeg -ss " + position + " -i \"" + animelink[0] + "\" -t " + duration + " -r 24 \"e:\\autoscreenshots\\" + test + "03d.png\""
print ffmpegcommand2
#sys.exit("Process loop starts here.")
os.system(ffmpegcommand)