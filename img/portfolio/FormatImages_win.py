import glob, os, subprocess, sys

dirs = ["large","medium","small","lquip"]
scale = [1, 0.6666, 0.4444, 0.1]
#basedir = "C:/Users/chika/OneDrive/Documents/Duck-Pizza/img/portfolio"
basedir = sys.path[0];
caesiumdir = basedir + "\\" + "caesiumclt"


os.chdir(basedir)
for file in glob.glob("*.jpg"):
	print(file)
	for i in range(len(dirs)):
		arg = caesiumdir + "\\" + "caesiumclt -q 85 -s " + str(scale[i]) + " -o " + basedir + "\\" + dirs[i] + " " + basedir + "\\" +  file
		print(arg)
		os.system(arg)