import Link from 'next/link';

function NewsPage() {
	return (
		<>
			<h1>This is the News Page</h1>
			<ul>
				<li>
					<Link href="/news/1234">Link 1234</Link>
				</li>
				<li>
					<Link href="/news/567">Link 567</Link>
				</li>
			</ul>
		</>
	);
}

export default NewsPage;
