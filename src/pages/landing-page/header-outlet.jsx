import React from 'react'
import { Outlet } from 'react-router-dom'
import TopScroll from '../../components/topscrollbtn'
import Header from './header'

const HeaderOutlet = () => {
	return (
		<>
		<Header />
		<Outlet />
		<TopScroll />
		</>
	)
}

export default HeaderOutlet