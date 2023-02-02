CSIS3380 Final Project Guidance:
- Due to MacOS Monterey or a later version, port 5000 is not available anymore. The server is using port 5001 for this project
- setup database:
	- Please set up the database name to “gameReviewAppDB”
	- There are 2 ways to insert the data; Inside the project folder
		- 1. Go to database_json_files —> admins.js, games.js and reviews.js have all data for the database
		  You can insert them to the database manually
		- 2.  Run the 3 javascript files inside database_setup
								- node addAdminAccount.js
								- node addGameData.js
								- node addReview.js

- After setup the database, in the main folder terminal, run “npm run dev”

// User side
- Once frontend and backend are running, the website will show you the home page
	- There are 5 pages for the user to go: Home, Playstation Top 10 games, Playstation 2023 Upcoming games, Nintendo Top 10 games, Nintendo 2023 Upcoming games

		- Home: Introduction of this website and the Introduction of Playstation and Nintendo Switch games
		- PS Top 10: This page will show the user my personal Playstation Top 10 games
		- PS 2023 Upcoming: This page will show the user my personal recommended Playstation 2023 Upcoming games
		- NS Top 10: This page will show the user my personal Nintendo Top 10 games
		- NS 2023 Upcoming: This page will show the user my personal recommended Nintendo 2023 Upcoming games

- After selecting one of the game page
	- it will show the all game basic information (fetching from RAWG Gaming API)
	- the user can click learn more to see more game details

- Game details contains
	- Game cover image using the link store in the database
	- Basic game info + description fetching from RAWG API
	- YouTube trailer video using the link store in the database
	- In-game screenshot fetching from RAWG API

- Each game details page bottom will have a player's reviews section containing
	- all player's review for this game (fetch from the database)
	- a form for the user to leave a review (the review will be save to datbase after submit)

// Admin side
- Once frontend and backend are running, you are able to go to admin page by typing
	"http://localhost:3000/admin"

- This website does not have strong security. So please enter
	- username: "admin"
	- password: "admin"
	to log in.

	* Although the security is not strong, each page after admin is still protected, you cannot bypass the login page.
		for example: if you type "http://localhost:3000/admin/dashboard" directly without login. You will get an error page.

- After proper login, you will see a dashboard for all games information in tables, group by their category

- In the dashboard page, you can do 2 things; Edit game info and manage reviews

	- Edit game info: Due to some of the game info relies on API, game name and game api code name are not allowed to change
		But the game cover image link and YouTube Video link are allowed to update.

	- Manage Reviews button will bring you to manage review page

- Manage review page have 3 features: creating review, editing review and deleting review
 	* deleting review will have a confirmation message before the action. Admin are allow to cancel the action.
