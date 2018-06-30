import glob, os, subprocess, sys, math

dirs = ["large","medium","small","lquip"]
scale = [1, 0.6666, 0.4444, 0.1]
quality = [85, 85, 80, 60]
size = [900, 650]
basedir = sys.path[0];
#caesiumdir = basedir + "\\" + "caesiumclt"


os.chdir(basedir)
for file in glob.glob("*.jpg"):
	print(file)
	for i in range(len(dirs)):
		w = math.ceil(size[0] * scale[i])
		h = math.ceil(size[1] * scale[i])
		arg = "convert " + file + " -quality " + str(quality[i]) +" -resize " + str(w) + "x" + str(h) + " " + basedir + "/" + dirs[i] + "/" + file
		print(arg)
		os.system(arg)
		
