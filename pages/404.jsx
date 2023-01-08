import Link from "next/link"

const NotFound = () => <div className='text-center'>
	<div className='text-2xl font-bold'>This is not the page you&apos;re looking for.</div>
	<div className='text-xl'>You should return to <Link href='/' className='underline hover:no-underline'>main page</Link>. Nothing to be seen here.</div>
</div>

export default NotFound
