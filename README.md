# DevTinder UI

- create a vite+react application
- Remove unnecessary code and create a Hello World app
- Install Tailwind
- Install Daisy UI
- Add Navbar component to App.jsx
- Create a Navbar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route =/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a Footer

- Create a Login Page
- Install axios
- CORS -install cors in backend => add middleware too with configurations: origin, credentials: true
- Whenever you're making an API call, so pass in axios functions => {withCredentials: true}
- install @redux/toolkit + react-redux
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor the code to add constants file + create a components folder

- User should not allowed to access other routes without login.
- If token is not prsent, redirect user to login page
- Logout Feature
- Edit Profile and User card on Feed
- show toast message on save of profile

- New Page - See all the connections for logedin user
- New Page - See all the requests for the loggedin user
- Feature - Accept/Reject Connection Request
- Send the ignore/interested request from feed cards
- Signup Page
- E2E testing

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-16-171-224-61.eu-north-1.compute.amazonaws.com
- Install Node version similar that in our development environment
- Git clone in the instance machine
- Frontend
   - npm install -> dependencies install
   - npm run build
   - sudo apt update
   - sudo apt install nginx
   - sudo systemctl start nginx
   - sudo systemctl enable nginx
   - Copy code from dist(build files) to /var/www/html/
   - sudo scp -r dist/* /var/www/html/
   - Enable port :80 of your instance
- Backend
   - allow ec2 instance public IP on mongodb server
   - npm install pm2 -g
   - pm2 start npm --name "devTinder-backend" -- start
   - pm2 logs
   - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
   - config nginx - /etc/nginx/sites-available/default
   - restart nginx - sudo systemctl restart nginx
   - Modify the BASEURL in frontend project to "/api"


# nginx config

server_name 16.171.224.61;

    location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

