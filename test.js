const Memstore = require('./memstore');

async function Test() {

  const mem1 = Memstore();
  const mem2 = Memstore();

  await mem1.put('storeName','I am memory store 1');
  await mem2.put('storeName','I am memsotr store 2');

  await mem1.put('info',{"station":"1","weather":"rain","location":"America"});
  await mem2.put('info',{"station":"2","weather":"fog","location":"Antarctica"});

  let mem1name = await mem1.get('storeName');
  console.log(mem1name);
  mem1name.value = "blah";
  console.log(mem1name);
  let mem1testname = await mem1.get('storeName');
  console.log(mem1testname);

  let mem1info = await mem1.get('info');
  console.log(mem1info);
  mem1info.value.location = "The Moon";
  mem1info.value.modified = true;
  console.log(mem1info);
  let mem1infotest = await mem1.get('info');
  console.log(mem1infotest);

  let mem1list = await mem1.list({"values":true});
  console.log(mem1list);
  let mem2list = await mem2.list({"values":true});
  console.log(mem2list);

  mem1list[0].value.location = "Mars";
  mem1list[0].key = "space";
  console.log(mem1list);
  let mem1listtest = await mem1.list({"values":true});
  console.log(mem1listtest);

  return 'done';

}

Test().then(console.log);
