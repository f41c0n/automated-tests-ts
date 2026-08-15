### Requirements
Installed:
* Maven
* JDK (Java 8+; tested on Java 26 with JMeter 5.6.2 via jmeter-maven-plugin 3.8.0)
### Installing
Navigate to performance/ directory
```
cd performance
```
### Tests
Run example tests (downloads JMeter on first run)
```
mvn clean verify
```
### Report
An HTML dashboard report is generated automatically by the `verify` run — no
separate step is needed. Open it at:
```
target/jmeter/reports/httpbin/index.html
```
Raw results (JTL/CSV) are written to `target/jmeter/results/`.
