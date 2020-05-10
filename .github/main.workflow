workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Pre Build" {
  uses = "actions/npm@e7aaefe"
  args = "run pre-build"
  needs = ["Install"]
}

action "Build" {
  uses = "actions/npm@e7aaefe"
  args = "run build"
  needs = ["Install"]
}

action "Deploy" {
  uses = "nchaulet/github-action-gh-pages@master"
  secrets = [
    "PASSWORD",
  ]
  needs = ["Build"]
  env = {
    PUBLIC_PATH = "dist"
  }
}