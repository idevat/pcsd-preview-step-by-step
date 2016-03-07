import React from 'react'
import {IndexLink} from 'react-router'

import css from '../../stylesheets/page'
import styleable from 'react-styleable'

let Link = styleable(css)(
  ({to, label, title}) =>
  <IndexLink
    to={to}
    className={css.link}
    activeClassName={css.active}
    title={title}
  >
    {label}
  </IndexLink>
)

let Page = ({children, css}) =>
<div className={css.root}>
  <header>
    <nav className={css.navigation}>
      <Link to="/" label="clusters" title="Manage clusters"/>
      <Link to="/permissions" label="permissions" title="Manage permissions"/>
    </nav>
  </header>
  <section className={css.content}>
    {children}
  </section>
</div>

export default styleable(css)(Page)
