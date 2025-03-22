// daja.js
import gulab from '../assets/gulabcake.png';
import pink from '../assets/pinkcake.jpg';
import c from '../assets/c.jpg'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
import cz from '../assets/chocolate cake.jpg'
import cy from '../assets/rasmalai cake.jpg'

import cd from '../assets/hazelnut cake.jpg'
import mas from '../assets/mangs.jpg'
import cr from '../assets/cr.jpg'
import cha from '../assets/cha.jpg'

let data_product = [
    {
        id: 1,
        name: "Gulab Jamun cake",
        image: gulab,
        new_price: 550,
        old_price: 630,
        description:'A delight to have, our Fresh Cream Gulab Jamun Cake is made by layering a vanilla sponge with fresh dairy cream and our homemade Gulab Jamun, and finished with slivered almonds. This tropical treat is moist and light, rounding off all the flavours perfectly! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, gulab jamun, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
    },
    {
        id: 2,
        name: "Pink Delight",
        image: pink,
        new_price: 530,
        old_price: 670,
        description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
    },
    {
        id: 3,
        name: "Chocolate Creamy Delight",
        image: cha,
        new_price: 550,
        old_price: 690,
        description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
    },
    {
        id: 4,
        name: "Chocolate Cake",
        image: c,
        new_price: 500,
        old_price: 600,
        description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
    },
    {
        id: 5,
        name: "Choco Bliss Cake",
        image: c1,
        new_price: 550,
        old_price: 670,
        description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
    },
    {
        id: 6,
        name: "Pinky Delight",
        image: c2,
        new_price: 450,
        old_price: 520,
        description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
   },
   {
    id: 7,
    name: "Midnight Mocha Cake",
    image: c3,
    new_price: 515,
    old_price: 590,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
        details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
        ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream',
        reviews: '★★★★ (4/5)',
},
{
    id: 8,
    name: "Heavenly Choco Indulgence",
    image: c5,
    new_price: 500,
    old_price: 630,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
},
{
    id: 9,
    name: "Chocolate Velvet Symphony",
    image: c4,
    new_price: 490,
    old_price: 550,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
},
{
    id: 10,
    name: "Choco Temptation Torte",
    image: cz,
    new_price: 1200,
    old_price: 1450,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
},
{
    id: 11,
    name: "Rasmalai Cake",
    image: cy,
    new_price: 550,
    old_price: 630,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Rasmalai, Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
    
},


{
    id: 13,
    name: "Hazelnut Choco cake",
    image: cd,
    new_price: 500,
    old_price: 630,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Hazeltnut, Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
},
{
    id: 14,
    name: "Spongy Breakfast Cake",
    image: cr,
    new_price: 250,
    old_price: 320,
    description:'A delight to have, our Cake is made by layering a vanilla sponge. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
},
{
    id: 15,
    name: "Mango Cake",
    image: mas,
    new_price: 500,
    old_price: 630,
    description:'A delight to have, our Cake is made by layering a vanilla sponge with fresh dairy cream and a lot of chocolate and mango. This tropical treat is moist and light, rounding off all the flavours perfectly ! <br/> <br/>  Consumption & Storage Guidelines<br/> <br/>• Tastes best on the day of purchase <br/> • Keep refrigerated  <br/> <br/>  • No Preservatives <br/>  • No artificial sweetener',
    details: 'Quantity: 1/2 kg, Origin: Home Made, Shelf Life: 1 Month',
    ingredients: 'Mango, Vanilla essence, almonds, sugar, flour, dairy cream, chocolate',
    reviews: '★★★★ (4/5)',
},

];

export default data_product;
