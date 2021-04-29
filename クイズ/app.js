const quiz =[
  {
      question: '紀元前、シュメルの都市国家ウルクを治めていた半神半人の王といえば？',
      answers: [
      'イシュタル',
      'ギルガメッシュ',
      'ガッシュベル',
      'エレシュキガル'
      ],
      correct : 'ギルガメッシュ'
   },{ 
      question: '『ニーベルンゲンの歌』に謳われる万夫不当の英雄、聖剣バルムンクを手に邪竜ファヴニールを倒した英雄の名は？',
      answers: [
      'ニーベルンゲン',
      'ジークフリート',
      'ミッキーマウス',
      'クリームヒルト'
      ],
      correct : 'ジークフリート'
   },{
       question: '次のうちセイラム魔女裁判に関係ないのは誰？',
      answers: [
      'ティテュバ',
      'サラ・オズボーン',
      'アビゲイル・ウィリアムズ',
      'セシル・コルベル'
      ],
      correct : 'セシル'
   },{
      question: '中南米に伝わる神霊の一柱で『戦い』と『死』を象徴する、中南米神話で『ナワル』とも呼ばれているのは？',
      answers: [
      'ペンテシレイア',
      'ケツァルコアトル',
      'ナダル',
      'ジャガーマン'
      ],
      correct : 'ジャガーマン'
    },{
      question: '古代イスラエルの第三代王、魔術師としての逸話も多く初めてイスラエル神殿を築いた人物は？',
      answers: [
      'ソロモン',
      'シバの女王',
      'ダビデ',
      'アラム・モジタバイ'
      ],
      correct : 'ソロモン'
    },{
      question: '『御伽草子』『丑御前の御本地』に登場する源氏出身の侍と言えば？',
      answers: [
      '星野源',
      '源頼朝',
      '源頼光',
      '源義経'
      ],
      correct : '源頼光'
    },{
      question: '太陽神ラーの息子でありメリアメンとも呼ばれるファラオの名は？',
      answers: [
      'クレオパトラ',
      'イスカンダル',
      'オジマンディアス',
      'ニトクリス'
      ],
      correct : 'オジマンディアス'
    },{
      question: '中国史上唯一の女帝の名は？',
      answers: [
      '楊貴妃',
      '武則天',
      '奏良玉',
      '虞美人'
      ],
      correct : '武則天'
    },{
      question: 'ギリシャ神話に登場しないのは誰？',
      answers: [
      'パリス',
      'アスクレピオス',
      'ダビデ',
      'アキレウス'
      ],
      correct : 'ダビデ'
    },{
      question: 'フランス革命に関係のない人は誰？',
      answers: [
      'ナポレオン・ボナパルト',
      'シャルロット・コルデー',
      'ジャンヌ・ダルク',
      'マリー・アントワネット'
      ],
      correct : 'ジャンヌ・ダルク'
    }
];
const quizLength= quiz.length;
let quizIndex =0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義 
const setupQuiz = () =>{ 
   document.getElementById('js-question').textContent = quiz[quizIndex].question;
   let buttonIndex = 0;
   while(buttonIndex < buttonLength){
   	 $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   	 buttonIndex++;
   	   }
}
setupQuiz () ;

const clickHandler =(e) =>{
if (quiz[quizIndex].correct === e.target.textContent){
window.alert('正解！');
score++;
}else{
window.alert('不正解！');
}

quizIndex++;

if(quizIndex < quizLength){
  
   setupQuiz();
   }else{
      
       window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
}
};
// ボタンをクリックしたら正誤判定
let handlerIndex =0;
while(handlerIndex < buttonLength){
 $button[handlerIndex].addEventListener('click',(e)  =>  {
clickHandler(e);
});
 handlerIndex++;
}