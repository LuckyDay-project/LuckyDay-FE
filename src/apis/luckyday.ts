import { ax } from "./axios";
import type {
  ActivitiesServerModel,
  CreateLuckyDayForm,
  GetLuckyDayCycleDetailResponse,
  GetLuckyDayCycleInfoServerModel,
  GetLuckyDayCycleList,
  GetLuckyDayCycleQueryModel,
  GetLuckyDayCycleServerModel,
  GetLuckyDayDetailServerModel,
} from "types";

export const getLuckyDaysActivities = async () => {
  const { data } = await ax.get<ActivitiesServerModel>("/luckydays/activity");
  return data;
};

export const postLuckyDay = async (req: CreateLuckyDayForm) => {
  const { data } = await ax.post("/luckydays", req);
  return data;
};

export const getLuckyDayDetail = async (req: string) => {
  const { data } = await ax.get<GetLuckyDayDetailServerModel>(
    `/luckydays/${req}`
  );
  return data;
};

// FIX : consol.log 제거 예정입니다.
export const getLuckyDayReview = async (
  dtlNo: string
): Promise<GetLuckyDayDetailServerModel> => {
  console.log("API 호출 시작:", dtlNo);
  const { data } = await ax.get<GetLuckyDayDetailServerModel>(
    `/luckydays/${dtlNo}`
  );
  console.log("API 응답 데이터:", data);
  return data;
};

export const deleteLuckyBoard = async () => {
  const { data } = await ax.delete("/luckydays");
  return data;
};

export const getLuckyDayCycleInfo = async (req: number) => {
  const { data } = await ax.get<GetLuckyDayCycleInfoServerModel>(
    `/luckydays/info/${req}`
  );
  return data.resData;
};

export const getLuckyDayCycle = async (req: GetLuckyDayCycleQueryModel) => {
  const { data } = await ax.get<GetLuckyDayCycleServerModel>(
    `/luckydays/cycl/${req.hasLuckyday}`,
    { params: req.query }
  );
  return data.resData;
};

export const getLuckyDayCycleList = async (): Promise<
  GetLuckyDayCycleList[]
> => {
  const { data } = await ax.get<{
    resData: GetLuckyDayCycleList[];
  }>("/luckydays/cycl/list");

  return data.resData;
};

export const getLuckyDayCycleDetails = async (
  id: number
): Promise<GetLuckyDayCycleDetailResponse> => {
  const { data } = await ax.get<GetLuckyDayCycleDetailResponse>(
    `/luckydays/cycl/${id}`,
    {
      params: { isCurrent: 0 },
    }
  );
  return data;
};
