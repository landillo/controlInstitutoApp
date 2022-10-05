import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { PagesRouter } from "../pages/routers/PagesRouter"


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={ <LoginPage />} />
            
            <Route path="/*" element={ <PagesRouter />} />

        </Routes>
    
    </>
  )
}
