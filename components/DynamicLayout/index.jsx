function getBreakPointClasses(breakpoint) {
  if (breakpoint) {
    return `col-xs-${breakpoint.xs} col-sm-${breakpoint.sm} col-md-${breakpoint.md} col-lg-${breakpoint.lg} col-xl-${breakpoint.xl} col-xxl-${breakpoint.xxl}`
  } else return null
}

function mapSchema(schema) {
  let classess = []
  if (schema.attribute) classess.push(schema.attribute?.classes.join(' '))
  if (schema.breakpoint) classess.push(getBreakPointClasses(schema.breakpoint))

  const component = (
    <div
      key={schema.id}
      id={schema.attribute?.id}
      className={classess.join(' ')}
    >
      {schema.children ? schema.children?.map((x) => mapSchema(x)) : 'Widget'}
    </div>
  )

  return schema.fluid ? (
    <div id={`${schema.attribute?.id}-container`} className="container">
      {component}
    </div>
  ) : (
    component
  )
}

function jsonToComponent(json) {
  return <>{json.schema.map((x) => mapSchema(x))}</>
}

function DynamicLayout({ layout }) {
  return <>{jsonToComponent(layout)}</>
}

export default DynamicLayout
