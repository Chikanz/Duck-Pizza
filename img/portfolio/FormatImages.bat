import glob, os, subprocess

dirs = ["large","medium","small","lquip"]
scale = [1, 0.6666, 0.4444, 0.1]
basedir = "C:/Users/chika/OneDrive/Documents/Duck-Pizza/img/portfolio"

os.chdir(basedir)
for file in glob.glob("*.jpg"):
	for i in len(dirs):
		check_output("caesiumclt -q 75 -o " + basedir + " , shell=True)