grep -rl '\/static\/css\/main' ./build/index.html | xargs -l sed -i 's/\/static\/css\/main/.\/static\/css\/main/g'
grep -rl '\/static\/js\/main' ./build/index.html | xargs -l sed -i 's/\/static\/js\/main/.\/static\/js\/main/g'
grep -rl 'static\/' ./build/static/js/main.*.js | xargs -l sed -i 's/static\//.\/static\//g'
grep -rl '\/static\/' ./build/static/css/main.*.css | xargs -l sed -i 's/\/static\//..\/..\/static\//g'
