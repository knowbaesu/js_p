function run() {
    console.log("3초후 실행");
  }
  console.log("시작");
  setTimeout(run(), 3000);
  console.log("끝");


  function run() {
    console.log("3초후 실행");
  }
  console.log("시작");
  setTimeout(run, 3000);
  console.log("끝");



function run () {
    console.log(run, 3000);
}
 console.log('시작');
 setTimeout(run, 3000);
 console.log('끝')