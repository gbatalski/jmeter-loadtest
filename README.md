# Overview #


## Usage ##

  * Execute `mvn verify`
  * look in `target/jmeter/results/` for the JMeter results file
  * look in `target/` for the Report generated by the JMeter Analysis Maven Plugin

## URL lists ##



## Variables ##

host  default localhost
port default 9292
protocol default http
contextPath default /
user.dir - wd with tweets.txt
powerUserRatio relation benutzer vs power user default 10/1
minimumTweetsPerSession default 3
maximumTweetsPerSession default 10
tweetOrBrowseOperationsCount default 50
tweetsPerPoweruser 10
friendsPerPoweruser 10
powerUserFriendsCount,20
powerUser2UserTweetRatio,10

loops
users anz. threads



Credits
--------------


[1]:    http://jmeter.lazerycode.com                                "JMeter Maven Plugin"
[2]:    http://jakarta.apache.org/jmeter/                           "JMeter"
[3]:    http://home.snafu.de/tilman/xenulink.html                   "Xenu's link sleuth"
[4]:    http://peacockmedia.co.uk/integrity/                        "Integrity"
[5]:    http://www.coremedia.com                                    "CoreMedia AG"
[6]:    https://github.com/afranken/jmeter-analysis-maven-plugin    "Arne Franken (CoreMedia AG)"

