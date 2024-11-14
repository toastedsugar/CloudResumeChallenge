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

This application was intended to be hosted as an Azure Storage Static Website. Microsoft provides documentation about how to do this. 

However, I found that I was unable to access storage accounts, virtual machines, serverless functions and many  other services with my Azure subscription. Every time I try to access a service, I get redirected to a welcome screen. I could troubleshoot this, but switching over to AWS was far more convenient.

1. Created S3 bucket and configured it for public access and configured CORS for local development. Found a couple articles and youtube videos showing the granular bits that go into configuring S3 in this manner:

https://aws.plainenglish.io/deploying-a-web-app-on-aws-s3-using-github-actions-d7031160acac
https://www.alexhyett.com/github-actions-deploy-to-s3/
https://www.youtube.com/watch?v=4zrupVYqQFs&ab_channel=WebDevCody

2. The above resources also went into detail about how to create AWS IAM users that 


I then set up github actions to build the vite application and push the finished build to Azure storage, where it will be hosted. This was a very involved and complicated process, but the following video was a great resource on learning why things are configured the way they are. 

https://www.youtube.com/watch?v=tajK4ezyuNc&ab_channel=MohamadLawand

### HTTPS

Enabled HTTPS by using Amazon cloudfront as a CDN

Pretty good resource to learn how to set up a cloudfront distribution and connect it to S3:
https://www.youtube.com/watch?v=kbI7kRWAU-w&ab_channel=SamMeech-Ward

### DNS

Since I already had a spare domain with GoDaddy, I was tempted to just set up my cloudfront endpoint with with it. In the end however, I decided to transfer it over to Amazon Route53 since the point of this challenge is to use as many AWS services in one project as possible.

Amazon provides resources to get started
https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started-cloudfront-overview.html#getting-started-cloudfront-request-certificate

In order to get Cloudfront to hook up with my domain, I also needed to create a certificate. For a while I was unable to figure out how it worked until I realized that Cloudfront requires it's certificate to be located in the Northern Virginia region, wheras I was working mostly in Northern California.



