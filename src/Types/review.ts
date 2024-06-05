// 리뷰 제출 시 보낼 데이터
export interface ReviewCreate {
  revieweeId: number;
  activenessScore: number;
  professionalismScore: number;
  communicationScore: number;
  togetherScore: number;
  recommendScore: number;
}

// 리뷰 목록 조회 시 받는 데이터
export interface Review {
  toUserId: number;
  toActivenessScore: number;
  toProfessionalismScore: number;
  toCommunicationScore: number;
  toTogetherScore: number;
  toRecommendScore: number;

  fromActivenessScore: number;
  fromProfessionalismScore: number;
  fromCommunicationScore: number;
  fromTogetherScore: number;
  fromRecommendScore: number;
}
