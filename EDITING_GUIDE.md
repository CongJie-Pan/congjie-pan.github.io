# Editing and Publishing Guide

This guide explains how to make changes to the website, upload them to GitHub, and publish the updated content.

## Editing Content

The main files you'll need to edit are:

### 1. `_config.yml`

This configuration file controls the global settings of your site:

- **Site title and description**: Change the `title` and `description` values
- **Author information**: Update the `author` section with your details
- **Navigation links**: Modify the site's navigation menu
- **Theme settings**: Adjust colors, fonts, and other visual elements

To edit this file:
```bash
# Open the file in your preferred text editor
# For example, using Visual Studio Code:
code _config.yml
```

### 2. `index.md`

This is your homepage content. Edit this file to change what appears on the main page:

```bash
# Open the file in your preferred text editor
code index.md
```

## Uploading Changes to GitHub

After making your edits, follow these steps to upload your changes:

1. Check which files have been modified:
   ```bash
   git status
   ```

2. Add the modified files to the staging area:
   ```bash
   git add _config.yml index.md
   # Or to add all modified files:
   git add .
   ```

3. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Update site configuration and homepage content"
   ```

4. Push your changes to GitHub:
   ```bash
   git push origin master
   # If you're working on a different branch, use:
   git push origin your-branch-name
   ```

## Publishing Your Changes

After uploading to GitHub, you need to deploy your changes to make them live:

1. Open Git Bash terminal
2. Navigate to your project's root directory
3. Run the deployment script:
   ```bash
   bin/deploy --user
   ```

This script builds the site and publishes it to the appropriate branch for GitHub Pages.

## Complete Workflow Example

Here's a complete example of the editing and publishing workflow:

```bash
# 1. Edit the files
code _config.yml
code index.md

# 2. Check your changes
git status

# 3. Add and commit your changes
git add _config.yml index.md
git commit -m "Update website content"

# 4. Push to GitHub
git push origin master

# 5. Deploy the changes
bin/deploy --user
```

That's it! Your changes should now be published and visible on your website.

## Troubleshooting

- If the `bin/deploy` script fails, check that it has execute permissions:
  ```bash
  chmod +x bin/deploy
  ```

- If you encounter GitHub authentication issues, make sure your credentials are properly set up:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ``` 