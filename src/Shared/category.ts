import {
  StudyCategory,
  MainCategoryType,
  AllType,
  StackType,
  Position,
  ProgressMethod,
  SortType,
  FilterOptionsType,
  CategoryPropertyType,
} from '@/Types/study';

export const cateegoryProperties: CategoryPropertyType[] = ['category', 'stacks', 'positions', 'way', 'sort'];
export const studyCategory: MainCategoryType<StudyCategory, AllType> = {
  categoryName: '카테고리',
  categoryProperty: 'category',
  categoryItems: ['전체', '코딩 테스트', '모의 면접', '프로젝트'],
};

export const stackCategory: MainCategoryType<StackType, AllType> = {
  categoryName: '기술 스택',
  categoryProperty: 'stacks',
  categoryItems: ['전체', 'React', 'Java', 'Spring', 'Figma', 'Java', 'Javascript'],
};

export const positionCategory: MainCategoryType<Position, AllType> = {
  categoryName: '포지션',
  categoryProperty: 'positions',
  categoryItems: ['전체', '백엔드', '프론트엔드', '데브옵스', '디자이너'],
};
export const progessMethodCategory: MainCategoryType<ProgressMethod, AllType> = {
  categoryName: '진행 방식',
  categoryProperty: 'way',
  categoryItems: ['전체', '온라인', '오프라인', '미정'],
};

export const sortCategory: MainCategoryType<SortType, AllType> = {
  categoryName: '정렬 기준',
  categoryProperty: 'sort',
  categoryItems: ['조회순', '최신순'],
};

export const defaultFilterOptions: FilterOptionsType = {
  category: ['코딩 테스트', '모의 면접', '프로젝트'],
  stacks: ['React', 'Java', 'Spring', 'Figma', 'Java', 'Javascript'],
  positions: ['백엔드', '프론트엔드', '데브옵스', '디자이너'],
  way: ['온라인', '오프라인', '미정'],
  sort: ['최신순'],
};

export const mainCategories = [studyCategory, stackCategory, positionCategory, progessMethodCategory, sortCategory];
