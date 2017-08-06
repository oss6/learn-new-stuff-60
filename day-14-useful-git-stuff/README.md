# Day 14: Useful git stuff

Some useful git techniques to recover from 'oh snap' moments:

## Committed but need to change something

```
# make your change
git add . # or add individual files
git commit --amend
# follow prompts to change or keep the commit message
# now your last commit contains that change!
```

## Accidentally committed to the wrong branch

```
# undo the last commit, but leave the changes available
git reset HEAD~ --soft
git stash
# move to the correct branch
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here"
# now your changes are on the correct branch
```

## Accidentally committed something to master that should have been on a brand new branch

```
# create a new branch from the current state of master
git branch some-new-branch-name
# remove the commit from the master branch
git reset HEAD~ --hard
git checkout some-new-branch-name
# your commit lives in this branch now :)
```

From: <a href="http://ohshitgit.com/#accidental-commit-master">http://ohshitgit.com/#accidental-commit-master</a>
