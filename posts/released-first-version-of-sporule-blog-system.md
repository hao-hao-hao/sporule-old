---
title: "Release the first version of Sporule Blogging System"
author: "Sporule"
date: "2019-10-05"
categories: "code"
tags: "npm,javascript,es6,markdown,sporule,blog"
coverimage: "https://i.imgur.com/CRKGEJk.png"
---


## Background

This is the pure front end system I mentioned in my previous posts, although it is not perfect yet, but I still want to release it out because the core functionality is ready.

## Features

- Easy to use, create your blog in less than 10 minutes.
- Pure front end + Markdown, no server side code.
- Multi-platform support - github pages, netlify and any other cloud platform.
- Progressive Web App Support Ready, it can be added to iPhone or Android as an app. All posts can be cahced.
- Theme system which means you can switch to the themes you like through github submodules.
- Seperating the site and the content as it renders the markdown on the fly.
- Rich meta data through Front Matter.

## Quick Start - Set up

### Fork This Repo to your GitHub Account

![Fork](https://i.imgur.com/VSqrEHf.png)

### Update the Configuration Files

#### General Configuration File

_config.js is the configuration file for your site.

![Config](https://i.imgur.com/9Rl3J3B.png)

**Available Configs:**

| Name              | Value                                                                                               | Example                           | Type    |
| ----------------- | --------------------------------------------------------------------------------------------------- | --------------------------------- | ------- |
| Site              | The name of the site                                                                                | "Sporule"                         | string  |
| url               | The link to your site                                                                               | "https://www.sporule.com"         | string  |
| description       | short description about your site                                                                   | "Sporule is a micro blog system"  | string  |
| keywords          | keywords for SEO purpose                                                                            | "blog,post"                       | string  |
| logo              | The logo                                                                                            | "https://i.imgur.com/MrRLOC4.png" | string  |
| disqusShortname   | Disqus is a comment system, you will get a shortname after having an account with them              | NA                                | string  |
| postPerPage       | How many posts do you want to show per page?                                                        | 8                                 | int     |
| googleAnaltics    | Google Analytics Tag if you are using Google analytics                                              | UA-11402457-1                     | string  |
| alwaysRefreshPost | The system will always get the latest content of the post rather than using the cache if it is true | false                             | boolean |
| gh_custom_domain  | Put this to true if you are using github pages with custom domain                                   | false                             | boolean |

#### Theme Configurations

These configuration will be used for that specific theme only, they are located under templates/_templateConfig.js. Look at the theme documentation to understand what is available.

![TemplateConfig](https://i.imgur.com/mVoIG2w.png)

## Quick Start - Your Content

Put all your markdown files under the post folder, you will need to put the meta data in the front matter, see an example below.

![Example Markdown](https://i.imgur.com/Jqodi7S.png)

## Quick Start - Deployment Set up Option 1 - Github Page

### What is Github Page

This [link](https://pages.github.com/) gives you all you need to know about github page.

### Sign Up for GitHub Action

The link is: [GitHub Action](https://github.com/features/actions)

![GitHub Action](https://i.imgur.com/KRIawwK.png)

### Enable Github Action in your Forked Repo

![GitHub Action](https://i.imgur.com/CO0ISQk.png)

Click Actions and look at the terms before click agreement.

### Set up the deployment key for GitHub Action

- Generate RSA public and private key pairs by using your usual software, otherwise you can generate it online. I randomly searched one in google, [click here](https://8gwifi.org/sshfunctions.jsp)
- It should be RSA key and the size is 2048.

![RSA Key Generator](https://i.imgur.com/EbjIUXZ.png)

- Go to your repo settings, add a new deploy key by coping the public key we generated.

![Deploy Key](https://i.imgur.com/gVKjFti.png)

- Go to secrets, add a new secret by coping the private key we generated. The name of the secret must be  **ACTIONS_DEPLOY_KEY** as this is what we have in our github action.

![Secret](https://i.imgur.com/KmxsoWD.png)

### Update the CNAME file if you are using custom domain in Github Pages

The CNAME file is under gh-pages/, add your custom domain to the CNAME file. Leave CNAME as empty if you are using the default github pages domain.

![Example CNAME](https://i.imgur.com/I6iJPst.png)

### End of Github Pages Deployment Set Up

You blog will get updated automatically everytime you make any changes in your git repo.

## Demo

[Sporule](https://www.sporule.com)

[EatSomeMore](https://www.eatsomemore.com)

## To Do List

- [ ] Add Documentation about deploying to Netlify and other platforms
- [ ] Add Documentation on how to use custom pages
- [ ] Add Unit Testing to the core part of the system
- [ ] Find a way to pull all the paths of markdown files from Github
- [ ] Support other comment system rather than disqus
- [ ] Improve the SEO settings
- [ ] Optimise the template system