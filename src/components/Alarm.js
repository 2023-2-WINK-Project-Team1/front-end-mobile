let userName;
let goodsName;
let titleText;
let resultText;
let imagePath;

function StringAlarmRender(type) {
  switch (type) {
    case 'Request':
      titleText = '대여 신청';
      resultText = `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 하였습니다.`;
      imagePath = 'public/images/bell.png';
      break;

    case 'RequestApprove':
      titleText = '대여 신청 처리';
      resultText = `${userName} 님이 ${userName} 님의 물품 대여 신청을 처리하였습니다.`;
      imagePath = 'public/images/bell.png';
      break;

    case 'InfoFix':
      titleText = '대여 물품 정보 변경';
      resultText = `${userName} 님이 ${goodsName} 물품 관련 정보를 수정하였습니다.`;
      imagePath = 'public/images/edit.png';
      break;

    case 'RequestDenial':
      titleText = '대여 신청 취소';
      resultText = `${userName} 님이 물품 대여 신청을 취소하였습니다.`;
      imagePath = 'public/images/bell.png';
      break;
  }
}
