import { useMutation, useQuery } from "@tanstack/react-query";
import { getLuckyDayDetail, getLuckyDaysActivities, postLuckyDay } from "apis";
import { CreateLuckyDayForm } from "types";

export const useGetLuckyDaysActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: () => getLuckyDaysActivities(),
  });
};

export const useCreateLuckyDay = () => {
  return useMutation({
    mutationFn: (req: CreateLuckyDayForm) => postLuckyDay(req),
  });
};

export const useGetLuckyDayDetail = (req: string) => {
  return useQuery({
    queryKey: ["luckyday"],
    queryFn: () => getLuckyDayDetail(req),
  });
};
