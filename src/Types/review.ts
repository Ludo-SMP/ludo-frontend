// 리뷰 제출 시 보낼 데이터
export interface ReviewCreate {
  revieweeId: number;
  activenessScore: number;
  professionalismScore: number;
  communicationScore: number;
  togetherScore: number;
  recommendScore: number;
}

/** 스터디원 사이(reviewer - reviewee)의 리뷰 결과 interface */
export interface Review {
  reviewerId: number;
  revieweeId: number;
  activenessScore: number;
  professionalismScore: number;
  communicationScore: number;
  togetherScore: number;
  recommendScore: number;
}

/* 스터디원 상호간의 리뷰 결과 */
export interface PeerToPeerReviewType {
  /** 내가 한 리뷰 */
  selfReview: Review | null;
  /** 상대방이 나한테 한 리뷰 */
  peerReview: Review | null;
}

/** 스터디 정보 & 작성한 or 스터디원이 남긴 리뷰 */
export interface StudyReviewsType {
  /** 스터디 id */
  id: number;
  /** 스터디 제목 */
  title: string;
  /** 스터디원 상호간의 리뷰 목록 */
  reviews: PeerToPeerReviewType[];
}

/** 모든 참여, 종료한 스터디 정보 & 작성한 or 스터디원이 남긴 리뷰 */
export interface AllStudyReviews {
  studies: StudyReviewsType[];
}
