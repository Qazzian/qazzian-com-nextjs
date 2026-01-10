import { ReactNode } from 'react';
import Link from "next/link";

import './site-nav.scss';

export default function SiteNav() {
	return (
		<nav className="site-nav">
			<Link href="/" className="site-nav__home">
				Qazzian.com
			</Link>
			<span className="site-nav__other-pages">
				<Link href="/projects">Projects</Link>
				<Link href="/about">About</Link>
			</span>
		</nav>
	) as ReactNode;
}
