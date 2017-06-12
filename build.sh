rm -rf vr/*
cp -f scripts/index_scroll.html public/index.html
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
cp -rf build/* vr/
cp -f scripts/index_unscroll.html public/index.html

sed -ie "s/Home/Login/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/login

sed -ie "s/Login/Product/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/product

sed -ie "s/Product/ProductIes/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/product/ies

sed -ie "s/ProductIes/Kinds/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/product/kinds

sed -ie "s/Kinds/Solution/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/total_solution

sed -ie "s/Solution/Content/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/content_details

sed -ie "s/Content/News/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/news

sed -ie "s/News/Industry/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/industry

sed -ie "s/Industry/Details/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details

sed -ie "s/Details/Contact/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/contact_us

cp -f scripts/index_scroll.html public/index.html
sed -ie "s/Contact/Home/g" src/App.js 

