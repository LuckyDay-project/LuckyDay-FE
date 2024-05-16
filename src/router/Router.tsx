import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "components";
import * as P from "pages";

interface RouterProps {
  children: React.ReactNode;
}

export default function Router({ children }: RouterProps) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<P.LandingPage />} />
          <Route path="oauth2/kakao/callback" element={<P.Auth />} />
          <Route path="profile" element={<P.Profile />} />
          <Route path="myPage" element={<P.MyPage />} />
          <Route path="editProfile" element={<P.EditProfilePage />} />
          <Route path="luckyBoard" element={<P.LuckyBoardPage />} />
          <Route
            path="viewLuckyDayActivity"
            element={<P.ViewLuckyActivityPage />}
          />

          {/* FIX: API 연결 후 제거할 예정입니다. */}
          <Route path="luckyBoardBefore" element={<P.LuckyBoardBeforePage />} />
          <Route path="luckyBoardAfter" element={<P.LuckyBoardAfterPage />} />
          <Route path="createLuckyDay" element={<P.CreateLuckyDayPage />} />
          <Route path="luckyDayArchive" element={<P.LuckyDayArchivePage />} />
          <Route path="404" element={<P.Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
