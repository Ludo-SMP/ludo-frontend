import { API_END_POINT } from '@/Constants/api';
import { httpClient } from '@/utils/axios';

export const getStack = () => httpClient.get(API_END_POINT.STACK);
