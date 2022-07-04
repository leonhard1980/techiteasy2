// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

const tvTypes = inventory.map((inventory) => {
  return 'Tv-type = ' + inventory.type;
});

console.log('vraag 1a');
console.log(tvTypes);

const soldOut = inventory.map((soldout) => {
  if (soldout.originalStock === soldout.sold)
    return soldout;
});

console.log('en dan nu vraag 1b');
console.log(soldOut);


const ambilight = inventory.map((ambi) => {
  if (ambi.options.ambiLight === true)
    return ambi;
});

console.log('en dan nu vraag 1c');
console.log(ambilight);

console.log('en dan nu vraag 1d');



inventory.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price <  b.price) {
    return -1;
  }
  return 0;
})

console.log(inventory);


//2a
const totaleVerkoop = inventory.map((soldtvs) => {
  return soldtvs.sold;
});

let aantalverkocht = 0;
for (let i = 0; i < totaleVerkoop.length; i++) {
  aantalverkocht += totaleVerkoop[i];
}

console.log(aantalverkocht);

//2b
const testverkocht = document.getElementById("sold-tvs");
testverkocht.innerHTML = "Het aantal verkochte tv's is: " +  aantalverkocht;
//testverkocht is nu het divje


const totaleInkoop = inventory.map((ingekochtetvs) => {
  return ingekochtetvs.originalStock;
});

let aantalingekocht = 0;
for (let i = 0; i < totaleInkoop.length; i++) {
  aantalingekocht += totaleInkoop[i];
}

console.log(aantalingekocht);
//hierboven vraag 2c


//2D aantalingekocht laten inlopen in de HTML
const testingekocht = document.getElementById("bought-tvs");
testingekocht.innerHTML = "Het aantal ingekochte tv's is: " +  aantalingekocht;
//testverkocht is nu het divje

//2e

let nogteverkopen = aantalingekocht - aantalverkocht;
console.log(nogteverkopen);

const testteverkopentvs = document.getElementById("tobsold");
testteverkopentvs.innerHTML = "Het aantal nog te verkopen tv's is: " +  nogteverkopen;


// 3a

const tvBrands = inventory.map((inventory) => {
  return `<li>Tv brands:  ${inventory.brand}</li>`;
});

let lijstmettvs = document.getElementById("lijstmettvs");
lijstmettvs.innerHTML = tvBrands;

document.getElementById("sold-tvs");
testverkocht.innerHTML = "Het aantal verkochte tv's is: " +  aantalverkocht;
//testverkocht is nu het divje


console.log(tvBrands);

// 3b

function tvobjecten(object){
  let lijstmettvs = document.getElementById("lijstmettvs");
  const tvBrands = object.map((inventory) => {
    return `<li>Tv brands:  ${inventory.brand}</li>`;
  });

  lijstmettvs.innerHTML = tvBrands;
};

tvobjecten(inventory);


//4a
function brandTypeName (inventory) {
  return inventory.brand + " - " + inventory.type + " - " + inventory.name;
};

console.log("test" + brandTypeName(inventory[3]));


//4b

function prijsOpmaak (price) {
  return "€"+price+",-";
};

console.log(prijsOpmaak(inventory[1].price));


//4c
let formaten = "";
function availableSizes(brand) {

  for (let i = 0; i < brand.length; i++) {
    formaten = formaten + brand [i] + ' inch (' + brand[i] * 2.54 + " cm) | ";
  }
  return formaten;

};

console.log(availableSizes(inventory[4].availableSizes));


//4d
function toonPhilips(info){
  return `${info.brand} - ${info.type} 
€${info.price},- 
${info.availableSizes[0]} inch (${info.availableSizes[0] * 2.54} ) |  ${info.availableSizes[1]} inch (${info.availableSizes[1] * 2.54} ) | ${info.availableSizes[2]} inch (${info.availableSizes[2] * 2.54} ) | 
`
};

console.log(toonPhilips(inventory[4]));


//4e


const alleInfo = inventory.map((banaan) => {
  return `<li>
  ${banaan.brand} 
  ${banaan.type}  
  ${banaan.name} 
  ${banaan.price} 
  ${banaan.availableSizes} 
  ${banaan.refreshRate} 
  ${banaan.screenType} 
  ${banaan.screenQuality} 
  smartTv ${banaan.smartTv} 
  </li>`;
});

const testalleinfo = document.getElementById("4e");
testalleinfo.innerHTML = "Alle informatie over tv's: " +  alleInfo;



console.log(alleInfo);