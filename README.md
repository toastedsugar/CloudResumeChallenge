## Cloud Resume Challenge

The purpose is to create a quick production web application integrating my current skills with Web Development with Microsoft Azure services to demonstrate my skill with both.

https://cloudresumechallenge.dev/docs/the-challenge/azure/

### Certifications

I currently possess the AZ-900 Cloud Practioner certification and am currently studying for the AZ-104 Cloud Associate. Not bad.

### HTML

The original challenge calls to use raw HTML to build the frontent; however I chose to use React.js as I am more prefer to work with it over the classic MVC structure. Since I am using the Vite toolchain to build the application, it should build into a static SPA so there should be no real functional differences between the two.

### CSS

For this project, I decided to use raw CSS and flexbox for styles. I normally use a CSS framework like Tailwind, but my CSS is rusty so I might as well get some practice in.

Since I work for Microsoft and I am getting MS certifications, I decided to go wtih a nice Microsoft Theme for this project. Thankfully the internet has a bunch of free resources to create a retro Windows theme.

Window 95 color palette
https://colorswall.com/palette/264460

Windows 95 font
https://fontsarena.com/w95fa-by-alina-sava/

### Static Website

This application will be hosed online as an Azure Storage Static Website. Microsoft provides documentation about how to do this.

https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel
https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website

Set up github actions to build by vite application and push the finished build to Azure storage, where it will be hosted.







