// export type Creates = {
//   title: string;
//   categoryId: number;
//   participantLimit: number;
//   way: string;
//   platform?: string;
//   startDateTime: string;
//   endDateTime: string;
// };

import { Stack } from './study';

export type Creates = {
  title?: string;
  categoryId?: number;
  studyId?: number;
  participantLimit?: number;
  way?: string;
  platform?: string;
  positionId?: number;
  stackId?: number;
  // stackIds?: stackId;
  startDateTime?: string;
  endDateTime?: string;
  recruitmentEndDateTime?: string;
  recruitmentLimit?: number;
  contact?: string;
  contactUrl?: string;
  content?: string;
  applicantCount?: number;
};

export type Gather = {
  title?: string;
  studyId?: number;
  recruitmentEndDateTime?: string;
  recruitmentLimit?: number;
  contact?: string;
  callUrl?: string;
  content?: string;
  stackId?: number;
  stackIds?: Array<number>;
  positionIds?: Array<number>;
  positionId?: number;
  applicantCount?: number;
};

// export type Position = '프론트엔드' | '백엔드' | '디자이너' | '기획자';
// export type stackId = 4 | 5 | 6 | 8 | 9 | 10;
export type ItemCategory = {
  categoryName?: string;
  categoryId?: number;
  stacks?: string;
  stackId?: number;
  stackImg?: string;
  name?: string;
  id?: number;
};

export type StackItem = {
  id?: number;
  name?: string;
  imageUrl?: string;
  category?: ItemCategory;
};

export type StackCategory = {
  id: number;
  name: string;
  stacks: Stack;
};

export type Modify = {
  title: string;
  category: string;
  max: string;
  progress: string;
  platform: string;
  period: string;
};
