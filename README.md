AppAudit
========

AppAudit is an efficient program analysis tool that detects data leaks in mobile applications. It can accurately find all leaks within seconds and ~200 MB memory. We have an Android port that shows AppAudit is efficient enough to run as an Android app on off-the-shelf smartphones.

* If you are interested in the tool itself and is looking for the building blocks of AppAudit, please visit [PATDroid](https://github.com/mingyuan-xia/PATDroid). We have open-sourced common Android program analysis code there.
* If you want to use AppAudit to scan apps, visit http://appaudit.io
* If you are looking for the paper or the bibtex. Please click [here](http://www.ieee-security.org/TC/SP2015/papers-archived/6949a899.pdf)
```
@inproceedings{appaudit,
 author = {Mingyuan Xia and Lu Gong and Yuanhao Lyu and Zhengwei Qi and Xue Liu},
 title = {Effective Real-time Android Application Auditing},
 booktitle = {Proceedings of the 2015 IEEE Symposium on Security and Privacy},
 series = {SP '15},
 year = {2015},
 publisher = {IEEE Computer Society},
}
```
* If you are looking for SDK, check out this python snippet
```python
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
```
You can find this script in the repo as well. Note that currently we set no rate limit for upload requests. However our server has a limited bandwidth, please [email me](mailto:mingyuan.xia@mail.mcgill.ca) if you want to scan large datasets.
* If you are interested in the current and future development, send me an Email :=)

