[Link to live GitHub page](https://cpm24usu.github.io/UN-Website/C3%20Project/html/index.html)

# Features
### Pages

- Home page
	- Named index.html
- Team information page
	- Team members
	- Short bios of each member
	- Role(s) in the project
	- Responsibilities
	- Contributions
- Registration Page
	- Needs minimum **4** fields:
		- First name
		- Surname
		- Email address
		- Comments
	- Other options (not required):
		- Password
		- Date of birth
	- Could make separate pages for signup and login
- Up to 3 pages about UN Sustainable Development Goals 

### Other Features
- (Collapsible) navigation menu
- Dynamic display/scaling


# Requirements
## Minimum Frontend Requirements
##### HTML

- Must all be validated
- Can contain tags, but no content should be hard-coded in the html files
- No compiled HTML
- No deprecated tags


##### CSS

- Must be in an external file
	- Penalised if embedded/inline
- Must all be validated
- No compiled CSS/SASS
- Appropriate colour scheme
- Make use of class & id attributes


##### JavaScript

- Must be in an external file
	- Penalised if embedded
- At least 1 fetch function must be used
	- e.g. to load the web content and/or submit the form data
- Must not use JQuery
- Must not use any frontend frameworks



## Minimum Backend Requirements
##### Minimum Server Requirements:
- Must use NodeJS
- Can be run on the local machine and accessed via localhost
- Use Express Framework
- HTTP methods should only be used in ways compatible with the definition
- Should serve static files

##### Form Handling
- Must receive data from the client with no errors
- Data received should be stored on the local machine in JSON format
- Some sort of acknowledgement should be sent to the client and rendered on the webpage to confirm successful registration
	- e.g., pop-up message once data is received and validated; email sent to the user using the address used in registration
