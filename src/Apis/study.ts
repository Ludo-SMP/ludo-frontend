import { POST } from '@/Utils/axios';
import { PositionType } from '@/Types/study';
export const applyStudy = (studyId: number, recruitmentId: number, position: PositionType | null) => {
  POST(`/studies/${studyId}/recruitments/${recruitmentId}/apply`, { position });
};
