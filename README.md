# HTMLearn


## Installation

If you already have Meteor and [Meteorite](https://github.com/oortcloud/meteorite/), HTMLearn is ready to go. Just clone it locally, run it with `mrt`, and start coding!

If not, here are the full instructions:

```
curl https://install.meteor.com | /bin/sh
npm install -g meteorite
git clone https://github.com/SachaG/Void.git myApp
cd myApp
mrt
```


## File Structure

- **client**
	- **helpers**
		- handlebars.js
		- router.js
	- **views**
		- **common**
			- footer.html
			- header.html
			- layout.html
			- loading.html
			- notFound.html
		- **pages**
			- homepage.html
		- **users**
			- login.html
			- login.js
			- signup.html
			- signup.js
			- forgot.html
			- forgot.js
	- main.html
	- main.js
- **lib**
	- helpers.js
	- permissions.js
- **packages**
	- Lots of packages. 
- **public**
	-Any images we may need
- **server**
	- fixtures.js
	- publications.js


Built by TJ TSA
