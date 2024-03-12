import { HttpResponse, http } from 'msw';
import { popularRecruitmentsMockData, recruitmentDetailMockData } from '../data/mockRecruitments';
import { getFilteredRecruitmentsMockData } from '../utils/getData';
import { RecruitmentDetail } from '@/Types/study';

const baseURL = import.meta.env.VITE_MOCK_API_URL;

const getPopularRecruitments = http.get(`${baseURL}/api/recruitments/popular`, ({ request }) => {
  const url = new URL(request.url);
  const count = Number(url.searchParams.get('count'));

  return new HttpResponse(JSON.stringify({ data: popularRecruitmentsMockData(count), message: 'Success' }), {
    status: 200,
    statusText: 'OK',
  });
});

const getRecruitments = http.get(`${baseURL}/api/recruitments`, ({ request }) => {
  const url = new URL(request.url);
  const stackId = url.searchParams.get('stack');
  const positionId = url.searchParams.get('position');
  const way = url.searchParams.get('way');
  const categoryId = url.searchParams.get('category');
  const last = Number(url.searchParams.get('last'));
  const count = Number(url.searchParams.get('count'));
  const pageNum = Number(url.searchParams.get('pageNum'));
  console.log(pageNum, last);

  // const pageNum = Number(url.searchParams.get('pageParam'));
  // const recruitmentsPerPage = Number(url.searchParams.get('recruitmentsPerPage'));
  const filteredRecruitmentsMockData = getFilteredRecruitmentsMockData({ stackId, positionId, way, categoryId });
  console.log(filteredRecruitmentsMockData);

  return new HttpResponse(
    JSON.stringify({
      data: { recruitments: filteredRecruitmentsMockData.slice(pageNum * count, (pageNum + 1) * count) },
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const getRecruitmentDetail = http.get(`${baseURL}/api/recruitments/:recruitmentId`, async ({ params }) => {
  const recruitmentId: number = Number(params?.recruitmentId);

  return new HttpResponse(
    JSON.stringify({
      data: {
        ...recruitmentDetailMockData.filter(
          (recruitmentDetail: RecruitmentDetail) => recruitmentDetail.recruitment.id === recruitmentId,
        )[0],
      },

      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const closeRecruitment = http.patch(`${baseURL}/api/studies/:studyId`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: null,
      message: '스터디 모집마감 성공',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [getPopularRecruitments, getRecruitments, getRecruitmentDetail, closeRecruitment];
