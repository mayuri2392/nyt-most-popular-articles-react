

NYTimes reactJS app A simple reactJS app to hit the NY Times Most Popular Articles API and show a list of articles, that shows details when items on the list are tapped (a typical master/detail app).

<br/>
Developed: <br/>
    1. Model–view–controller (MVC) architectural pattern  <br/>
    2. Server call using FETCH <br/>
    3. Unit test and code coverage <br/>
<br/>
Steps to execute the program: <br/>
    1. Clone repository: git clone https://github.com/mayuri2392/nyt-most-popular-articles-react.git <br/>
    2. cd nyt-most-popular-articles-react <br/>
    3. npm install <br/>
    4. npm install dotenv <br/>
    5. create a .env file in root folder and paste this REACT_APP_API_KEY=u9G3DVXjf1Qtn6ks8S7W9FN9eJuxFX2s <br/>
    6. npm start <br/>
       (if error, then run SKIP_PREFLIGHT_CHECK=true npm start) <br/>	
<br/>       
Steps to run unit test and code coverage: <br/>
    1. npm test <br/>  (if error, then run SKIP_PREFLIGHT_CHECK=true npm test) <br/>	
    2. npm run test:coverage <br/>
    3. npm run test:update <br/>
