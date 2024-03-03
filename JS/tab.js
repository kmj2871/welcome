/*for(초기값; 조건; 증가량;){}
for(let i=0; i<3; i++) {
    console.log('안녕');
}*/

/* 첫번째 버튼 누르면 orange 클래스 부착(기존에 있던 orange 제거)
, 첫번째 div 박스 보이기(기존 div 박스에 있던 show 제거)

- 모든버튼에 붙은 orange 클래스명 제거
- 버튼0에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div0에 show 클래스명 추가 */

var 버튼 = $('.tab-button');
var 콘텐트 = $('.tab-content');

/*버튼.eq(0).on('click', function() {
    버튼.removeClass('orange');
    버튼.eq(0).addClass('orange');
    콘텐트.removeClass('show');
    콘텐트.eq(0).addClass('show');
});


 버튼1 누르면 
- 모든버튼에 붙은 orange 클래스명 제거
- 버튼1에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div0에 show 클래스명 추가 

버튼.eq(1).on('click', function() {
    버튼.removeClass('orange');
    버튼.eq(1).addClass('orange');
    콘텐트.removeClass('show');
    콘텐트.eq(1).addClass('show');
})*/

/*for(let i=0; i<버튼.length; i++){
    버튼.eq(i).on('click', function() {
    탭열기(i)
});
}*/

$('.list').click(function(e){
//       탭열기(지금 누른버튼에 숨겨져있는 data-id)
    탭열기(e.target.dataset.id)
})

function 탭열기(숫자){
    버튼.removeClass('orange');
    버튼.eq(숫자).addClass('orange');
    콘텐트.removeClass('show');
    콘텐트.eq(숫자).addClass('show');
}