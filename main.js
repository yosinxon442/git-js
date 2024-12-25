// function top1(matn) {
//     let sozlar = matn.split(" ");
//     let hisob = {};
  
//     for (let soz of sozlar) {
//       if (hisob[soz]) {
//         hisob[soz]++;
//       } else {
//         hisob[soz] = 1;
//       }
//     }
  
//     let natija = [];
//     for (let soz in hisob) {
//       if (hisob[soz] === 1) {
//         natija.push(soz);
//       }
//     }
//     return natija;
//   }
  
//   let matnA = "JavaScript ni o'rganing JavaScript yaxshi";
//   console.log(top1(matnA));
  

  




//   function top2(sonlar) {
//     function tubmi(son) {
//       if (son < 2) return false;
//       for (let i = 2; i < son; i++) {
//         if (son % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     let natija = [];
//     for (let son of sonlar) {
//       if (tubmi(son)) {
//         natija.push(son);
//       }
//     }
//     return natija;
//   }
  
//   let sonlarB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(top2(sonlarB));
  








// function top3(sonlar) {
//     for (let i = 0; i < sonlar.length - 2; i++) {
//       if (sonlar[i] % 2 === sonlar[i + 1] % 2 && sonlar[i] % 2 === sonlar[i + 2] % 2) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   let sonlarC = [2, 4, 6, 8, 1, 3, 5, 7, 9];
//   console.log(top3(sonlarC));
  









// function top4(matn) {
//     let raqamlar = [];
//     for (let belgi of matn) {
//       if (!isNaN(belgi) && belgi !== " ") {
//         raqamlar.push(parseInt(belgi));
//       }
//     }
//     return raqamlar.sort((a, b) => a - b);
//   }
  
//   let matnD = "Bu 2024 yilda yozilgan misollar!";
//   console.log(top4(matnD));

  







// function top5(matn) {
//     let natija = "";
//     for (let belgi of matn) {
//       if (isNaN(parseInt(belgi))) {
//         natija += belgi;
//       }
//     }
//     return natija;
//   }
  
//   let matnD = "Bu 2024 yilda yozilgan misollar!";
//   console.log(top5(matnD));
  









//   function top6(mahsulotlar, id) {
//     let natija = [];
//     for (let mahsulot of mahsulotlar) {
//       if (mahsulot.id !== id) {
//         natija.push(mahsulot);
//       }
//     }
//     return natija;
//   }
  
//   let mahsulotlarE = [
//     { id: 1, nomi: "Mahsulot 1" },
//     { id: 4, nomi: "Mahsulot 4" },
//     { id: 3, nomi: "Mahsulot 3" },
//     { id: 4, nomi: "Boshqa Mahsulot 4" }
//   ];
  
//   console.log(top6(mahsulotlarE, 4));
  