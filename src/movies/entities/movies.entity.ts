// 주고받을 데이터의 모델 작성
// 실제 db를 사용하게 되면 db모델을 작성해야 함

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
