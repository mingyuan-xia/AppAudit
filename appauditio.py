import requests, pprint, time, sys

if len(sys.argv) < 2:
	print 'Usage: python appauditio.py APK_FILE'
	sys.exit(1)

api_server='http://api.appaudit.io:5902/api/'
# stage 1: upload the file to the server
files={'file':open(sys.argv[1], 'rb')}
r = requests.post(api_server + 'upload/', files=files)
if r.status_code != 200:
	print('upload failed, try again')
	sys.exit(1)
# 'upload' endpoint returns the partial sha1 of the file
# stage 2: check the scan results
psha1 = r.content
while True:
	report=requests.get(api_server + 'report/find/'+psha1).json()
	if 'scanned' in report['status_msg']: break
	time.sleep(1)
# the result is in json and self explainable
pprint.pprint(report)

