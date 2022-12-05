export interface Layout {
  framework: string
  schema: Schema[]
}

export interface Schema {
  type: Type
  fluid: boolean
  id: string
  attribute: Attribute
  breakpoint: Breakpoint | null
  usableWidgets: string[] | null
  children: Schema[] | null
}

export interface Attribute {
  id: string
  classes: Type[]
  imageUrl: null
}

export enum Type {
  Column = 'column',
  Row = 'row',
}

export interface Breakpoint {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}
