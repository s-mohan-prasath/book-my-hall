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

## Admin Page Guidelines

### Admin Login

To access the admin page, follow these steps:

* open mongodb compass
* open bookmyhall database
* inside admin-users collection add a new record by adding the following field

`
  "email": "admin@psgtech.ac.in",
  "password": "$2a$08$qff9.2A0kpVzxe8ofRE5QuXQmXwDqwjgHxcxWxrL7DUEyeskdj1MK"
`

1. Open the admin login page by copying and pasting the following URL in your browser:

http://localhost:3000/adminLogin


2. Enter the following credentials to log in:

- *Email ID*: admin@psgtech.ac.in
- *Password*: admin123

3. After successful login, you will be redirected to the *Admin Dashboard* page.

---

### Dashboard

The *Dashboard* page provides a summary of event data:

- *Total Events*: The count of all events held across all venues.
- *Confirmed Events*: The count of events that have been confirmed.
- *Pending Events*: The count of events that are yet to be confirmed or declined.
- *Declined Events*: The count of events that have been declined.

---

### Bookings

The *Bookings* page displays all bookings made by users:

- Each booking card contains:
- Venue Name
- Description
- Start Time
- End Time
- People Count
- Status (Confirmed/Declined)

- *Actions*:
- Use the *Confirm* or *Decline* buttons to update the booking status. 
- Changes will reflect immediately in the *Dashboard*.

- *Filters*:
- A filter and search bar are available at the top of the page for easy navigation.

---

### Accepted Bookings

The *Accepted Bookings* page shows bookings that have been accepted by the admin. The table will display the following details:

- Venue
- Event
- Start Time
- End Time
- People Count

- *Search*: A search bar is available to filter bookings by venue name.

---

### Users

The *Users* page displays the list of registered users:

- Each user entry includes:
- Name
- Email
- Phone Number

- *Search*: A search bar is available to find specific users.

---

### Venues

The *Venues* page allows you to manage venue information:

#### Add Venue

1. Click the *Add Venue* button at the top of the page to open the venue creation form.
2. Fill in the required details (venue name, description, seating capacity, etc.) and upload images.
3. Submit the form by clicking the *Submit* button.

After submission:

- A success popup will appear: "Venue added successfully".
- The venue card will appear in the venue list, with an option to delete.

#### Delete Venue

- You can delete a venue by clicking the *Delete* button on the venue card.
- Once a venue is added or deleted, changes will be reflected on the *Users* page as well.

---

### Notes

- All changes made on the *Venues* page will automatically reflect in the *Users* page.
- The *Bookings, **Accepted Bookings, and **Users* pages all have search and filter options for easy management.

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
