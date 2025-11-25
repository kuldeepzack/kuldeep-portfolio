git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit --amend --no-edit
git push --force-with-lease origin main

