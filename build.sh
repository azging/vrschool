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

sed -ie "s/Details1/Details2/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details2

sed -ie "s/Details2/Details3/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details3

sed -ie "s/Details3/Details4/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details4

sed -ie "s/Details4/Details5/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details5

sed -ie "s/Details5/Details6/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details6

sed -ie "s/Details6/Details7/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details7

sed -ie "s/Details7/Details8/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details8

sed -ie "s/Details8/Details9/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details9

sed -ie "s/Details9/Details10/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details10

sed -ie "s/Details10/Details11/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details11

sed -ie "s/Details11/Details12/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details12

sed -ie "s/Details12/Details13/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details13

sed -ie "s/Details13/Details14/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details14

sed -ie "s/Details14/Details15/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details15

sed -ie "s/Details15/Details116/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/details/details16

sed -ie "s/Details16/Contact/g" src/App.js 
yarn build
sed -ie "s/\/static\/css\/main/.\/static\/css\/main/g" build/index.html 
sed -ie "s/\/static\/js\/main/.\/static\/js\/main/g" build/index.html 
mv -f build vr/contact_us

cp -f scripts/index_scroll.html public/index.html
sed -ie "s/Contact/Home/g" src/App.js 

git add .
git ci -m "上传build"
git push origin develop
