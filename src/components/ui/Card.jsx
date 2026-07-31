/**
 * Base glass card used for feature/service/product tiles.
 * Kept unopinionated about content so it can host dashboard widgets later, not just marketing copy.
 */
export default function Card({ as: Comp = 'div', className = '', children, ...rest }) {
  return (
    <Comp className={`rounded-2xl glass p-6 ${className}`} {...rest}>
      {children}
    </Comp>
  )
}
