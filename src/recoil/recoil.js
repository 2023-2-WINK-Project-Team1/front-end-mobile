// yarn add recoil로 recoil 설치 후 사용 가능
import { atom } from 'recoil';

export const selectedButtonState = atom({
  key: 'selectedButtonState',
  default: null,
});
