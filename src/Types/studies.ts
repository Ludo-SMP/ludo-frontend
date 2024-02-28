// export type Creates = {
//   title: string;
//   categoryId: number;
//   participantLimit: number;
//   way: string;
//   platform?: string;
//   startDateTime: string;
//   endDateTime: string;
// };
export type Creates = {
  title: string;
  categoryId: number | null;
  participantLimit: number | null;
  way: string;
  platform?: string;
  startDateTime: string;
  endDateTime: string;
};

type Position = '프론트엔드' | '백엔드' | '디자이너' | '기획자';
type ItemCategory = {
  name: string;
  id: number;
};

type StackItem = {
  id: number;
  name: string;
  ImageUrl: string;
  category: ItemCategory;
};

export type Gather = {
  gather: string;
  end: string;
  position: Position;
  stack: [StackItem];
  contact: string;
  contactUrl: string;
  title: string;
  detail: string;
};

export type Modify = {
  title: string;
  category: string;
  max: string;
  progress: string;
  platform: string;
  period: string;
};
