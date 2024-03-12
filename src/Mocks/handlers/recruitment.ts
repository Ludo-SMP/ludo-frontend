import { HttpResponse, http } from 'msw';
import { popularRecruitmentsMockData, recruitmentDetailMockData } from '../data/mockRecruitments';
import { getfilterOptions } from '../utils/getQueryParams';
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
  const filterOptions = getfilterOptions(url.searchParams);
  const pageNum = Number(url.searchParams.get('pageParam'));
  const recruitmentsPerPage = Number(url.searchParams.get('recruitmentsPerPage'));
  const filteredRecruitmentsMockData = getFilteredRecruitmentsMockData(filterOptions);

  return new HttpResponse(
    JSON.stringify({
      data: filteredRecruitmentsMockData.slice(pageNum * recruitmentsPerPage, (pageNum + 1) * recruitmentsPerPage),
      pageNum: pageNum + 1,
      isLastPage: filteredRecruitmentsMockData.length <= (pageNum + 1) * recruitmentsPerPage,
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
