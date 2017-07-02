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

cp -f scripts/index_scroll_kinds.html public/index.html
sed -ie "s/ProductIes/Kinds/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/product/kinds
cp -f scripts/index_unscroll.html public/index.html

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

mkdir -p vr/details/

sed -ie "s/Industry/Details1/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details1



sed -ie "s/Details1/Contact/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/contact_us

cp -f scripts/index_scroll.html public/index.html
sed -ie "s/Contact/Home/g" src/App.js 

