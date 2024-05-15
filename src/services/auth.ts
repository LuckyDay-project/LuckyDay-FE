import { useMutation } from "@tanstack/react-query";

import { logout } from "apis";

export const useLogout = () => {
  return useMutation({ mutationFn: () => logout() });
};
