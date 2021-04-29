(()=>{

 const $doc = document;
 const $tab = $doc.getElementById("js-tab");
 const $nav = $tab.querySelectorAll("[data-nav]");
 const $content = $tab.querySelectorAll("[data-content]");

//初期化(クリックしなくても最初に表示されるようにしたい)
 const init = () => {
   $content[0].style.display = "block";
 };
 init();

    //クリックしたら起こるイベント
    const handleClick = (e) => {
    e.preventDefault();

   //クリックされたnavとそのdataを取得
     const $this = e.target;
     const targetVal = $this.dataset.nav;

   //対象外のnav,contentsを一旦リセットする
   let index = 0;
   while(index < $nav.length){
     $content[index].style.display ="none";
     $nav[index].classList.remove("is-active");
     index++;
   }

   //対象のコンテンツをアクティブ化する
     $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
     $nav[targetVal].classList.add("is-active");

 };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while(index < $nav.length){
    $nav[index].addEventListener("click",(e) => handleClick(e));
    index++;
};







})();
