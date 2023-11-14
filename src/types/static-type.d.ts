export interface SideNavItem {
	path: string,
	label: string,
	icon: IntrinsicAttributes,
	size?: number
}

export interface SideNavOption {
	[key: string]: SideNavItem[];
	[key: string]: SideNavItem[];
	[key: string]: SideNavItem[];
	[key: string]: SideNavItem[];
}