# Synetec Basic Angular MVC assessement

This is Synetec's basic Angular developer assessment.

If you are reading this, you most probably have been asked to complete this assessment as part of Synetec's interview process.

In this repository, you will find an angular project that is the base for the assessment. 

Below you will find instructions on how to setup, complete and submit your assessment. 

Once you have finished, please return your updated solution by the specified means and within the agreed timeframe (if any). Please be sure to include all necessary files/resources required to build/run your solution.

Please explain the work that you did or any challenges that you faced, either by comments in code or in an email. In case the requirements are not met or they are not finished please explain the reasoning behind that.

Good luck!

## How to submit your completed test

To submit your test, please 
1. Fork this repository
2. Complete the test as per the instructions below 
3. Commit your changes to your (forked) repo 
4. Send us an http link to your repo that contains the completed test 

**This repo is Read-Only!!** So please don't try to open a pull request

## Set up the environment

Once forked and cloned, set-up the solution as follows:

1. Open the solution with your favourite IDE (we have used and tested using VS Code)
2. Run npm install to make sure you have all the dependencies set up
3. Run `ng serve -o` and make sure the app is running.

The Angular application depends on a separate .net Core API, you will need this running on your development environment to complete assesment's tasks. To provision the API, please:

1. Clone (or fork and clone) the repo https://github.com/Synetec/synetec-interview-test-net-core-api locally
2. Build the solution
3. Run the Synetec.CityInfo.Api project to host the API

## Tasks to be completed

Please complete as many as possible of the tasks listed below

1. The html for the cities list is static. Link it to the list of cities from the component
2. The cities list is empty though the table is still displayed, find a way to display a message to the user when there is no city to display
3. The backend engineers have developed an API that provides you with a list of cities, implement the method in the service that will get all the cities and fetch the result in the cities list of the component
4. The delete button doesn't do anything, implement that feature

