//✤=================================================    GitFlow Notes - Acquisition Team  =================================================✤//

//# 1 ... Gitflow workflow uses two branches to record the history of the project.
//• a) The "main" branch stores the official release history. (master)
//• b) The "develop" branch serves as an integration branch for features. (develop)

//# 2... In order to create and push a develop branch to the server Please follow this commands.
//✱ COMMAND ===> "git branch develop"
//✱ COMMAND ===> "git push -u origin develop"

//✤========================================================================================================================================✤//

//# 3... What Rules should we follow when adding new feature to our project?
//• a) feature branches use develop as their parent branch.
//• b) When a feature is complete, it gets merged back into develop.
//• c) Features should never interact directly with main. (master branch)

//# 4... Creating a feature branch.
//✱ COMMAND ===> "git checkout develop"
//✱ COMMAND ===> "git checkout -b feature_branch"

//# 5... Finishing a feature branch.
//✱ COMMAND ===> "git checkout develop"
//✱ COMMAND ===> "git merge feature_branch"

//✤========================================================================================================================================✤//

//# 6... Release branches.
//• Once develop has acquired enough features for a release (or a predetermined release date is approaching), you fork a release branch off of develop.
//• No new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch.

//✱ COMMAND ===> "git checkout develop"
//✱ COMMAND ===> "git checkout -b release/0.1.0"

//• Once it's ready to ship, the release branch gets merged into main and tagged with a version number.

//✱ COMMAND ===> "git checkout main"
//✱ COMMAND ===> "git merge release/0.1.0"

//• In addition, it should be merged back into develop, which may have progressed since the release was initiated.

//✱ COMMAND ===> "git checkout develop"
//✱ COMMAND ===> "git merge release/0.1.0"
//✤========================================================================================================================================✤//

//# 7... Hotfix branches.
//• Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.
//• This is the only branch that should fork directly off of main.

//✱ COMMAND ===> "git checkout main"
//✱ COMMAND ===> "git checkout -b hotfix_branch"

//• As soon as the fix is complete, it should be merged into both main and develop (or the current release branch).

//✱ COMMAND ===> "git checkout main"
//✱ COMMAND ===> "git merge hotfix_branch"
//✱ COMMAND ===> "git checkout develop"
//✱ COMMAND ===> "git merge hotfix_branch"
//✱ COMMAND ===> "git branch -D hotfix_branch"

//✤========================================================================================================================================✤//
