# BOOK MY HALL

## INSTALLATIONS
### FrontEnd

clone the repository
`git clone https://github.com/s-mohan-prasath/book-my-hall.git`

go to frontend folder and install dependency

`cd frontend`

`npm install`

return back to the root folder
`cd ..`

create .env file in the frontend folder and copy paste the below code

`NEXT_PUBLIC_API_URL = "http://localhost:5000"`


### BackEnd

go to backend folder and install necessary dependencies

`cd backend`

`npm install`

`cd ..`

create .env file in the backend folder and copy paste the below code

`MONGO_URI = "mongodb://localhost:27017/bookmyhall"`
`APP_SECRET = "BookMyHallApplication"`

## BUILD AND RUN

enter backend folder and start the backend server first

`cd backend`

`npm start`

go back to root folder and build the frontend nextjs application

`cd ..`

`npm run build`

after the nextjs application build, start the project by running the following command

`npm run start`

open web browser and enter the website

`http://localhost:3000`
