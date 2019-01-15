## vue-starter-template

## Usage

```bash
git submodule add https://github.com/Pong420/vue-starter-template.git

# Replace src with template
rm -rf ./src
mv -f ./vue-starter-template/template/* ./
rm -rf .git
rm -rf .gitmodules
rm -rf ./vue-starter-template

# Reinitialize git
git init
git add .
git commit -m 'init'
```
