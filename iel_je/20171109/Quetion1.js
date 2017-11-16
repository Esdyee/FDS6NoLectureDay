function collatz(num) {
	var answer = 0;
  answer = num;
  
  for(var i = 0; i < 500; i++){
    console.log(answer);

    if(answer === 1){
      answer = i;
      break;
    } else if (answer % 2 === 1){
      answer = (answer * 3) + 1
    } else{
      answer = (answer / 2);
    }
    
    //500번 돌면 강제 종료
    if(i === 499) {
      answer = -1 ;
      break;
    }
  }
  
	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(9419) );