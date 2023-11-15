import React from 'react';

export interface SideNavItem {
	path: string,
	label: string,
	icon: IntrinsicAttributes,
	size?: number
}

// User Profile Info For Nav-Profile-Sec Component Props
export interface ProfileInfoNavSec {
	avatar:string,
	userEmail:string,
	userFullName:string
}

// useArrExpand hooks params
export interface UseArrExpandParams {
	arr:any[],
	initLeng:number,
}
export interface UseArrExpandReturn {
	slicedArr:any[],
	arrExpanded:boolean,
	handleArr:() => void,
}

//use component which need to only children prop
export interface ReactChildren {
	children:React.ReactNode
}

export interface SideNavOption {
	[key: string]: SideNavItem[];
	[key: string]: SideNavItem[];
	[key: string]: SideNavItem[];
	[key: string]: SideNavItem[];
}