import { Routes, Route } from 'react-router-dom'
import {
  PageLista, PageLayout
} from '../pages'
export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageLista />} />
        </Route>
    </Routes>
  )
}