import { Route, Routes } from "react-router-dom";

interface Props {
    children: JSX.Element[] | JSX.Element;
}
function RoutesWithNotFound({ children } : Props) {
    const message = 'NOT FOUND';
  return (
    <Routes>
        {children}
        <Route path="*" element={<div>{message}</div>} />

    </Routes>
  )
}

export default RoutesWithNotFound;
