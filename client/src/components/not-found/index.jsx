import React from 'react'
import style from './not-found.less'

const NotFound = () => <div className={style.root}>
	<div className={style.warningText}>This is not the page you&apos;re looking for.</div>
	<div className={style.hintText}>You should return to <a href='/'>main page</a>. Nothing to be seen here.</div>
</div>

export default NotFound
