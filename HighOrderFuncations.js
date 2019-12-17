const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //simple for loop--Comment a block by Ctrl+C+k

//   for (let i = 0; i < companies.length; i++) {
//       console.log(companies[i]);
      
//   }

  //foreach looks better than for loop
 // companies.forEach(function(company){
  //    console.log(company.name);
  //})
//****************************************************************** */
  //Normal
  //let canDrink  =[];
  //for (let i = 0; i < ages.length; i++) {
  //    if (ages[i]>21) {
  //      canDrink.push(ages[i]);
   ///   }
  //}
  //console.log(canDrink);
  //filter
 // const canDrink = ages.filter(function(age){
 //   if (age>=21) {
 //       return true;
 //   }
  //});
  //console.log(canDrink);

//  const lastTenYears =  companies.filter(function(company){
 //   if(company.end -  company.start >10)
 //   {
 //       return true;
 //   }
 // });
 // console.log(lastTenYears);
  //*********************************************************** */
  //Map

  //const agesSuare = ages.map(function(age){
  //  return age*2;
  //});
  //console.log(agesSuare);

  //map is powerful first it will does the suare root and then double the ages

  const ageMap=ages.map(age => Math.sqrt(age))
                  .map(age => age * 2);
          console.log(ageMap);

  //*********************************************************** */
  //sort
  const sortedComapnies = companies.sort(function(c1,c2){
    if (c1.start>c2.start) {
      return 1;
    }else{
      return -1;
    }
  });
  console.log(sortedComapnies);
  //*********************************************** */
 // reduce
 const ageSum =  ages.reduce(function(total , age){
   return total+age;
 },0);
 console.log(ageSum);
