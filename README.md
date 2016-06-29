[![Jenkins](images/jenkins.png)](../jenkins)
##  Jenkins

The JPS package deploys Jenkins that initially contains 1 application server.

### Highlights
This package is designed to deploy Jenkins environment is an open-source continuous integration server with 300+ plugins to support all kinds of software development.<br />
As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.<br />
Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Mac OS X and other Unix-like operating systems.<br />
Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.<br />
Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.<br />
Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.

### Environment Topology

![Cyclos 4 Topology](https://docs.google.com/drawings/d/19cHh0JvMruTm4N8t6aAmB5ZqlaV-qLpto4iMvCv1-vo/pub?w=276&h=216)

### Specifics

Layer                |     Server    | Number of CTs <br/> by default | Cloudlets per CT <br/> (reserved/dynamic) | Options
-------------------- | --------------| :----------------------------: | :---------------------------------------: | :-----:
AS                   | Tomcat Java |       1                        |           1 / 16                          | -

* AS - Application server 
* CT - Container

**Jenkins Version**: 1.656<br/>
**Tomcat Version**: 7.0.67<br/>
**Java Engine**: Java 7

### Deployment

In order to get this solution instantly deployed, click the "Get It Hosted Now" button, specify your email address within the widget, choose one of the [Jelastic Public Cloud providers](https://jelastic.cloud) and press Install.

[![GET IT HOSTED](https://raw.githubusercontent.com/jelastic-jps/jpswiki/master/images/getithosted.png)](https://jelastic.com/install-application/?manifest=https%3A%2F%2Fgithub.com%2Fjelastic-jps%2Fjenkins%2Fraw%2Fmaster%2Fmanifest.jps)

To deploy this package to Jelastic Private Cloud, import [this JPS manifest](../../raw/master/manifest.jps) within your dashboard ([detailed instruction](https://docs.jelastic.com/environment-export-import#import)).

More information about Jelastic JPS package and about installation widget for your website can be found in the [Jelastic JPS Application Package](https://github.com/jelastic-jps/jpswiki/wiki/Jelastic-JPS-Application-Package) reference.