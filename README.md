# BOOK MY HALL

## INSTALLATIONS
### FrontEnd

clone the repository
	`git clone https://github.com/s-mohan-prasath/book-my-hall.git`

go to frontend folder and install dependency

	cd frontend
---
	 npm install

return back to the root folder

	cd ..

create .env file in the frontend folder and copy paste the below code

	NEXT_PUBLIC_API_URL = "http://localhost:5000"


### BackEnd

go to backend folder and install necessary dependencies

	cd backend

------------

	npm install
---
	cd ..

create .env file in the backend folder and copy paste the below code

	MONGO_URI = "mongodb://localhost:27017/bookmyhall"
	APP_SECRET = "BookMyHallApplication"

## BUILD AND RUN

enter backend folder and start the backend server first

	cd backend
	npm start

go back to root folder and build the frontend nextjs application

	cd ..
---
	npm run build

after the nextjs application build, start the project by running the following command

	npm run start

open web browser and enter the website

	http://localhost:3000

## APPLICATION USAGE GUIDELINES
Venue Booking Application
### Features

- *User Registration and Login*
  - Users can create a new account or log in to their existing account.
- *Venue Listing*
  - A list of available venues is displayed on the VenueList page.
- *Filtering Options*
  - Users can filter venues by:
    - Venue Name
    - Venue Address
    - Capacity
- *Venue Selection*
  - Users can select a venue to view its details on the venueDetails page.
- *Profile View*
  - Users can click on "Your Profile" to view the bookings they have made.
- *Logout*
  - Users can click on the *Log Out* button to log out of their account when they are done.

### Venue Details Page

The venueDetails page provides the following features:
- *Detailed Information*
  - Comprehensive details about the selected venue, including location, amenities, and policies.
- *Images*
  - A gallery showcasing images of the venue.
- *Venue Calendar*
  - A calendar view displaying the availability of the venue.
- *Booking Form*
  - A form for users to fill out and submit a booking request.
  - Includes a "Request for Booking" button to finalize the booking request.

### Navigation Steps

1. *Homepage*
   - Go to the Homepage.
   - Click *Sign Up* to create a new user account, or click *Login* to log in to an existing account.

2. *Venue List Page*
   - After logging in, a list of venues will appear on the VenueList page.
   - Use the filter options to narrow down the venues based on name, address, or capacity.

3. *Venue Details Page*
   - Click on a venue from the list to navigate to its venueDetails page.
   - The venueDetails page displays detailed information about the selected venue, including images, calendar availability, and a booking form.
   - Proceed with the booking process as desired.

4. *Profile Page*
   - Navigate to "Your Profile" to view a summary of all bookings made by the user.

5. *Logout*
   - Click on the *Log Out* button to log out of your account.

### BACKEND ARCHITECTURE

#### API DOCUMENTATION
[postman api documentation url](https://documenter.getpostman.com/view/23019000/2sAYBUDCjN "postman api documentation url")
#### FOLDER STRUCTURE
##### API
	All the api for the venue booking application
#####  CONFIG
	Authentication configurations for passport module and image upload configurations for multer module
##### MODELS
MONGODB Mongoose Models

1. admin-user
2. advance-booking
3. booking
4. image
5. user
6. venue

##### UPLOADS
images uploaded by the users will be present in this folder
##### VALIDATE
server side validation using `joi` module present  in this folder
